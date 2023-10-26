  import LandingPage from "./components/LandingPage"
  import AboutTeam from "./components/AboutTeam/AboutTeam"
  import Rover from "./components/OurRovers/Rover"
  import Competitions from "./components/Competitions"
  import Achievements from "./components/Achievements/Achievements"
  import Department from "./components/Department/Department"
  import Core from "./components/Core"
  import ContactUs from "./components/ContactUs"
  import Sponsor from "./components/Sponsor/Sponsor"
  import Footer from "./components/Sponsor/Footer"

export default function App() {
  return (
    <div className="overflow-hidden">
      <LandingPage/>
      {/* <AboutTeam/> */}
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