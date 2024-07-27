import { motion } from 'framer-motion';

interface DesktopNavAnimationProps {
  children: React.ReactNode,
  ClassName?: string,
}

const DesktopNavAnimation = ({ children, ClassName } : DesktopNavAnimationProps) => {
  return(
    <motion.div
      initial={{ y:"-100%", opacity: 0 }}
      animate={{ y:0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className={ClassName}
    >
      {children}
    </motion.div>
  );
};

export default DesktopNavAnimation;