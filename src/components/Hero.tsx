// src/components/Hero.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile.ts'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-6"
          >
            <TypeAnimation
              sequence={[profile.title, 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 line-clamp-2"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium flex items-center gap-2 justify-center transition-all"
            >
              <Github className="h-5 w-5" />
              GitHub
            </motion.a>

            <motion.a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium flex items-center gap-2 justify-center transition-all"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="animate-bounce"
          >
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-8 w-8" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
