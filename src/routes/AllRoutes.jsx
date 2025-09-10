import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../components/About';
import Projects from '../screens/Projects';
import Skills from '../screens/Skills';
import Navigation from '../screens/Navigation';

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
    </Routes>
  )
}

export default AllRoutes