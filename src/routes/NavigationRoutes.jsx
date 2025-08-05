import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Cases from '../components/Cases';
import AboutUs from '../components/AboutUs';
import Directions from '../components/Directions';
import Terms from '../components/Terms';
import Download from '../components/Download';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Check from '../components/Check';
import Navigation from '../components/Navigation';

function NavigationRoutes() {
  return (
    <Routes>
        <Route path={"/cases"} element={<Cases />}/>
        <Route path={"/aboutUs"} element={<AboutUs />}/>
        <Route path={"/directions"} element={<Directions />}/>
        <Route path={"/terms"} element={<Terms />}/>
        <Route path={"/"} element={<Navigation />} />
        <Route path={"/download"} element={<Download />}/>
        <Route path={"/testimonial"} element={<Testimonials />}/>
        <Route path={"/contact"} element={<Contact />}/>
        <Route path={"/check"} element={<Check />}/>
    </Routes>
  )
}

export default NavigationRoutes