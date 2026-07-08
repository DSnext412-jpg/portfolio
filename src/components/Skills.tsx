import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Award, Code, Cloud, Brain, BarChart3 } from 'lucide-react'

const googleArcadeUrl = 'https://www.skills.google/public_profiles/5c2f4d6d-c424-419a-b16a-9ec90711b9dd'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Google <span className="gradient-text">Arcade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My Google Cloud Skills journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="glassmorphism rounded-xl p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Google Cloud Arcade</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Cloud computing, AI/ML, and hands-on labs completed through Google Cloud Skills Boost
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/30 rounded-xl p-4">
                <Cloud className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Cloud Skills</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <Brain className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">AI & ML</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <Code className="h-5 w-5 text-green-400 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Hands-on Labs</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4">
                <BarChart3 className="h-5 w-5 text-orange-400 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Skill Badges</p>
              </div>
            </div>

            <motion.a
              href={googleArcadeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-medium transition-all"
            >
              <ExternalLink className="h-5 w-5" />
              View Full Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
