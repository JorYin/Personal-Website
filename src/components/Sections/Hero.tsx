import MotionAnimation from "../Animations/MotionAnimation";

const Hero = () => {
  
  return(
      <section id="hero" className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="max-w-7xl mx-auto">
          <MotionAnimation ClassName="text-center">
            <h1 className="text-7xl md:text-9xl lg:text-[150px] font-bold">Hello I'm</h1>
            <h1 className="text-7xl md:text-9xl lg:text-[150px] italic font-bold">Jordan!</h1>
          </MotionAnimation>
        </div>
      </section>
  )
}

export default Hero;