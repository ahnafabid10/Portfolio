import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    // Animate modal entrance
    gsap.fromTo('.project-modal', 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
    );
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

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="project-modal bg-gray-900 rounded-2xl border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs font-mono border border-gray-700">
              Detailed View State
            </span>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <span className="material-icons text-2xl">close</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Panel: Visuals & Links */}
          <div className="w-full lg:w-5/12 bg-gray-800 p-6 lg:p-8 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-700">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-600 aspect-video relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">View Full Res</span>
              </div>
              <div 
                className="w-full h-full bg-cover bg-center filter grayscale"
                style={{ backgroundImage: `url("${project.image}")` }}
              ></div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Key Actions</h3>
              <div className="flex flex-wrap gap-3">
                <motion.a 
                  href="#" 
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="material-icons text-[20px]">rocket_launch</span>
                  Live Demo
                </motion.a>
                <motion.a 
                  href="#" 
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="material-icons text-[20px]">code</span>
                  GitHub Repo
                </motion.a>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 mt-auto">
              <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-md bg-white/10 text-white text-xs font-mono border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Info */}
          <div className="w-full lg:w-7/12 p-6 lg:p-10 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white text-lg font-medium">{project.subtitle || 'Full Stack Application'}</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <span className="material-icons text-[18px]">info</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Overview</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.overview || project.description}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
                    <span className="material-icons text-[18px]">warning</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Challenges Faced</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.challenges || 'Handling complex state management and ensuring optimal performance across different devices and browsers. Implemented efficient caching strategies and optimized rendering for better user experience.'}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                    <span className="material-icons text-[18px]">upgrade</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Future Improvements</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.improvements || 'Plan to integrate AI-driven features, add real-time collaboration capabilities, and implement advanced analytics dashboard for better insights and user engagement.'}
                  </p>
                </div>
              </div>

              {/* Features Section */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <span className="material-icons text-[18px]">star</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Key Features</h4>
                  <ul className="text-gray-300 text-sm leading-relaxed space-y-1">
                    <li>• Responsive design with mobile-first approach</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Advanced user authentication and authorization</li>
                    <li>• Optimized performance and SEO</li>
                    <li>• Comprehensive testing and documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;