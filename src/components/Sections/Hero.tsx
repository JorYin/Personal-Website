import TextMotionAnimation from "../Animations/TextMotionAnimation";
import GrainOverlay from "../../assets/SVG/Grain";

const Hero = () => {
  
  return(
      <section id="hero" className="w-[100vw] h-[90.1vh] flex justify-center items-center text-main-color overflow-hidden">
        <GrainOverlay />
        <div className="max-w-7xl mx-auto mb-40">
          <TextMotionAnimation ClassName="text-center">
            <h1 className="text-7xl md:text-9xl lg:text-[150px] font-Libre-Baskerville font-bold">Hey I'm</h1>
            <h1 className="text-7xl md:text-9xl lg:text-[150px] font-Libre-Baskerville italic">Jordan!</h1>
          </TextMotionAnimation>
        </div>
      </section>
  )
}

export default Hero;