import React from 'react'
import { AnimatedBtn } from './AnimatedLink'
import { BoldText, UnderlineHighlight, Highlight} from './TransitionOverlay';
// import egatorImg from '../assets/egator-project-photo.png'

export default function About() {

  return (
    <div className="w-full h-screen">
      <AnimatedBtn to={"/"}>← Go back</AnimatedBtn>

      <section className="w-full sm:w-[80%] absolute -translate-x-1/2 left-1/2 top-1/60 p-5 sm:p-0">
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-12 sm:leading-14 lg:leading-18 xl:leading-20 2xl:leading-22">
            Hello, my name is <BoldText>Rajendra Behera</BoldText>, I am a front-end developer seeking an <Highlight>internship</Highlight> or job where I can put my skills into action on real-world projects and continue growing as a developer. While I currently specialize in <BoldText>front-end development</BoldText>, I plan to learn <UnderlineHighlight>backend technologies</UnderlineHighlight>  so I can apply that knowledge in future projects and contribute more broadly to the team.
          </h1>
        </div>

        <div className="w-full h-[20rem] gap-3 grid grid-cols-3 my-10">
          
        </div>

      </section>
    </div>
  )
}