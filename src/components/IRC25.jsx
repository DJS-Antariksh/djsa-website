import React from 'react'
import Navbar from './Navbar'
import AboutIrc from './AboutIrc'
import Missions from './Missions'
const IRC25 = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
        <div className="">
            <Navbar />
        </div>
        <div className='flex flex-col justify-center items-center gap-9'>
            <div className="mt-[25%]">
                <AboutIrc />
            </div>
            <div>
                <Missions/>
            </div>
        </div>
    </div>

  )
}

export default IRC25