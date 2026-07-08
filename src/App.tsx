import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import { Hero, About, Skills, Education, Internship, GitHubStats, CodingProfiles, Statistics, Contact } from './components'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>        <Route index element={<Hero />} />        <Route path="about" element={<About />} />        <Route path="arcade" element={<Skills />} />        <Route path="education" element={<Education />} />        <Route path="internship" element={<Internship />} />        <Route path="github-stats" element={<GitHubStats />} />        <Route path="coding-profiles" element={<CodingProfiles />} />        <Route path="statistics" element={<Statistics />} />        <Route path="contact" element={<Contact />} />      </Route>    </Routes>
  )
}

export default App
