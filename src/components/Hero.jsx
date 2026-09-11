import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Layers,
  Code2,
  Cpu
} from 'lucide-react';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const hasSocialLinks = personalInfo.socialLinks && 
    Object.values(personalInfo.socialLinks).some(link => link && typeof link === 'string' && link.trim() !== '' && !link.includes('[YOUR'));

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Glow Blobs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Availability Status Pill - only if explicitly provided */}
          {personalInfo.availabilityStatus && (
            <div className="hero-badge">
              <span className="pulse-dot" />
              <span className="badge-text">{personalInfo.availabilityStatus}</span>
            </div>
          )}

          {/* Main Title & Role */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-role">
            {personalInfo.title}
          </h2>

          <p className="hero-tagline">
            {personalInfo.tagline}
          </p>

          {/* Location - only if explicitly provided */}
          {personalInfo.location && (
            <div className="hero-meta">
              <div className="meta-item">
                <MapPin size={16} className="meta-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          )}

          {/* Call To Action Buttons */}
          <div className="hero-cta-group">
            <a 
              href="#projects" 
              onClick={(e) => scrollTo(e, 'projects')}
              className="btn btn-primary btn-lg"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="#contact" 
              onClick={(e) => scrollTo(e, 'contact')}
              className="btn btn-secondary btn-lg"
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </a>

            {personalInfo.resumeUrl && (
              <a 
                href="#resume" 
                onClick={(e) => scrollTo(e, 'resume')}
                className="btn btn-outline btn-lg"
              >
                <span>Resume</span>
              </a>
            )}
          </div>

          {/* Social Links Row - only if verified links exist */}
          {hasSocialLinks && (
            <div className="hero-social-row">
              <span className="social-label">Find me on:</span>
              <div className="social-chips">
                {personalInfo.socialLinks.github && !personalInfo.socialLinks.github.includes('[YOUR') && (
                  <a 
                    href={personalInfo.socialLinks.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-chip" 
                    aria-label="GitHub Profile"
                    title="GitHub Profile"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                )}
                {personalInfo.socialLinks.linkedin && !personalInfo.socialLinks.linkedin.includes('[YOUR') && (
                  <a 
                    href={personalInfo.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-chip" 
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                )}
                {personalInfo.socialLinks.twitter && !personalInfo.socialLinks.twitter.includes('[YOUR') && (
                  <a 
                    href={personalInfo.socialLinks.twitter} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="social-chip" 
                    aria-label="Twitter Profile"
                    title="Twitter Profile"
                  >
                    <Twitter size={18} />
                    <span>Twitter / X</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Hero Visual Card / Profile Showcase */}
        <div className="hero-visual">
          <div className="visual-card-wrapper">
            {/* Ambient glowing backdrop */}
            <div className="avatar-ambient-glow" />

            {/* Main Profile Showcase Card */}
            <div className="avatar-card glass-card">
              <div className="avatar-frame">
                {personalInfo.profileImage ? (
                  <img 
                    src={personalInfo.profileImage} 
                    alt={personalInfo.name} 
                    className="avatar-img"
                  />
                ) : (
                  <div className="avatar-placeholder">
                    <span className="avatar-initials">{personalInfo.initials}</span>
                  </div>
                )}
                <div className="avatar-online-status" title="Active" />
              </div>

              <div className="avatar-card-info">
                <h3 className="avatar-card-name">{personalInfo.name}</h3>
                <p className="avatar-card-title">{personalInfo.title}</p>
              </div>

              {/* Verified academic/tech highlight pills */}
              <div className="avatar-card-tags">
                <span className="tech-badge"><Code2 size={13} /> AI & Machine Learning</span>
                <span className="tech-badge"><Layers size={13} /> Web Technology</span>
                <span className="tech-badge"><Cpu size={13} /> Practical Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: calc(100vh - var(--nav-height));
          display: flex;
          align-items: center;
          position: relative;
          padding: calc(var(--nav-height) + 2rem) 0 5rem 0;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow-1 {
          width: 500px;
          height: 500px;
          background: rgba(99, 102, 241, 0.15);
          top: 10%;
          left: -100px;
        }

        .hero-glow-2 {
          width: 450px;
          height: 450px;
          background: rgba(139, 92, 246, 0.12);
          bottom: 10%;
          right: -80px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.1rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .pulse-dot {
          width: 9px;
          height: 9px;
          background: var(--accent-emerald);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-emerald);
          animation: pulseGlow 2s infinite;
        }

        .badge-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #34d399;
          letter-spacing: 0.02em;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5.5vw, 4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .hero-role {
          font-size: clamp(1.25rem, 2.8vw, 1.85rem);
          font-weight: 600;
          color: #cbd5e1;
          letter-spacing: -0.01em;
        }

        .hero-tagline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 580px;
          line-height: 1.7;
        }

        .hero-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.95rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .meta-icon {
          color: var(--accent-primary);
        }

        .meta-divider {
          color: var(--border-subtle);
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .hero-social-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .social-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .social-chips {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-chip:hover {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--accent-primary);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Hero Visual & Profile Frame */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .visual-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .avatar-ambient-glow {
          position: absolute;
          inset: 10px;
          background: var(--gradient-primary);
          filter: blur(40px);
          opacity: 0.25;
          border-radius: var(--radius-lg);
          z-index: 0;
        }

        .avatar-card {
          position: relative;
          z-index: 1;
          padding: 2.75rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .avatar-frame {
          position: relative;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          padding: 6px;
          background: var(--gradient-primary);
          box-shadow: 0 0 35px rgba(99, 102, 241, 0.4);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          background: #090d16;
        }

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #090d16;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-initials {
          font-family: var(--font-heading);
          font-size: 2.75rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .avatar-online-status {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10b981;
          border: 3px solid #090d16;
          box-shadow: 0 0 10px #10b981;
        }

        .avatar-card-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .avatar-card-name {
          font-size: 1.35rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .avatar-card-title {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .avatar-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 0.25rem;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        /* Responsive */
        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-badge, .hero-content {
            align-items: center;
          }

          .hero-tagline {
            margin: 0 auto;
          }

          .hero-meta, .hero-cta-group, .hero-social-row {
            justify-content: center;
          }

          .hero-visual {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
