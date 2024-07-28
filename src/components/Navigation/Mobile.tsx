import {useState, useEffect} from "react";
import { motion } from "framer-motion";

const MobileNav = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const Callback = () => {
    setShowDropdown((prev) => !prev);
  }

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  useEffect(() => {
    if (screenSize > 1024) {
      if(showDropdown){
        setShowDropdown(false);
      }
    }
  }, [screenSize]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', showDropdown);

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showDropdown]);


  return(
    <>
      <div className="w-full py-4 block lg:hidden text-main-color">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mx-5">
            <div>
              <h1 className="font-League-Spartan font-bold italic text-3xl">
                Jordan.Y
              </h1>
            </div>
            <button onClick={Callback} className="z-[999] flex flex-col h-12 w-12 bg-slate-00 rounded-full justify-center items-center bg-[#dcdcd7]">
              <span className={`h-0.5 w-6 my-1 rounded-full bg-primary transition ease transform duration-300 ${showDropdown ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`h-0.5 w-6 my-1 rounded-full bg-primary transition ease transform duration-300 ${showDropdown ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`h-0.5 w-6 my-1 rounded-full bg-primary transition ease transform duration-300 ${showDropdown ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </button>
          </nav>
        </div>
      </div>
      
      {showDropdown &&
      <>
        <motion.div
          initial={{opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ 
            ease: "easeOut", 
            duration: 0.8 }}
        >
        <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-40" />
        </motion.div>
        <div className="fixed left-0 top-0 z-20 flex h-screen w-screen justify-end">
          <motion.div 
              initial={ {opacity: 0, x: "100%"} }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              className="relative z-30 flex flex-col justify-end overflow-hidden rounded-md h-screen w-screen max-w-sm bg-primary"
            >
            <div className="mt-32 flex flex-col justify-start h-full max-w-2xl text-second-color">
              {showDropdown &&               
                <ul className="flex flex-col">
                  <li className="py-2 px-16">
                    <a href="/#about" onClick={Callback} className="font-League-Spartan font-medium text-5xl transition duration-500 hover:bg-accent">ABOUT</a>
                  </li>
                  <li className="py-2 px-16">
                    <a href="/#projects" onClick={Callback} className="font-League-Spartan font-medium text-5xl transition duration-500 hover:bg-accent">PROJECTS</a>
                  </li>
                  <li className="py-2 px-16">
                    <a href="/#contact" onClick={Callback} className="font-League-Spartan font-medium text-5xl transition duration-500 hover:bg-accent">CONTACT</a>
                  </li>
                </ul>
              }
            </div>
          </motion.div>
        </div>
      </>
      }
    </>
  )
}

export default MobileNav;