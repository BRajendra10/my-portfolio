import React from 'react'
import { AnimatedBtn } from './AnimatedLink'

function About() {

  return (
    <div className="w-full h-screen">
      <AnimatedBtn to={"/"}>← Go back</AnimatedBtn>

      <div className="w-[80%] h-auto absolute -translate-x-1/2 left-1/2 top-0">
        <div className="w-full min-h-screen flex justify-center items-center">
          <h1 className="text-6xl leading-25">
            Need a website that looks great and performs perfectly?
            That takes a blend of design sense, clean code, and attention to detail —
            which is exactly what I bring as a front-end developer crafting responsive, modern UI's.
          </h1>
        </div>

        <div className="w-full min-h-screen flex justify-center items-center">
          <h1 className="text-6xl leading-25">
            Hello, my name is Rajendra Behera, a front-end developer seeking an internship or job where I can put my skills into action on real-world projects and continue growing as a developer. While I currently specialize in front-end development, I plan to learn backend technologies so I can apply that knowledge in future projects and contribute more broadly to the team.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About