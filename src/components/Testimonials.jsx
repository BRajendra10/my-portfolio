import React from 'react'
import { AnimatedBtn } from './AnimatedLink'

function Testimonials() {

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <AnimatedBtn to={"/"}>← Go back</AnimatedBtn>

      <h1 className="text-4xl">Testimonials</h1>
    </div>
  )
}

export default Testimonials