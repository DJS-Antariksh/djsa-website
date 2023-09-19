import LandingPage from "./components/LandingPage/LandingPage"
import Department from "./components/Department/Department"
import Achievements from "./components/Achievements"
import Footer from "./components/Sponsor/Footer"


export default function App() {
  return (
    <div className="bg-global-background-image">
      <LandingPage/>
      {/* <Department/> */}     
      <Achievements/>
      {/* <Footer/> */}
    </div>
  )
}