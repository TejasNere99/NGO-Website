import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle, Award } from 'lucide-react';
import Magnetic from './common/Magnetic';

export default function Hero() {
  const handleScrollTo = (id) => {
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
    <section id="home" className="min-h-screen pt-28 pb-16 flex flex-col justify-center bg-dark-bg relative">
      {/* Background Animated Blobs */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full glow-orange -translate-x-1/2 -translate-y-1/2 opacity-35 animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full glow-orange translate-x-1/2 translate-y-1/2 opacity-25 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow z-10">
        
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-brand/20 bg-orange-brand/5 text-orange-brand text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-brand animate-ping" />
            Empowering Women Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
          >
            Empowering Communities Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-brand to-orange-hover text-glow-orange">
              Education
            </span>{' '}
            &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-hover to-white">
              Opportunities
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl font-normal leading-relaxed mt-6 max-w-2xl"
          >
            We are She Can Foundation, a registered non-governmental organization dedicated to empowering women and creating a more equitable society. Through education, advocacy, and direct community support, we help women break down barriers and thrive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <Magnetic>
              <button
                onClick={() => handleScrollTo('volunteer')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-brand hover:bg-orange-hover text-white font-bold text-base tracking-wide transition-all duration-300 shadow-[0_4px_25px_rgba(255,102,0,0.4)] hover:shadow-[0_0_35px_rgba(255,102,0,0.7)] flex items-center justify-center gap-2 group cursor-pointer focus:outline-none"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => handleScrollTo('about')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-orange-brand/50 bg-white/[0.02] hover:bg-orange-brand/[0.05] text-white hover:text-orange-brand font-bold text-base tracking-wide transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
              >
                Learn More
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Side: Visual Image Collage */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 bg-white/[0.01] shadow-2xl p-4 flex items-center justify-center"
          >
            {/* Main Image Overlay */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-orange-brand/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop/Aq2NJ23MzBH2rx2j/1682903599444-m5KPBaLG4LiW4P7B.jpg"
                alt="Women empowerment activity"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/10 to-transparent" />
            </div>

            {/* Float Card 1 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 -left-6 bg-dark-card/90 border border-white/10 backdrop-blur-md px-4 py-3.5 rounded-2xl flex items-center gap-3 shadow-2xl"
            >
              <div className="p-2 rounded-xl bg-orange-brand/10 text-orange-brand">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-semibold uppercase leading-none">Registered Society</p>
                <p className="text-sm text-white font-extrabold mt-1">Indian Society Act, 1860</p>
              </div>
            </motion.div>

            {/* Float Card 2 */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-4 -right-6 bg-dark-card/90 border border-orange-brand/20 backdrop-blur-md px-4 py-3.5 rounded-2xl flex items-center gap-3 shadow-2xl"
            >
              <div className="p-2 rounded-xl bg-orange-brand/10 text-orange-brand animate-pulse">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-semibold uppercase leading-none">Our Core Goal</p>
                <p className="text-sm text-white font-extrabold mt-1">Empowering Women</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-gray-500 hover:text-orange-brand transition-colors duration-300 z-10"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
