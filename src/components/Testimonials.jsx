import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer & Beneficiary',
      message: 'Thanks to the digital literacy bootcamp and programming workshops at She Can Foundation, I acquired the skills needed to land a developer internship. They broke down every barrier in my way.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
      program: 'Digital Education',
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Community Health Advocate',
      message: 'Organizing rural medical seminars alongside She Can has been an absolute privilege. Their ground execution, volunteer mobilization, and attention to detail are truly inspiring.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=faces',
      program: 'Community Support',
    },
    {
      name: 'Meera Deshmukh',
      role: 'CSR Lead at Innovate India',
      message: 'Partnering with She Can Foundation enabled our CSR initiative to deliver computer literacy to 300+ rural girls. They provide complete transparency and robust impact reports.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces',
      program: 'Career Development',
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[index];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: 'easeInOut' },
    }),
  };

  return (
    <section className="py-24 bg-dark-bg relative border-b border-dark-border">
      {/* Background decorations */}
      <div className="absolute left-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full glow-orange opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-brand text-sm font-bold tracking-widest uppercase mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Stories of Transformation
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.01] shadow-2xl relative flex flex-col items-center"
            >
              {/* Quote Mark */}
              <Quote className="absolute top-8 left-8 w-12 h-12 text-orange-brand/10" />

              <div className="flex gap-1 mb-6 text-orange-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current stroke-none" />
                ))}
              </div>

              <p className="text-gray-300 text-lg md:text-xl italic font-normal leading-relaxed text-center mb-8 max-w-2xl">
                "{currentReview.message}"
              </p>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-16 h-16 rounded-full border border-orange-brand/30 object-cover shadow-md"
                />
                <div>
                  <h4 className="text-base font-extrabold text-white leading-tight">
                    {currentReview.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold tracking-wider mt-1 uppercase">
                    {currentReview.role}
                  </p>
                </div>
              </div>

              {/* Tag indicator */}
              <span className="absolute bottom-6 right-8 text-[10px] font-bold tracking-widest text-orange-brand/50 uppercase border border-orange-brand/10 px-2.5 py-1 rounded-full">
                {currentReview.program}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/5 bg-dark-card text-gray-400 hover:text-white hover:border-orange-brand transition-all cursor-pointer focus:outline-none"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16">
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/5 bg-dark-card text-gray-400 hover:text-white hover:border-orange-brand transition-all cursor-pointer focus:outline-none"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-orange-brand w-8' : 'bg-white/10 hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
