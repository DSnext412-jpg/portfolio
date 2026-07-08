import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, TrendingUp, Award, CheckCircle, Code } from 'lucide-react'
import { codingProfiles } from '../data/codingProfiles.ts'

interface PlatformStats {
  platform: string
  rank: number
  solved: number
  total: number
  loading: boolean
}

const CodingProfiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [stats, setStats] = useState<Record<string, PlatformStats>>({})

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      setStats(prev => ({ ...prev, LeetCode: { platform: 'LeetCode', rank: 0, solved: 0, total: 0, loading: true } }))
      try {
        const res = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `query userPublicProfile($username: String!) {
              matchedUser(username: $username) {
                submitStats: submitStatsGlobal {
                  acSubmissionNum {
                    difficulty
                    count
                  }
                }
                profile { ranking }
              }
            }`,
            variables: { username: 'Dipak_sonawane412' },
          }),
        })
        const data = await res.json()
        const submitStats = data?.data?.matchedUser?.submitStats?.acSubmissionNum
        const solved = submitStats?.find((s: any) => s.difficulty === 'All')?.count || 0
        const rank = data?.data?.matchedUser?.profile?.ranking || 0
        setStats(prev => ({
          ...prev,
          LeetCode: { platform: 'LeetCode', rank, solved, total: 3374, loading: false },
        }))
      } catch {
        setStats(prev => ({ ...prev, LeetCode: { platform: 'LeetCode', rank: 0, solved: 0, total: 0, loading: false } }))
      }
    }
    fetchLeetCodeStats()
  }, [])

  const getStats = (platform: string) => stats[platform]

  return (
    <section id="coding-profiles" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track across multiple platforms showing competitive programming journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {codingProfiles.map((profile, index) => {
            const s = getStats(profile.platform)
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="glassmorphism rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${profile.color} bg-opacity-20`}>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${profile.color} flex items-center justify-center`}>
                          <div className="text-white font-bold text-sm">{profile.platform.charAt(0)}</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{profile.platform}</h3>
                        <p className="text-sm text-muted-foreground">@{profile.username}</p>
                      </div>
                    </div>
                    <motion.a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </motion.a>
                  </div>

                  {s?.loading ? (
                    <div className="flex justify-center py-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
                    </div>
                  ) : s && (s.rank || s.solved) ? (
                    <div className="space-y-4">
                      {s.rank > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground flex items-center gap-1"><Award className="h-3 w-3" /> Rank:</span>
                          <span className="font-semibold">#{s.rank.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Problems Solved:</span>
                        <span className="font-semibold">{s.solved}/{s.total}</span>
                      </div>
                      {s.total > 0 && (
                        <div className="mt-4">
                          <div className="w-full bg-border rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${(s.solved / s.total) * 100}%` } : {}}
                              transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                              className={`bg-gradient-to-r ${profile.color} h-2 rounded-full`}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {Math.round((s.solved / s.total) * 100)}% completion
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="py-4 text-center">
                      <a
                        href={profile.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                      >
                        <Code className="h-4 w-4" />
                        View Profile
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
