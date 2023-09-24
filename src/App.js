import LandingPage from "./components/LandingPage/LandingPage"
import Department from "./components/Department/Department"
import Achievements from "./components/Achievements"
import Footer from "./components/Sponsor/Footer"
import Sponsor from "./components/Sponsor/Sponsor"
import OurRover from "./components/OurRover/OurRover"
import Abhyaan from "./components/OurRover/Abhyaan"
import Prayaan from "./components/OurRover/Prayaan"
import AboutTeam from "./components/AboutTeam/AboutTeam"



export default function App() {

  let slides = [ Abhyaan, Prayaan ];

  return (
    <div className="bg-global-background-image">
      {/* <LandingPage/> */}
      {/* <Department/>      
      <Achievements/> */}

      {/* <OurRover slides={slides}/> */}
      {/* <AboutTeam/> */}
      
      {/* <Abhyaan/> */}
      {/* <Sponsor/> */}
      {/* <Prayaan/> */}
      {/* <Footer/> */}
    </div>
  )
}