  import LandingPage from "./components/LandingPage"
  import Department from "./components/Department/Department"
  import Core from "./components/Core"
  import Rover from "./components/OurRovers/Rover"
  
  import OurRover from "./components/OurRovers/OurRover"
  import Abhyaan from "./components/OurRovers/Abhyaan"
  import Prayaan from "./components/OurRovers/Prayaan"
  
  import Sponsor from "./components/Sponsor/Sponsor"
  import Footer from "./components/Sponsor/Footer"
  import ContactUs from "./components/ContactUs"
  import Achievements from "./components/Achievements/Achievements"
  import AboutTeam from "./components/AboutTeam/AboutTeam"
  import Competitions from "./components/Competitions"

export default function App() {
  let slides = [ Abhyaan, Prayaan ];

  return (
    <div className="overflow-hidden" >
      <LandingPage/>
      <AboutTeam/>
      {/* <OurRover slides={slides}/> */}
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