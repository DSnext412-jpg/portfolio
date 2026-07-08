// src/layouts/Layout.tsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import ThemeSwitcher from '../components/ThemeSwitcher'
import CursorEffect from '../components/CursorEffect'
import LoadingScreen from '../components/LoadingScreen'

function Layout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      <LoadingScreen />
      <ScrollProgress />
      <ThemeSwitcher />
      <CursorEffect />

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
