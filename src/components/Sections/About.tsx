import Me from "../../assets/me.webp"
import GrainOverlay from "../../assets/SVG/Grain";

const About = () => {
  
  return(
  <section id="about" className="w-full py-32 text-second-color bg-primary rounded-t-2xl relative overflow-hidden">
    <GrainOverlay />
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-10 mx-5">
        <h1 className="font-League-Spartan text-5xl sm:text-9xl font-bold">ABOUT ME</h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mx-5 justify-center items-center">
        <div className="order-1 md:order-none">
          <img 
            src={Me}
            className="w-full max-w-3xl rounded-3xl"
          />
        </div>
        <div className="text-left p-4 order-2 md:order-none">
          <h1 className="font-League-Spartan font-extrabold text-4xl sm:text-5xl">Who am I?</h1>
          <p className="mt-4 font-Libre-Baskerville">        
          Hey, I am Jordan, a student pursuing computer science at Boston University!
          <br></br>
          <br></br>
          I am interested in software engineering, web development, mobile apps, and game development! I have a relentless passion for acquiring new skills and a genuine love for tackling challenges head-on.
          <br></br>
          <br></br>
          Outside of coding, you'll find me at the gym, sketching ideas, enjoying time with friends, or filming videos!
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About;