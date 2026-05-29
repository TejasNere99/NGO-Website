import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import Magnetic from './common/Magnetic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Impact', href: '#impact', id: 'impact' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Volunteer', href: '#volunteer', id: 'volunteer' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      const homeEl = document.getElementById('home');
      const aboutEl = document.getElementById('about');
      const impactEl = document.getElementById('impact');
      const programsEl = document.getElementById('programs');
      const volunteerEl = document.getElementById('volunteer');
      const contactEl = document.getElementById('contact');

      const sections = [
        { id: 'home', el: homeEl },
        { id: 'about', el: aboutEl },
        { id: 'impact', el: impactEl },
        { id: 'programs', el: programsEl },
        { id: 'volunteer', el: volunteerEl },
        { id: 'contact', el: contactEl },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY - 80;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-orange-brand/50 group-hover:border-orange-brand transition-colors duration-300">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
              alt="She Can Foundation Logo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-orange-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-white leading-none">
              SHE CAN
            </span>
            <span className="text-xs text-orange-brand font-bold tracking-widest mt-1">
              FOUNDATION
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleClick(e, link.id)}
                className={`relative py-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-white ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-brand"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Magnetic>
            <a
              href="#volunteer"
              onClick={(e) => handleClick(e, 'volunteer')}
              className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-orange-brand hover:bg-orange-hover font-semibold text-sm text-white tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:shadow-[0_0_25px_rgba(255,102,0,0.6)] flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform duration-300" />
              <span>Support Us</span>
            </a>
          </Magnetic>
        </div>

        {/* Mobile Hamburger Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="Toggle Navigation Drawer"
        >
          {isOpen ? <X className="w-6 h-6 text-orange-brand" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-dark-bg/95 border-b border-dark-border backdrop-blur-lg overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.id)}
                    className={`py-2 text-base font-semibold border-b border-white/5 transition-colors duration-300 ${
                      isActive ? 'text-orange-brand pl-2' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#volunteer"
                onClick={(e) => handleClick(e, 'volunteer')}
                className="mt-2 w-full text-center py-3 rounded-full bg-orange-brand text-white font-semibold text-base shadow-[0_0_15px_rgba(255,102,0,0.3)] flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Support Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
