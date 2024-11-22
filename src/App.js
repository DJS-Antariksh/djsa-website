  import LandingPage from "./components/LandingPage"
  import AboutTeam from "./components/AboutTeam/AboutTeam"
  import Rover from "./components/OurRovers/Rover"
  import Competitions from "./components/Competitions/Competitions"
  import Achievements from "./components/Achievements/Achievements"
  import Department from "./components/Department/Department"
  import Core from "./components/Core/Core"
  import ContactUs from "./components/ContactUs"
  import Sponsor from "./components/Sponsor/Sponsor"
  import Footer from "./components/Sponsor/Footer"
  import Irc from "./components/IRC/irc"
  import {Routes, Route } from "react-router-dom";
  import Competition from "./components/Competitions/Competitions"
  import IRC25 from "./components/IRC25"

export default function App() {
  return (
    <div className="overflow-hidden">
    <Routes>
    <Route path="/" element={
          <>
            <LandingPage />
            <AboutTeam />
            <Rover />
            <Competition />
            <Achievements />
            <Department />
            <Core />
            <ContactUs />
            <Sponsor />
            <Footer />
          </>
        } />
      <Route path="/irc" element={<IRC25 />} />
      {/* <LandingPage/> */}
      {/* <AboutTeam/> */}
      {/* <Rover/> */}
      {/* <Competitions/> */}
      {/* <Achievements/> */}
      {/* <Department/> */}
      {/* <Core/> */}
      {/* <ContactUs/> */}
      {/* <Sponsor/> */}
      {/* <Footer/> */}
    </Routes>
    </div>
  )
}