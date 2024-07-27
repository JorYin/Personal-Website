import {useState, useEffect} from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
}

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


  return(
    <>
      <div className="w-full py-4 block lg:hidden">
        <div className="max-w-7xl mx-auto">
          <nav className="flex justify-between items-center mx-5">
            <div>
              <h1 className="font-extrabold text-2xl">
                Jordan.Y
              </h1>
            </div>
            <button onClick={Callback} className="z-[999] flex flex-col h-12 w-12 border-2 bg-slate-300 rounded-full justify-center items-center">
              <span className={`h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${showDropdown ? "rotate-45 translate-y-2.5" : ""}`}></span>
              <span className={`h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${showDropdown ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`h-0.5 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${showDropdown ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </button>
          </nav>
        </div>
      </div>
      
      {showDropdown &&
        <div className="fixed left-0 top-0 z-40 h-screen w-screen bg-slate-300">
          <div className="fixed z-50 flex h-screen w-screen justify-end text-accent-200">
            <div className=" m-2 pointer-events-auto relative z-20 flex max-w-lg flex-col justify-end overflow-hidden rounded-md bg-secondary-300 2xl:max-w-xl 3xl:max-w-3xl">
              <motion.nav 
                initial="closed"
                animate={showDropdown ? "open" : "closed"}
                variants={variants}
                className="flex flex-col justify-start bg-slate-300 h-full max-w-2xl"
              >
                {showDropdown &&               
                  <ul className="flex flex-col">
                    <li className="py-2 px-4">
                      <a href="/#about" onClick={Callback} className="font-bold">About</a>
                    </li>
                    <li className="py-2 px-4">
                      <a href="/#projects" onClick={Callback} className="font-bold">Projects</a>
                    </li>
                    <li className="py-2 px-4">
                      <a href="/#contact" onClick={Callback} className="font-bold">Contact</a>
                    </li>
                  </ul>
                }
              </motion.nav>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default MobileNav;