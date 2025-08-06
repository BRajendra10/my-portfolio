import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials';
import Resume from '../components/Resume';
import Github from '../components/Github';
// import Cases from '../components/Cases';
// import AboutUs from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Linkedin from '../components/Linkedin';
import Navigation from '../components/Navigation';

function NavigationRoutes() {
  return (
    <Routes>
        <Route path={"/aboutMe"} element={<AboutMe />}/>
        <Route path={"/projects"} element={<Projects />}/>
        <Route path={"/skills"} element={<Skills />}/>
        <Route path={"/resume"} element={<Resume />}/>
        <Route path={"/"} element={<Navigation />} />
        <Route path={"/testimonial"} element={<Testimonials />}/>
        <Route path={"/github"} element={<Github />}/>
        <Route path={"/contact"} element={<Contact />}/>
        <Route path={"/linkedin"} element={<Linkedin />}/>
    </Routes>
  )
}

export default NavigationRoutes