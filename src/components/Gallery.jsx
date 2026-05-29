import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, Camera } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-7-YKbP4MRLrNhRL5NM.png',
      title: 'Digital Literacy Classroom',
      category: 'Digital Education',
      gridSize: 'md:col-span-2 md:row-span-1',
    },
    {
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1045,fit=crop/Aq2NJ23MzBH2rx2j/1682903599444-m5KPBaLG4LiW4P7B.jpg',
      title: 'Women Leadership Forum',
      category: 'Empowerment',
      gridSize: 'md:col-span-1 md:row-span-2',
    },
    {
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-2-YD0rJbvp3nSz7Dvz.png',
      title: 'Vocational Training Workshop',
      category: 'Career Dev',
      gridSize: 'md:col-span-2 md:row-span-1',
    },
    {
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=963,fit=crop/Aq2NJ23MzBH2rx2j/1-AR0eoOKWL4sXJRgY.png',
      title: 'Primary School Outreach',
      category: 'Education',
      gridSize: 'md:col-span-1 md:row-span-1',
    },
    {
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=868,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-3-Yan7Loy0bvt4QPya.png',
      title: 'Community Health Awareness Camp',
      category: 'Health & Support',
      gridSize: 'md:col-span-1 md:row-span-1',
    },
    {
      url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-2-YrD3y8W4LEUJ2pOA.png',
      title: 'Advocacy & Human Rights Rally',
      category: 'Advocacy',
      gridSize: 'md:col-span-2 md:row-span-1',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setActiveIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-dark-card border-t border-b border-dark-border relative">
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] glow-orange opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-brand text-sm font-bold tracking-widest uppercase mb-3"
          >
            Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Snapshots of Our Journey
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => handleOpenLightbox(idx)}
              className={`group relative rounded-3xl overflow-hidden border border-white/5 shadow-lg bg-black cursor-pointer ${img.gridSize}`}
            >
              {/* Image */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Text info inside overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-[9px] font-bold tracking-widest text-orange-brand uppercase border border-orange-brand/20 px-2 py-0.5 rounded-full mb-2.5 bg-orange-brand/5">
                  {img.category}
                </span>
                <h4 className="text-white font-extrabold text-base leading-tight">
                  {img.title}
                </h4>
              </div>

              {/* Zoom Hover Icon */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-bg/80 border border-white/5 text-gray-400 group-hover:text-orange-brand group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Eye className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            {/* Top Close Bar */}
            <div className="absolute top-6 left-0 right-0 px-8 flex justify-between items-center text-white z-50">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wider uppercase">
                <Camera className="w-4 h-4 text-orange-brand" />
                <span>{images[activeIndex].category}</span>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-orange-brand text-gray-300 hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={activeIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={images[activeIndex].url}
                alt={images[activeIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
              />

              {/* Title & Index Tag Bottom */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-center text-white w-full">
                <h4 className="text-lg font-bold">{images[activeIndex].title}</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Image {activeIndex + 1} of {images.length}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2">
              <button
                onClick={handlePrev}
                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-orange-brand text-gray-300 hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <button
                onClick={handleNext}
                className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-orange-brand text-gray-300 hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
