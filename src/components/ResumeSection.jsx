import React, { useState } from 'react';
import { resumeData, personalInfo, aboutData, educationData, certificationsData, skillsData } from '../data/portfolioData';
import { 
  FileDown, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  HardDrive, 
  X, 
  Download,
  Printer,
  Sparkles
} from 'lucide-react';

export default function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section-wrapper resume-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FileDown size={14} />
            <span>{resumeData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Curriculum Vitae & <span className="gradient-text">Professional Resume</span>
          </h2>
          <p className="section-subtitle">
            {resumeData.sectionSubtitle}
          </p>
        </div>

        {/* Main Resume Card */}
        <div className="resume-box-container">
          <div className="resume-card glass-card">
            {/* Left Column: Visual File Presentation */}
            <div className="resume-file-visual">
              <div className="file-icon-wrapper">
                <FileText size={64} className="file-icon" />
                <span className="pdf-tag">PDF</span>
              </div>

              <div className="file-metadata">
                <h3 className="file-title">{resumeData.fileName}</h3>
                <div className="file-meta-pills">
                  <span className="meta-pill">
                    <HardDrive size={13} /> {resumeData.fileSize}
                  </span>
                  <span className="meta-pill">
                    <Calendar size={13} /> Updated: {resumeData.lastUpdated}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Actions */}
            <div className="resume-details-col">
              <div className="highlights-box">
                <h4 className="highlights-header">
                  <Sparkles size={16} className="sparkle-icon" />
                  <span>Resume Content Highlights:</span>
                </h4>
                <div className="highlights-checklist">
                  {resumeData.highlights.map((hl, idx) => (
                    <div key={idx} className="hl-item">
                      <CheckCircle2 size={16} className="hl-check" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="resume-action-buttons">
                <a 
                  href={resumeData.downloadUrl} 
                  download={resumeData.fileName}
                  className="btn btn-primary btn-lg"
                >
                  <FileDown size={18} />
                  <span>Download Resume (PDF)</span>
                </a>

                <button 
                  onClick={() => setModalOpen(true)}
                  className="btn btn-secondary btn-lg"
                >
                  <Eye size={18} />
                  <span>Preview In-Browser</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume In-Browser Preview Modal */}
      {modalOpen && (
        <div className="resume-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <FileText size={20} className="modal-file-icon" />
                <h3 className="modal-title">{personalInfo.name} - Resume Preview</h3>
              </div>
              <div className="modal-actions">
                <button onClick={handlePrint} className="modal-btn" title="Print Resume">
                  <Printer size={18} />
                </button>
                <a 
                  href={resumeData.downloadUrl} 
                  download={resumeData.fileName}
                  className="modal-btn" 
                  title="Download File"
                >
                  <Download size={18} />
                </a>
                <button onClick={() => setModalOpen(false)} className="modal-btn close-btn" title="Close">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Printable Styled Resume Sheet */}
            <div className="modal-body-scrollable">
              <div className="resume-paper">
                <header className="paper-header">
                  <h1 className="paper-name">{personalInfo.name}</h1>
                  <h2 className="paper-role">{personalInfo.title}</h2>
                  <div className="paper-contact-row">
                    <span>{personalInfo.email}</span> • 
                    <span>{personalInfo.phone}</span> • 
                    <span>{personalInfo.location}</span>
                  </div>
                </header>

                <hr className="paper-hr" />

                <section className="paper-section">
                  <h3 className="paper-sec-title">PROFESSIONAL SUMMARY</h3>
                  <p className="paper-text">{aboutData.paragraphs[0]}</p>
                </section>

                <section className="paper-section">
                  <h3 className="paper-sec-title">CORE SKILLS</h3>
                  <div className="paper-skills-list">
                    {skillsData.categories.map((c, idx) => (
                      <div key={idx} className="paper-skill-row">
                        <strong>{c.name}:</strong> {c.skills.map(s => s.name).join(', ')}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="paper-section">
                  <h3 className="paper-sec-title">EDUCATION</h3>
                  {educationData.timeline.map((edu, idx) => (
                    <div key={idx} className="paper-item">
                      <div className="paper-item-header">
                        <strong>{edu.degree}</strong>
                        <span>{edu.period}</span>
                      </div>
                      <div className="paper-item-sub">
                        <span>{edu.institution}, {edu.location}</span>
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </section>

                <section className="paper-section">
                  <h3 className="paper-sec-title">ACADEMIC PROJECT EXPERIENCE</h3>
                  <div className="paper-item">
                    <div className="paper-item-header">
                      <strong>Academic Engineering Project</strong>
                      <span>Team of 4</span>
                    </div>
                    <ul className="paper-bullet-list">
                      {resumeData.highlights.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                {certificationsData.certifications && certificationsData.certifications.length > 0 && (
                  <section className="paper-section">
                    <h3 className="paper-sec-title">CERTIFICATIONS</h3>
                    <div className="paper-cert-list">
                      {certificationsData.certifications.map((cert, idx) => (
                        <div key={idx} className="paper-cert-item">
                          • <strong>{cert.title}</strong> — {cert.issuer} ({cert.issueDate})
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .resume-box-container {
          max-width: 950px;
          margin: 0 auto;
        }

        .resume-card {
          padding: 3rem;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
          align-items: center;
        }

        .resume-file-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 2.5rem 1.5rem;
        }

        .file-icon-wrapper {
          position: relative;
          color: var(--accent-primary);
        }

        .pdf-tag {
          position: absolute;
          bottom: 2px;
          right: -8px;
          background: #ef4444;
          color: #fff;
          font-weight: 800;
          font-size: 0.7rem;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .file-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f8fafc;
          word-break: break-all;
          margin-bottom: 0.5rem;
        }

        .file-meta-pills {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .resume-details-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .highlights-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 1rem;
        }

        .sparkle-icon {
          color: var(--accent-cyan);
        }

        .highlights-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .hl-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .hl-check {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .resume-action-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Modal Styles */
        .resume-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.2s ease;
        }

        .resume-modal-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.75rem;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .modal-file-icon {
          color: var(--accent-primary);
        }

        .modal-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .modal-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .modal-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          color: #fff;
        }

        .modal-btn.close-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .modal-body-scrollable {
          padding: 2rem;
          overflow-y: auto;
          background: #0f172a;
        }

        /* Printable Paper Simulation */
        .resume-paper {
          background: #ffffff;
          color: #1e293b;
          border-radius: 8px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          font-family: var(--font-main);
        }

        .paper-header {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .paper-name {
          font-size: 1.85rem;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .paper-role {
          font-size: 1.05rem;
          color: #4338ca;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .paper-contact-row {
          font-size: 0.85rem;
          color: #64748b;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .paper-hr {
          border: 0;
          border-top: 1.5px solid #cbd5e1;
          margin: 1.25rem 0;
        }

        .paper-section {
          margin-bottom: 1.5rem;
        }

        .paper-sec-title {
          font-size: 0.95rem;
          color: #1e293b;
          font-weight: 800;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.35rem;
          margin-bottom: 0.75rem;
        }

        .paper-text {
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.6;
        }

        .paper-skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: #334155;
        }

        .paper-item {
          margin-bottom: 0.75rem;
        }

        .paper-item-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #0f172a;
        }

        .paper-item-sub {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: #64748b;
        }

        .paper-bullet-list {
          margin: 0.4rem 0 0.5rem 1.25rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.84rem;
          color: #334155;
          line-height: 1.5;
        }

        .paper-cert-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.85rem;
          color: #334155;
        }

        @media (max-width: 860px) {
          .resume-card {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .resume-action-buttons {
            flex-direction: column;
          }
          .resume-action-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
