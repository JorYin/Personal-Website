import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Nav from "../components/Navigation/Nav"
import Hero from "../components/Sections/Hero"
import Work from "../components/Sections/Work"
import Skills from "../components/Sections/Skills"
import Projects from "../components/Sections/Projects"
import Footer from "../components/Sections/Footer"

const LandingPage = () => {
  const workSectionRef = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: workSectionRef,
  })

  const gradientOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])
  
  return(
    <div className="relative min-h-screen bg-main">
      <motion.div 
        className="fixed inset-0"
        style={{ 
          background: "linear-gradient(135deg,hsla(60,10%,92%,1) 0%,hsla(36,97%,52%,0.15) 30%,hsla(217,33%,76%,0.2) 70%,hsla(60,10%,92%,1) 100%)",
          opacity: gradientOpacity
        }}
      />
      <div className="relative z-10">
        <Nav />
        <div ref={workSectionRef}>
          <Hero />
          <Work />
          <Skills />
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage