import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileDown, 
  Home, 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Trophy, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'Achievements', href: '#achievements', icon: Trophy },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Monogram Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')} 
            className="nav-brand"
            aria-label="Home"
          >
            <span className="brand-badge">
              {personalInfo.profileImage ? (
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="brand-avatar-img"
                />
              ) : (
                personalInfo.initials
              )}
            </span>
            <span className="brand-name">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-desktop">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="nav-actions">
            <a 
              href="#resume" 
              onClick={(e) => scrollToSection(e, '#resume')}
              className="btn btn-outline btn-sm nav-resume-btn"
            >
              <FileDown size={16} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="nav-brand">
                <span className="brand-badge">{personalInfo.initials}</span>
                <span className="brand-name">{personalInfo.name}</span>
              </div>
              <button 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-list">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mobile-drawer-footer">
              <a 
                href="#resume" 
                onClick={(e) => scrollToSection(e, '#resume')}
                className="btn btn-primary btn-md"
                style={{ width: '100%' }}
              >
                <FileDown size={18} />
                <span>View & Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Component Styles */}
      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 1000;
          transition: all var(--transition-normal);
          background: rgba(7, 11, 20, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
        }

        .navbar-header.scrolled {
          background: rgba(12, 19, 34, 0.9);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-family: var(--font-heading);
          color: var(--text-primary);
        }

        .brand-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--gradient-primary);
          color: #fff;
          font-weight: 800;
          font-size: 0.95rem;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
          overflow: hidden;
          padding: 2px;
          flex-shrink: 0;
        }

        .brand-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        .brand-name {
          font-size: 1.05rem;
          letter-spacing: -0.01em;
          max-width: 220px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-sm);
          position: relative;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: #fff;
        }

        .nav-link.active {
          color: #fff;
          font-weight: 600;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0.6rem;
          right: 0.6rem;
          height: 2px;
          background: var(--accent-primary);
          border-radius: var(--radius-full);
          box-shadow: 0 0 8px var(--accent-primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mobile-toggle-btn {
          display: none;
          color: var(--text-primary);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
        }

        /* Mobile Drawer Overlay */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 1050;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out;
        }

        .mobile-drawer {
          width: 85%;
          max-width: 340px;
          height: 100%;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-subtle);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
          animation: slideLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-close-btn {
          color: var(--text-secondary);
          padding: 0.4rem;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.5rem;
          flex: 1;
          overflow-y: auto;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: rgba(99, 102, 241, 0.15);
          color: #fff;
        }

        .mobile-drawer-footer {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 1080px) {
          .nav-desktop {
            gap: 0.75rem;
          }
          .nav-link {
            font-size: 0.85rem;
            padding: 0.3rem 0.4rem;
          }
        }

        @media (max-width: 960px) {
          .nav-desktop, .nav-resume-btn {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
