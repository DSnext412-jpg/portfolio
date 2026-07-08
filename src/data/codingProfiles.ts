// src/data/codingProfiles.ts
export interface CodingProfile {
  platform: string
  username: string
  profileUrl: string
  rank?: number
  totalProblems?: number
  solvedProblems?: number
  streak?: number
  icon: string
  color: string
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'Dipak_sonawane412',
    profileUrl: 'https://leetcode.com/u/Dipak_sonawane412/',
    rank: 1500,
    totalProblems: 500,
    solvedProblems: 350,
    streak: 15,
    icon: 'leetcode',
    color: 'from-yellow-500 to-orange-400',
  },
  {
    platform: 'HackerRank',
    username: 'dipaksonwane412',
    profileUrl: 'https://www.hackerrank.com/profile/dipaksonwane412',
    rank: 500,
    totalProblems: 200,
    solvedProblems: 180,
    streak: 5,
    icon: 'hackerrank',
    color: 'from-green-500 to-teal-400',
  },
]
