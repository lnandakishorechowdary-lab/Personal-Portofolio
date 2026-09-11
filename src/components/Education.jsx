import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>{educationData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Academic & <span className="gradient-text">Scholarly Background</span>
          </h2>
          <p className="section-subtitle">
            {educationData.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="education-timeline">
          {educationData.timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Track & Node */}
              <div className="timeline-marker">
                <div className="timeline-node">
                  <GraduationCap size={18} className="node-icon" />
                </div>
                {idx < educationData.timeline.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Timeline Card */}
              <div className="timeline-content-card glass-card">
                <div className="edu-card-header">
                  <div className="edu-title-group">
                    <span className="edu-period">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </span>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <h4 className="edu-institution">{item.institution}</h4>
                  </div>

                  <div className="edu-badges-group">
                    <span className="edu-grade-badge">
                      <Award size={14} />
                      <span>{item.grade}</span>
                    </span>
                  </div>
                </div>

                <div className="edu-meta-location">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>

                <p className="edu-description">{item.description}</p>

                {/* Key Highlights */}
                <div className="edu-highlights">
                  <h5 className="highlights-title">Key Highlights & Honors:</h5>
                  <div className="highlights-list">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="highlight-item">
                        <CheckCircle2 size={14} className="highlight-check" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coursework Tags */}
                <div className="edu-courses">
                  <span className="courses-label">
                    <BookOpen size={13} /> Relevant Coursework:
                  </span>
                  <div className="courses-pills">
                    {item.courses.map((c, cIdx) => (
                      <span key={cIdx} className="course-pill">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-timeline {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 1.5rem;
          position: relative;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-node {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.18);
          border: 2px solid var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.4);
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(180deg, var(--accent-primary) 0%, rgba(99, 102, 241, 0.1) 100%);
          margin-top: 0.5rem;
        }

        .timeline-content-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .edu-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .edu-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .edu-period {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .edu-degree {
          font-size: 1.25rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .edu-institution {
          font-size: 1rem;
          font-weight: 600;
          color: #a5b4fc;
        }

        .edu-badges-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .edu-grade-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: #34d399;
        }

        .edu-meta-location {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .edu-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .edu-highlights {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1rem 1.25rem;
        }

        .highlights-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #e2e8f0;
          margin-bottom: 0.6rem;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #cbd5e1;
        }

        .highlight-check {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .edu-courses {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .courses-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .courses-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .course-pill {
          padding: 0.25rem 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 1fr;
          }
          .timeline-marker {
            display: none;
          }
          .timeline-content-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
