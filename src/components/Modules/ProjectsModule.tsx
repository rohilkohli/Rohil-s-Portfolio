import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Terminal } from 'lucide-react';
import { SystemPanel, SectionHeader } from '../Common';
import { PROJECTS } from '../../data/projects';

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

              {(project.link || project.github) && (
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {project.link && (
                    <a
                      href={project.link}
                      className="flex items-center gap-1.5 text-slate-500 hover:text-neon-cyan transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink size={14} />
                      <span className="text-[10px] font-mono uppercase tracking-tighter">Live_Net</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={14} />
                      <span className="text-[10px] font-mono uppercase tracking-tighter">Repository</span>
                    </a>
                  )}
                </div>
              )}
            </SystemPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
