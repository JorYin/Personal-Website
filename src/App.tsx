import Nav from "./components/Navigation/Nav"
import MobileNav from "./components/Navigation/Mobile"
import Hero from "./components/Sections/Hero"
import About from "./components/Sections/About"
import Projects from "./components/Sections/Projects"
import Contact from "./components/Sections/Contact"
import Footer from "./components/Navigation/Footer"
import GrainOverlay from "./assets/SVG/Grain"

function App() {

  return (
    <div className="bg-main relative overflow-hidden">
      <GrainOverlay />
      <div>
        <MobileNav />
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
