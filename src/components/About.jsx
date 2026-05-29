import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: 'Our Mission',
      description: 'To empower women worldwide by breaking down systemic barriers, providing direct educational training, and creating career development pipelines.',
      icon: Target,
      color: 'from-orange-brand to-red-500',
    },
    {
      title: 'Our Vision',
      description: 'A global society where every woman, regardless of her socio-economic background, has the opportunity, skills, and support to reach her fullest potential.',
      icon: Eye,
      color: 'from-yellow-500 to-orange-brand',
    },
    {
      title: 'Our Commitment',
      description: 'A dedication to transparent, community-led programs. We work alongside local governments and corporations to create self-sustaining social impact structures.',
      icon: ShieldCheck,
      color: 'from-orange-brand to-orange-hover',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 bg-dark-card border-t border-dark-border relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full glow-orange opacity-10 pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full glow-white opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-orange-brand text-sm font-bold tracking-widest uppercase mb-3"
          >
            Who We Are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            About She Can Foundation
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* History Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/20 transition-colors duration-500 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-orange-brand mb-4 flex items-center gap-2">
                <span>How It Started</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-base text-left">
                She Can Foundation was founded by a group of individuals who shared a common vision of creating a world where every woman has the opportunity to thrive and succeed. The idea for the organization was born out of a desire to make a real difference in the lives of women in communities across the globe.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-4 text-left">
                We recognized that there are countless barriers that prevent women from reaching their full potential, and we wanted to create an organization that could help break down those barriers and provide women with the resources and support they need to succeed. With shared passion and determination, we set out to make our vision a reality.
              </p>
            </div>
            <div className="mt-8 border-t border-white/5 pt-6 flex items-center justify-between text-xs text-gray-500 font-semibold tracking-wider uppercase">
              <span>Established 2023</span>
              <span>Indian Society Act</span>
            </div>
          </motion.div>

          {/* What is She Can Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/20 transition-colors duration-500 shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4">What is She Can?</h3>
              <p className="text-gray-300 leading-relaxed text-base text-left">
                She Can Foundation is a non-profit organization dedicated to empowering women and creating a more equitable society. We provide support, resources, and training to women in communities across the globe, and we raise awareness of women's issues through advocacy campaigns and initiatives.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm mt-4 text-left">
                We believe that every woman deserves the opportunity to thrive and succeed, regardless of her background or circumstances, and we work tirelessly to create a world where that is possible. We invite you to join us in our mission to empower women and create a better future for all.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#volunteer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-brand hover:text-orange-hover transition-colors duration-300"
              >
                <span>Read our official constitution</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Cards Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all duration-300 flex flex-col items-start text-left shadow-lg hover:border-orange-brand/20 hover:shadow-[0_10px_30px_rgba(255,102,0,0.05)]"
              >
                {/* Glow Backdrop */}
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-orange-brand/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                {/* Card Icon */}
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white mb-6 shadow-md`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-orange-brand transition-colors duration-300">
                  {card.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Card border accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-brand/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
