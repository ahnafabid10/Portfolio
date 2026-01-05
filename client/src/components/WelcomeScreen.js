import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const WelcomeScreen = ({ onComplete }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate welcome text
    tl.fromTo('.welcome-text', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.welcome-subtext', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.5'
    )
    .to('.welcome-screen', 
      { opacity: 0, duration: 0.8, ease: 'power2.inOut', delay: 1.5 }, 
      '+=0.5'
    )
    .call(() => {
      setShowWelcome(false);
      onComplete();
    });

    return () => tl.kill();
  }, [onComplete]);

  if (!showWelcome) return null;

  return (
    <motion.div 
      className="welcome-screen fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <h1 className="welcome-text text-6xl md:text-8xl font-bold text-white mb-4">
          Welcome
        </h1>
        <p className="welcome-subtext text-xl md:text-2xl text-gray-300">
          to my digital space
        </p>
        <div className="mt-8">
          <div className="w-16 h-0.5 bg-white mx-auto animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;