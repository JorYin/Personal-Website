import { FadeInFromBottom, fadeDownVariant } from "../Animations/FadeInFromBottom";
import { motion } from 'framer-motion';

const Hero = () => {
  return(
      <section id="hero" className="w-full py-[6rem] md:py-[12rem] text-main-color font-Kay-Pho-Du">
        <div className="max-w-7xl mx-auto mb-40">
            <FadeInFromBottom className="mx-5">
              <motion.div variants={fadeDownVariant} className="mb-6">
                <motion.h1 className="text-5xl font-bold md:text-9xl lg:text-[150px]">Jordan Yin</motion.h1>
                <motion.p className="text-lg md:text-3xl">Third Year CS Student At Boston University</motion.p>
              </motion.div>
              <motion.div variants={fadeDownVariant} className="max-w-[19rem] md:max-w-[30rem] text-center px-4 py-2 rounded-[20px] border-solid border-accent border-[3px] bg-accent/50">
                <motion.p className="text-lg md:text-3xl">Recent SWE Intern @ CarMax</motion.p>
              </motion.div>
            </FadeInFromBottom>
        </div>
      </section>
  )
}

export default Hero;