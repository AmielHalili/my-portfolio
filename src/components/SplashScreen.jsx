import React, { useEffect, useState } from 'react';
import '../styles/SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [active, setActive] = useState(false);
  const [fade, setFade] = useState(false);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    // Split the name into individual letters
    const name = "Amiel_Halili";
    const letterArray = name.split('').map((letter, index) => ({
      char: letter,
      delay: index * 50, // 50ms delay between each letter
      id: index
    }));
    setLetters(letterArray);

    // Start the animation sequence
    setTimeout(() => {
      setActive(true);
    }, 500);

    setTimeout(() => {
      setActive(false);
      setFade(true);
    }, 2000);

    // Wait for the slide-up animation to complete before calling onFinish
    setTimeout(() => {
      onFinish();
    }, 2800); // Increased to 2800ms to ensure animation completes
  }, [onFinish]);

  return (
    <div className={`intro ${fade ? 'slide-up' : ''}`}>
      <h1 className="logo-header">
        {letters.map(({ char, delay, id }) => (
          <span
            key={id}
            className={`letter ${active ? 'active' : ''} ${fade ? 'fade' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default SplashScreen; 