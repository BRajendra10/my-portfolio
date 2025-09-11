import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App