import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function JoinUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Listen for the matched volunteer role pre-fill event
  useEffect(() => {
    const handlePrefillRole = (e) => {
      const roleName = e.detail;
      setFormData((prev) => ({
        ...prev,
        message: `I would love to volunteer as a ${roleName}. I believe my interests align perfectly with this role and She Can Foundation's mission.`,
      }));
      // Show elegant toast notification
      toast.success(`Pre-filled for: ${roleName}`, {
        icon: '✍️',
        style: {
          background: '#121212',
          color: '#fff',
          border: '1px solid rgba(255, 102, 0, 0.2)',
        },
      });
    };

    window.addEventListener('prefill-role', handlePrefillRole);
    return () => window.removeEventListener('prefill-role', handlePrefillRole);
  }, []);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    
    // Setup template parameters matching your EmailJS template setup
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_name: 'She Can Foundation President',
    };

    // Check if credentials are set or left at placeholders
    const areCredentialsConfigured =
      EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_EMAILJS_SERVICE_ID' &&
      EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY';

    const toastId = toast.loading('Sending your application...', {
      style: {
        background: '#121212',
        color: '#fff',
        border: '1px solid rgba(255, 102, 0, 0.2)',
      },
    });

    if (areCredentialsConfigured) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        toast.success('Application sent successfully!', { id: toastId });
      } catch (err) {
        console.error('EmailJS error:', err);
        setIsSubmitting(false);
        toast.error('Failed to send application. Please try again.', { id: toastId });
      }
    } else {
      // Graceful fallback/simulation for development/portfolio display
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Success Toast
        toast.success('Application simulated successfully!', { id: toastId });

        // Warning Toast informing developers how to configure credentials
        setTimeout(() => {
          toast('Notice: Form ran in mock mode. Add your credentials in src/config/emailjs.js to send real emails.', {
            duration: 6000,
            icon: '⚠️',
            style: {
              background: '#121212',
              color: '#ffaa00',
              border: '1px solid rgba(255, 170, 0, 0.2)',
              fontSize: '12px',
            },
          });
        }, 1200);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative">
      
      {/* Visual background details */}
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] rounded-full glow-orange opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info & Connect */}
          <div className="lg:col-span-5 text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-orange-brand text-sm font-bold tracking-widest uppercase mb-3"
            >
              Get Involved
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6"
            >
              Be a Part of the Solution
            </motion.h2>
            <div className="w-16 h-1 bg-orange-brand rounded-full mb-8" />
            
            <p className="text-gray-300 leading-relaxed text-base mb-6">
              Join our team and make a difference in the lives of women in need. At She Can Foundation, we are committed to creating positive change and empowering women in communities across the globe.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact. Whether you are passionate about education, technology, or health, there is a place for you.
            </p>

            {/* Direct Contacts Info */}
            <div className="flex flex-col gap-6 mt-10 border-t border-white/5 pt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-brand/5 border border-orange-brand/10 text-orange-brand">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Us</h4>
                  <a href="mailto:president@shecanfoundation.org" className="text-sm font-bold text-white hover:text-orange-brand transition-colors duration-300">
                    president@shecanfoundation.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-brand/5 border border-orange-brand/10 text-orange-brand">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Us</h4>
                  <a href="tel:+918283841830" className="text-sm font-bold text-white hover:text-orange-brand transition-colors duration-300">
                    +91- 8283841830
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-brand/5 border border-orange-brand/10 text-orange-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider">Registered Address</h4>
                  <p className="text-sm text-white font-bold leading-normal">
                    Punjab, India (NGO Reg: 1860 Act)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-all duration-500 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-brand to-transparent" />

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="text-left mb-2">
                      <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                      <p className="text-xs text-gray-500">We will get back to you within 24-48 hours.</p>
                    </div>

                    {/* Name Input */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/[0.02] border focus:bg-white/[0.04] text-white text-sm font-semibold transition-all duration-300 outline-none ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 focus:border-orange-brand/60 focus:shadow-[0_0_15px_rgba(255,102,0,0.15)]'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/[0.02] border focus:bg-white/[0.04] text-white text-sm font-semibold transition-all duration-300 outline-none ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 focus:border-orange-brand/60 focus:shadow-[0_0_15px_rgba(255,102,0,0.15)]'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/[0.02] border focus:bg-white/[0.04] text-white text-sm font-semibold transition-all duration-300 outline-none resize-none ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 focus:border-orange-brand/60 focus:shadow-[0_0_15px_rgba(255,102,0,0.15)]'
                        }`}
                        placeholder="I want to volunteer for the Digital Education program..."
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 rounded-2xl bg-orange-brand hover:bg-orange-hover text-white font-bold text-base tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,102,0,0.6)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 250, damping: 15, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-orange-brand/10 border border-orange-brand/20 text-orange-brand flex items-center justify-center mb-6 shadow-md"
                    >
                      <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                    </motion.div>

                    <h3 className="text-2xl font-black text-white mb-3">Application Received!</h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                      Thank you for taking the first step. Our president and founding team will review your message and contact you soon.
                    </p>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-orange-brand/20 bg-orange-brand/5 text-orange-brand text-xs font-bold uppercase tracking-wider hover:bg-orange-brand hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
