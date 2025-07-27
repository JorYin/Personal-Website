import Nav from "../components/Navigation/Nav"
import Hero from "../components/Sections/Hero"
import Work from "../components/Sections/Work"
import Skills from "../components/Sections/Skills"
import Projects from "../components/Sections/Projects"
import Footer from "../components/Sections/Footer"
import GrainOverlay from "../assets/SVG/Grain"

const LandingPage = () => {
  return(
    <div className=" relative overflow-hidden">
      <GrainOverlay />
      <Nav />
      <Hero />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-[100rem] bg-gradient-to-b from-[#afbed7]/50 to-transparent blur-[60px] rounded-t-[10rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fca311]/75" />
        <div className="relative z-10">
          <Work />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LandingPage