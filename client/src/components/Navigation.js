import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold text-xl text-white">&lt;/&gt;</span>
            <span className="font-bold text-xl tracking-tight text-white">Ahnaf Abid</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('education')}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-icons">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden border-t border-gray-800 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col space-y-4">
              <motion.button 
                onClick={() => scrollToSection('about')}
                className="text-left text-sm font-medium text-white hover:text-gray-300 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('about')}
                className="text-left text-sm font-medium text-white hover:text-gray-300 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('education')}
                className="text-left text-sm font-medium text-white hover:text-gray-300 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                Education
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-sm font-medium text-white hover:text-gray-300 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="text-left bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg w-fit"
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;