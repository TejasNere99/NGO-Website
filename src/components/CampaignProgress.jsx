import { motion } from 'framer-motion';
import { Target, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function CampaignProgress() {
  const campaigns = [
    {
      title: 'Digital Education Drive',
      description: 'Funding computer learning resources, coding syllabus guides, and laptop sets for rural training centers.',
      raised: '$15,000',
      goal: '$20,000',
      percentage: 75,
      icon: Target,
      tag: 'Tech Literacy',
    },
    {
      title: 'Women Leadership Scholarships',
      description: 'Providing full higher education scholarships and career training mentorship paths to promising girls.',
      raised: '42 Scholar ships',
      goal: '50 Scholarships',
      percentage: 84,
      icon: Award,
      tag: 'Empowerment',
    },
    {
      title: 'Community Tech Centers',
      description: 'Equipping municipal schools with high-speed internet connections and core software training modules.',
      raised: '60 Schools',
      goal: '100 Schools',
      percentage: 60,
      icon: TrendingUp,
      tag: 'Infrastructure',
    },
  ];

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
    <section className="py-24 bg-dark-card border-t border-b border-dark-border relative">
      <div className="absolute right-10 top-1/4 w-[350px] h-[350px] rounded-full glow-orange opacity-5 pointer-events-none" />

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
            Active Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Live Campaign Progress
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base">
            Track our active campaigns in real-time. Join our team or support these goals directly.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((camp, idx) => {
            const Icon = camp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/20 transition-all duration-300 flex flex-col justify-between text-left shadow-xl"
              >
                <div>
                  {/* Tag and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[9px] font-bold tracking-widest text-orange-brand uppercase border border-orange-brand/10 px-2.5 py-0.5 rounded-full bg-orange-brand/5">
                      {camp.tag}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 group-hover:text-orange-brand group-hover:border-orange-brand/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-brand transition-colors duration-300">
                    {camp.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-8">
                    {camp.description}
                  </p>
                </div>

                {/* Progress Details */}
                <div className="border-t border-white/5 pt-6">
                  <div className="flex justify-between items-center text-xs mb-3 font-semibold">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-white font-extrabold">{camp.percentage}%</span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-4 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${camp.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-orange-brand to-orange-hover rounded-full shadow-[0_0_8px_#ff6600]"
                    />
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-6">
                    <span>Reached: <strong className="text-gray-300">{camp.raised}</strong></span>
                    <span>Goal: <strong className="text-gray-300">{camp.goal}</strong></span>
                  </div>

                  <button
                    onClick={() => handleScrollTo('volunteer')}
                    className="w-full py-2.5 rounded-xl border border-orange-brand/20 bg-orange-brand/5 hover:bg-orange-brand hover:text-white text-orange-brand text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
                  >
                    <span>Support Campaign</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
