export interface Certification {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date: string;
  /** Empty string means no verification link is available. */
  link: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'badge-01',
    title: 'Arcade Base Camp',
    issuer: 'Google Cloud',
    image: '/Arcade Base Camp April 2026.png',
    date: 'April 2026',
    link: 'https://www.skills.google/public_profiles/5ed2b771-8904-4d48-9aee-0c387ea1cf1b/badges/23768690',
  },
  {
    id: 'badge-02',
    title: 'GKE Operations & Networking',
    issuer: 'Google Cloud',
    image: '/Arcade Adventure - GKE Operations and Networking.png',
    date: '2026',
    link: 'https://www.skills.google/public_profiles/5ed2b771-8904-4d48-9aee-0c387ea1cf1b/badges/23671375',
  },
  {
    id: 'badge-03',
    title: 'Modern App Development',
    issuer: 'Google Cloud',
    image: '/Arcade Voyage - Modern Application Development.png',
    date: '2026',
    link: 'https://www.skills.google/public_profiles/5ed2b771-8904-4d48-9aee-0c387ea1cf1b/badges/23683710',
  },
  {
    id: 'badge-04',
    title: 'Data Migration Trail',
    issuer: 'Google Cloud',
    image: '/Arcade Trail - Data Migration.png',
    date: '2026',
    link: 'https://www.skills.google/public_profiles/5ed2b771-8904-4d48-9aee-0c387ea1cf1b/badges/23691019',
  },
  {
    id: 'badge-05',
    title: 'Dialogue Design',
    issuer: 'Google Cloud',
    image: '/Dialogue Design.png',
    date: '2026',
    link: 'https://www.skills.google/public_profiles/5ed2b771-8904-4d48-9aee-0c387ea1cf1b/badges/23616942',
  },
  {
    id: 'badge-06',
    title: 'Skills Spawn',
    issuer: 'Google Cloud',
    image: '/Work Meet Play - Skills Spawn.png',
    date: '2026',
    link: 'https://www.skills.google/public_profiles/5ed2b771-8904-4d48-9aee-0c387ea1cf1b/badges/23631853',
  },
];
