"use client"

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Layers, Cpu, Terminal } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';

const PROJECTS = [
  {
    id: 'proj-01',
    title: 'Election Guide',
    description: 'Developed for Virtual Prompt Wars by Hack 2 Skill. An AI-powered intelligence platform providing comprehensive election insights and guidance.',
    tech: ['Gemini AI', 'React', 'Node.js', 'Cloud Run'],
    link: 'https://election-guide-196220787717.us-central1.run.app/',
    github: 'https://github.com/rohilkohli/Election-Guide.git',
    type: 'AI Intelligence'
  },
  {
    id: 'proj-02',
    title: 'Shids Style',
    description: 'Pro-grade E-commerce deployment for a fashion brand. Features high-performance storefront, secure checkout, and dynamic inventory management.',
    tech: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    link: 'https://www.shidstyle.com/',
    github: 'https://github.com/rohilkohli/shids-style',
    type: 'E-Commerce'
  },
  {
    id: 'proj-03',
    title: 'Cyber-Resilience Framework',
    description: 'Autonomous endpoint protection system utilizing machine learning for predictive threat analysis and real-time mitigation.',
    tech: ['Python', 'TensorFlow', 'Kubernetes'],
    link: '#',
    github: '#',
    type: 'Security Engine'
  }
];

export const ProjectsModule = () => {
  return (
    <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
      <SectionHeader 
        title="Active Deployments" 
        subtitle="Project_Logs // System_Builds" 
        icon={Terminal} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemPanel title={`BUILD_ID: 0${i + 1}`} className="flex flex-col h-full group">
              <div className="mb-4 flex justify-between items-start">
                <div className="p-2 bg-neon-cyan/10 rounded-sm border border-neon-cyan/20">
                  <Code2 size={16} className="text-neon-cyan" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{project.type}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs text-slate-400 font-mono leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono text-slate-300 uppercase">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-white/5">
                <a 
                  href={project.link} 
                  className="flex items-center gap-1.5 text-slate-500 hover:text-neon-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                  <span className="text-[10px] font-mono uppercase tracking-tighter">Live_Net</span>
                </a>
                <a 
                  href={project.github} 
                  className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} />
                  <span className="text-[10px] font-mono uppercase tracking-tighter">Repository</span>
                </a>
              </div>
            </SystemPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
