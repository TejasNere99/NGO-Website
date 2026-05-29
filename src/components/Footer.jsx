import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-20 pb-8 relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[150px] rounded-full glow-orange opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-orange-brand/50">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
                  alt="She Can Foundation Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base tracking-wider text-white">SHE CAN</span>
                <span className="text-[10px] text-orange-brand font-bold tracking-widest leading-none">FOUNDATION</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              We are a non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women and creating a more equitable society.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 rounded-full border border-white/5 bg-white/[0.01] hover:bg-orange-brand hover:text-white text-gray-400 transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full border border-white/5 bg-white/[0.01] hover:bg-orange-brand hover:text-white text-gray-400 transition-all" aria-label="Twitter/X">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full border border-white/5 bg-white/[0.01] hover:bg-orange-brand hover:text-white text-gray-400 transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full border border-white/5 bg-white/[0.01] hover:bg-orange-brand hover:text-white text-gray-400 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['home', 'about', 'impact', 'programs', 'volunteer', 'contact'].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleScrollTo(e, id)}
                    className="text-sm text-gray-400 hover:text-orange-brand transition-colors duration-200 capitalize font-medium"
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Program Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Key Programs</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Women Empowerment',
                'Digital Education',
                'Career Development',
                'Community Support',
              ].map((prog) => (
                <li key={prog}>
                  <a
                    href="#programs"
                    onClick={(e) => handleScrollTo(e, 'programs')}
                    className="text-sm text-gray-400 hover:text-orange-brand transition-colors duration-200 font-medium"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Subscribe to our monthly newsletter for progress updates and impact stories.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center relative mt-4">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-full bg-white/[0.02] border border-white/10 text-white text-xs font-semibold focus:outline-none focus:border-orange-brand/50 transition-colors pr-12"
              />
              <button
                type="submit"
                className="absolute right-1 p-2 rounded-full bg-orange-brand text-white hover:bg-orange-hover hover:scale-105 transition-all focus:outline-none cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-semibold tracking-wide">
          <div>
            &copy; {currentYear} She Can Foundation. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 fill-orange-brand stroke-orange-brand text-orange-brand" />
            <span>for community empowerment</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-orange-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
