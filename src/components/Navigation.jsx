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

            <button className="border hidden md:block text-2xl text-white border-white">Rajendra</button>

            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/testimonial"}>testimonial</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/github"}>github</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/resume"}>resume</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/linkedin"}>Linkedin</NavLink>
        </nav>
    </div>
  )
}

export default Navigation