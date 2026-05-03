import React from 'react';
import { motion } from 'motion/react';
import { Download, Play, Linkedin, Github } from 'lucide-react';
import { NeonButton } from '../Common';
import { TextEffect } from '../ui/text-effect';

export const HeroModule = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative px-8 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center z-10"
      >
        <div className="flex flex-col items-center mb-6">
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px w-24 bg-neon-cyan mb-4"
          />
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight relative">
            <span className="block text-white opacity-20 absolute -top-8 -left-4 font-mono text-xl select-none">IDENTITY_SYSTEM</span>
            <TextEffect per="char" preset="fade" className="text-white glitch-text" delay={1}>
              ROHIL KOHLI
            </TextEffect>
          </h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-px w-48 bg-neon-cyan mt-4"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 font-mono text-xs md:text-sm text-slate-400">
          <span className="px-3 py-1 bg-cyber-gray-900 border border-white/5">ADMINISTRATOR L2</span>
          <span className="px-3 py-1 bg-cyber-gray-900 border border-white/5">ENDPOINT SECURITY</span>
          <span className="px-3 py-1 bg-cyber-gray-900 border border-white/5">SYSTEMS & INFRASTRUCTURE</span>
        </div>

        <TextEffect 
          per="word" 
          preset="slide" 
          delay={1.5}
          className="mt-8 max-w-xl mx-auto text-slate-500 font-mono text-xs uppercase tracking-[0.2em] leading-relaxed block"
        >
          Operationalizing enterprise resilience through advanced system architecture and high-fidelity endpoint protection.
        </TextEffect>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <NeonButton onClick={onEnter}>
            <div className="flex items-center gap-2">
              <Play size={14} fill="currentColor" />
              <span>Enter System</span>
            </div>
          </NeonButton>
          <NeonButton variant="purple">
            <div className="flex items-center gap-2">
              <Download size={14} />
              <span>Download Resume</span>
            </div>
          </NeonButton>
        </div>

        <div className="flex justify-center gap-6 mt-12 opacity-50">
          <a href="https://www.linkedin.com/in/rohil-kohli-041022236/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-cyan transition-colors"><Linkedin size={20} /></a>
          <a href="https://github.com/rohilkohli" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-cyan transition-colors"><Github size={20} /></a>
        </div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden opacity-10">
        <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] stroke-neon-cyan/20">
          <circle cx="50" cy="50" r="40" fill="none" strokeWidth="0.1" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="30" fill="none" strokeWidth="0.1" strokeDasharray="4 2" />
          <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.05" />
          <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.05" />
        </svg>
      </div>
    </section>
  );
};
