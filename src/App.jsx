import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/pages/herosection/herosection'
import Navbar from './components/Layout/Navbar'
import Noise from './components/styles/Noise/Noise'

export default function App() {
  return (
    <Router>
       <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* Future routes like /about, /projects */}
      </Routes>
    </Router>
  )
}