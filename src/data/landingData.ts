// Shared data for landing page prototypes (v1, v2, v3)

export interface WorkRole {
  org: string;
  role: string;
  year: string;
}

export interface BlogPost {
  title: string;
  slug: string;
}

// Work history for landing page
export const workRoles: WorkRole[] = [
  {
    org: 'LA Kings',
    role: 'Data Engineer',
    year: '2024-Present'
  },
  {
    org: 'USA Cycling',
    role: 'Data Scientist',
    year: '2024'
  },
  {
    org: 'UCLA Athletics',
    role: 'Tennis Analytics Founder',
    year: '2023'
  },
  {
    org: 'Stats Perform',
    role: 'Data Scientist',
    year: '2022'
  }
];

// Current role for hero display
export const currentRole = workRoles[0];

// Recent blog posts
export const recentPosts: BlogPost[] = [
  { title: 'Sauna Club', slug: 'sauna-club' },
  { title: 'Sunscreen Habits', slug: 'sunscreen-habits' },
  { title: 'Ramadan', slug: 'ramadan' }
];

// "Now" status - easy to update
export const nowStatus = "Building content while I work for the LA Kings.";

// Resume path
export const resumePath = '/jerry-shi-resume.pdf';
