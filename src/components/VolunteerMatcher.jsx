import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Code, Palette, Heart, Calendar, Megaphone, Check, ArrowRight, Shield } from 'lucide-react';
import Magnetic from './common/Magnetic';

export default function VolunteerMatcher() {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const interestsList = [
    { id: 'teaching', name: 'Teaching', icon: GraduationCap },
    { id: 'webdev', name: 'Web Development', icon: Code },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'social', name: 'Social Work', icon: Heart },
    { id: 'event', name: 'Event Management', icon: Calendar },
    { id: 'speaking', name: 'Public Speaking', icon: Megaphone },
  ];

  const handleToggleInterest = (id) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getMatchedRole = () => {
    if (selectedInterests.length === 0) return null;

    const hasTech = selectedInterests.includes('webdev') || selectedInterests.includes('design');
    const hasTeaching = selectedInterests.includes('teaching');
    const hasSpeaking = selectedInterests.includes('speaking');
    const hasField = selectedInterests.includes('social') || selectedInterests.includes('event');

    if (hasTech && !hasTeaching && !hasField) {
      return {
        title: 'Digital Tech & Creative Advocate',
        commitment: '4-6 hours / week',
        responsibilities: [
          'Maintain and upgrade our organizational web platforms.',
          'Design graphics for digital awareness and advocacy campaigns.',
          'Support local tech bootcamps with basic technical setups.',
        ],
        icon: Code,
      };
    }

    if (hasTeaching) {
      return {
        title: 'Digital Education Mentor',
        commitment: '3-5 hours / week',
        responsibilities: [
          'Lead weekend tech bootcamps or digital literacy classes.',
          'Create syllabus structures for girl child training programs.',
          'Directly mentor students looking for remote tech internships.',
        ],
        icon: GraduationCap,
      };
    }

    if (hasSpeaking && !hasField) {
      return {
        title: 'Advocacy & Public Relations Ambassador',
        commitment: '2-4 hours / week',
        responsibilities: [
          'Represent She Can Foundation in local seminars and webinars.',
          'Host rights awareness campaigns and run offline panels.',
          'Draft articles, press releases, or content for digital distribution.',
        ],
        icon: Megaphone,
      };
    }

    if (hasField) {
      return {
        title: 'Field Outreach Operations Manager',
        commitment: '6-8 hours / week (Weekend heavy)',
        responsibilities: [
          'Coordinate logistics for community medical or primary education camps.',
          'Distribute support packages and school supply kits to families.',
          'Collaborate with local administrative bodies to audit camp needs.',
        ],
        icon: Heart,
      };
    }

    // Default catch-all for mixed settings
    return {
      title: 'Community Program Coordinator',
      commitment: '5-7 hours / week',
      responsibilities: [
        'Act as an inter-departmental bridge coordinating local camps.',
        'Facilitate volunteer sign-ups, orientations, and training sessions.',
        'Track program progress metrics for monthly CSR reporting summaries.',
      ],
      icon: Shield,
    };
  };

  const matchedRole = getMatchedRole();

  const handleApplyRole = (roleName) => {
    // Dispatch a custom event to pre-fill the form in JoinUs component
    const event = new CustomEvent('prefill-role', { detail: roleName });
    window.dispatchEvent(event);

    // Scroll to the volunteer application form
    const el = document.getElementById('contact');
    if (el) {
      const rect = el.getBoundingClientRect();
      const targetTop = rect.top + window.scrollY - 80;
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="volunteer" className="py-24 bg-dark-card border-t border-b border-dark-border relative">
      <div className="absolute right-0 top-1/2 w-[350px] h-[350px] rounded-full glow-orange opacity-5 pointer-events-none" />

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
            Find Your Purpose
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
          >
            Match Your Skills to Our Needs
          </motion.h2>
          <div className="w-16 h-1 bg-orange-brand mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base">
            Select one or more of your interests below, and we will dynamically match you with the most impactful volunteering role on our team.
          </p>
        </div>

        {/* Interaction Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Interest Selection Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="text-left mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Select Your Interests</h3>
              <p className="text-xs text-gray-500">You can select multiple boxes to find an overlapping role.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-grow items-center">
              {interestsList.map((interest) => {
                const Icon = interest.icon;
                const isSelected = selectedInterests.includes(interest.id);
                return (
                  <button
                    key={interest.id}
                    onClick={() => handleToggleInterest(interest.id)}
                    className={`p-6 rounded-2xl border text-left flex flex-col justify-between items-start gap-6 transition-all duration-300 relative overflow-hidden group cursor-pointer focus:outline-none h-[140px] ${
                      isSelected
                        ? 'border-orange-brand bg-orange-brand/5 shadow-[0_0_20px_rgba(255,102,0,0.15)]'
                        : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isSelected
                          ? 'bg-orange-brand border-orange-brand text-white'
                          : 'bg-white/5 border-white/5 text-gray-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {interest.name}
                      </span>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-orange-brand text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Matched Recommendation Output */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full rounded-3xl border border-white/5 bg-white/[0.01] overflow-hidden flex flex-col justify-center relative min-h-[300px] shadow-2xl">
              {/* Glowing header accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-brand/50 to-transparent" />
              
              <AnimatePresence mode="wait">
                {matchedRole ? (
                  <motion.div
                    key="matched"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 text-left h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-brand/10 border border-orange-brand/20 text-orange-brand text-[10px] font-bold uppercase tracking-wider mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-brand animate-ping" />
                        Best Role Match
                      </span>

                      <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
                        {matchedRole.title}
                      </h3>

                      <p className="text-xs text-gray-500 font-bold mb-6">
                        Estimated Commitment: <span className="text-orange-brand">{matchedRole.commitment}</span>
                      </p>

                      <div className="border-t border-white/5 pt-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Responsibilities</p>
                        <ul className="flex flex-col gap-3">
                          {matchedRole.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-xs text-gray-400 leading-normal flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-brand mt-1.5 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Magnetic>
                      <button
                        onClick={() => handleApplyRole(matchedRole.title)}
                        className="w-full mt-8 py-3.5 rounded-2xl bg-orange-brand hover:bg-orange-hover text-white font-bold text-sm tracking-wide transition-all shadow-[0_4px_15px_rgba(255,102,0,0.3)] hover:shadow-[0_0_25px_rgba(255,102,0,0.5)] flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                      >
                        <span>Apply For This Role</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Magnetic>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 flex flex-col items-center justify-center text-center h-full max-w-sm mx-auto"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-gray-500 flex items-center justify-center mb-6">
                      <Shield className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h4 className="text-base font-extrabold text-white mb-2">Find Your Ideal Role</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Please select one or more skills or interests from the left side panel to match your profile with our active program teams.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
