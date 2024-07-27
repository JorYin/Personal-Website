import MotionAnimation from "../Core/MotionAnimation";

const Hero = () => {
  
  return(
      <section id="hero" className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="max-w-7xl mx-auto">
          <MotionAnimation ClassName="text-center">
            <h1 className="text-9xl font-bold">Hello I'm</h1>
            <h1 className="text-9xl italic font-bold">Jordan!</h1>
          </MotionAnimation>
        </div>
      </section>
  )
}

export default Hero;