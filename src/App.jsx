import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/herosection/herosection'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* Future routes like /about, /projects */}
      </Routes>
    </Router>
  )
}