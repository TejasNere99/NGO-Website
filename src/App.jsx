import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

// Core Components
import ScrollProgressBar from './components/common/ScrollProgressBar';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

// New Enhanced Components
import Loader from './components/Loader';
import ImpactCalculator from './components/ImpactCalculator';
import VolunteerMatcher from './components/VolunteerMatcher';
import CommunityStories from './components/CommunityStories';
import CampaignProgress from './components/CampaignProgress';
import CursorGlow from './components/common/CursorGlow';
import FloatingParticles from './components/common/FloatingParticles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Premium intro loader unmount timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium Loader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-dark-bg text-white selection:bg-orange-brand selection:text-white">
        {/* Global ambient canvas particles */}
        <FloatingParticles />

        {/* Global cursor glow tracker */}
        <CursorGlow />

        {/* Global rich toast notifications container */}
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#121212',
              color: '#fff',
              border: '1px solid rgba(255, 102, 0, 0.1)',
            },
          }}
        />

        {/* Scroll Progress Bar at top */}
        <ScrollProgressBar />

        {/* Sticky Header Nav */}
        <Navbar />

        {/* Main Content Layout Flow */}
        <main>
          {/* 1. Hero Showcase Banner */}
          <Hero />

          {/* 2. Philosophy & Constitution Stories */}
          <About />

          {/* 3. Global General Metrics */}
          <Impact />

          {/* 4. Live Campaign Metric Counters */}
          <CampaignProgress />

          {/* 5. Interactive Calculator Card */}
          <ImpactCalculator />

          {/* 6. Strategic Core Programs */}
          <Programs />

          {/* 7. Transformation Diary Stories */}
          <CommunityStories />

          {/* 8. Volunteer & CSR Testimony Slider */}
          <Testimonials />

          {/* 9. Photo Grid Gallery & Lightbox */}
          <Gallery />

          {/* 10. Skills Interest Matching System */}
          <VolunteerMatcher />

          {/* 11. Application Form & Contacts */}
          <JoinUs />
        </main>

        {/* Footer Details */}
        <Footer />

        {/* Back to top Action Button */}
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
