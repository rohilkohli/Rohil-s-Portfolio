import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, Calendar, Fingerprint, Info } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { CommitsGrid } from '../ui/commits-grid';

export const ProfileModule = () => {
  const profileDetails = [
    { label: "Designation", value: "Administrator L2", icon: User },
    { label: "Deployment", value: "Endpoint Security", icon: Fingerprint },
    { label: "Location", value: "New Delhi, Delhi, India", icon: MapPin },
    { label: "Birth Record", value: "13-06-2001", icon: Calendar },
    { label: "Origin", value: "Lucknow, Uttar Pradesh", icon: Info },
  ];

  return (
    <section id="profile" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="User Profile" subtitle="Identity_Record // Classified" icon={User} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <SystemPanel title="DOSSIER">
            <div className="flex flex-col items-center sm:flex-row gap-8 mb-8">
              <div className="relative w-32 h-32 shrink-0">
                <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-sm animate-pulse" />
                <div className="absolute inset-2 bg-gradient-to-br from-neon-cyan/20 to-transparent flex items-center justify-center">
                  <User size={64} className="text-neon-cyan/50" />
                </div>
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">ROHIL KOHLI</h3>
                <p className="font-mono text-[10px] text-neon-cyan/70 tracking-widest uppercase mb-4">ACCESS_LEVEL: 02_SENIOR_ADMIN</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] px-2 py-0.5 border border-neon-cyan/20 text-neon-cyan bg-neon-cyan/5">AUTHENTICATED</span>
                  <span className="text-[9px] px-2 py-0.5 border border-green-500/20 text-green-500 bg-green-500/5">ACTIVE_STATUS</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {profileDetails.map((detail, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase">
                    <detail.icon size={12} className="text-neon-cyan/50" />
                    <span>{detail.label}</span>
                  </div>
                  <span className="text-xs text-white font-medium">{detail.value}</span>
                </div>
              ))}
            </div>
          </SystemPanel>
        </div>

        <div className="lg:col-span-7">
          <SystemPanel title="OBJECTIVE_MANIFESTO" className="h-full">
            <div className="relative p-6 border border-neon-cyan/10 bg-neon-cyan/5 rounded-sm">
              <div className="absolute top-2 right-4 flex gap-1">
                <div className="w-1 h-1 bg-neon-cyan" />
                <div className="w-1 h-1 bg-neon-cyan/50" />
                <div className="w-1 h-1 bg-neon-cyan/20" />
              </div>
              <p className="text-slate-300 leading-relaxed font-sans italic text-lg lg:text-xl">
                “A systems-focused IT professional with hands-on experience in banking infrastructure, endpoint security, and enterprise IT operations. Dedicated to maintaining high-integrity environments and ensuring seamless operational continuity across complex networks.”
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-[10px]">
              <div className="p-4 bg-cyber-gray-800/50 border border-white/5">
                <div className="text-neon-cyan mb-1">CURRENT_FOCUS</div>
                <div className="text-white">L2 BANKING INFRASTRUCTURE</div>
              </div>
              <div className="p-4 bg-cyber-gray-800/50 border border-white/5">
                <div className="text-neon-purple mb-1">CORE_COMPETENCY</div>
                <div className="text-white">ENDPOINT VULNERABILITY MGMT</div>
              </div>
            </div>
          </SystemPanel>
        </div>
      </div>

      <div className="mt-8">
        <SystemPanel title="INFRASTRUCTURE_ACTIVITY_MONITOR">
          <div className="p-2 sm:p-4 bg-cyber-gray-900/40 rounded-sm">
            <div className="flex justify-center mb-4 overflow-x-auto">
              <CommitsGrid text="SYSTEM_UPTIME" />
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-2 px-2 border-t border-white/5 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-500 font-mono tracking-widest">NETWORK_OPTIMIZED</span>
                </div>
                <div className="h-4 w-px bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500 font-mono">LATENCY:</span>
                  <span className="text-[10px] text-neon-cyan font-mono">14.2ms</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">Activity_Density</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-[1px] bg-[#0d4429] border border-white/5" />
                  <div className="w-3 h-3 rounded-[1px] bg-[#016d32] border border-white/5" />
                  <div className="w-3 h-3 rounded-[1px] bg-[#48d55d] border border-white/5" />
                </div>
                <span className="text-[10px] text-slate-500 font-mono uppercase ml-1">MAX</span>
              </div>
            </div>
          </div>
        </SystemPanel>
      </div>
    </section>
  );
};
