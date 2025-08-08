// src/components/Navigation.jsx
import AnimatedLink from "./AnimatedLink";

function Navigation() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-stone-50">
      <nav className="w-full md:w-[44rem] h-screen md:h-[25rem] grid grid-cols-2 md:grid-cols-3 border border-stone-500">
        <AnimatedLink to="/aboutMe">about me</AnimatedLink>
        <AnimatedLink to="/projects">projects</AnimatedLink>
        <AnimatedLink to="/skills">skills</AnimatedLink>
        <AnimatedLink to="/contact">contact</AnimatedLink>
        <span className="flex justify-center items-center border text-2xl text-stone-700 border-stone-700 hover:text-stone-950 w-full h-full relative overflow-hidden">Rajendra</span>
        <AnimatedLink to="/testimonial">testimonial</AnimatedLink>

        <a
          className="flex justify-center items-center border text-2xl text-stone-700 border-stone-700 hover:text-stone-950"
          href="https://github.com/BRajendra10"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>

        <AnimatedLink to="/resume">resume</AnimatedLink>

        <a
          className="flex justify-center items-center border text-2xl text-stone-700 border-stone-700 hover:text-stone-950"
          href="https://www.linkedin.com/in/behera-rajendra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
