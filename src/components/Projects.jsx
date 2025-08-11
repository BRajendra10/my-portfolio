import React from 'react'
import { AnimatedBtn } from './AnimatedLink'

function Projects() {
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <AnimatedBtn to={"/"}>← Go back</AnimatedBtn>

      <h1 className="text-4xl">Projects</h1>
    </div>
  )
}

export default Projects