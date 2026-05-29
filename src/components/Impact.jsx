import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, GraduationCap, Laptop, HeartHandshake } from 'lucide-react';

function Counter({ from = 0, to, duration = 2, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (value) => {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const stats = [
    {
      id: 'volunteers',
      label: 'Active Volunteers',
      value: 350,
      suffix: '+',
      icon: Users,
      description: 'Mobilized change-makers leading community actions.',
    },
    {
      id: 'students',
      label: 'Students Supported',
      value: 4800,
      suffix: '+',
      icon: GraduationCap,
      description: 'Received scholarships, supplies, and mentorship.',
    },
    {
      id: 'programs',
      label: 'Community Programs',
      value: 65,
      suffix: '+',
      icon: Laptop,
      description: 'Skill development and tech literacy centers.',
    },
    {
      id: 'campaigns',
      label: 'Awareness Campaigns',
      value: 120,
      suffix: '+',
      icon: HeartHandshake,
      description: 'Advocacy rallies, health seminars, and gender talks.',
    },
  ];

  return (
    <section id="impact" className="py-24 bg-dark-bg relative">
      {/* Background grids and glowing blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full glow-orange opacity-15 pointer-events-none" />

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
            Our Footprint
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Making a Real, Measurable Impact
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-base"
          >
            We don't ask for much, just help us with what you can — be it money, skills, or your time. Together, we are creating sustainable change.
          </motion.p>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/20 transition-all duration-300 relative overflow-hidden text-center shadow-xl hover:shadow-[0_15px_40px_rgba(255,102,0,0.05)]"
              >
                {/* Accent shape in background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-brand/5 to-transparent rounded-bl-full group-hover:from-orange-brand/10 transition-colors duration-300" />
                
                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-brand/5 border border-orange-brand/10 text-orange-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-orange-brand/30 transition-all duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Counter Number */}
                <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 font-sans text-glow-white group-hover:text-orange-brand transition-colors duration-300">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>

                {/* Label */}
                <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3">
                  {stat.label}
                </h4>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
