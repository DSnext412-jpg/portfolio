import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Brain, FileCode, Globe, Users, Lightbulb, Clock, Target, Eye, Sparkles, BookOpen, FileText } from 'lucide-react'
import { profile } from '../data/profile.ts'

const coreSkills = [
  { name: 'Python', icon: Code },
  { name: 'SQL (MySQL, PostgreSQL, Firebase, MongoDB)', icon: Database },
  { name: 'C', icon: Code },
  { name: 'C++', icon: Code },
  { name: 'Java', icon: FileCode },
  { name: 'HTML', icon: Globe },
  { name: 'Prompt Engineering', icon: Brain },
  { name: 'Deep Learning', icon: Brain },
  { name: 'Data Structures', icon: Code },
  { name: 'PyTest', icon: Code },
  { name: 'REST APIs', icon: Globe },
  { name: 'Computer Networks', icon: Globe },
]

const softSkills = [
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Critical Thinking', icon: Brain },
  { name: 'Communication', icon: Users },
  { name: 'Teamwork', icon: Users },
  { name: 'Leadership', icon: Target },
  { name: 'Time Management', icon: Clock },
  { name: 'Adaptability', icon: Sparkles },
  { name: 'Debugging', icon: Code },
  { name: 'Attention to Detail', icon: Eye },
  { name: 'Creativity', icon: Sparkles },
  { name: 'Continuous Learning', icon: BookOpen },
  { name: 'Documentation', icon: FileText },
]

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Engineer & Python Developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden glassmorphism">
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">AI Engineer & Python Developer</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
              {profile.bio}
            </p>
            <div className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line text-sm">
              {profile.fullBio}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Core Skills</h3>
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            {coreSkills.map((skill, index) => {
              const SkillIcon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                  className="glassmorphism rounded-xl px-5 py-3 flex items-center gap-2"
                >
                  <SkillIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            {softSkills.map((skill, index) => {
              const SkillIcon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
                  className="glassmorphism rounded-xl px-5 py-3 flex items-center gap-2"
                >
                  <SkillIcon className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism rounded-xl p-8 max-w-2xl mx-auto relative">
            <div className="text-4xl text-primary/20 absolute -top-2 left-4 font-serif">"</div>
            <p className="text-lg italic text-muted-foreground leading-relaxed">
              Code is like humor. When you have to explain it, it's bad.
            </p>
            <div className="text-4xl text-primary/20 absolute -bottom-6 right-4 font-serif">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
