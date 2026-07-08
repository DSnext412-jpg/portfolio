// src/data/experience.ts
export interface Experience {
  company: string
  position: string
  duration: string
  type: 'full-time' | 'internship'
  location: string
  description: string[]
  technologies: string[]
  logo: string
}

export const experience: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Software Developer',
    duration: '2023 - Present',
    type: 'full-time',
    location: 'City, Country',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Implemented features and fixed bugs across multiple projects',
      'Collaborated with design team for UI/UX improvements',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'JavaScript'],
    logo: '/images/company-logo.png',
  },
  {
    company: 'Startup Lab',
    position: 'Software Development Intern',
    duration: '2022 - 2023',
    type: 'internship',
    location: 'City, Country',
    description: [
      'Assisted in development of web applications',
      'Learned company development workflows and best practices',
      'Created technical documentation and code reviews',
    ],
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML/CSS'],
    logo: '/images/startup-logo.png',
  },
]
