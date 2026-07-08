// src/components/Experience.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experience } from '../data/experience.ts'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional background and career highlights in software development
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              className="relative"
            >
              <div className="glassmorphism rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-secondary p-2">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                        <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{exp.duration}</p>
                        <p className="text-xs text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="text-muted-foreground mb-4 space-y-2">
                      {exp.description.map((item, descIndex) => (
                        <li key={descIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {index < experience.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary to-secondary" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
