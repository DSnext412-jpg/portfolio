// src/components/Education.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education } from '../data/education.ts'

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and notable achievements in computer science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                <div className="glassmorphism p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-primary to-secondary p-2">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.field}</p>
                    <p className="text-sm font-medium">Duration: {edu.duration}</p>
                    {edu.cgpa && <p className="text-2xl font-bold text-secondary">{edu.cgpa}</p>}
                  </div>

                  {edu.achievements.length > 0 && (
                    <div className="mt-6">
                      <h5 className="text-sm font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
