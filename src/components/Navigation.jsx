import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-stone-950">
        <nav className="w-full md:w-[44rem] h-screen md:h-[25rem] grid grid-cols-2 md:grid-cols-3 border border-stone-500">
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/cases"}>cases</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/aboutUs"}>about us</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/directions"}>directions</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/terms"}>terms</NavLink>

            <button className="border hidden md:block text-2xl text-white border-white">Rajendra</button>

            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/download"}>dowanload</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/testimonial"}>testimonial</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/contact"}>contact</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-white border-stone-700 hover:border-stone-50" to={"/check"}>check</NavLink>
        </nav>
    </div>
  )
}

export default Navigation