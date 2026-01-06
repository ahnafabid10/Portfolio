import React from 'react';
import Navigation from './Navigation';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Life Lessons",
      description: "A high-performance headless commerce dashboard managing over 50k SKUs with real-time inventory tracking.",
      tech: "Next.js",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9kllg2U_bldFO3Hi3yLUOxtNbSDc_SuWoF-sLk-glsxzI3UX4cHu0BNF6nyMo4EQ4Mj0oAAzWMddmDPSBVvwELNlsu-9IWdnuKNn_TgtJj72n0ZaWMwRhgdDlkOVD2bJj4xKrqKMossFGFeEVs-FBz316fmEhb4ErMJJQeLj_OZTKZbKST8e_uG1aKrla-_gkokqKNUy0gdJu4ZMh4b--C1nCTGMv-S55UFQFVlU33OpHHtZzZbJQDu1mYoEk3KuxyyotzOhn0mo"
    },
    {
      id: 2,
      title: "TravelEase",
      description: "Secure mobile banking experience with biometric authentication and real-time transaction visualization.",
      tech: "React Native",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3OEGrno2503OVpuryT7QFpH61W7nd5b9FFhlGJpc1I-YtK9AjCjZFV1AMaoWgAl-bi8OQZ0xkILrlihXb_cHTRwm2BT1i8eqF7xaisinrazl8rx4_lkJj841Fm9euAMEs6uVz-jcpGy0Ccp4XjL_tf0LzPLaWQIeBcnaUB5b70lGEs9BVWRx9FqZ_rt1wis7j90hKzhBuaO9GoCX9YFIae8VSQ0DjzFwnpO2zqr5mZvIxjzK_ijGUs_hXjybbwVnHgUfhQqqrZo"
    },
    {
      id: 3,
      title: "Flow Task Manager",
      description: "Collaborative SaaS platform enabling teams to manage workflows with drag-and-drop kanban boards.",
      tech: "Vue.js",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArYzOUIgk6kC5DWIpovqVPQs5uSg0uPwL4IGwlXTqkLAZrgTIvTG7zlD_Oo4jDTb2vGHuadpHlEq827F3g9lpDqQQktaNvYqwsXxN3wgybxHDYTh-wOXjPJTcDNNpYQ8PZksoNYGoipX98N_X5Dgm9-rJBnIFOSD-fKxnloZgTOSW0XqOQgQCSujFHQiO1WqWY4aMLkhIqnMJfiRS0s_V6AjqA3A9anOB5ugH1TxXNMwOVwV3sv6HW8mX2pSImAt38Dnf7avhZVSo"
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
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5GKaFwQZ1NUt1uI1dE5td0LTFNBl6VxFT9cuyvrfmaUbxvStexh_RGOrHSR9cllCufyJVu5p4mFT5YJ8TMNnslPJd1iIf4WhwgQWjJFMUlxX7-T3R6ViVXiF9UVBjTsyXLYrnKjjeEbOPS3U6u9bNqmjvbr_3BpZ-zBS_iiZ6PNc7qlSI48TPRXeoS2_dtUezG_xwENCtbb_qJor_yeW3MzZePVNuj3o_ebvPEj124mvagSEm9_ERLrn3qP_rX7CYHrbNhOhdhBI")' }}
                    ></div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Key Actions</h3>
                    <div className="flex flex-wrap gap-3">
                      <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]">
                        <span className="material-icons text-[20px]">rocket_launch</span>
                        Live Demo
                      </a>
                      <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors min-w-[140px]">
                        <span className="material-icons text-[20px]">code</span>
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <h3 className="text-white text-sm uppercase tracking-wider font-bold opacity-60">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'].map((tech) => (
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
                    <h2 className="text-3xl font-bold text-white mb-2">Nexus E-Commerce</h2>
                    <p className="text-primary text-lg font-medium">Headless Commerce Dashboard</p>
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
                          A comprehensive dashboard solution designed for high-volume retailers. The goal was to decouple the frontend from the backend logic, 
                          allowing marketing teams to update content without developer intervention while maintaining sub-second page loads.
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
                          Handling the state management for 50k+ products was causing browser lag. I implemented virtual scrolling and optimistic UI updates 
                          using React Query to ensure the interface remained responsive even during heavy data fetching operations.
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
                          Plan to integrate AI-driven sales forecasting using TensorFlow.js directly in the browser and add WebSocket support 
                          for collaborative inventory editing among multiple warehouse managers.
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