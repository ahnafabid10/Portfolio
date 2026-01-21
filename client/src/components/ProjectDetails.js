import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const ProjectDetails = ({ project, onClose }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Animate modal entrance
    gsap.fromTo('.project-modal', 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
    );

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add smooth scrolling to the details container
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = 'smooth';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    gsap.to('.project-modal', {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose
    });
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const elementTop = element.offsetTop - container.offsetTop;
      container.scrollTo({
        top: elementTop - 20, // 20px offset for better visibility
        behavior: 'smooth'
      });
    }
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="project-modal bg-gray-900 rounded-2xl border border-gray-700 w-full h-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-4 sm:p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-mono border border-gray-700">
              Project Details
            </span>
          </div>
          <motion.button 
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="material-icons text-2xl">close</span>
          </motion.button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel: Sticky Sidebar */}
          <div className="w-full lg:w-2/5 bg-gray-800 flex flex-col border-r border-gray-700">
            {/* Sticky Content */}
            <div className="sticky top-0 p-6 lg:p-8 flex flex-col gap-6 h-full overflow-y-auto">
              {/* Project Image */}
              <motion.div 
                className="rounded-xl overflow-hidden shadow-2xl border border-gray-600 aspect-video relative group"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                  borderColor: 'rgba(59, 130, 246, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-full h-full bg-cover bg-center transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />
              </motion.div>
              
              {/* Project Title */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300 text-lg font-medium">{project.subtitle}</p>
              </motion.div>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a 
                    href={project.liveDemo || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 py-3 px-4 rounded-lg font-medium transition-all shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.github || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-all shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub Repo
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Tech Stack */}
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span 
                      key={index} 
                      className="px-3 py-1 rounded-md bg-white/10 text-white text-xs font-mono border border-white/20 hover:bg-white/20 transition-all cursor-default"
                      whileHover={{ scale: 1.05, y: -1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Navigation Menu */}
              <motion.div 
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Quick Navigation</h3>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => scrollToSection('overview-section')}
                    className="text-left text-gray-300 hover:text-white transition-colors text-sm py-1 px-2 rounded hover:bg-white/10"
                  >
                    → Project Overview
                  </button>
                  <button 
                    onClick={() => scrollToSection('challenges-section')}
                    className="text-left text-gray-300 hover:text-white transition-colors text-sm py-1 px-2 rounded hover:bg-white/10"
                  >
                    → Challenges Faced
                  </button>
                  <button 
                    onClick={() => scrollToSection('features-section')}
                    className="text-left text-gray-300 hover:text-white transition-colors text-sm py-1 px-2 rounded hover:bg-white/10"
                  >
                    → Key Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('improvements-section')}
                    className="text-left text-gray-300 hover:text-white transition-colors text-sm py-1 px-2 rounded hover:bg-white/10"
                  >
                    → Future Plans
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Panel: Scrollable Content */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <div 
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8 project-details-scroll"
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* Project Description */}
              <motion.div
                id="overview-section"
                className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-xl p-6 hover:border-gray-500/50 transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.01, boxShadow: '0 0 20px rgba(75, 85, 99, 0.3)' }}
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="material-icons text-blue-400">description</span>
                  Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.overview || project.description}
                </p>
              </motion.div>
              
              {/* Challenges Section */}
              <motion.div 
                id="challenges-section"
                className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(249, 115, 22, 0.2)' }}
              >
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="material-icons text-orange-400">warning</span>
                  Challenges Faced
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {project.challenges || 'Handling complex state management and ensuring optimal performance across different devices and browsers. Implemented efficient caching strategies and optimized rendering for better user experience.'}
                </p>
              </motion.div>
              
              {/* Key Features Section */}
              <motion.div 
                id="features-section"
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }}
              >
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="material-icons text-blue-400">star</span>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures ? (
                    project.keyFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        whileHover={{ x: 5, color: '#ffffff' }}
                      >
                        <span className="material-icons text-green-400 text-[16px] mt-0.5">check_circle</span>
                        <span>{feature}</span>
                      </motion.div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="material-icons text-green-400 text-[16px] mt-0.5">check_circle</span>
                        <span>Responsive design with mobile-first approach</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="material-icons text-green-400 text-[16px] mt-0.5">check_circle</span>
                        <span>Real-time data synchronization</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="material-icons text-green-400 text-[16px] mt-0.5">check_circle</span>
                        <span>Advanced user authentication</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="material-icons text-green-400 text-[16px] mt-0.5">check_circle</span>
                        <span>Optimized performance and SEO</span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
              
              {/* Future Improvements Section */}
              <motion.div 
                id="improvements-section"
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.01, boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)' }}
              >
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="material-icons text-green-400">upgrade</span>
                  Future Improvements
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {project.improvements || 'Plan to integrate AI-driven features, add real-time collaboration capabilities, and implement advanced analytics dashboard for better insights and user engagement.'}
                </p>
              </motion.div>

              {/* Bottom Spacer */}
              <div className="h-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;