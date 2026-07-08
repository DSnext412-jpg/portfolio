// src/data/profile.ts
export interface Profile {
  name: string
  title: string
  email: string
  phone: string
  instagram: string
  location: string
  bio: string
  fullBio: string
  linkedIn: string
  github: string
  resumeUrl: string
  profileImage: string
  signature: string
  status: string
  yearsOfExperience: number
}

export const navItems = [
  { path: 'home', label: 'Home' },
  { path: 'about', label: 'About' },
  { path: 'arcade', label: 'Arcade' },
  { path: 'education', label: 'Education' },

  { path: 'github-stats', label: 'GitHub Stats' },
  { path: 'coding-profiles', label: 'Coding Profiles' },
  { path: 'statistics', label: 'Statistics' },
  { path: 'contact', label: 'Contact' },
]

export const profile: Profile = {
  name: 'Dipak Sonawane',
  title: 'AI Engineer & Developer',
  email: 'dipaksonwane412@gmail.com',
  phone: '+91-9322626203',
  instagram: 'https://www.instagram.com/ds_412_/',
  location: 'Nashik, Maharashtra',
  bio: 'Building intelligent solutions through code, curiosity, and software development. Driven by innovation, logic, and lifelong learning.',
  fullBio: `I'm also good at C/Python programming, and currently learning Data Structures and Algorithms to strengthen my problem-solving, also learning new technologies to strengthen my technical foundation.

Other than coding, I'm a skilled video editor and use Photoshop to design eye-catching graphics and photos.

I also worked as a SQL/Python developer and am good with AI products, where I focus on a clear future with good communication and delivering positive experiences.

I'm good to go to connect with professionals, learn from the tech community, and explore opportunities to grow as a developer and creator.`,
  linkedIn: 'https://www.linkedin.com/in/dipak-sonawane-511b5323a/',
  github: 'https://github.com/DSnext412-jpg',
  resumeUrl: '/resume.pdf',
  profileImage: '/images/profile.png',
  signature: '/images/signature.png',
  status: 'Available for Hire',
  yearsOfExperience: 5,
}
