import React from 'react';
import { motion } from 'motion/react';
import { Shield, Server, Box, Globe, Cpu, Award } from 'lucide-react';
import { cn } from '../lib/utils';
import { TextEffect } from './ui/text-effect';

export const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon: any }) => (
  <div className="mb-12 relative">
    <div className="absolute -left-4 top-0 w-1 h-full bg-neon-cyan" />
    <div className="flex items-center gap-3 mb-2">
      <Icon className="text-neon-cyan" size={24} />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
        {title} <span className="text-neon-cyan opacity-20 text-lg uppercase font-mono">:: {title.split(' ')[0]}</span>
      </h2>
    </div>
    {subtitle && (
      <TextEffect 
        per="char" 
        preset="fade" 
        className="font-mono text-xs uppercase text-slate-500 tracking-widest block"
      >
        {subtitle}
      </TextEffect>
    )}
  </div>
);

export const SystemPanel = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => (
  <div className={cn(
    "relative bg-cyber-gray-900/40 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-sm overflow-hidden",
    "before:absolute before:top-0 before:left-0 before:w-1 before:h-4 before:bg-neon-cyan",
    "after:absolute after:bottom-0 after:right-0 after:w-4 after:h-[1px] after:bg-neon-cyan",
    className
  )}>
    {title && (
      <div className="absolute top-0 right-0 px-3 py-1 font-mono text-[9px] text-neon-cyan/50 uppercase border-l border-b border-white/5">
        SYS_{title}
      </div>
    )}
    {children}
  </div>
);

export const NeonButton = ({ 
  children, 
  onClick, 
  className, 
  variant = 'cyan' 
}: { 
  children: React.ReactNode, 
  onClick?: () => void, 
  className?: string,
  variant?: 'cyan' | 'purple' | 'blue'
}) => {
  const colors = {
    cyan: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10",
    purple: "border-neon-purple text-neon-purple hover:bg-neon-purple/10",
    blue: "border-neon-blue text-neon-blue hover:bg-neon-blue/10",
  };

  return (
    <button 
      onClick={onClick}
      className={cn(
        "border px-6 py-2 uppercase font-mono text-xs tracking-widest transition-all duration-300 relative group overflow-hidden",
        colors[variant],
        className
      )}
    >
      <div className="relative z-10">{children}</div>
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
        variant === 'cyan' && "bg-[radial-gradient(circle,rgba(0,243,255,0.2)_0%,transparent_70%)]",
        variant === 'purple' && "bg-[radial-gradient(circle,rgba(188,19,254,0.2)_0%,transparent_70%)]",
        variant === 'blue' && "bg-[radial-gradient(circle,rgba(5,217,232,0.2)_0%,transparent_70%)]",
      )} />
      <div className="absolute top-0 right-0 w-[2px] h-[2px] bg-white" />
      <div className="absolute bottom-0 left-0 w-[2px] h-[2px] bg-white" />
    </button>
  );
};
