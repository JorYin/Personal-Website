import Me from "../assets/me.webp"
import Footer from "../components/Sections/Footer";
import Nav from "../components/Navigation/Nav";
import GrainOverlay from "../assets/SVG/Grain";

const About = () => {
  
  return(
    <div className="relative overflow-hidden">
      <Nav/>
        <GrainOverlay/>
        <section id="about" className="w-full py-32 text-main-color rounded-t-2xl">
          <div className="w-full max-w-7xl mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mx-5 justify-center items-center">
              <div className="text-left p-4 order-2 md:order-none">
                <p className="mt-4 font-Kay-Pho-Du text-lg md:text-3xl">        
                Hey, I am Jordan, a student pursuing computer science at Boston University!
                <br></br>
                <br></br>
                I am interested in software engineering, web development, mobile apps, and game development! I have a relentless passion for acquiring new skills and a genuine love for tackling challenges head-on.
                <br></br>
                <br></br>
                Outside of coding, you'll find me at the gym, sketching ideas, enjoying time with friends, or filming videos!
                </p>
              </div>
              <div className="order-1 md:order-none">
                <img 
                  src={Me}
                  alt="picture of me"
                  className="w-full max-w-3xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      <Footer/>
    </div>
  )
}

export default About;