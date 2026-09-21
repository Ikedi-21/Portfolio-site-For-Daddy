import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return {
    ref,
    variants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden"
  };
}
