import React from 'react'
import BackBtn from '../components/BackBtn'

function About() {
  return (
    <div className="w-full h-screen grid grid-cols-9 grid-rows-9 bg-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:calc(100%/9)_calc(100%/9)] pointer-events-none"></div>

      <BackBtn />

      <div className="col-start-5 row-start-5 flex justify-center items-center">
        <h1 className="text-lg">About</h1>
      </div>
    </div>
  )
}

export default About