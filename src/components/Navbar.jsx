import React, { useContext } from 'react'
import { SidebarContext } from '../context/sidebarContext';
import { GrMenu } from "react-icons/gr";

function Navbar() {
    const {handleChange} = useContext(SidebarContext);

    return (
        <div className="w-[80%] h-[4rem] flex justify-between items-center bg-zinc-900 absolute -translate-x-1/2 left-1/2 top-7 rounded-full px-7 py-2">
            <span className="text-xl lg:text-2xl">Rajendra</span>

            <button className="p-2" onClick={() => handleChange(true)}>
                <GrMenu className="text-2xl lg:hidden" />
            </button>

            <nav className="hidden lg:flex items-center gap-2">
                <a className="text-lg p-2" href="about">about</a>
                <a className="text-lg p-2" href="about">skills</a>
                <a className="text-lg p-2" href="about">projects</a>
                <a className="text-lg p-2" href="about">contact</a>
                <a className="text-lg p-2" href="about">resume</a>
            </nav>
        </div>
    )
}

export default Navbar