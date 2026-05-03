import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { SlideButton } from '../ui/slide-button';
import { SpecialText } from '../ui/special-text';

export const TransmissionModule = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const email = "rohilkohli.buisness@gmail.com";
  return (
    <section id="contact" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="Transmission" subtitle="Protocol_Established // Open_Channel" icon={Globe} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-xl text-slate-400 font-mono italic leading-relaxed">
            "SYSTEM ACTIVE AND READY FOR NEXT DEPLOYMENT. ENCRYPTION PROTOCOLS STANDING BY."
          </p>
          
          <div className="space-y-4">
            <div 
              className="flex items-center gap-4 group cursor-pointer" 
              onClick={() => window.location.href = `mailto:${email}`}
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-white/5 flex items-center justify-center group-hover:border-neon-cyan transition-colors">
                <Mail className="text-slate-500 group-hover:text-neon-cyan transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Comm_Link_01</div>
                <div className="text-white font-bold group-hover:text-neon-cyan transition-colors truncate max-w-[200px] sm:max-w-none min-h-[1.25rem] flex items-center">
                  {isEmailHovered ? (
                    <SpecialText speed={15}>{email}</SpecialText>
                  ) : (
                    <span className="opacity-40">REVEAL_SECURE_CHANNEL</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/rohil-kohli-041022236/', '_blank')}>
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-white/5 flex items-center justify-center group-hover:border-neon-purple transition-colors">
                <Linkedin className="text-slate-500 group-hover:text-neon-purple transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Comm_Link_02</div>
                <div className="text-white font-bold group-hover:text-neon-purple transition-colors truncate max-w-[200px]">rohil-kohli-041022236</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://github.com/rohilkohli', '_blank')}>
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-white/5 flex items-center justify-center group-hover:border-white transition-colors">
                <Github className="text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Comm_Link_03</div>
                <div className="text-white font-bold group-hover:text-white transition-colors truncate max-w-[200px]">rohilkohli</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-cyber-gray-900 border border-white/5 flex items-center justify-center border-neon-cyan/20">
                <MapPin className="text-neon-cyan animate-pulse" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-500 uppercase">Base_Location</div>
                <div className="text-white font-bold uppercase">New Delhi, India</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <SystemPanel title="SYSTEM_STATUS">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest">
                <span className="text-neon-cyan">OP_READY_FOR_DEPLOYMENT</span>
                <span className="text-slate-500">RELOCATION_AVAILABLE: YES</span>
              </div>
            </SystemPanel>
          </div>
        </div>

        <div>
          <SystemPanel title="TRANSMISSION_FORM" className="relative h-full bg-cyber-gray-900/60">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-1">Origin_Entity_ID</label>
                <input 
                  type="text" 
                  placeholder="NAME / CORPORATE_IDENTITY"
                  className="w-full bg-cyber-black/50 border border-white/5 px-4 py-3 text-white text-sm font-mono focus:border-neon-cyan outline-none transition-all placeholder:opacity-30"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-1">Secure_Freq_Link</label>
                <input 
                  type="email" 
                  placeholder="EMAIL_ADDRESS"
                  className="w-full bg-cyber-black/50 border border-white/5 px-4 py-3 text-white text-sm font-mono focus:border-neon-cyan outline-none transition-all placeholder:opacity-30"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-1">Mission_Details</label>
                <textarea 
                  rows={4}
                  placeholder="MESSAGE_CONTENT_HERE..."
                  className="w-full bg-cyber-black/50 border border-white/5 px-4 py-3 text-white text-sm font-mono focus:border-neon-cyan outline-none transition-all placeholder:opacity-30 resize-none"
                />
              </div>

              <div className="flex justify-center pt-2">
                <SlideButton className="w-full" />
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center opacity-30 pointer-events-none">
              <div className="w-16 h-px bg-white/20" />
              <div className="font-mono text-[8px]">E2E_ENCRYPTION_ACTIVE</div>
              <div className="w-16 h-px bg-white/20" />
            </div>
          </SystemPanel>
        </div>
      </div>
    </section>
  );
};
