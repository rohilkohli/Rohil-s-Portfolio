import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Activity, Wifi, Battery, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { SystemPaths } from './ui/SystemPaths';
import { NeuralBackground } from './ui/NeuralBackground';

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const bootLogs = [
    "Initializing SYSTEM.LOG...",
    "Scanning core files...",
    "Loading kernel modules...",
    "Verifying security certificates...",
    "Identity: Rohil Kohli",
    "Role: Administrator L2 | Endpoint Security",
    "Location: New Delhi, India",
    "Status: PROVISIONED",
    "DECRYPTING OPERATIONAL ARCHIVE...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-[9999] font-mono p-4">
      <div className="w-full max-w-2xl bg-cyber-black/80 backdrop-blur-xl p-8 border border-neon-cyan/20 rounded-sm overflow-hidden relative">
        <div className="flex items-center gap-2 mb-4 text-neon-cyan">
          <Terminal size={20} />
          <span className="text-sm font-bold tracking-widest">BOOT_LOADER v4.0.2</span>
        </div>
        <div className="space-y-1 text-sm md:text-base">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "flex items-center gap-2",
                log?.includes("ACCESS GRANTED") ? "text-neon-cyan font-bold" : "text-slate-400"
              )}
            >
              <span className="text-neon-cyan/50 opacity-50">[{i.toString().padStart(2, '0')}]</span>
              <span>{log}</span>
            </motion.div>
          ))}
          {logs.length < bootLogs.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="w-2 h-4 bg-neon-cyan inline-block ml-1"
            />
          )}
        </div>
        
        <div className="mt-8 border-t border-neon-cyan/20 pt-4 flex justify-between items-center text-[10px] uppercase tracking-tighter text-slate-500">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Shield size={10} /> Secure_Boot</span>
            <span className="flex items-center gap-1"><Activity size={10} /> Sys_Check</span>
          </div>
          <div>SYSTEM_ID: RK-2024-INTEL</div>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="scanlines-pattern" />
        <div className="scanline" />
        <div className="grid-overlay h-full w-full" />
      </div>
    </div>
  );
};

export const SystemShell = ({ children, activeModule }: { children: React.ReactNode, activeModule: string }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative flex flex-col overflow-hidden">
      <SystemPaths />
      {/* Persistent HUD Frame */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-cyber-gray-900 border-opacity-50 z-40" />
      
      {/* Corners */}
      <div className="fixed top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-neon-cyan z-50 opacity-50" />
      <div className="fixed top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neon-cyan z-50 opacity-50" />
      <div className="fixed bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-neon-cyan z-50 opacity-50" />
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neon-cyan z-50 opacity-50" />

      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full h-12 bg-cyber-gray-900/80 backdrop-blur-md border-b border-white/5 z-50 flex items-center justify-between px-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-neon-cyan">SYSTEM.LOG</span>
          </div>
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
            <span className="font-mono text-[10px] text-slate-500 uppercase">Module: {activeModule}</span>
            <span className="font-mono text-[10px] text-slate-500 uppercase">User: ADMIN_RK</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6 font-mono text-[10px] text-slate-400">
          <div className="hidden sm:flex items-center gap-2">
            <Wifi size={12} className="text-neon-cyan" />
            <span>ENCRYPT_SECURE</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-neon-cyan" />
            <span>{time.toLocaleTimeString()}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Battery size={12} className="text-neon-cyan" />
            <span>100%_OPS</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-12 relative z-30">
        {children}
      </main>

      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 w-full h-8 bg-cyber-gray-900 border-t border-white/5 z-50 flex items-center justify-between px-8 font-mono text-[9px] uppercase tracking-wider text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-neon-cyan"><div className="w-1 h-1 bg-neon-cyan" /> L2_ENDPOINT_SECURE</span>
          <span className="hidden sm:inline opacity-50">|| IP: 192.168.1.101</span>
        </div>
        <div className="flex items-center gap-4">
          <span>SLA_COMPLIANT: 100%</span>
          <div className="w-24 h-1 bg-cyber-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-neon-cyan" 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </footer>

      {/* Global Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grid-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[101] scanlines-pattern" />
      <div className="fixed inset-0 pointer-events-none z-[102] scanline opacity-40" />
    </div>
  );
};
