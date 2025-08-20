import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  
  return(
    <section id="contact" className="w-full bg-primary text-second-color">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="mx-5">
          <div className="font-Karantina py-24 text-7xl md:text-[150px] lg:text-[250px]">
            <a className="duration-500 hover:bg-accent hover:shadow-[6px_6px_0px_0px_#afbed7]" href="mailto:jordan.yin04@gmail.com"> Let's Connect!</a>
          </div>
          <div className="w-full flex flex-col justify-center md:justify-between items-center mb-12 gap-4">
            <div className="flex items-center justify-center font-Kay-Pho-Du text-lg">
              <p>Last updated: July, 2025</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-accent rounded-lg h-10 w-10 flex items-center justify-center">
                <a href="https://github.com/JorYin" target="_blank">
                  <FaGithub className="text-main-color h-6 w-6"/>
                </a>
              </div>
              <div className="bg-accent rounded-lg h-10 w-10 flex items-center justify-center">
                <a href="https://www.linkedin.com/in/j0rdanyin/" target="_blank">
                  <FaLinkedin className="text-main-color h-6 w-6"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;