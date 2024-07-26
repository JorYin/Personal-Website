import MotionAnimation from "./Core/MotionAnimation";

const Hero = () => {
  
  return(
      <section className="w-full">
        <div className="max-w-7xl mx-auto py-32 sm:py-48 lg:py-56 text-center items-center">
          <MotionAnimation>
            <h1 className="text-8xl font-bold">Hello I'm</h1>
            <h1 className="text-8xl italic font-bold">Jordan!</h1>
          </MotionAnimation>
        </div>
      </section>
  )
}

export default Hero;