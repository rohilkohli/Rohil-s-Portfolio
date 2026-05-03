import React from 'react';
import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { SKILLS, BADGES } from '../../data/skills';

export const SkillsModule = () => {
  return (
    <section id="skills" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="Capability Matrix" subtitle="Systems_Proficiency // Modular_Graph" icon={Cpu} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemPanel title={`${skill.title.toUpperCase().replace(' ', '_')}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-sm ${skill.bgClass}`}>
                  <skill.icon className={skill.textClass} size={20} />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] text-slate-500 uppercase">PROFICIENCY_LVL</div>
                  <div className={`font-mono text-lg font-bold ${skill.textClass}`}>{skill.level}%</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-1 w-full bg-white/5 relative overflow-hidden rounded-full">
                  <motion.div
                    className={`h-full ${skill.textClass.replace('text-', 'bg-')}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>

                <div className="flex justify-between font-mono text-[9px] text-slate-600 uppercase">
                  <span>L1_BASIC</span>
                  <span className="text-white/20">L3_OPERATIONAL</span>
                  <span className={skill.level > 80 ? "text-white" : ""}>L5_EXPERT</span>
                </div>

                {/* Tool breakdown */}
                <div className="pt-3 border-t border-white/5">
                  <div className="font-mono text-[9px] text-slate-600 uppercase mb-2 tracking-widest">TOOLS_LOADED</div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`px-2 py-0.5 text-[9px] font-mono uppercase border rounded-[2px] transition-all duration-200
                          border-white/10 text-slate-500 hover:${skill.borderClass ?? 'border-white/20'} hover:${skill.textClass} hover:bg-white/5 cursor-default`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SystemPanel>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <SystemPanel title="ACHIEVEMENT_UNLOCKS" className="bg-transparent border-dashed border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-12 py-4">
            {BADGES.map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full border border-neon-cyan/30 flex items-center justify-center bg-neon-cyan/5 relative group cursor-default">
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">{badge.icon}</span>
                  <div className="absolute inset-[-4px] border border-neon-cyan/0 group-hover:border-neon-cyan/40 rounded-full transition-all duration-500 animate-[spin_4s_linear_infinite]" />
                </div>
                <span className="font-mono text-[10px] text-white uppercase tracking-widest">{badge.label}</span>
              </div>
            ))}
          </div>
        </SystemPanel>
      </div>
    </section>
  );
};
