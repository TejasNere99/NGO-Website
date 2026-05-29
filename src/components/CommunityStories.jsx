import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, X, Sparkles } from 'lucide-react';

export default function CommunityStories() {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      name: 'Ananya Roy',
      title: 'Breaking Tech Barriers',
      program: 'Digital Education Bootcamp',
      before: 'Faced limited employment options in her village with no access to computers or guidance, unable to pursue her dream of software engineering.',
      after: 'Completed our intensive 6-month coding bootcamp, secured a remote web developer role, and now funds her younger sister’s higher education.',
      fullStory: 'Ananya spent years believing that technology was out of reach due to her remote location and financial constraints. When She Can Foundation opened a local tech center, she attended every evening class. Within months, she was building basic responsive sites. After graduating from our Digital Bootcamp, she was matched with a remote internship, which transitioned into a full-time contract. Today, Ananya is the primary earner for her family and mentors ten other girls in her village.',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=963,fit=crop/Aq2NJ23MzBH2rx2j/1-AR0eoOKWL4sXJRgY.png',
    },
    {
      id: 2,
      name: 'Sunita Sen',
      title: 'From Homemaker to Hub Lead',
      program: 'Women Empowerment Program',
      before: 'Struggled with self-confidence and financial dependence, feeling isolated from vocational and economic opportunities in her local town.',
      after: 'Learned leadership skills, launched a community digital library, and now manages computer literacy training for 120+ local children.',
      fullStory: 'Sunita always had a passion for organizing but lacked the resources to do so. She Can Foundation’s leadership modules gave her the confidence to draft a proposal for a local library. We supported her with five donated laptops and workspace permissions. Sunita now coordinates digital literacy classes for children and women, raising enough revenue to keep the library self-sustaining. She has become a respected leader in her local council.',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=868,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-3-Yan7Loy0bvt4QPya.png',
    },
  ];

  return (
    <section id="stories" className="py-24 bg-dark-bg border-b border-dark-border relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full glow-orange opacity-5 pointer-events-none" />

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
            Real Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Stories of Empowerment
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base">
            Read how direct access to technical education and community resources reshapes lives and builds self-reliance.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/20 transition-all duration-300 shadow-xl flex flex-col sm:flex-row gap-8 items-center text-left relative overflow-hidden"
            >
              {/* Image Frame */}
              <div className="w-36 h-48 rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-lg relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Story Content */}
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-orange-brand uppercase border border-orange-brand/10 px-2 py-0.5 rounded-full mb-3 bg-orange-brand/5 inline-block">
                    {story.program}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                  <h4 className="text-xs text-gray-500 font-bold tracking-wide mb-6">{story.title}</h4>

                  {/* Before / After Layout */}
                  <div className="flex flex-col gap-4 text-xs">
                    <div>
                      <span className="text-red-500/80 font-bold uppercase tracking-wider block mb-1">Before She Can</span>
                      <p className="text-gray-400 leading-relaxed">{story.before}</p>
                    </div>
                    <div>
                      <span className="text-orange-brand font-bold uppercase tracking-wider block mb-1">After She Can</span>
                      <p className="text-gray-300 leading-relaxed font-semibold">{story.after}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-brand hover:text-orange-hover uppercase tracking-wider transition-colors cursor-pointer focus:outline-none"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Diary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Diary Modal Overlay */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full p-8 rounded-3xl border border-white/10 bg-dark-card shadow-2xl relative text-left cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-brand to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-orange-brand text-gray-300 hover:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Close Story"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex gap-4 items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-orange-brand/30">
                  <img src={selectedStory.image} alt={selectedStory.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-orange-brand tracking-widest uppercase mb-1 block">
                    {selectedStory.program}
                  </span>
                  <h3 className="text-lg font-black text-white">{selectedStory.name}</h3>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6">
                <h4 className="text-sm font-bold text-orange-brand uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>The Path of Transformation</span>
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line font-medium">
                  {selectedStory.fullStory}
                </p>
              </div>

              <div className="mt-8 border-t border-white/5 pt-6 flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-orange-brand text-white font-bold text-xs uppercase tracking-wider transition-all focus:outline-none cursor-pointer"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
