import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const RevealOnScroll = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isClient = typeof window !== 'undefined';
  // Disable reveal animation for small screens or reduced-motion preferences to keep content visible.
  const getShouldDisable = () =>
    prefersReducedMotion || (isClient && window.innerWidth <= 768);

  const [disableAnimation, setDisableAnimation] = useState(getShouldDisable);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setDisableAnimation(getShouldDisable());
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [prefersReducedMotion, isClient]);

  if (disableAnimation) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.98, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
