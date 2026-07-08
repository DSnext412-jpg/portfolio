// src/components/Contact.tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react'
import { profile } from '../data/profile.ts'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-center">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </div>
              
              
              <div className="flex items-center gap-4 justify-center">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <h4 className="font-semibold mb-4">Connect on Social</h4>
              <div className="flex gap-4 justify-center">
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#6366F1' }}
                  className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#8B5CF6' }}
                  className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#E1306C' }}
                  className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
