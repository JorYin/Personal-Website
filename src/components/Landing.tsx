import Nav from "../components/Navigation/Nav"
import Hero from "../components/Sections/Hero"
import Skills from "../components/Sections/Skills"
import Projects from "../components/Sections/Projects"
import Contact from "../components/Sections/Contact"
import Footer from "../components/Navigation/Footer"
import GrainOverlay from "../assets/SVG/Grain"

const LandingPage = () => {
  return(
  <div className="bg-main relative overflow-hidden">
    <GrainOverlay />
    <div>
      <Nav />
      <Hero />
      <div className="bg-primary rounded-2xl">
        <Skills />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  </div>
  )
}

export default LandingPage