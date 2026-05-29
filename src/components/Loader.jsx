import { motion } from 'framer-motion';

export default function Loader() {
  const words = "Empowering Communities Through Education & Opportunities".split(" ");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-dark-bg flex flex-col items-center justify-center pointer-events-auto"
    >
      {/* Background orange pulsing glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full glow-orange opacity-30 animate-pulse-glow" />

      <div className="relative flex flex-col items-center z-10">
        {/* Pulsing Logo Sphere */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1, 1.06, 1], opacity: 1 }}
          transition={{
            scale: { repeat: Infinity, duration: 1.6, ease: 'easeInOut' },
            opacity: { duration: 0.5 }
          }}
          className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-brand shadow-[0_0_30px_rgba(255,102,0,0.4)] mb-8"
        >
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
            alt="She Can Logo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Staggered Word Fade-In */}
        <div className="flex flex-wrap justify-center max-w-sm sm:max-w-md px-6 text-center gap-x-2 gap-y-1">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.4,
                ease: 'easeOut',
              }}
              className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${
                word === "Empowering" || word === "Education" || word === "Opportunities"
                  ? 'text-orange-brand text-glow-orange'
                  : 'text-gray-300'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
