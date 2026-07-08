// src/data/statistics.ts
export interface Statistic {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
  icon: string
  color: string
  increase?: boolean
}

export const statistics: Statistic[] = [
  {
    id: 'projects',
    label: 'Projects Completed',
    value: 17,
    suffix: '+',
    icon: 'code',
    color: 'from-blue-500 to-cyan-400',
    increase: true,
  },
  {
    id: 'certificates',
    label: 'Certificates Earned',
    value: 6,
    suffix: '+',
    icon: 'award',
    color: 'from-purple-500 to-pink-400',
    increase: true,
  },
  {
    id: 'github',
    label: 'GitHub Repositories',
    value: 25,
    suffix: '+',
    icon: 'github',
    color: 'from-gray-500 to-gray-400',
    increase: true,
  },
  {
    id: 'commits',
    label: 'Total Commits',
    value: 1200,
    suffix: '+',
    icon: 'git-commit',
    color: 'from-green-500 to-emerald-400',
    increase: true,
  },
  {
    id: 'tech-learned',
    label: 'Technologies Learned',
    value: 10,
    suffix: '+',
    icon: 'cpu',
    color: 'from-orange-500 to-red-400',
    increase: true,
  },
  {
    id: 'years',
    label: 'Years of Learning',
    value: 4,
    suffix: '+',
    icon: 'calendar',
    color: 'from-rose-500 to-pink-400',
    increase: true,
  },
]
