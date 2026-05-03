import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { ACHIEVEMENTS } from '../../data/achievements';

export const AchievementsModule = () => {
  return (
    <section id="achievements" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="System Unlocks" subtitle="Credential_Archive // Achievement_Logs" icon={Award} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemPanel title={`UNLOCK_LEVEL_0${i + 1}`} className="flex flex-col gap-4 group hover:border-white/10 transition-colors h-full">
              <div className="flex gap-6">
                <div className={`shrink-0 w-16 h-16 rounded-sm flex items-center justify-center transition-all ${ach.borderClass} ${ach.bgClass} group-hover:opacity-80 border`}>
                  <ach.icon className={ach.textClass} size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{ach.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed lowercase font-mono">
                    {ach.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <div>
                    <span className="text-[9px] font-mono text-neon-cyan uppercase tracking-tighter block">VERIFIED_CREDENTIAL</span>
                    {ach.institution && (
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter block">{ach.institution}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {ach.date && (
                    <span className="text-[9px] font-mono text-slate-600 uppercase">{ach.date}</span>
                  )}
                  {ach.link && (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View proof for ${ach.title}`}
                      className="flex items-center gap-1 text-slate-500 hover:text-neon-cyan transition-colors"
                    >
                      <ExternalLink size={12} />
                      <span className="text-[9px] font-mono uppercase tracking-tighter">View</span>
                    </a>
                  )}
                </div>
              </div>
            </SystemPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
