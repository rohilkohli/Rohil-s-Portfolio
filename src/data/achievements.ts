import { Award, ShieldCheck, Zap, Target, type LucideIcon } from 'lucide-react';

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'neon-cyan' | 'neon-purple' | 'neon-blue';
  textClass: string;
  bgClass: string;
  borderClass: string;
  date?: string;
  institution?: string;
  link?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Banking Infrastructure Operator",
    description: "Successfully managed high-availability data center operations for Ujjivan Small Finance Bank, ensuring 24/7 uptime of core banking systems.",
    icon: Target,
    color: "neon-cyan",
    textClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/5",
    borderClass: "border-neon-cyan/20",
    date: "2023",
    institution: "Wipro Technologies @ Ujjivan SFB",
  },
  {
    title: "Enterprise Endpoint Defender",
    description: "Implemented and maintained endpoint security protocols for 2000+ devices at HDFC Bank, achieving 99.9% SLA compliance.",
    icon: ShieldCheck,
    color: "neon-purple",
    textClass: "text-neon-purple",
    bgClass: "bg-neon-purple/5",
    borderClass: "border-neon-purple/20",
    date: "2023 – Present",
    institution: "Wipro Technologies @ HDFC Bank",
  },
  {
    title: "Production Environment Handler",
    description: "Proven track record in handling 1500+ critical production incidents and ensuring zero downtime across high-stakes banking environments.",
    icon: Zap,
    color: "neon-blue",
    textClass: "text-neon-blue",
    bgClass: "bg-neon-blue/5",
    borderClass: "border-neon-blue/20",
    date: "2023 – Present",
    institution: "Wipro Technologies",
  },
  {
    title: "PromptWars Competitor",
    description: "Competed in HACK2SKILL PromptWars 2026, building and deploying an AI-powered election intelligence platform using Gemini AI on Google Cloud Run.",
    icon: Award,
    color: "neon-cyan",
    textClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/5",
    borderClass: "border-neon-cyan/20",
    date: "May 2026",
    institution: "HACK2SKILL / Google Cloud",
    link: "https://election-guide-196220787717.us-central1.run.app/",
  },
];
