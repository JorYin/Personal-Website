import GrainOverlay from "../../assets/SVG/Grain";

const Footer = () => {
  return(
      <footer className="w-full py-10 text-main-color relative overflow-hidden">
        <GrainOverlay />
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-center mx-5">
            <div>
              <h1 className="font-League-Spartan font-bold text-md sm:text-2xl">
                © 2024 Jordan.Y
              </h1>
            </div>
            <div>
              <a href="/#hero" className="font-extrabold font-League-Spartan text-md sm:text-2xl transition duration-500 hover:bg-accent">
                BACK TO THE TOP
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;