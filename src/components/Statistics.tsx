import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Award, Github, GitCommit, Cpu, Calendar, type LucideIcon } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'
import { statistics } from '../data/statistics.ts'
import { profile } from '../data/profile.ts'
import { githubFetch, githubJson } from '../lib/github.ts'

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  award: Award,
  github: Github,
  'git-commit': GitCommit,
  cpu: Cpu,
  calendar: Calendar,
}

const Statistics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [repoCount, setRepoCount] = useState(statistics.find(s => s.id === 'github')?.value || 0)
  const [totalCommits, setTotalCommits] = useState(statistics.find(s => s.id === 'commits')?.value || 0)

  useEffect(() => {
    const username = profile.github.split('/').pop() || ''
    const fetchGitHubStats = async () => {
      try {
        const userData = await githubJson<any>(`https://api.github.com/users/${username}`)
        if (userData.public_repos) setRepoCount(userData.public_repos)

        const repos = await githubJson<any[]>(`https://api.github.com/users/${username}/repos?per_page=100`)

        const commitCounts = await Promise.all(
          repos
            .filter((r: any) => !r.fork)
            .slice(0, 30)
            .map(async (repo: any) => {
              try {
                const res = await githubFetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1&author=${username}`)
                const link = res.headers.get('Link')
                if (link) {
                  const match = link.match(/&page=(\d+)>; rel="last"/)
                  if (match) return parseInt(match[1])
                }
                return 0
              } catch {
                return 0
              }
            })
        )
        const total = commitCounts.reduce((sum: number, c: number) => sum + c, 0)
        if (total > 0) setTotalCommits(total)
      } catch {}
    }
    fetchGitHubStats()
  }, [])

  const stats = statistics.map(s => {
    if (s.id === 'github') return { ...s, value: repoCount }
    if (s.id === 'commits') return { ...s, value: totalCommits }
    return s
  })

  return (
    <section id="statistics" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Impact & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect my dedication and growth in the tech industry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const StatIcon = iconMap[stat.icon] ?? Code2
            return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="glassmorphism p-6 rounded-xl text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full">
                      <StatIcon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                    <span className="counter-value">{useCountUp(inView ? stat.value : 0, { decimals: 0, separator: ',' })}</span>
                    {stat.suffix}
                  </div>

                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Statistics
