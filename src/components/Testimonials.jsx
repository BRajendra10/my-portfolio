import React from 'react'
import { useNavigate } from 'react-router-dom'

function Testimonials() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <button
        onClick={() => navigate('/')}
        className="absolute top-5 left-5 px-4 py-2 text-stone-700 border border-stone-700 hover:text-stone-950 hover:border-stone-950 transition-all duration-300"
      >
        ← Go back
      </button>


      <h1 className="text-4xl">Testimonials</h1>
    </div>
  )
}

export default Testimonials