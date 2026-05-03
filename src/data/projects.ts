export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  /** Empty string means the project is not deployed; no live link will be shown. */
  link: string;
  /** Empty string means no public repo; no GitHub link will be shown. */
  github: string;
  type: string;
  /** Preview image shown in the scanner card stream. */
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Election Guide',
    description: 'Developed for Virtual Prompt Wars by Hack 2 Skill. An AI-powered intelligence platform providing comprehensive election insights, civic education, and real-time guidance powered by Gemini AI.',
    tech: ['Gemini AI', 'React', 'TypeScript', 'Cloud Run'],
    link: 'https://election-guide-196220787717.us-central1.run.app/',
    github: 'https://github.com/rohilkohli/Election-Guide.git',
    type: 'AI Intelligence',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=250&fit=crop',
  },
  {
    id: 'proj-02',
    title: 'Shids Style',
    description: 'Pro-grade E-commerce deployment for a fashion brand. Features high-performance storefront, secure checkout pipeline, and dynamic inventory management.',
    tech: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    link: 'https://www.shidstyle.com/',
    github: 'https://github.com/rohilkohli/shids-style',
    type: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=250&fit=crop',
  },
  {
    id: 'proj-03',
    title: 'Cyber-Resilience Framework',
    description: 'Autonomous endpoint protection system concept utilizing machine learning principles for predictive threat analysis, real-time mitigation, and automated remediation workflows.',
    tech: ['Python', 'TensorFlow', 'Kubernetes', 'SIEM'],
    link: '',
    github: 'https://github.com/rohilkohli',
    type: 'Security Engine',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
  },
];
