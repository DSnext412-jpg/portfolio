// src/data/socialLinks.ts
export interface SocialLink {
  name: string
  url: string
  icon: string
  color: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
    color: 'hover:text-gray-400',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    url: 'mailto:dipaksonwane412@gmail.com',
    icon: 'mail',
    color: 'hover:text-red-400',
  },
]
