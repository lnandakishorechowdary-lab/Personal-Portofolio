import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  CheckCircle,
  Monitor,
  Smartphone,
  Server,
  Code
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full-Stack': return <Layers size={14} />;
      case 'Frontend': return <Monitor size={14} />;
      case 'Backend': return <Server size={14} />;
      case 'Mobile/API': return <Smartphone size={14} />;
      default: return <Code size={14} />;
    }
  };

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>{projectsData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Showcase of <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="section-subtitle">
            {projectsData.sectionSubtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-bar">
          {projectsData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-pill-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat === 'All' && <Sparkles size={14} />}
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
              <span className="pill-count">
                {cat === 'All' 
                  ? projectsData.projects.length 
                  : projectsData.projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Media / Stylized Mockup Preview */}
              <div className="project-thumbnail-box">
                <div className="mockup-header-bar">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                  <span className="mockup-url-bar">{project.category.toLowerCase()}.app/preview</span>
                </div>

                <div className="mockup-body">
                  <div className="mockup-icon-wrap">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="mockup-title">{project.title}</span>
                  <span className="mockup-sub">{project.tagline}</span>
                </div>

                <div className="thumbnail-badges">
                  <span className="category-tag">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                  {project.featured && (
                    <span className="featured-tag">
                      <Sparkles size={12} />
                      <span>Featured</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="project-body">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="placeholder-badge">Placeholder</span>
                </div>

                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>

                {/* Key Features */}
                <div className="project-features-list">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="feature-item">
                      <CheckCircle size={14} className="feature-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="project-tech-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="project-actions">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary btn-sm"
                  >
                    <Github size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .filter-pill-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.2);
        }

        .filter-pill-btn.active {
          background: var(--gradient-accent);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
        }

        .pill-count {
          padding: 0.1rem 0.45rem;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-family: var(--font-mono);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .project-thumbnail-box {
          position: relative;
          background: linear-gradient(135deg, #111827 0%, #1e1b4b 100%);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1rem 1.25rem 2rem 1.25rem;
          min-height: 180px;
          display: flex;
          flex-direction: column;
        }

        .mockup-header-bar {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }

        .mockup-url-bar {
          margin-left: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(0, 0, 0, 0.3);
          padding: 0.15rem 0.6rem;
          border-radius: 4px;
        }

        .mockup-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex: 1;
          gap: 0.5rem;
        }

        .mockup-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.2);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mockup-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #f8fafc;
        }

        .mockup-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          max-width: 260px;
        }

        .thumbnail-badges {
          position: absolute;
          bottom: 0.75rem;
          left: 1.25rem;
          right: 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .featured-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.25rem 0.65rem;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          color: #fbbf24;
        }

        .project-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 1rem;
        }

        .project-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .project-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.35;
        }

        .project-tagline {
          font-size: 0.9rem;
          font-weight: 600;
          color: #a5b4fc;
        }

        .project-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .project-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #cbd5e1;
        }

        .feature-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .tech-pill {
          padding: 0.25rem 0.6rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }

        .project-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-top: 0.75rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
