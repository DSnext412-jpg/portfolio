// src/components/ScrollProgress.tsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const updateScrollProgress = () => {
      const currentProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setProgress(currentProgress)
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
      <div className="w-1 h-32 bg-border/50 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-t from-primary to-secondary rounded-full"
          style={{ height: `${progress * 100}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${progress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ScrollProgress
