import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { CERTIFICATIONS } from '../../data/certifications';

export const CertificationsModule = () => {
  return (
    <section id="certifications" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader
        title="Verified Protocols"
        subtitle="Certification_Vault // Google_Cloud_Credentials"
        icon={ShieldCheck}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemPanel title={`CREDENTIAL_0${i + 1}`} className="group h-full flex flex-col items-center text-center p-6">
              <div className="relative mb-6">
                <div className="w-24 h-24 flex items-center justify-center transition-all duration-500 relative">
                  {/* Backdrop Glow */}
                  <div className="absolute inset-0 bg-neon-cyan/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Subtle primary light source */}
                  <div className="absolute -inset-4 bg-gradient-to-b from-neon-cyan/[0.05] to-transparent blur-xl" />

                  <img
                    src={badge.image}
                    alt={badge.title}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(0,243,255,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(0,243,255,0.6)]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png';
                    }}
                  />
                </div>
              </div>

              <h3 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-tight group-hover:text-neon-cyan transition-colors">
                {badge.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">{badge.issuer}</span>
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                <span className="text-[9px] font-mono text-neon-cyan uppercase tracking-tighter">{badge.date}</span>
              </div>

              <div className="mt-auto pt-4 w-full border-t border-white/5">
                {badge.link ? (
                  <a
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${badge.title} credential`}
                    className="flex items-center justify-center gap-2 py-2 px-4 rounded-sm bg-white/5 hover:bg-neon-cyan/10 border border-white/10 hover:border-neon-cyan/30 transition-all group/btn"
                  >
                    <ExternalLink size={12} className="text-slate-500 group-hover/btn:text-neon-cyan transition-colors" />
                    <span className="text-[10px] font-mono text-slate-400 group-hover/btn:text-white uppercase tracking-widest">Verify_Protocol</span>
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-sm bg-white/5 border border-white/5 opacity-40 cursor-not-allowed select-none">
                    <ExternalLink size={12} className="text-slate-600" />
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Link_Pending</span>
                  </div>
                )}
              </div>
            </SystemPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
