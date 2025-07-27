import { motion, useInView, Variants } from 'framer-motion';
import * as React from 'react';

interface ScaleInProps {
  children: React.ReactNode,
  className?: string,
}

const ScaleIn = ({ children, className } : ScaleInProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true,  amount: 0.75 });

  const ScaleInVariant: Variants = {
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 },
  },
  hidden: { opacity: 0, scale: 0.9 },
  };

  return(
    <motion.div
      ref = {ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={ScaleInVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { ScaleIn };