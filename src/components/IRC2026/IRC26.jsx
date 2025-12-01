import Navbar from '../Navbar'
import AboutIrc26 from './AboutIrc2026'
import Missions26 from './Missions2026'
import OurExp26 from './OurExp2026'
import Footer from "../Sponsor/Footer.jsx"

const IRC26 = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
        <div className="">
            <Navbar />
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-9'>
            <div className="mt-[25%]">
                <AboutIrc26 />
            </div>
            <div className=''>
                <Missions26/>
            </div>
            <div className='mb-4'>
                <OurExp26/>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    </div>

  )
}

export default IRC26