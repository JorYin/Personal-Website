import Nav from "./components/Navigation/Nav"
import Hero from "./components/Sections/Hero"
import About from "./components/Sections/About"
import Projects from "./components/Sections/Projects"
import Contact from "./components/Sections/Contact"


function App() {

  return (
    <div className="bg-[#EDEDE9]">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}

export default App
