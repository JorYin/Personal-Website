import SectionAnimations from "../Animations/SectionAnimations";

const About = () => {
  
  return(
  <section id="about" className="w-full py-32 text-second-color bg-primary rounded-t-[5rem]">
    <div className="w-full max-w-7xl mx-auto">
      <SectionAnimations>
        <div className="text-center mb-10 mx-5">
          <h1 className="font-League-Spartan text-5xl sm:text-9xl font-bold">ABOUT ME</h1>
        </div>
      </SectionAnimations>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 mx-5">
        <div className="order-1 md:order-none">
          <img 
            src="https://images.unsplash.com/photo-1721804978753-6533263d89f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full max-w-3xl rounded-3xl"
          />
        </div>
          <div className="text-left p-4 order-2 md:order-none">
            <h1 className="font-League-Spartan font-extrabold text-4xl sm:text-5xl">Who am I?</h1>
            <SectionAnimations>
              <p className="mt-4 font-Libre-Baskerville">        
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </SectionAnimations>
          </div>
      </div>
    </div>
  </section>
  )
}

export default About;