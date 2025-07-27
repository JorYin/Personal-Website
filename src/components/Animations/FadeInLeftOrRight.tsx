import { motion, useInView, Variants } from 'framer-motion';
import * as React from 'react';

interface FadeInLeftOrRightProps {
  Id: number,
  children: React.ReactNode,
  className?: string,
}

const FadeInLeftOrRight = ({ Id, children, className } : FadeInLeftOrRightProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true,  amount: 0.75 });

  const FadeInLeftOrRightVariant: Variants = {
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, x: (Id % 2 == 0 ? 18 : -18)  },
  };

  return(
    <motion.div
      ref = {ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={FadeInLeftOrRightVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { FadeInLeftOrRight };