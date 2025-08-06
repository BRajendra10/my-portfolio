import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  
  return (
    <div className="w-full h-screen flex justify-center items-center bg-stone-950">
      <nav className="w-full md:w-[44rem] h-screen md:h-[25rem] grid grid-cols-2 md:grid-cols-3 border border-stone-500">
        <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/aboutMe"}>about me</NavLink>
        <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/projects"}>projects</NavLink>
        <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/skills"}>skills</NavLink>
        <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/contact"}>contact</NavLink>
        <NavLink className="flex justify-center items-center border text-2xl text-white border-white" to={"/"}>Rajendra</NavLink>
        <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/testimonial"}>testimonial</NavLink>

        <a
          className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50"
          href="https://github.com/BRajendra10"
          target="_blank"
          rel="noopener noreferrer">
          github
        </a>

        <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/resume"}>resume</NavLink>

        <a
          className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50"
          href="https://www.linkedin.com/in/behera-rajendra/"
          target="_blank"
          rel="noopener noreferrer">
          linkedin
        </a>
      </nav>
    </div>
  )
}

export default Navigation