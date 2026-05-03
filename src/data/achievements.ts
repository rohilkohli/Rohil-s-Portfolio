import { Award, ShieldCheck, Zap, Target, type LucideIcon } from 'lucide-react';

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'neon-cyan' | 'neon-purple' | 'neon-blue';
  textClass: string;
  bgClass: string;
  borderClass: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Banking Infrastructure Operator",
    description: "Successfully managed high-availability data center operations for Ujjivan Small Finance Bank.",
    icon: Target,
    color: "neon-cyan",
    textClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/5",
    borderClass: "border-neon-cyan/20",
  },
  {
    title: "Enterprise Endpoint Defender",
    description: "Implemented and maintained security protocols for 2000+ endpoints at HDFC Bank.",
    icon: ShieldCheck,
    color: "neon-purple",
    textClass: "text-neon-purple",
    bgClass: "bg-neon-purple/5",
    borderClass: "border-neon-purple/20",
  },
  {
    title: "Production Environment Handler",
    description: "Proven track record in handling critical production incidents and ensuring zero downtime.",
    icon: Zap,
    color: "neon-blue",
    textClass: "text-neon-blue",
    bgClass: "bg-neon-blue/5",
    borderClass: "border-neon-blue/20",
  },
  {
    title: "Client-Side Deployment Expert",
    description: "Expertise in managing L2 support and complex software deployments in banking back-offices.",
    icon: Award,
    color: "neon-cyan",
    textClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/5",
    borderClass: "border-neon-cyan/20",
  },
];
