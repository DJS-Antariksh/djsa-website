import React from 'react'
import Navbar from './Navbar'
import AboutIrc from './AboutIrc'

const IRC25 = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <div className="">
            <Navbar />
        </div>
        <div className="">
            <AboutIrc />
        </div>
    </div>

  )
}

export default IRC25