import React from 'react'
import { AnimatedBtn } from './AnimatedLink'

function Resume() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <AnimatedBtn to={"/"}>← Go back</AnimatedBtn>
      
      <h1 className="text-4xl">Resume</h1>
    </div>
  )
}

export default Resume