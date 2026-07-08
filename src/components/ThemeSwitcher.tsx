// src/components/ThemeSwitcher.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 p-3 bg-background/80 backdrop-blur-md rounded-full border border-border/50 shadow-lg z-40 hover:bg-accent transition-all"
    >
      <motion.div
        key={theme}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5 text-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-foreground" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeSwitcher
