import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, GitFork, ExternalLink, Search, Code } from 'lucide-react'
import { profile } from '../data/profile.ts'

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

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [languageFilter, setLanguageFilter] = useState<string | null>(null)

  const username = profile.github.split('/').pop() || ''

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`)
        const data = await res.json()
        setRepos(data.filter((r: Repo) => !r.fork))
      } catch (err) {
        console.error('Failed to fetch repos:', err)
      } finally {
        setLoading(false)
      }
    }
    if (username) fetchRepos()
  }, [username])

  const languages = Array.from(new Set(repos.map(r => r.language).filter(Boolean)))

  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (repo.description?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    const matchesLanguage = !languageFilter || repo.language === languageFilter
    return matchesSearch && matchesLanguage
  })

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="gradient-text">Repositories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My open-source projects and contributions
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <motion.input
                initial={{ opacity: 0, width: 0 }}
                animate={inView ? { opacity: 1, width: '100%' } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                type="text"
                placeholder="Search repos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              <button
                onClick={() => setLanguageFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!languageFilter ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                All
              </button>
              {languages.slice(0, 10).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguageFilter(lang === languageFilter ? null : lang)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${languageFilter === lang ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  {lang}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
          </div>
        ) : filteredRepos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">No repositories found.</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, index) => (
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
        )}
      </div>
    </section>
  )
}

export default Projects
