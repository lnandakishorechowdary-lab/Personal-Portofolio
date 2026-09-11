import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GatewayFlow from '@/components/ui/gateway-flow';
import { personalInfo } from './data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title if customized
  useEffect(() => {
    if (personalInfo.name && !personalInfo.name.includes('[YOUR')) {
      document.title = `${personalInfo.name} | ${personalInfo.title}`;
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-app">
      {/* Animated Gateway Flow Ambient Background */}
      <div className="gateway-flow-bg" aria-hidden="true">
        <GatewayFlow mode="dark" speed={0.8} opacity={0.35} />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-back-to-top"
          aria-label="Scroll back to top"
          title="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        .portfolio-app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .gateway-flow-bg {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        #main-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .customization-banner {
          background: linear-gradient(90deg, #1e1b4b 0%, #311042 50%, #0f172a 100%);
          border-bottom: 1px solid rgba(139, 92, 246, 0.3);
          padding: 0.55rem 1rem;
          position: sticky;
          top: 0;
          z-index: 1001;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          animation: slideDown 0.3s ease-out;
        }

        .banner-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .banner-content {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #e0e7ff;
        }

        .banner-sparkle {
          color: #a78bfa;
          flex-shrink: 0;
        }

        .banner-text code {
          background: rgba(0, 0, 0, 0.35);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          color: #38bdf8;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          border: 1px solid rgba(56, 189, 248, 0.25);
        }

        .banner-close-btn {
          color: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25rem;
          border-radius: 4px;
          transition: all var(--transition-fast);
        }

        .banner-close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .floating-back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--gradient-accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
          z-index: 990;
          cursor: pointer;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
          animation: popIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .floating-back-to-top:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.65);
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes popIn {
          from {
            transform: scale(0.6);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .banner-text {
            font-size: 0.78rem;
          }
          .floating-back-to-top {
            bottom: 1.25rem;
            right: 1.25rem;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}
