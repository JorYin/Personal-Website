import { motion, useInView, Variants } from 'framer-motion';
import * as React from 'react';

interface FadeInFromBottomProps {
  children: React.ReactNode,
  className?: string,
}

export const fadeDownVariant: Variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 1.5, staggerChildren: 0.5 },
  },
  hidden: { opacity: 0, y: 18 },
};

const FadeInFromBottom = ({ children, className } : FadeInFromBottomProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return(
    <motion.div
      ref = {ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={fadeDownVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { FadeInFromBottom };