import React from 'react'
import { AnimatedBtn } from './AnimatedLink'
import { BoldText, UnderlineHighlight, Highlight} from './TransitionOverlay';

export default function About() {

  return (
    <div className="w-full h-screen">
      <AnimatedBtn to={"/"}>← Go back</AnimatedBtn>

      <div className="w-full sm:w-[80%] h-auto absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 p-5 sm:p-0">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-12 sm:leading-14 lg:leading-18 xl:leading-20 2xl:leading-22">
            Hello, my name is <BoldText>Rajendra Behera</BoldText>, I am a front-end developer seeking an <Highlight>internship</Highlight> or job where I can put my skills into action on real-world projects and continue growing as a developer. While I currently specialize in <BoldText>front-end development</BoldText>, I plan to learn <UnderlineHighlight>backend technologies</UnderlineHighlight>  so I can apply that knowledge in future projects and contribute more broadly to the team.
          </h1>
        </div>

        
      </div>
    </div>
  )
}