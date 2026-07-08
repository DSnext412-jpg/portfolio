// src/data/internship.ts
export interface Internship {
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  logo: string
}

export const internship: Internship[] = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Software Developer Intern',
    duration: 'Summer 2022',
    location: 'City, Country',
    description: [
      'Developed web applications using Python and Flask',
      'Implemented backend services and APIs',
      'Assisted in code reviews and testing',
    ],
    technologies: ['Python', 'Flask', 'JavaScript', 'HTML/CSS'],
    logo: '/images/company-logo.png',
  },
]
