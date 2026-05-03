import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Network, Monitor, Code, CheckCircle } from 'lucide-react';
import { SystemPanel, SectionHeader, NeonButton } from '../Common';

export const SkillsModule = () => {
  const skills = [
    { title: "Endpoint Security", level: 90, icon: Shield, hex: "#00f3ff", color: "neon-cyan" },
    { title: "Active Directory", level: 85, icon: Cpu, hex: "#bc13fe", color: "neon-purple" },
    { title: "Networking", level: 80, icon: Network, hex: "#05d9e8", color: "neon-blue" },
    { title: "Windows Troubleshooting", level: 95, icon: Monitor, hex: "#00f3ff", color: "neon-cyan" },
    { title: "Application Troubleshooting", level: 90, icon: Code, hex: "#bc13fe", color: "neon-purple" },
    { title: "Compliance & Audits", level: 85, icon: CheckCircle, hex: "#05d9e8", color: "neon-blue" },
  ];

  const badges = [
    { label: "Security Sentinel", icon: "🛡" },
    { label: "Directory Master", icon: "🧠" },
    { label: "Network Operator", icon: "🌐" },
  ];

  return (
    <section id="skills" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="Capability Matrix" subtitle="Systems_Proficiency // Modular_Graph" icon={Cpu} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemPanel title={`${skill.title.toUpperCase().replace(' ', '_')}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 bg-${skill.color}/10 rounded-sm`}>
                  <skill.icon className={`text-${skill.color}`} size={20} />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] text-slate-500 uppercase">PROFICIENCY_LVL</div>
                  <div className={`font-mono text-lg font-bold text-${skill.color}`}>{skill.level}%</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-1 w-full bg-white/5 relative overflow-hidden rounded-full">
                  <motion.div
                    className={`h-full bg-${skill.color}`}
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
              </div>
            </SystemPanel>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <SystemPanel title="ACHIEVEMENT_UNLOCS" className="bg-transparent border-dashed border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-12 py-4">
            {badges.map((badge, i) => (
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
