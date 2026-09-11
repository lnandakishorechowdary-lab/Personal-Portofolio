import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Wrench, 
  Users, 
  Layers, 
  Sparkles,
  CheckCircle,
  Terminal,
  Database,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoriesList = ['All', ...skillsData.categories.map(c => c.name)];

  const displayedSkills = selectedCategory === 'All'
    ? skillsData.categories.flatMap(cat => cat.skills.map(s => ({ ...s, categoryName: cat.name })))
    : skillsData.categories.find(cat => cat.name === selectedCategory)?.skills.map(s => ({ ...s, categoryName: selectedCategory })) || [];

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>{skillsData.sectionTitle}</span>
          </div>
          <h2 className="section-title">
            Technical Stack & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            {skillsData.sectionSubtitle}
          </p>
        </div>

        {/* Category Tab Filters */}
        <div className="skills-tabs-container">
          <div className="skills-tabs">
            {categoriesList.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`skill-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat === 'All' && <Sparkles size={15} />}
                {cat.includes('Frontend') && <Layers size={15} />}
                {cat.includes('Backend') && <Server size={15} />}
                {cat.includes('DevOps') && <Wrench size={15} />}
                {cat.includes('Soft') && <Users size={15} />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category-badge">{skill.categoryName}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              {/* Animated Progress Bar */}
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {skill.name.includes('[YOUR') && (
                <div className="skill-placeholder-note">
                  <span className="placeholder-badge">Placeholder</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills Category Overview Cards */}
        <div className="skills-overview-grid">
          {skillsData.categories.map((cat, idx) => (
            <div key={idx} className="cat-overview-card glass-card">
              <div className="cat-header">
                <div className="cat-icon-box">
                  {idx === 0 ? <Layers size={20} /> : 
                   idx === 1 ? <Database size={20} /> :
                   idx === 2 ? <Terminal size={20} /> : <Users size={20} />}
                </div>
                <div>
                  <h4 className="cat-title">{cat.name}</h4>
                  <p className="cat-desc">{cat.description}</p>
                </div>
              </div>

              <div className="cat-pills">
                {cat.skills.map((s, sIdx) => (
                  <span key={sIdx} className="cat-pill">
                    <CheckCircle size={12} className="pill-check" />
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        .skills-tabs {
          display: inline-flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem;
          border-radius: var(--radius-full);
          gap: 0.35rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .skill-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .skill-tab-btn:hover {
          color: #fff;
        }

        .skill-tab-btn.active {
          background: var(--gradient-accent);
          color: #ffffff;
          box-shadow: 0 2px 10px rgba(99, 102, 241, 0.35);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .skill-card {
          padding: 1.35rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .skill-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .skill-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .skill-name {
          font-weight: 700;
          font-size: 1rem;
          color: #f1f5f9;
        }

        .skill-category-badge {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .skill-percentage {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .skill-progress-track {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.07);
          border-radius: var(--radius-full);
          overflow: hidden;
          position: relative;
        }

        .skill-progress-bar {
          height: 100%;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-placeholder-note {
          margin-top: 0.25rem;
        }

        /* Overview Grid */
        .skills-overview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .cat-overview-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .cat-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .cat-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          color: #cbd5e1;
        }

        .pill-check {
          color: var(--accent-emerald);
        }

        @media (max-width: 900px) {
          .skills-overview-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
