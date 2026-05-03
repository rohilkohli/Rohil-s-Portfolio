import { Shield, Cpu, Network, Monitor, Code, CheckCircle, type LucideIcon } from 'lucide-react';

export interface Skill {
  title: string;
  level: number;
  icon: LucideIcon;
  hex: string;
  color: 'neon-cyan' | 'neon-purple' | 'neon-blue';
  textClass: string;
  bgClass: string;
}

export const SKILLS: Skill[] = [
  { title: "Endpoint Security", level: 90, icon: Shield, hex: "#00f3ff", color: "neon-cyan", textClass: "text-neon-cyan", bgClass: "bg-neon-cyan/10" },
  { title: "Active Directory", level: 85, icon: Cpu, hex: "#bc13fe", color: "neon-purple", textClass: "text-neon-purple", bgClass: "bg-neon-purple/10" },
  { title: "Networking", level: 80, icon: Network, hex: "#05d9e8", color: "neon-blue", textClass: "text-neon-blue", bgClass: "bg-neon-blue/10" },
  { title: "Windows Troubleshooting", level: 95, icon: Monitor, hex: "#00f3ff", color: "neon-cyan", textClass: "text-neon-cyan", bgClass: "bg-neon-cyan/10" },
  { title: "Application Troubleshooting", level: 90, icon: Code, hex: "#bc13fe", color: "neon-purple", textClass: "text-neon-purple", bgClass: "bg-neon-purple/10" },
  { title: "Compliance & Audits", level: 85, icon: CheckCircle, hex: "#05d9e8", color: "neon-blue", textClass: "text-neon-blue", bgClass: "bg-neon-blue/10" },
];

export const BADGES = [
  { label: "Security Sentinel", icon: "🛡" },
  { label: "Directory Master", icon: "🧠" },
  { label: "Network Operator", icon: "🌐" },
];
