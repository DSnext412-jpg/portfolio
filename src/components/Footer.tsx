// src/components/Footer.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile.ts'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Dipak Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              AI Engineer & Developer passionate about creating exceptional web experiences and building innovative solutions.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/arcade" className="text-muted-foreground hover:text-primary transition-colors">Arcade</Link></li>
              
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">{profile.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Dipak Portfolio.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
