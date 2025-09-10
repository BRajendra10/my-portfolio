import React from 'react'
import { NavLink, Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="w-full h-screen grid grid-cols-9 grid-rows-9 bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:calc(100%/9)_calc(100%/9)] pointer-events-none"></div>

            <div className="col-start-4 row-start-4 col-span-3 row-span-3 grid grid-cols-3">
                <NavLink className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300" to={"/about"}> About </NavLink>
                <NavLink className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300" to={"/projects"}> Projects </NavLink>
                <NavLink className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300 " to={"skills"}> Skills </NavLink>
                <div className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300"> hello </div>
                <div className="flex justify-center items-center text-xl text-white"> Rajendra </div>
                <div className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300"> hello </div>
                <Link className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300" to={"https://github.com/BRajendra10"}> github </Link>
                <div className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300"> resume </div>
                <Link className="flex justify-center items-center text-xl text-gray-400 hover:text-gray-100 duration-300" to={"https://www.linkedin.com/in/behera-rajendra/"}> Linked-in </Link>
            </div>
        </div>
    )
}

export default Navigation