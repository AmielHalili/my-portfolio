import React, { useState, useEffect, useRef } from 'react';
import '../styles/ScrollMeter.css';

const ScrollMeter = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const rafId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.scrollY;
        const percentage = (scrollTop / documentHeight) * 100;
        setScrollPercentage(percentage);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="scroll-meter">
      <div 
        className="scroll-meter-progress" 
        style={{ height: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollMeter; 