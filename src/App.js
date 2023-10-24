import LandingPage from "./components/LandingPage"
import AboutTeam from "./components/AboutTeam/AboutTeam"
import Rover from "./components/OurRovers/Rover"
import Achievements from "./components/Achievements/Achievements"
import Competitions from "./components/Competitions"
import Department from "./components/Department/Department"
import Core from "./components/Core"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Sponsor/Footer"
import Sponsor from "./components/Sponsor/Sponsor"

export default function App() {
  return (
    <div className="overflow-hidden" >
      <LandingPage/>
      <AboutTeam/>
      <Rover/>
      <Competitions/>
      <Achievements/>
      <Department/>
      <Core/>
      <ContactUs/>
      <Sponsor/>
      <Footer/>
    </div>
  )
}