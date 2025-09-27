import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
  ...rest
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default RevealOnScroll;
