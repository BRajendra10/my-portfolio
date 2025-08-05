import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-stone-950">
        <nav className="w-[44rem] h-[25rem] grid grid-cols-3 border border-stone-500">
            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/cases"}>cases</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/aboutUs"}>about us</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/directions"}>directions</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/terms"}>terms</NavLink>

            <button className="border text-2xl text-stone-50 border-white">stykovak</button>

            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/download"}>dowanload</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/testimonial"}>testimonial</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/contact"}>contact</NavLink>
            <NavLink className="flex justify-center items-center border text-2xl text-stone-50 border-stone-500" to={"/check"}>check</NavLink>
        </nav>
    </div>
  )
}

export default Navigation