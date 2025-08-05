import React from 'react'
import { useNavigate } from 'react-router-dom'


function Check() {
    const navigate = useNavigate();
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button className="absolute top-5 left-5 p-3 hover:text-lg duration-700" onClick={() => navigate("/")}>Go back</button>

      <h1>Check</h1>
    </div>
  )
}

export default Check