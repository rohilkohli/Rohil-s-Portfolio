import React from 'react';
import { motion } from 'motion/react';
import { Server, Activity, Database, ChevronRight } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { InteractiveRobotSpline } from '../ui/interactive-3d-robot';
import { EXPERIENCES } from '../../data/experience';

export const ExperienceModule = () => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section id="experience" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader title="Core System Architecture" subtitle="Infrastructure_History // Operational_Nodes" icon={Server} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: System Intelligence Visualizer */}
        <div className="lg:col-span-5 h-[400px] lg:h-auto min-h-[500px] order-1 lg:order-1">
          <SystemPanel title="SYSMON_INTELLIGENCE" className="h-full relative overflow-hidden group border-neon-cyan/20">
            <div className="absolute inset-0 z-0">
              <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="w-full h-full scale-110 lg:scale-100"
              />
            </div>

            {/* HUD Overlays */}
            <div className="absolute top-4 left-4 z-10 font-mono text-[8px] text-neon-cyan opacity-60">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-1 bg-neon-cyan animate-pulse" />
                <span>LINK_STABLE: 911.23ms</span>
              </div>
              <div>COORD: 28.6139° N, 77.2090° E</div>
            </div>

            <div className="absolute bottom-4 left-4 z-10 text-left">
              <div className="hidden sm:flex flex-col items-start gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-0.5 bg-neon-cyan/30" style={{ width: `${20 + i * 15}px`, opacity: 0.2 + (i * 0.1) }} />
                ))}
              </div>
              <div className="bg-black/60 backdrop-blur-md px-3 py-1 border-l border-neon-cyan font-mono text-[9px] text-neon-cyan">
                ASSET: WHOBEE_CORE_02
              </div>
            </div>

            {/* Scanning Effect Overlay */}
            <div className="absolute inset-x-0 top-0 h-px bg-neon-cyan/20 shadow-[0_0_15px_rgba(0,243,255,0.5)] animate-[scan_4s_linear_infinite]" />
          </SystemPanel>
        </div>

        {/* Right Side: Architecture Timeline */}
        <div className="lg:col-span-7 order-2 lg:order-2 space-y-8">
          <div className="relative pl-12 md:pl-0">
             <div className="absolute left-[-5px] md:left-[-12px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-cyan/10 to-transparent ml-4 md:ml-0" />

            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative">
                <div className="absolute left-[-5px] md:left-[-17px] top-4 w-[11px] h-[11px] rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)] z-10 hidden md:block" />

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-widest">{exp.company}</h3>
                      <p className="text-neon-cyan font-mono text-xs tracking-[0.3em] uppercase">{exp.role}</p>
                    </div>
                    <div className="px-3 py-1 bg-cyber-gray-900 border border-neon-cyan/20">
                      <span className="font-mono text-[10px] text-neon-cyan whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  {exp.phases.map((phase, pi) => (
                    <div key={pi} className="mb-6 last:mb-0">
                      <SystemPanel title={pi === 0 ? "LIVE_ARCH" : "LEGACY_NODE"} className="bg-cyber-gray-900/60 p-4 md:p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Activity size={14} className="text-neon-cyan animate-pulse" />
                          <h4 className="text-white font-bold text-sm md:text-base tracking-wide uppercase">{phase.title}</h4>
                          {phase.location && (
                            <span className="ml-auto font-mono text-[8px] text-slate-500 uppercase tracking-tighter">LOC: {phase.location}</span>
                          )}
                        </div>

                        {exp.client && pi === 0 && (
                          <div className="mb-4 text-[10px] font-mono text-neon-purple uppercase tracking-widest flex items-center gap-2">
                            <Database size={12} /> CLNT: {exp.client}
                          </div>
                        )}

                        <ul className="space-y-2 mb-6">
                          {phase.details.map((detail, di) => (
                            <li key={di} className="flex items-start gap-3 group text-xs md:text-sm">
                              <ChevronRight size={12} className="text-neon-cyan mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                              <span className="text-slate-400 font-mono tracking-tight">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {phase.stats && (
                          <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
                            <div>
                              <div className="text-[8px] text-slate-500 uppercase font-mono mb-1">MNGD</div>
                              <div className="text-sm font-bold text-white font-mono">{phase.stats.managed}</div>
                            </div>
                            <div>
                              <div className="text-[8px] text-slate-500 uppercase font-mono mb-1">SLA</div>
                              <div className="text-sm font-bold text-neon-cyan font-mono">{phase.stats.sla}</div>
                            </div>
                            <div>
                              <div className="text-[8px] text-slate-500 uppercase font-mono mb-1">INC_RES</div>
                              <div className="text-sm font-bold text-neon-purple font-mono">{phase.stats.incidents}</div>
                            </div>
                          </div>
                        )}
                      </SystemPanel>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
