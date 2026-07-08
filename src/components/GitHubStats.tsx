import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, GitFork, ExternalLink, Code, Users, GitBranch } from 'lucide-react'
import { profile } from '../data/profile.ts'
import { githubJson } from '../lib/github.ts'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  fork: boolean
}

interface GitHubUser {
  login: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  location: string
  blog: string
}

const GitHubStats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [repos, setRepos] = useState<Repo[]>([])
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)

  const username = profile.github.split('/').pop() || ''

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, reposData] = await Promise.all([
          githubJson<any>(`https://api.github.com/users/${username}`),
          githubJson<any[]>(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`),
        ])
        setUser(userData)
        setRepos(reposData.filter((r: Repo) => !r.fork))
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err)
      } finally {
        setLoading(false)
      }
    }
    if (username) fetchData()
  }, [username])

  return (
    <section id="github-stats" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="gradient-text">Profile</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My GitHub profile and repositories
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          </div>
        ) : (
          <>
            {user && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-lg mx-auto mb-12"
              >
                <div className="glassmorphism rounded-xl p-8 text-center">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-bold mb-1">@{user.login}</h3>
                  <p className="text-muted-foreground mb-4">{user.bio || 'Developer'}</p>
                  <div className="flex justify-center gap-6 text-sm mb-4">
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {user.followers} followers</span>
                    <span className="flex items-center gap-1"><GitBranch className="h-4 w-4" /> {user.public_repos} repos</span>
                  </div>
                  <motion.a
                    href={`https://github.com/${user.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-foreground text-background rounded-lg font-medium transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Profile
                  </motion.a>
                </div>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ y: -5 }}
                  className="glassmorphism rounded-xl p-6 block group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors truncate">
                      {repo.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {repo.description || 'No description'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <Code className="h-3 w-3" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default GitHubStats
