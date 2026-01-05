import React, { useState } from 'react';
import Navigation from './Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <Navigation />
      
      <div className="relative flex min-h-screen flex-col">
        <main className="flex-grow flex flex-col items-center justify-center py-10 px-4 sm:px-10 lg:px-40">
          <div className="w-full max-w-[960px] flex flex-col gap-12 pt-16">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center gap-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new opportunities
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white pb-2">
                Let's Connect
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                Interested in working together? Whether you have a question about my stack, want to discuss a project, 
                or just want to say hi, my inbox is always open.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Main Contact Details */}
              <div className="flex flex-col gap-6 md:col-span-1">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="material-icons text-primary">contacts</span>
                    Contact Details
                  </h2>
                  <p className="text-gray-400 text-sm">Direct channels to reach me for professional inquiries.</p>
                </div>

                {/* Email Card */}
                <div className="group relative flex flex-col gap-3 rounded-xl border border-gray-700 bg-card-dark p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => copyToClipboard('hello@ahnafabid.dev')}
                      className="text-gray-400 hover:text-primary transition-colors p-1"
                      aria-label="Copy Email"
                    >
                      <span className="material-icons text-[20px]">content_copy</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <span className="material-icons">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email</h3>
                      <a 
                        className="text-lg font-medium text-white hover:text-primary transition-colors" 
                        href="mailto:hello@ahnafabid.dev"
                      >
                        hello@ahnafabid.dev
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <a 
                      className="inline-flex items-center text-sm font-bold text-primary hover:underline gap-1" 
                      href="mailto:hello@ahnafabid.dev"
                    >
                      Send Message <span className="material-icons text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group relative flex flex-col gap-3 rounded-xl border border-gray-700 bg-card-dark p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => copyToClipboard('+1 (555) 123-4567')}
                      className="text-gray-400 hover:text-primary transition-colors p-1"
                      aria-label="Copy Phone"
                    >
                      <span className="material-icons text-[20px]">content_copy</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <span className="material-icons">call</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Phone</h3>
                      <p className="text-lg font-medium text-white font-mono">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="group relative flex flex-col gap-3 rounded-xl border border-gray-700 bg-card-dark p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => copyToClipboard('+1 (555) 123-4567')}
                      className="text-gray-400 hover:text-primary transition-colors p-1"
                      aria-label="Copy WhatsApp"
                    >
                      <span className="material-icons text-[20px]">content_copy</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <span className="material-icons">chat</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">WhatsApp</h3>
                      <p className="text-lg font-medium text-white font-mono">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <a 
                      className="inline-flex items-center text-sm font-bold text-primary hover:underline gap-1" 
                      href="#"
                    >
                      Chat Now <span className="material-icons text-[16px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form & Socials */}
              <div className="flex flex-col gap-6 md:col-span-1 h-full">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="material-icons text-primary">send</span>
                    Send Message
                  </h2>
                  <p className="text-gray-400 text-sm">Get in touch directly through this form.</p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>

                {submitMessage && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                    {submitMessage}
                  </div>
                )}

                {/* Social Grid */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-white">Social Profiles</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="group flex items-center gap-3 rounded-lg border border-gray-700 bg-card-dark p-4 transition-all hover:bg-primary/5 hover:border-primary/50">
                      <div className="rounded-full bg-gray-700 p-2 group-hover:bg-primary group-hover:text-white transition-colors text-white">
                        <span className="material-icons text-sm">work</span>
                      </div>
                      <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">LinkedIn</span>
                    </a>
                    <a href="#" className="group flex items-center gap-3 rounded-lg border border-gray-700 bg-card-dark p-4 transition-all hover:bg-primary/5 hover:border-primary/50">
                      <div className="rounded-full bg-gray-700 p-2 group-hover:bg-primary group-hover:text-white transition-colors text-white">
                        <span className="material-icons text-sm">code</span>
                      </div>
                      <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">GitHub</span>
                    </a>
                    <a href="#" className="group flex items-center gap-3 rounded-lg border border-gray-700 bg-card-dark p-4 transition-all hover:bg-primary/5 hover:border-primary/50">
                      <div className="rounded-full bg-gray-700 p-2 group-hover:bg-primary group-hover:text-white transition-colors text-white">
                        <span className="material-icons text-sm">alternate_email</span>
                      </div>
                      <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">Twitter</span>
                    </a>
                    <a href="#" className="group flex items-center gap-3 rounded-lg border border-gray-700 bg-card-dark p-4 transition-all hover:bg-primary/5 hover:border-primary/50">
                      <div className="rounded-full bg-gray-700 p-2 group-hover:bg-primary group-hover:text-white transition-colors text-white">
                        <span className="material-icons text-sm">brush</span>
                      </div>
                      <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">Dribbble</span>
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="mt-auto relative rounded-xl overflow-hidden h-32 bg-gradient-to-br from-card-dark to-background-dark border border-gray-700 flex items-center justify-center p-6 text-center">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
                  <div className="relative z-10">
                    <p className="text-sm text-gray-400">Based in</p>
                    <h3 className="text-xl font-bold text-white mt-1">Toronto, Canada</h3>
                    <div className="mt-2 text-primary/80 text-xs flex items-center justify-center gap-1">
                      <span className="material-icons text-[16px]">schedule</span>
                      <span>UTC-5 (EST)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-background-dark py-8 px-4 sm:px-10 lg:px-40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Ahnaf Abid. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;