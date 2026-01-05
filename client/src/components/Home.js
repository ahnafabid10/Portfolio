import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navigation from './Navigation';
import WelcomeScreen from './WelcomeScreen';
import TypeWriter from './TypeWriter';
import ProjectDetails from './ProjectDetails';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const lenisRef = useRef();
  const heroRef = useRef();
  const aboutCardsRef = useRef();
  const projectsRef = useRef();

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    if (!showWelcome) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [showWelcome]);

  // GSAP Animations
  useEffect(() => {
    if (!showWelcome) {
      // Hero section animation
      const tl = gsap.timeline();
      tl.fromTo('.hero-content', 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo('.hero-image', 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, 
        '-=0.8'
      );

      // About cards animation
      gsap.fromTo('.about-card', 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: aboutCardsRef.current,
            start: 'top 80%',
          }
        }
      );

      // Projects animation
      gsap.fromTo('.project-card', 
        { opacity: 0, y: 60 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
          }
        }
      );

      // Tech stack animation
      gsap.fromTo('.tech-item', 
        { opacity: 0, scale: 0.8 }, 
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top 80%',
          }
        }
      );
    }
  }, [showWelcome]);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Create FormData for Netlify Forms
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        body: formDataToSend,
      });
      
      if (response.ok) {
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitMessage('Network error. Please try again later.');
    }
    
    setIsSubmitting(false);
  };

  const technologies = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Router', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'JWT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Netlify', icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
    { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
  ];

  const projects = [
    {
      id: 1,
      title: "Nexus E-Commerce",
      subtitle: "Headless Commerce Dashboard",
      description: "A high-performance headless commerce dashboard managing over 50k SKUs with real-time inventory tracking.",
      overview: "A comprehensive dashboard solution designed for high-volume retailers. The goal was to decouple the frontend from the backend logic, allowing marketing teams to update content without developer intervention while maintaining sub-second page loads.",
      challenges: "Handling the state management for 50k+ products was causing browser lag. I implemented virtual scrolling and optimistic UI updates using React Query to ensure the interface remained responsive even during heavy data fetching operations.",
      improvements: "Plan to integrate AI-driven sales forecasting using TensorFlow.js directly in the browser and add WebSocket support for collaborative inventory editing among multiple warehouse managers.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9kllg2U_bldFO3Hi3yLUOxtNbSDc_SuWoF-sLk-glsxzI3UX4cHu0BNF6nyMo4EQ4Mj0oAAzWMddmDPSBVvwELNlsu-9IWdnuKNn_TgtJj72n0ZaWMwRhgdDlkOVD2bJj4xKrqKMossFGFeEVs-FBz316fmEhb4ErMJJQeLj_OZTKZbKST8e_uG1aKrla-_gkokqKNUy0gdJu4ZMh4b--C1nCTGMv-S55UFQFVlU33OpHHtZzZbJQDu1mYoEk3KuxyyotzOhn0mo"
    },
    {
      id: 2,
      title: "Vault FinTech App",
      subtitle: "Mobile Banking Application",
      description: "Secure mobile banking experience with biometric authentication and real-time transaction visualization.",
      overview: "A cutting-edge mobile banking application focused on security and user experience. Features include biometric authentication, real-time transaction processing, and comprehensive financial analytics.",
      challenges: "Implementing secure biometric authentication while maintaining smooth user experience across different devices. Solved by creating a unified authentication layer with fallback mechanisms.",
      improvements: "Planning to add cryptocurrency support, AI-powered spending insights, and integration with popular investment platforms for a complete financial ecosystem.",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU3OEGrno2503OVpuryT7QFpH61W7nd5b9FFhlGJpc1I-YtK9AjCjZFV1AMaoWgAl-bi8OQZ0xkILrlihXb_cHTRwm2BT1i8eqF7xaisinrazl8rx4_lkJj841Fm9euAMEs6uVz-jcpGy0Ccp4XjL_tf0LzPLaWQIeBcnaUB5b70lGEs9BVWRx9FqZ_rt1wis7j90hKzhBuaO9GoCX9YFIae8VSQ0DjzFwnpO2zqr5mZvIxjzK_ijGUs_hXjybbwVnHgUfhQqqrZo"
    },
    {
      id: 3,
      title: "Flow Task Manager",
      subtitle: "Collaborative SaaS Platform",
      description: "Collaborative SaaS platform enabling teams to manage workflows with drag-and-drop kanban boards.",
      overview: "A comprehensive project management solution designed for modern teams. Features real-time collaboration, customizable workflows, and advanced analytics to boost team productivity.",
      challenges: "Managing real-time collaboration with multiple users editing simultaneously. Implemented operational transformation algorithms to handle concurrent edits without conflicts.",
      improvements: "Adding AI-powered task prioritization, time tracking with smart suggestions, and integration with popular development tools like GitHub and Slack.",
      tech: ["Vue.js", "Express.js", "Firebase", "Tailwind CSS"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArYzOUIgk6kC5DWIpovqVPQs5uSg0uPwL4IGwlXTqkLAZrgTIvTG7zlD_Oo4jDTb2vGHuadpHlEq827F3g9lpDqQQktaNvYqwsXxN3wgybxHDYTh-wOXjPJTcDNNpYQ8PZksoNYGoipX98N_X5Dgm9-rJBnIFOSD-fKxnloZgTOSW0XqOQgQCSujFHQiO1WqWY4aMLkhIqnMJfiRS0s_V6AjqA3A9anOB5ugH1TxXNMwOVwV3sv6HW8mX2pSImAt38Dnf7avhZVSo"
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/download-resume');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Ahnaf_Abid_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        // Fallback if no resume file
        alert('Resume download is currently unavailable. Please contact me at ahnafabid600@gmail.com');
      }
    } catch (error) {
      console.error('Download failed:', error);
      alert('Resume download failed. Please contact me at ahnafabid600@gmail.com');
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const typewriterTexts = [
    "Programmer",
    "MERN Stack Developer", 
    "Problem Solver"
  ];

  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" id="about" ref={heroRef}>
          <motion.div 
            className="hero-content space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Available for new opportunities
              </span>
            </div>
            
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
                Hi, I'm Ahnaf <br />
                <span className="text-white">Abid</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl font-bold text-gray-300 mb-6">
                I'm a{' '}
                <span className="text-white">
                  <TypeWriter 
                    texts={typewriterTexts}
                    speed={100}
                    deleteSpeed={50}
                    pauseTime={2000}
                  />
                </span>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Passionate about creating innovative web solutions with modern technologies. 
              I specialize in building scalable applications and solving complex problems through clean, efficient code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="material-icons text-sm">download</span>
                <span>Download Resume</span>
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg font-medium border border-white hover:bg-white hover:text-black transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-gray-400">Follow me:</span>
              <div className="flex space-x-3">
                <motion.a 
                  href="https://linkedin.com/in/ahnafabid" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full border bg-gray-800 border-gray-600 text-gray-400 hover:text-white hover:border-white flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://github.com/ahnafabid" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full border bg-gray-800 border-gray-600 text-gray-400 hover:text-white hover:border-white flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://twitter.com/ahnafabid" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://facebook.com/ahnafabid" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full border bg-gray-800 border-gray-600 text-gray-400 hover:text-white hover:border-white flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Contact Info in Hero */}
            <div className="border-t border-gray-800 pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-white">mail</span>
                  <a href="mailto:ahnafabid600@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    ahnafabid600@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-white">call</span>
                  <a href="tel:+8801326585958" className="text-gray-300 hover:text-white transition-colors">
                    +880 1326 585958
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image relative order-1 lg:order-2 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-600 bg-gray-900 shadow-2xl">
              <img 
                alt="Portrait of Ahnaf Abid" 
                className="object-cover w-full h-full transform transition hover:scale-105 duration-700 filter grayscale hover:grayscale-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEEcD012cSqkeLLlG7Yzr2t1Hilcus66AATR9PvXxu0u-gv2fFV8ZXgoiq-EbALuR7d1e09D-qN9VkkGQW3EJUNHkKOkBlpF2k-aB32es0AauseSOXjEbiGowMUkD45eiIqSLoWm-4LzE8jS5LQ5WwcwNVRnWlxBI-RsbV9lJUhXgH44dF3Un1x_G_4aaadqo9pBGTcK4TFABPokAOmYx4fO7PchHlM1JprU-27fr_zgHOtQNu8swEGvzLJp9wgjMPbDXtAXWt4Ik"
              />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <motion.div 
          className="border-y border-gray-800 py-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex items-start space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mt-1 text-white">
                <span className="material-icons text-4xl">architecture</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white">8+</h3>
                <p className="text-xs font-bold tracking-widest uppercase mt-1 text-gray-400">
                  Years Experience
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4 border-l-0 md:border-l md:pl-8 border-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mt-1 text-white">
                <span className="material-icons text-4xl">inventory_2</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white">50+</h3>
                <p className="text-xs font-bold tracking-widest uppercase mt-1 text-gray-400">
                  Projects Shipped
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4 border-l-0 md:border-l md:pl-8 border-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mt-1 text-white">
                <span className="material-icons text-4xl">coffee</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white">Infinite</h3>
                <p className="text-xs font-bold tracking-widest uppercase mt-1 text-gray-400">
                  Coffee Consumed
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* About Cards */}
        <section className="grid md:grid-cols-3 gap-6" ref={aboutCardsRef}>
          <motion.div 
            className="about-card p-8 rounded-2xl border bg-gray-900 border-gray-700 hover:border-white transition-colors group"
            whileHover={{ y: -10 }}
          >
            <div className="h-10 w-10 rounded-lg bg-white text-black group-hover:bg-gray-200 flex items-center justify-center mb-6 transition-colors">
              <span className="material-icons text-xl">explore</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">The Journey</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              I started coding by hacking apart HTML templates and fell in love with the instant feedback loop of web development. 
              From those early static sites to complex SPAs, my drive has always been curiosity and the joy of creation.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-card p-8 rounded-2xl border bg-gray-900 border-gray-700 hover:border-white transition-colors group"
            whileHover={{ y: -10 }}
          >
            <div className="h-10 w-10 rounded-lg bg-white text-black group-hover:bg-gray-200 flex items-center justify-center mb-6 transition-colors">
              <span className="material-icons text-xl">architecture</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">The Work</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              I enjoy crafting reusable component systems, optimizing performance metrics, and obsessing over micro-interactions. 
              Clean code, semantic HTML, and accessible design are my non-negotiables for any project.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-card p-8 rounded-2xl border bg-gray-900 border-gray-700 hover:border-white transition-colors group"
            whileHover={{ y: -10 }}
          >
            <div className="h-10 w-10 rounded-lg bg-white text-black group-hover:bg-gray-200 flex items-center justify-center mb-6 transition-colors">
              <span className="material-icons text-xl">sports_esports</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">The Human</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              When I'm not shipping code, you can find me exploring local specialty coffee shops, gaming, or tinkering with smart home automation. 
              I believe a balanced life fuels the best creativity.
            </p>
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="relative" id="education">
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-px flex-grow bg-gray-800"></div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400">
              Educational Qualification
            </h2>
            <div className="h-px flex-grow bg-gray-800"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="relative p-8 rounded-2xl border bg-gray-900 border-gray-700 hover:border-white overflow-hidden group transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-icons text-9xl transform rotate-12 translate-x-4 -translate-y-4 text-gray-600">school</span>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-white/10 text-white border-white/20">
                    2014 - 2018
                  </span>
                  <span className="text-sm font-medium text-gray-400">
                    CGPA: 3.85/4.00
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">
                  B.Sc. in Computer Science
                </h3>
                <p className="font-medium mb-6 text-white">North South University</p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="material-icons text-base mt-0.5 text-white">check_circle_outline</span>
                    <span>Major in Software Engineering & Information Systems</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="material-icons text-base mt-0.5 text-white">check_circle_outline</span>
                    <span>Vice Chancellor's Gold Medalist for Academic Excellence</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="material-icons text-base mt-0.5 text-white">check_circle_outline</span>
                    <span>Published research paper on Human Computer Interaction</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative p-8 rounded-2xl border bg-gray-900 border-gray-700 hover:border-white overflow-hidden group transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-icons text-9xl transform rotate-12 translate-x-4 -translate-y-4 text-gray-600">menu_book</span>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-gray-800 text-gray-300 border-gray-700">
                    2012 - 2014
                  </span>
                  <span className="text-sm font-medium text-gray-400">
                    GPA: 5.00/5.00
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">
                  Higher Secondary Certificate
                </h3>
                <p className="font-medium mb-6 text-white">Dhaka City College</p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="material-icons text-base mt-0.5 text-white">check_circle_outline</span>
                    <span>Concentration in Science (Physics, Chemistry, Math)</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="material-icons text-base mt-0.5 text-white">check_circle_outline</span>
                    <span>Member of the College Debating Society</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm text-gray-300">
                    <span className="material-icons text-base mt-0.5 text-white">check_circle_outline</span>
                    <span>Active participant in Science Fair 2013</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <div className="relative py-8">
          <div className="flex items-center space-x-4 mb-8 justify-center">
            <div className="h-px w-16 md:w-32 bg-gray-800"></div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-center text-gray-400">
              Technologies I Work With
            </h2>
            <div className="h-px w-16 md:w-32 bg-gray-800"></div>
          </div>
          <div className="tech-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index} 
                className="tech-item flex flex-col items-center gap-3 p-4 rounded-lg border bg-gray-900 border-gray-700 hover:border-white transition-colors group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-8 h-8 transition-all duration-300 filter grayscale group-hover:grayscale-0">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-2xl">⚡</div>
                </div>
                <span className="text-xs font-medium text-center text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="relative" ref={projectsRef}>
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-px flex-grow bg-gray-800"></div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400">
              Selected Projects
            </h2>
            <div className="h-px flex-grow bg-gray-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <motion.article 
                key={project.id} 
                className="project-card group relative flex flex-col rounded-2xl overflow-hidden border bg-gray-900 border-gray-700 hover:border-white transition-all duration-300 hover:-translate-y-1"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: project.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video w-full overflow-hidden relative bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10"></div>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  ></div>
                </div>
                
                <div className="flex flex-col flex-1 p-6 gap-4 z-20">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="text-xs font-mono px-2 py-1 rounded border text-white bg-white/10 border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <motion.button 
                      onClick={() => handleProjectClick(project)}
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Details 
                      <span className="material-icons text-[18px] filter invert">arrow_forward</span>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Contact Info in Projects */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-gray-400">Interested in working together?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:ahnafabid600@gmail.com" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
                <span className="material-icons">mail</span>
                ahnafabid600@gmail.com
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a href="tel:+8801326585958" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <span className="material-icons">call</span>
                +880 1326 585958
              </a>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-px flex-grow bg-gray-800"></div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400">
              Get In Touch
            </h2>
            <div className="h-px flex-grow bg-gray-800"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-bold mb-4 text-white">Let's Connect</h3>
                <p className="leading-relaxed text-gray-300">
                  Interested in working together? Whether you have a question about my stack, want to discuss a project, 
                  or just want to say hi, my inbox is always open.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="group relative flex flex-col gap-3 rounded-xl border border-gray-700 bg-gray-900 hover:border-white p-5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => copyToClipboard('ahnafabid600@gmail.com')}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                      aria-label="Copy Email"
                    >
                      <span className="material-icons text-[20px]">content_copy</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-black">
                      <span className="material-icons">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Email</h4>
                      <a 
                        className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
                        href="mailto:ahnafabid600@gmail.com"
                      >
                        ahnafabid600@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group relative flex flex-col gap-3 rounded-xl border border-gray-700 bg-gray-900 hover:border-white p-5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-black">
                      <span className="material-icons">call</span>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Phone</h4>
                      <a href="tel:+8801326585958" className="text-lg font-medium font-mono text-white hover:text-gray-300 transition-colors">
                        +880 1326 585958
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden field for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                  <input name="bot-field" />
                </div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-200 py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>

              {submitMessage && (
                <motion.div 
                  className={`p-4 rounded-lg border text-sm ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-900/20 border-green-700 text-green-400'
                      : 'bg-red-900/20 border-red-700 text-red-400'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {submitMessage}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ahnaf Abid. Built with clean code and too much coffee.
        </p>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Home;