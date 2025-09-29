import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/pages/herosection/herosection'
import Navbar from './components/Layout/Navbar'

import About from './components/pages/About/About'

export default function App() {
  return (
    <Router>
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path='/about' element={<About />}/>
        
      </Routes>
    </Router>
  )
}