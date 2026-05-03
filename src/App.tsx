/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BootSequence, SystemShell } from './components/SystemShell';
import { NeuralBackground } from './components/ui/NeuralBackground';
import { HeroModule } from './components/Modules/HeroModule';
import { ProfileModule } from './components/Modules/ProfileModule';
import { SkillsModule } from './components/Modules/SkillsModule';
import { ExperienceModule } from './components/Modules/ExperienceModule';
import { EducationModule } from './components/Modules/EducationModule';
import { AchievementsModule } from './components/Modules/AchievementsModule';
import { ProjectsModule } from './components/Modules/ProjectsModule';
import { CertificationsModule } from './components/Modules/CertificationsModule';
import { TransmissionModule } from './components/Modules/TransmissionModule';
import { ScrollReveal } from './components/Common/ScrollReveal';
import { ChevronUp, User, Cpu, Server, Award, BookOpen, Globe, ShieldCheck, Terminal } from 'lucide-react';
import { cn } from './lib/utils';

const BOOT_SESSION_KEY = 'system_log_booted';

export default function App() {
  const [booting, setBooting] = useState(() => {
    // Skip boot animation if the user has already seen it this session
    return !sessionStorage.getItem(BOOT_SESSION_KEY);
  });
  const [entered, setEntered] = useState(false);
  const [activeModule, setActiveModule] = useState('HERO');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleBootComplete = () => {
    sessionStorage.setItem(BOOT_SESSION_KEY, '1');
    setBooting(false);
  };

  const handleEnterSystem = () => {
    setEntered(true);
    setActiveModule('PROFILE');
    const element = document.getElementById('profile');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'skills', 'experience', 'education', 'achievements', 'projects', 'certifications', 'contact'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveModule(id.toUpperCase());
            break;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveModule('HERO');
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NeuralBackground />
      <AnimatePresence>
        {booting && (
          <BootSequence onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      {!booting && (
        <SystemShell activeModule={activeModule}>
          <div className="relative">
            <HeroModule onEnter={handleEnterSystem} />

            <AnimatePresence>
              {(entered || window.scrollY > 100) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="space-y-12"
                >
                  <ScrollReveal direction="up" delay={0.2}>
                    <ProfileModule />
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={0.1}>
                    <SkillsModule />
                  </ScrollReveal>

                  <ScrollReveal direction="right" delay={0.1}>
                    <ExperienceModule />
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={0.1}>
                    <EducationModule />
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={0.1}>
                    <AchievementsModule />
                  </ScrollReveal>

                  <ScrollReveal direction="right" delay={0.1}>
                    <ProjectsModule />
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={0.1}>
                    <CertificationsModule />
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={0.1}>
                    <TransmissionModule />
                  </ScrollReveal>

                  {/* Persistent Side Navigation */}
                  <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
                    {[
                      { id: 'profile', icon: User, label: 'PRFL' },
                      { id: 'skills', icon: Cpu, label: 'SKLS' },
                      { id: 'experience', icon: Server, label: 'EXPR' },
                      { id: 'education', icon: BookOpen, label: 'EDUC' },
                      { id: 'achievements', icon: Award, label: 'ACHV' },
                      { id: 'projects', icon: Terminal, label: 'PROJ' },
                      { id: 'certifications', icon: ShieldCheck, label: 'CERT' },
                      { id: 'contact', icon: Globe, label: 'TRNS' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                        aria-label={`Navigate to ${item.label} section`}
                        className="group flex items-center justify-end gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-cyan"
                      >
                        <span className={cn(
                          "font-mono text-[9px] tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300",
                          activeModule === item.id.toUpperCase() ? "opacity-100 text-neon-cyan" : "text-slate-500"
                        )}>
                          {item.label}
                        </span>
                        <div className={cn(
                          "w-3 h-3 border rotate-45 transition-all duration-300",
                          activeModule === item.id.toUpperCase()
                            ? "bg-neon-cyan border-neon-cyan scale-125 shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                            : "border-white/20 group-hover:border-neon-cyan/50"
                        )} />
                      </button>
                    ))}
                  </div>

                  {/* Scroll to Top */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showScrollTop ? 1 : 0 }}
                    aria-label="Scroll to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-12 right-8 w-10 h-10 bg-cyber-gray-900 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan z-50 hover:bg-neon-cyan/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-cyan"
                  >
                    <ChevronUp size={20} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SystemShell>
      )}
    </>
  );
}
