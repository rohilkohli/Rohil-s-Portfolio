import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Zap, Target } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';

export const AchievementsModule = () => {
  const achievements = [
    {
      title: "Banking Infrastructure Operator",
      description: "Successfully managed high-availability data center operations for Ujjivan Small Finance Bank.",
      icon: Target,
      color: "neon-cyan"
    },
    {
      title: "Enterprise Endpoint Defender",
      description: "Implemented and maintained security protocols for 2000+ endpoints at HDFC Bank.",
      icon: ShieldCheck,
      color: "neon-purple"
    },
    {
      title: "Production Environment Handler",
      description: "Proven track record in handling critical production incidents and ensuring zero downtime.",
      icon: Zap,
      color: "neon-blue"
    },
    {
      title: "Client-Side Deployment Expert",
      description: "Expertise in managing L2 support and complex software deployments in banking back-offices.",
      icon: Award,
      color: "neon-cyan"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="System Unlocks" subtitle="Credential_Archive // Achievement_Logs" icon={Award} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemPanel title={`UNLOCK_LEVEL_0${i + 1}`} className="flex gap-6 group hover:border-white/10 transition-colors">
              <div className={`shrink-0 w-16 h-16 rounded-sm border border-${ach.color}/20 flex items-center justify-center bg-${ach.color}/5 group-hover:bg-${ach.color}/10 transition-all`}>
                <ach.icon className={`text-${ach.color}`} size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{ach.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed lowercase font-mono">
                  {ach.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span className="text-[9px] font-mono text-neon-cyan uppercase tracking-tighter">VERIFIED_CREDENTIAL</span>
                </div>
              </div>
            </SystemPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
