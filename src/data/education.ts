// src/data/education.ts
export interface Education {
  institution: string
  degree: string
  field: string
  duration: string
  cgpa: string
  location: string
  achievements: string[]
  logo: string
}

export const education: Education[] = [
  {
    institution: 'K.K Wagh College',
    degree: 'BCS',
    field: 'Computer Science',
    duration: '2024 - 2027',
    cgpa: '9+ CGPA',
    location: 'Nashik',
    achievements: [],
    logo: '/images/university-logo.png',
  },
  {
    institution: 'Nath Jr College',
    degree: 'Higher Secondary Certificate Examination',
    field: 'Science',
    duration: '2022 - 2024',
    cgpa: '76.33%',
    location: 'Boregaon',
    achievements: [],
    logo: '/images/university-logo.png',
  },
]
