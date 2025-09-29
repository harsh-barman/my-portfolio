import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/pages/herosection/herosection'
import Navbar from './components/Layout/Navbar'

export default function App() {
  return (
    <Router>
       
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* Future routes like /about, /projects */}
      </Routes>
    </Router>
  )
}