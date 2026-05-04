import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { CERTIFICATIONS } from '../../data/certifications';

export const CertificationsModule = () => {
  return (
    <section id="certifications" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader
        title="Skills/Certifications"
        subtitle="Certification_Vault"
        icon={ShieldCheck}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
        {CERTIFICATIONS.map((badge, i) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="relative"
          >
            {badge.link ? (
              <a
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block transition-all duration-500 hover:scale-125"
                title={badge.title}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  {/* Backdrop Glow */}
                  <div className="absolute inset-0 bg-neon-cyan/20 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

                  <img
                    src={badge.image}
                    alt={badge.title}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 drop-shadow-[0_0_10px_rgba(0,243,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(0,243,255,0.5)]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png';
                    }}
                  />
                </div>

                {/* Floating tooltip-like text on hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-cyber-black/90 border border-neon-cyan/30 rounded text-[8px] font-mono text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                  {badge.title}
                </div>
              </a>
            ) : (
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center opacity-40 grayscale" title={badge.title}>
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://www.gstatic.com/images/branding/product/2x/google_cloud_64dp.png';
                  }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
