import React from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { EDUCATION } from '../../data/education';

export const EducationModule = () => {
  return (
    <section id="education" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="Knowledge Uploads" subtitle="Academic_History // Record_Archive" icon={BookOpen} />

      <div className="space-y-6">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemPanel title={`LOG_ENTRY_0${i + 1}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className={`p-4 bg-cyber-gray-800 rounded-sm border ${edu.borderClass}`}>
                  <edu.icon className={edu.textClass} size={32} />
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    {edu.status && (
                      <span className="px-2 py-0.5 border border-neon-cyan/50 text-neon-cyan text-[8px] font-mono tracking-tighter uppercase whitespace-nowrap w-fit">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-xs uppercase tracking-widest">
                    <span>{edu.institution}</span>
                    {edu.location && <span className="opacity-50">|| {edu.location}</span>}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  {edu.year && (
                    <span className="font-mono text-[10px] text-neon-cyan/60 uppercase tracking-tighter whitespace-nowrap">{edu.year}</span>
                  )}
                  <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600 uppercase">
                    <span>TRANSFER_COMPLETE</span>
                    <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
                  </div>
                </div>
              </div>
            </SystemPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
