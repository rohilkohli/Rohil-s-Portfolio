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
  /** Unsplash preview image shown in the scanner card stream. */
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'Election Guide',
    description: 'Developed for Virtual Prompt Wars by Hack 2 Skill. An AI-powered intelligence platform providing comprehensive election insights and guidance.',
    tech: ['Gemini AI', 'React', 'Node.js', 'Cloud Run'],
    link: 'https://election-guide-196220787717.us-central1.run.app/',
    github: 'https://github.com/rohilkohli/Election-Guide.git',
    type: 'AI Intelligence',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=250&fit=crop',
  },
  {
    id: 'proj-02',
    title: 'Shids Style',
    description: 'Pro-grade E-commerce deployment for a fashion brand. Features high-performance storefront, secure checkout, and dynamic inventory management.',
    tech: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    link: 'https://www.shidstyle.com/',
    github: 'https://github.com/rohilkohli/shids-style',
    type: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=250&fit=crop',
  },
  {
    id: 'proj-03',
    title: 'Cyber-Resilience Framework',
    description: 'Autonomous endpoint protection system utilizing machine learning for predictive threat analysis and real-time mitigation.',
    tech: ['Python', 'TensorFlow', 'Kubernetes'],
    link: '',
    github: '',
    type: 'Security Engine',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
  },
];
