
import React, { useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
  className?: string;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  width = 'fit-content',
  variant = 'fade-up',
  delay = 0,
  className = '',
  duration = 0.5,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = (): { hidden: Variant; visible: Variant } => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'slide-in-right':
        return {
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        };
      case 'slide-in-left':
        return {
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const defaultOverflow = variant.startsWith('slide') ? 'hidden' : 'visible';

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: defaultOverflow }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
