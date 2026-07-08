// src/components/CursorEffect.tsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', () => setIsHovering(false))

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', () => setIsHovering(false))
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${isHovering
            ? 'w-12 h-12 border-primary bg-primary/20'
            : 'bg-transparent border-muted-foreground/50'
          }`
        }
      />
    </motion.div>
  )
}

export default CursorEffect
