// Shared modal data for work and content items

export interface WorkItem {
  id: string;
  image: string;
  label: string;
  org: string;
  years: string;
  role: string;
  did: string[];
  learned: string[];
}

export interface ContentItem {
  id: string;
  platform: string;
  handle: string;
  image: string;
  tagline: string;
  externalUrl: string;
  ctaText: string;
}

export const workItems: WorkItem[] = [
  {
    id: 'la-kings',
    image: '/images/work/la-kings-processed.png',
    label: '2025: LA Kings Data Engineer',
    org: 'LA Kings',
    years: '2025 - Present',
    role: 'Data Engineer',
    did: [
      'Building analytics infrastructure',
      'Real-time game data processing'
    ],
    learned: [
      'NHL data systems',
      'Production engineering'
    ]
  },
  {
    id: 'usa-cycling',
    image: '/images/work/usa-cycling-processed.png',
    label: '2024: USA Cycling Data Scientist',
    org: 'USA Cycling',
    years: '2024',
    role: 'Data Scientist',
    did: [
      'National team performance tracking',
      'Race strategy optimization'
    ],
    learned: [
      'Olympic-level analytics',
      'Endurance sport metrics'
    ]
  },
  {
    id: 'ucla',
    image: '/images/work/ucla-processed.png',
    label: '2023: UCLA Tennis Analytics Founder',
    org: 'UCLA Athletics',
    years: '2023',
    role: 'Tennis Analytics Founder',
    did: [
      'Founded tennis analytics program',
      'Player performance analysis'
    ],
    learned: [
      'NCAA sports analytics',
      'Building from scratch'
    ]
  },
  {
    id: 'stats-perform',
    image: '/images/work/opta-stats-perform-processed.png',
    label: '2022: Sports Betting Data Scientist',
    org: 'Stats Perform / Opta',
    years: '2022',
    role: 'Data Scientist',
    did: [
      'Predictive models for betting markets',
      'Real-time match data processing'
    ],
    learned: [
      'Global sports data systems',
      'Probability modeling'
    ]
  },
  {
    id: 'usta',
    image: '/images/work/usta-us-open-processed.png',
    label: '2022: US Open Performance Analyst',
    org: 'USTA',
    years: '2022',
    role: 'Performance Analyst',
    did: [
      'Player performance analytics',
      'Development tracking systems'
    ],
    learned: [
      'Professional tennis metrics',
      'Athlete development data'
    ]
  }
];

export const contentItems: ContentItem[] = [
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@jerrythegoatshi',
    image: '/images/content/youtube-processed.png',
    tagline: 'Sports analytics breakdowns & tutorials',
    externalUrl: 'https://youtube.com/@jerrythegoatshi',
    ctaText: 'Visit YouTube'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@jerrythegoatshi',
    image: '/images/content/ig-processed.png',
    tagline: 'Behind the scenes & daily content',
    externalUrl: 'https://instagram.com/jerrythegoatshi',
    ctaText: 'Visit Instagram'
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@jerrythegoatshi',
    image: '/images/content/tiktok-processed.png',
    tagline: 'Short-form sports analytics',
    externalUrl: 'https://tiktok.com/@jerrythegoatshi',
    ctaText: 'Visit TikTok'
  }
];
