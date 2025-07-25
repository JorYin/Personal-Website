const Hero = () => {
  
  return(
      <section id="hero" className="w-full py-[6rem] md:py-[12rem] text-main-color font-Kay-Pho-Du relative overflow-hidden">
        <div className="max-w-7xl mx-auto mb-40">
          <div className="mx-5">
            <div className="mb-6">
              <h1 className="text-5xl md:text-9xl lg:text-[150px]">Jordan Yin</h1>
              <p className="text-lg md:text-xl lg:text-3xl">Third Year CS Student At Boston University</p>
            </div>
            <div className="text-center max-w-[19rem] md:max-w-[30rem] px-4 py-2 rounded-[20px] border-solid border-accent border-[3px] bg-accent/50">
              <p className="text-lg md:text-3xl">Recent SWE Intern @ CarMax</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero;