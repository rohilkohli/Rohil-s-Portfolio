import { Server, Activity, Database, Zap, ChevronRight, type LucideIcon } from 'lucide-react';

export interface ExperiencePhase {
  title: string;
  location?: string;
  details: string[];
  stats?: { managed: string; sla: string; incidents: string };
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  client?: string;
  phases: ExperiencePhase[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Wipro Technologies",
    period: "FEB 2023 → PRESENT",
    role: "Administrator L2 (Client-Side Deployment)",
    client: "HDFC Bank Limited — Back Office",
    phases: [
      {
        title: "Phase 2: Senior Administration",
        details: [
          "Endpoint security management & vulnerability remediation",
          "Active Directory administration & organizational unit strategy",
          "Networking support & core infrastructure troubleshooting",
          "Advanced Windows & Enterprise application support",
        ],
        stats: { managed: "2000+", sla: "99.9%", incidents: "1500+" },
      },
      {
        title: "Phase 1: Data Center Operations",
        location: "Ujjivan Small Finance Bank, Mumbai",
        details: [
          "Real-time infrastructure monitoring of banking core",
          "Data center operational handling & physical layer support",
          "Emergency incident handling and hierarchical escalation",
        ],
      },
    ],
  },
];
