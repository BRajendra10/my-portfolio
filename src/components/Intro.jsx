import React from 'react'
import Typed from 'typed.js'
import { useEffect, useContext, useRef } from 'react'
import { IntroContext } from '../context/IntroContext';


function Intro() {
    const el = useRef(null);
    const { hide, handleState } = useContext(IntroContext);

    console.log(hide, handleState);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['welcome to my portfolio'],
            typeSpeed: 75,
            onComplete: () => {
                handleState(true);
            }
        });

        return () => {
            typed.destroy();
        };
    }, [handleState])

    return (
        <div className={hide ? "absolute -translate-y-2/2 transition-all ease-out duration-700 w-full h-screen flex justify-center items-center bg-stone-950" : "absolute w-full h-screen flex justify-center items-center bg-stone-950"}>
            <h1 className="uppercase text-xl md:text-2xl lg:text-3xl text-stone-50" ref={el}></h1>
        </div>
    )
}

export default Intro