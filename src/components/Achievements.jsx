import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { 
  Trophy, 
  Award, 
  Star, 
  Mic, 
  Calendar, 
  Building, 
  Sparkles 
} from 'lucide-react';

export default function Achievements() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy size={22} />;
      case 'Award': return <Award size={22} />;
      case 'Star': return <Star size={22} />;
      case 'Mic': return <Mic size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <section id="achievements" className="section-wrapper achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>{achievementsData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Key Honors & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            {achievementsData.sectionSubtitle}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsData.achievements.map((ach, idx) => (
            <div key={idx} className="achievement-card glass-card">
              <div className="ach-top">
                <div className={`ach-icon-box cat-${ach.category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {getIcon(ach.iconName)}
                </div>
                <div className="ach-badges">
                  <span className="ach-category-tag">{ach.category}</span>
                  <span className="placeholder-badge">Placeholder</span>
                </div>
              </div>

              <div className="ach-body">
                <h3 className="ach-title">{ach.title}</h3>
                
                <div className="ach-meta">
                  <div className="meta-row">
                    <Building size={14} />
                    <span>{ach.organization}</span>
                  </div>
                  <div className="meta-row">
                    <Calendar size={14} />
                    <span>{ach.date}</span>
                  </div>
                </div>

                <p className="ach-description">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ach-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ach-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(245, 158, 11, 0.14);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .ach-icon-box.cat-competition {
          background: rgba(245, 158, 11, 0.14);
          color: #fbbf24;
          border-color: rgba(245, 158, 11, 0.3);
        }

        .ach-icon-box.cat-academic {
          background: rgba(99, 102, 241, 0.14);
          color: var(--accent-primary);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .ach-icon-box.cat-open-source {
          background: rgba(16, 185, 129, 0.14);
          color: var(--accent-emerald);
          border-color: rgba(16, 185, 129, 0.3);
        }

        .ach-icon-box.cat-community {
          background: rgba(6, 182, 212, 0.14);
          color: var(--accent-cyan);
          border-color: rgba(6, 182, 212, 0.3);
        }

        .ach-badges {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .ach-category-tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
        }

        .ach-body {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }

        .ach-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.35;
        }

        .ach-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .ach-description {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-top: 0.4rem;
        }
      `}</style>
    </section>
  );
}
