import React from 'react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { 
  UserCheck, 
  Code, 
  Sparkles, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Download,
  Calendar,
  Award,
  Users
} from 'lucide-react';

const pillarIcons = [Code, Layers, Sparkles, Compass];
const statIcons = [Calendar, Award, CheckCircle2, Users];

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <UserCheck size={14} />
            <span>{aboutData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-text">Exceptional Web Experiences</span>
          </h2>
          <p className="section-subtitle">
            {aboutData.sectionSubtitle}
          </p>
        </div>

        {/* Main Content Grid: Story on Left, Stats on Right */}
        <div className="about-main-grid">
          {/* Left Column: Biography */}
          <div className="about-bio-card glass-card">
            <div className="bio-card-header">
              <span className="bio-tag">Academic & Engineering Background</span>
            </div>

            <div className="bio-paragraphs">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="bio-text">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Summary Highlights */}
            <div className="bio-meta-box">
              <div className="bio-meta-row">
                <span className="meta-label">Role:</span>
                <span className="meta-value">{personalInfo.title}</span>
              </div>
              <div className="bio-meta-row">
                <span className="meta-label">Location:</span>
                <span className="meta-value">{personalInfo.location}</span>
              </div>
              <div className="bio-meta-row">
                <span className="meta-label">Status:</span>
                <span className="meta-value status-active">{personalInfo.availabilityStatus}</span>
              </div>
            </div>

            <div className="bio-cta">
              <a href="#resume" className="btn btn-primary btn-sm">
                <Download size={16} />
                <span>Download Full Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Metric Stats Cards */}
          <div className="about-stats-grid">
            {aboutData.stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div key={idx} className="stat-card glass-card">
                  <div className="stat-icon-wrapper">
                    <Icon size={22} className="stat-icon" />
                  </div>
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-desc">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Pillars / Values Grid */}
        <div className="about-pillars-container">
          <h3 className="pillars-heading">
            Core Principles & Work Methodology
          </h3>
          <div className="pillars-grid">
            {aboutData.pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div key={idx} className="pillar-card glass-card">
                  <div className="pillar-header">
                    <div className="pillar-icon-box">
                      <Icon size={20} />
                    </div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                  </div>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, transparent 0%, rgba(12, 19, 34, 0.5) 50%, transparent 100%);
        }

        .about-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .about-bio-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .bio-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bio-tag {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
        }

        .bio-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bio-text {
          color: #cbd5e1;
          font-size: 1.02rem;
          line-height: 1.75;
        }

        .bio-meta-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .bio-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
        }

        .meta-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .meta-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        .status-active {
          color: var(--accent-emerald);
        }

        .bio-cta {
          margin-top: 0.5rem;
        }

        /* Stats Grid */
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .stat-card {
          padding: 1.75rem 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stat-icon-wrapper {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .stat-icon {
          color: var(--accent-primary);
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          font-family: var(--font-heading);
          line-height: 1.1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .stat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Pillars Section */
        .about-pillars-container {
          margin-top: 2rem;
        }

        .pillars-heading {
          font-size: 1.35rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          color: #e2e8f0;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .pillar-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pillar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .pillar-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(6, 182, 212, 0.12);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-size: 1rem;
          font-weight: 700;
          color: #f1f5f9;
        }

        .pillar-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 840px) {
          .about-main-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .about-bio-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
