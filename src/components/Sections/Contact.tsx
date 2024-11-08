import HoverUnderlineAnimation from "../Animations/HoverUnderline";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import LocalTime from "../Core/LocalTime";


const Contact = () => {
  
  return(
      <section id="contact" className="w-full py-64 text-main-color relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <h1 className="mx-5 mb-10 text-center text-5xl sm:text-9xl font-bold font-League-Spartan">CONTACT</h1>
          <div className="mx-5 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div className="flex flex-col">
              <h1 className="font-League-Spartan font-medium text-3xl md:text-5xl lg:text-6xl mb-4">Contact Details</h1>
              <ul>
                <li className="flex items-center">
                  <a href="mailto:jordany@bu.edu" className="font-Libre-Baskerville text-xl ml-1 group">
                    jordany@bu.edu
                    <HoverUnderlineAnimation />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="mb-10">
                <h1 className="mb-4 font-League-Spartan font-medium text-3xl md:text-5xl lg:text-6xl">Digital Spaces</h1>
                <ul>
                  <li className="flex items-center mb-2">
                    <FaLinkedin className="w-8 h-8 mr-2"/>
                    <a href="https://www.linkedin.com/in/j0rdanyin/" target="_blank" className="font-Libre-Baskerville text-xl group">
                      LinkedIn
                      <HoverUnderlineAnimation />
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaGithub className="w-8 h-8 mr-2"/>
                    <a href="https://github.com/JorYin" target="_blank" className="font-Libre-Baskerville text-xl group">
                      Github
                      <HoverUnderlineAnimation />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
                <h1 className="font-League-Spartan font-medium text-3xl md:text-5xl lg:text-6xl mb-4">Local Time</h1>
                <LocalTime></LocalTime>
                <p className="font-Libre-Baskerville text-xl">Dallas, Texas</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact;