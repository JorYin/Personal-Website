import Nav from "../components/Navigation/Nav"
import Hero from "../components/Sections/Hero"
import Work from "../components/Sections/Work"
import Skills from "../components/Sections/Skills"
import Projects from "../components/Sections/Projects"
import Footer from "./Sections/Footer"
import GrainOverlay from "../assets/SVG/Grain"

const LandingPage = () => {
  return(
  <div className="bg-main relative overflow-hidden">
    <GrainOverlay />
    <div>
      <Nav />
      <Hero />
      <Work />
      <Skills />
      <Projects />
      <Footer />
    </div>
  </div>
  )
}

export default LandingPage