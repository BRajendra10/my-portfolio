import React from 'react'
import { AnimatedBtn } from './AnimatedLink'
import { BoldText, UnderlineHighlight, Highlight } from './TransitionOverlay';
import egatorImg from '../assets/egator-project-photo.png'
import tshop from '../assets/t-shop.png'
import travel from '../assets/travel-in-nature.png'

export default function About() {

  const projects = [
    {
      title: 'EGATOR hospital-website',
      description: 'A hospital website clone using HTML, SCSS & JS.',
      img: egatorImg,
    },
    {
      title: 'T-Shop ecomerse website',
      description: 'A ecomerse website clone using HTML & CSS.',
      img: tshop,
    },
    {
      title: 'Traveling website',
      description: 'A traveling website clone using HTML, css & JS.',
      img: travel,
    },
  ]

  return (
    <div className="w-full h-screen">
      <AnimatedBtn to={"/"}>← Go back</AnimatedBtn>

      <section className="w-full sm:w-[80%] absolute -translate-x-1/2 left-1/2 top-1/60 p-5 sm:p-0">
        <div className="w-full h-screen flex justify-center items-center">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-12 sm:leading-14 lg:leading-18 xl:leading-20 2xl:leading-22">
            Hello, my name is <BoldText>Rajendra Behera</BoldText>, I am a front-end developer seeking an <Highlight>internship</Highlight> or job where I can put my skills into action on real-world projects and continue growing as a developer. While I currently specialize in <BoldText>front-end development</BoldText>, I plan to learn <UnderlineHighlight>backend technologies</UnderlineHighlight>  so I can apply that knowledge in future projects and contribute more broadly to the team.
          </h1>
        </div>

        
        <div className="w-full py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="shadow-2xl rounded-xl bg-white overflow-hidden flex flex-col">
                {/* Image */}
                <div className="aspect-video">
                  <img
                    className="w-full h-full object-cover"
                    src={project.img}
                    alt={project.title}
                  />
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-600 mt-1 flex-1">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
      </section>
    </div>
  )
}