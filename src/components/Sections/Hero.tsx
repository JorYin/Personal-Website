import TextMotionAnimation from "../Animations/TextMotionAnimation";


const Hero = () => {
  
  return(
      <section id="hero" className="w-full py-[14rem] lg:py-[10rem] flex justify-center items-center text-main-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto mb-40">
          <TextMotionAnimation ClassName="text-center mx-5">
            <h1 className="text-6xl md:text-9xl lg:text-[150px] font-Libre-Baskerville font-bold">Hey I'm</h1>
            <h1 className="text-6xl md:text-9xl lg:text-[150px] font-Libre-Baskerville italic">Jordan!</h1>
            <p className="text-xl md:text-xl lg:text-xl font-Libre-Baskerville italic"> A second year student studying CS @ Boston University</p>
          </TextMotionAnimation>
        </div>
      </section>
  )
}

export default Hero;