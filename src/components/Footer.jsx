import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Globe, 
  Mail, 
  Heart,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <span className="footer-monogram">{personalInfo.initials}</span>
              <div>
                <h3 className="footer-name">{personalInfo.name}</h3>
                <p className="footer-title">{personalInfo.title}</p>
              </div>
            </div>

            <p className="footer-desc">
              {personalInfo.tagline}
            </p>

            <div className="footer-status-pill">
              <span className="status-indicator-dot" />
              <span className="status-label">{personalInfo.availabilityStatus}</span>
            </div>

            <div className="footer-location">
              <MapPin size={15} className="location-icon" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollTo(e, link.href.substring(1))}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect & Socials</h4>
            <p className="footer-social-text">
              Let's collaborate on your next big idea or discuss engineering opportunities.
            </p>

            <div className="footer-social-icons">
              {personalInfo.socialLinks?.github && (
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              )}
              {personalInfo.socialLinks?.linkedin && (
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {personalInfo.socialLinks?.twitter && (
                <a 
                  href={personalInfo.socialLinks.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              )}
              {personalInfo.socialLinks?.instagram && (
                <a 
                  href={personalInfo.socialLinks.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {personalInfo.socialLinks?.website && (
                <a 
                  href={personalInfo.socialLinks.website} 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label="Personal Website"
                >
                  <Globe size={18} />
                </a>
              )}
              {personalInfo.email && (
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>

            <div className="footer-email-direct">
              <span className="email-label">Direct inquiries:</span>
              <a href={`mailto:${personalInfo.email}`} className="email-link">
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} <span className="highlight-name">{personalInfo.name}</span>. All rights reserved.
          </p>

          <div className="tech-badge-inline">
            <span>Built with modern React & Vite</span>
            <Sparkles size={14} className="sparkle-accent" />
          </div>

          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn" 
            aria-label="Back to top"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, #03060c 100%);
          border-top: 1px solid var(--border-subtle);
          padding: 4.5rem 0 2rem 0;
          position: relative;
          color: var(--text-secondary);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .footer-monogram {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--gradient-primary);
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
        }

        .footer-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.2;
        }

        .footer-title {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          max-width: 400px;
        }

        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: #34d399;
          margin-bottom: 0.75rem;
        }

        .status-indicator-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .footer-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .location-icon {
          color: var(--accent-cyan);
        }

        .footer-col-title {
          font-size: 1rem;
          font-weight: 700;
          color: #f8fafc;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1.25rem;
          position: relative;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 24px;
          height: 2px;
          background: var(--accent-primary);
          border-radius: 2px;
        }

        .footer-nav-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem 1rem;
        }

        .footer-nav-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-block;
        }

        .footer-nav-link:hover {
          color: #fff;
          transform: translateX(3px);
        }

        .footer-social-text {
          font-size: 0.9rem;
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .footer-social-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.25rem;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .footer-email-direct {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.85rem;
        }

        .email-label {
          color: var(--text-muted);
        }

        .email-link {
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          word-break: break-all;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        .footer-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 1.75rem;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.88rem;
        }

        .copyright-text {
          color: var(--text-muted);
        }

        .highlight-name {
          color: #f8fafc;
          font-weight: 600;
        }

        .tech-badge-inline {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.82rem;
        }

        .sparkle-accent {
          color: var(--accent-primary);
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .back-to-top-btn:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
        }

        @media (max-width: 960px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .footer-brand-col, .footer-desc {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .back-to-top-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
