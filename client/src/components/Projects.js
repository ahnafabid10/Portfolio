import React from 'react';
import Navigation from './Navigation';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Life Lessons",
      description: "A platform where users can create, store, and share meaningful life lessons, personal growth insights, and wisdom gathered over time.",
      tech: "React 19.x",
      image: "/Digital Life Lessons.png",
      liveDemo: "https://digital-life-lesson11.netlify.app/",
      github: "https://github.com/ahnafabid10/digital-life-lessons-client-side"
    },
    {
      id: 2,
      title: "TravelEase",
      description: "A full-stack MERN application for vehicle rentals and trip management, allowing users to explore, book, and manage vehicles through a modern and responsive interface.",
      tech: "React.js",
      image: "/TravelEase.png",
      liveDemo: "https://traveleaseb12a10.netlify.app/",
      github: "https://github.com/ahnafabid10/TravelEase-client-side"
    },
    {
      id: 3,
      title: "GreenNest",
      description: "A single-page web application for plant lovers to explore, buy, and care for indoor plants while booking expert consultations for a greener lifestyle.",
      tech: "React.js",
      image: "/GreenNest.png",
      liveDemo: "https://greennesta9.netlify.app/",
      github: "https://github.com/ahnafabid10/GreenNest"
    }
  ];

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navigation />
      
      <div className="relative flex flex-1 flex-col w-full overflow-x-hidden">
        <div className="layout-container flex flex-col items-center w-full py-12 px-4 md:px-10 lg:px-20">
          <div className="max-w-[1200px] w-full flex flex-col gap-12">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center gap-4 pt-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Selected Works</h2>
              <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                A showcase of technical challenges solved through clean code and modern architecture.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <article key={project.id} className="group relative flex flex-col bg-card-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(43,140,238,0.15)]">
                  <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-card-dark/90 to-transparent z-10"></div>
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url("${project.image}")` }}
                    ></div>
                  </div>
                  
                  <div className="flex flex-col flex-1 p-6 gap-4 z-20">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {project.tech}
                      </span>
                      <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                        View Details 
                        <span className="material-icons text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Separator */}
            <div className="w-full border-t border-gray-800 mt-8 mb-4"></div>

            {/* Detailed Project View */}
            <div className="flex flex-col gap-6 animate-fade-in">
              <div className="flex items-center justify-center">
                <span className="px-3 py-1 rounded-full bg-gray-800 text-xs text-gray-400 font-mono border border-gray-700">
                  Detailed View State
                </span>
              </div>
              
              <div className="bg-card-dark rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                {/* Left Panel: Visuals & Links */}
                <div className="w-full lg:w-5/12 bg-[#161b22] p-6 lg:p-8 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-800">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 aspect-video relative group">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">View Full Res</span>
                    </div>
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url("/Digital Life Lessons.png")' }}
                    ></div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Key Actions</h3>
                    <div className="flex flex-wrap gap-3">
                      <a href="https://digital-life-lesson11.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]">
                        <span className="material-icons text-[20px]">rocket_launch</span>
                        Live Demo
                      </a>
                      <a href="https://github.com/ahnafabid10/digital-life-lessons-client-side" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]">
                        <span className="material-icons text-[20px]">code</span>
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React 19.x', 'Vite', 'TailwindCSS', 'MongoDB', 'Firebase', 'Stripe', 'JWT'].map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Panel: Info */}
                <div className="w-full lg:w-7/12 p-6 lg:p-10 flex flex-col gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Digital Life Lessons</h2>
                    <p className="text-primary text-lg font-medium">Personal Growth & Wisdom Platform</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-icons text-[18px]">info</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">Overview</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          A comprehensive platform for personal development that allows users to add, manage, and explore life lessons. Users can track their learning progress, interact with public lessons, and enjoy both free and premium content while maintaining a secure and responsive experience across devices.
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
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Managing authentication, subscription plans, and secure access to premium content required careful handling of Firebase, MongoDB, and Stripe integrations. Additionally, filtering and rendering thousands of lessons with dynamic engagement features caused potential UI performance bottlenecks, solved via React Query, optimized state management, and lazy loading.
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
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Future plans include adding AI-powered lesson recommendations, collaborative learning groups, real-time notifications, cryptocurrency support, AI-powered spending insights, and integration with popular investment platforms for a complete financial ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;