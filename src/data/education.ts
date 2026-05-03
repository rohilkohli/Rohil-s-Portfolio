import { Box, BookOpen, GraduationCap, type LucideIcon } from 'lucide-react';

export interface Education {
  degree: string;
  institution: string;
  status?: string;
  location?: string;
  icon: LucideIcon;
  color: 'neon-cyan' | 'neon-purple' | 'neon-blue';
  textClass: string;
  borderClass: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech (Information Systems)",
    institution: "BITS Pilani (WILP)",
    status: "Currently Enrolled",
    icon: GraduationCap,
    color: "neon-cyan",
    textClass: "text-neon-cyan",
    borderClass: "border-neon-cyan/20",
  },
  {
    degree: "Vocational Diploma in IT (Software Development)",
    institution: "Dayalbagh Educational Institute, Agra",
    icon: Box,
    color: "neon-purple",
    textClass: "text-neon-purple",
    borderClass: "border-neon-purple/20",
  },
  {
    degree: "12th (CBSE) | 10th (ICSE)",
    institution: "S.K.D. Academy | St. Ann's Convent School",
    location: "Lucknow",
    icon: BookOpen,
    color: "neon-blue",
    textClass: "text-neon-blue",
    borderClass: "border-neon-blue/20",
  },
];
