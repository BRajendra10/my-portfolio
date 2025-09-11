import React, { useContext } from 'react'
import { SidebarContext } from '../context/sidebarContext';
import { GrClose } from "react-icons/gr";

function Sidebar() {
    const { isOpen, handleChange } = useContext(SidebarContext);

    return (
        <div className={`w-[22rem] h-screen fixed lg:hidden top-0 right-0 bg-zinc-900 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="w-full h-[4rem] flex justify-between items-center p-3">
                <h2 className="text-2xl p-2">Rajendra behera</h2>
                <button onClick={() => handleChange(false)}>
                    <GrClose className="text-xl" />
                </button>
            </div>
            <nav className="flex flex-col gap-2 p-2">
                <a className="text-lg focus:bg-zinc-800 rounded-full px-4 py-2" href="about">about</a>
                <a className="text-lg focus:bg-zinc-800 rounded-full px-4 py-2" href="skills">skills</a>
                <a className="text-lg focus:bg-zinc-800 rounded-full px-4 py-2" href="projects">projects</a>
                <a className="text-lg focus:bg-zinc-800 rounded-full px-4 py-2" href="contact">contact</a>
                <a className="text-lg focus:bg-zinc-800 rounded-full px-4 py-2" href="resume">resume</a>
            </nav>
        </div>
    )
}

export default Sidebar