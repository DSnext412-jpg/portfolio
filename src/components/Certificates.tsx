// src/components/Certificates.tsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { certificates } from '../data/certificates.ts'

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validating expertise through industry-recognized certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCertificate(cert.id === selectedCertificate ? null : cert.id)}
            >
              <div className="glassmorphism rounded-xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">Issued by {cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                  
                  {selectedCertificate === cert.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <div className="space-y-2 text-sm">
                        {cert.credentialId && (
                          <div>
                            <span className="font-medium">Credential ID:</span> {cert.credentialId}
                          </div>
                        )}
                        {cert.verificationUrl && (
                          <div>
                            <a
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              Verify Certificate
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
