import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import { MapPin, Compass, Building, Layers, ArrowRight } from 'lucide-react';

const projectToPropertyMap = {
  'kanak-smart-city': 'kanak-smart-city',
  'krishna-aura-estates': 'villa-krishna-aura',
  'shri-nivas-villas': 'shri-nivas-enclave',
  'krishna-royal-commercial': 'villa-royal-arcade',
  'krishna-upvan': 'farm-krishna-upvan'
};

export default function Projects() {
  const { projects } = useProperties();
  const [filter, setFilter] = useState('All');

  // Categorize projects for filter options
  const filterOptions = ['All', 'Township Development', 'Premium Villa Project', 'Commercial Complex', 'Residential Project'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type.toLowerCase().includes(filter.toLowerCase().substring(0, 10)) || p.type === filter);

  return (
    <div className="projects-page-wrapper">
      {/* Banner */}
      <section className="projects-banner-header">
        <div className="projects-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">OUR PORTFOLIO</span>
          <h1>Shri Krishna Landmarks</h1>
          <p>Explore our signature residential townships, premium gated duplexes, and RERA approved plot developments in Indore.</p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="section projects-showcase-section">
        <div className="container">
          {/* Filters Bar */}
          <div className="filters-container-wrapper">
            <span className="filter-label">Filter Landmarks</span>
            <div className="filter-buttons-row">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={`filter-tab-btn ${filter === opt ? 'active' : ''}`}
                >
                  {opt === 'All' ? 'All Projects' : opt}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid-2" style={{ rowGap: '3rem' }}>
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="project-card-premium card-premium">
                <div className="project-image-box">
                  <img src={proj.image} alt={proj.name} className="project-display-img" />
                  <div className="project-status-tag">{proj.status}</div>
                </div>

                <div className="project-body-details">
                  <span className="project-category">{proj.type}</span>
                  <h3 className="project-name">{proj.name}</h3>
                  <div className="project-loc-row">
                    <MapPin size={16} className="loc-pin-icon" />
                    <span>{proj.location}</span>
                  </div>
                  <p className="project-desc">{proj.description}</p>
                  
                  <div className="project-stats-footer">
                    <div className="stat-unit">
                      <Layers size={16} className="stat-icon" />
                      <span><strong>Total Area:</strong> {proj.size}</span>
                    </div>
                    <div className="stat-unit">
                      <Building size={16} className="stat-icon" />
                      <span><strong>Vol:</strong> {proj.units}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/properties/${projectToPropertyMap[proj.id] || 'villa-krishna-aura'}`}
                    className="btn btn-primary project-inquire-btn"
                  >
                    <span>View Complete Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .projects-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .projects-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 30, 30, 0.85);
    }

    .filters-container-wrapper {
      margin-bottom: 3.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .filter-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-secondary);
      font-weight: 600;
    }

    .filter-buttons-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .filter-tab-btn {
      background-color: var(--color-white);
      border: 1px solid rgba(30, 30, 30, 0.1);
      padding: 10px 20px;
      border-radius: var(--border-radius-sm);
      font-family: var(--font-body);
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      color: var(--color-text);
      transition: var(--transition-smooth);
    }

    .filter-tab-btn:hover,
    .filter-tab-btn.active {
      background-color: var(--color-primary);
      color: var(--color-white);
      border-color: var(--color-primary);
      box-shadow: var(--shadow-sm);
    }

    /* Project card custom styling */
    .project-card-premium {
      display: flex;
      flex-direction: column;
    }

    .project-image-box {
      position: relative;
      height: 280px;
      overflow: hidden;
      border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    }

    .project-display-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-luxury);
    }

    .project-card-premium:hover .project-display-img {
      transform: scale(1.06);
    }

    .project-status-tag {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: var(--color-secondary);
      color: var(--color-white);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 4px;
    }

    .project-body-details {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .project-category {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-secondary);
      font-weight: 600;
    }

    .project-name {
      font-size: 1.5rem;
      color: var(--color-dark);
    }

    .project-loc-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: #555;
    }

    .loc-pin-icon {
      color: var(--color-secondary);
    }

    .project-desc {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
    }

    .project-stats-footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid rgba(30, 30, 30, 0.08);
      border-bottom: 1px solid rgba(30, 30, 30, 0.08);
      padding: 12px 0;
      margin: 8px 0;
    }

    .stat-unit {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      color: var(--color-text);
    }

    .stat-icon {
      color: var(--color-secondary);
    }

    .project-inquire-btn {
      width: 100%;
      margin-top: 8px;
      justify-content: space-between;
      padding: 12px 24px;
    }

    @media (max-width: 768px) {
      .project-image-box {
        height: 200px;
      }
      .project-body-details {
        padding: 1.25rem;
      }
    }
  `}</style>
);
