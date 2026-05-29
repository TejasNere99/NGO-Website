import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Users, Heart, Award, ArrowRight } from 'lucide-react';
import Magnetic from './common/Magnetic';

export default function ImpactCalculator() {
  const [donation, setDonation] = useState(100);
  const [hours, setHours] = useState(10);
  const [mentored, setMentored] = useState(2);

  // Dynamic Impact Metrics formulas
  const studentsEducated = Math.floor(donation / 20);
  const activitiesSupported = Math.floor(hours / 5);
  const careerPathsCreated = mentored * 3;
  const totalLivesImpacted = Math.round((donation / 10) + (hours * 1.5) + (mentored * 5));

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
    <section className="py-24 bg-dark-bg border-b border-dark-border relative">
      <div className="absolute left-1/4 top-1/2 w-[350px] h-[350px] rounded-full glow-orange opacity-10 pointer-events-none" />

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
            Social Impact Calculator
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            See the Difference You Can Make
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base">
            Adjust the sliders below to see how donating your resources, time, or guidance can directly empower women in our community.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Sliders Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/10 transition-colors shadow-2xl flex flex-col justify-between"
          >
            <div className="text-left mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Adjust Your Contribution</h3>
              <p className="text-xs text-gray-500">Every donation and hour volunteered translates directly to impact.</p>
            </div>

            <div className="flex flex-col gap-8 flex-grow justify-center">
              {/* Donation Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="flex items-center gap-2 text-gray-300">
                    <DollarSign className="w-4 h-4 text-orange-brand" />
                    <span>Donation Amount</span>
                  </span>
                  <span className="text-orange-brand font-bold text-base">${donation}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="20"
                  value={donation}
                  onChange={(e) => setDonation(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-brand"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>$0</span>
                  <span>$500</span>
                  <span>$1,000</span>
                </div>
              </div>

              {/* Volunteer Hours Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-orange-brand" />
                    <span>Volunteering Hours / Month</span>
                  </span>
                  <span className="text-orange-brand font-bold text-base">{hours} Hours</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-brand"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>0 hrs</span>
                  <span>50 hrs</span>
                  <span>100 hrs</span>
                </div>
              </div>

              {/* Mentoring Slider */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4 text-orange-brand" />
                    <span>Students Mentored</span>
                  </span>
                  <span className="text-orange-brand font-bold text-base">{mentored} Students</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={mentored}
                  onChange={(e) => setMentored(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-brand"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>0</span>
                  <span>10</span>
                  <span>20</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-6 text-left">
              <p className="text-[11px] leading-relaxed text-gray-500 font-medium">
                * Calculations are based on actual costs of books, software licenses, event costs, and our mentorship structures.
              </p>
            </div>
          </motion.div>

          {/* Dynamic Impact Display Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch"
          >
            {/* Huge Lives Impacted Metric Card */}
            <div className="sm:col-span-2 p-6 rounded-3xl border border-orange-brand/20 bg-orange-brand/[0.02] flex items-center justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-brand/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="text-left z-10">
                <span className="text-xs font-bold text-orange-brand uppercase tracking-wider mb-1 block">Total Social Reach</span>
                <h4 className="text-2xl font-black text-white leading-tight">Lives Positively Impacted</h4>
                <p className="text-xs text-gray-400 mt-2 max-w-[200px]">Direct beneficiaries who receive materials, mentorship, or skill upgrades.</p>
              </div>
              <div className="w-24 h-24 rounded-full border border-orange-brand/35 bg-dark-bg flex flex-col items-center justify-center shadow-lg relative z-10">
                <span className="text-3xl font-black text-orange-brand text-glow-orange leading-none">{totalLivesImpacted}</span>
                <span className="text-[9px] font-bold text-gray-500 tracking-wide uppercase mt-1">Lives</span>
              </div>
            </div>

            {/* Sub Metric Card 1: Students Educated */}
            <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/10 transition-all duration-300 text-left flex flex-col justify-between">
              <div className="p-3 rounded-2xl bg-orange-brand/5 border border-orange-brand/10 text-orange-brand w-fit mb-6">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider leading-none">Scholarship Reach</p>
                <p className="text-3xl font-black text-white mt-2 mb-1">{studentsEducated} Students</p>
                <p className="text-xs text-gray-400 leading-normal">funded with digital learning resources for 1 month.</p>
              </div>
            </div>

            {/* Sub Metric Card 2: Programs Supported */}
            <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/10 transition-all duration-300 text-left flex flex-col justify-between">
              <div className="p-3 rounded-2xl bg-orange-brand/5 border border-orange-brand/10 text-orange-brand w-fit mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider leading-none">Program Support</p>
                <p className="text-3xl font-black text-white mt-2 mb-1">{activitiesSupported} Programs</p>
                <p className="text-xs text-gray-400 leading-normal">local centers or workshops organized and supported.</p>
              </div>
            </div>

            {/* Sub Metric Card 3: Career Paths Created */}
            <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-orange-brand/10 transition-all duration-300 text-left flex flex-col justify-between sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-2xl bg-orange-brand/5 border border-orange-brand/10 text-orange-brand">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider leading-none">Career Pipelines</p>
                    <p className="text-2xl font-black text-white mt-1.5">{careerPathsCreated} Guidance Paths</p>
                  </div>
                </div>
                <Magnetic>
                  <button
                    onClick={() => handleScrollTo('volunteer')}
                    className="px-4 py-2 rounded-full bg-orange-brand hover:bg-orange-hover text-white text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 transition-all shadow-md group cursor-pointer focus:outline-none"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Magnetic>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
