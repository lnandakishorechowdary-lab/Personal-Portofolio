import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Cloud, 
  CheckCircle2 
} from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>{certificationsData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Industry Credentials & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            {certificationsData.sectionSubtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.certifications.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card">
              <div className="cert-top">
                <div className="cert-icon-box">
                  <Award size={24} />
                </div>
                <div className="cert-badge-wrap">
                  <span className="cert-status-badge">
                    <ShieldCheck size={12} /> Verified
                  </span>
                  <span className="placeholder-badge">Placeholder</span>
                </div>
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>

                <div className="cert-dates">
                  <div className="date-item">
                    <Calendar size={13} />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  <div className="date-item">
                    <span>Valid: {cert.expiryDate}</span>
                  </div>
                </div>

                <div className="cert-id-box">
                  <span className="id-label">Credential ID:</span>
                  <code className="id-code">{cert.credentialId}</code>
                </div>

                <div className="cert-skills-pills">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span key={sIdx} className="cert-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert-footer">
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cert-link-btn"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cert-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cert-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.14);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-badge-wrap {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .cert-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.25rem 0.6rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: #34d399;
          font-weight: 600;
        }

        .cert-body {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.35;
        }

        .cert-issuer {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .cert-dates {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .date-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .cert-id-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          margin-top: 0.4rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .id-label {
          color: var(--text-muted);
        }

        .id-code {
          color: #cbd5e1;
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .cert-skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: 0.6rem;
        }

        .cert-pill {
          padding: 0.2rem 0.55rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .cert-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .cert-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-primary);
          transition: gap var(--transition-fast), color var(--transition-fast);
        }

        .cert-link-btn:hover {
          color: #fff;
          gap: 0.65rem;
        }
      `}</style>
    </section>
  );
}
