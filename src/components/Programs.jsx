import { motion } from 'framer-motion';
import { Sparkles, Laptop, TrendingUp, HeartHandshake, ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Women Empowerment',
      description: 'Dismantling institutional barriers through leadership academies, rights awareness workshops, and mentorship pipelines for aspiring female leaders.',
      icon: Sparkles,
      color: 'from-orange-brand/10 to-orange-hover/5',
      glow: 'shadow-[0_0_30px_rgba(255,102,0,0.15)]',
    },
    {
      title: 'Digital Education',
      description: 'Equipping girls and young women with robust digital literacy, coding Bootcamps, and UX/UI design courses to bridge the technology gender divide.',
      icon: Laptop,
      color: 'from-orange-hover/10 to-white/5',
      glow: 'shadow-[0_0_30px_rgba(255,255,255,0.05)]',
    },
    {
      title: 'Career Development',
      description: 'Securing financial independence by providing practical CV building, mock interviews, vocational skills, and direct corporate placement networking.',
      icon: TrendingUp,
      color: 'from-orange-brand/10 to-yellow-500/5',
      glow: 'shadow-[0_0_30px_rgba(255,102,0,0.15)]',
    },
    {
      title: 'Community Support',
      description: 'Delivering direct relief kits, organizing healthcare camps, and providing primary educational support to highly vulnerable families in underserved pockets.',
      icon: HeartHandshake,
      color: 'from-orange-brand/10 to-orange-hover/5',
      glow: 'shadow-[0_0_30px_rgba(255,102,0,0.15)]',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-dark-card border-t border-b border-dark-border relative">
      {/* Visual background details */}
      <div className="absolute left-1/3 top-1/2 w-[450px] h-[450px] rounded-full glow-orange opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-orange-brand text-sm font-bold tracking-widest uppercase mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Our Strategic Initiatives
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base">
            We operate highly focused community-centric programs engineered to foster self-reliance, gender equity, and leadership.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/30 hover:bg-white/[0.02] hover:shadow-[0_15px_45px_rgba(255,102,0,0.08)] transition-all duration-300 flex flex-col justify-between text-left h-full overflow-hidden"
              >
                {/* Floating corner background card glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-orange-brand/5 blur-2xl group-hover:bg-orange-brand/10 transition-colors" />

                <div>
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-brand/20 to-orange-hover/5 text-orange-brand flex items-center justify-center mb-8 border border-orange-brand/10 group-hover:scale-110 group-hover:border-orange-brand/40 group-hover:text-white group-hover:bg-orange-brand transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-brand transition-colors duration-300">
                    {prog.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {prog.description}
                  </p>
                </div>

                <div>
                  <a
                    href="#volunteer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-orange-brand uppercase tracking-wider transition-colors duration-300"
                  >
                    <span>Support Program</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
