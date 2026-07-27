import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, Heart } from 'lucide-react';

export default function Properties() {
  const { properties } = useProperties();
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [priceRange, setPriceRange] = useState(70000000); // Max budget limit filter
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const propertyTypes = ['All', 'Villa', 'Bungalow', 'Home', 'Commercial', 'Apartment', 'Farm House'];

  const filteredProperties = properties.filter((prop) => {
    const matchesType = selectedType === 'All' || prop.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || prop.status === selectedStatus;
    const matchesBudget = prop.priceNum <= priceRange;
    return matchesType && matchesStatus && matchesBudget;
  });

  return (
    <div className="properties-page-wrapper">
      {/* Banner */}
      <section className="properties-banner-header">
        <div className="properties-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">PREMIUM REAL ESTATE</span>
          <h1>Luxury Catalog</h1>
          <p>Discover ready-to-move-in luxury villas, penthouses, and bespoke estate houses in Indore.</p>
        </div>
      </section>

      {/* Filter and Content Grid */}
      <section className="section properties-catalog-section">
        <div className="container">
          
          {/* Advanced Search Filter Bar */}
          <div className="filters-bar-premium glass-panel">
            {/* Filter by Type */}
            <div className="filter-input-col">
              <span className="filter-input-label">Property Category</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select-field"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>
                ))}
              </select>
            </div>

            {/* Filter by Status */}
            <div className="filter-input-col">
              <span className="filter-input-label">Construction Status</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="filter-select-field"
              >
                <option value="All">All Statuses</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Under Construction">Under Construction</option>
              </select>
            </div>

            {/* Price Budget Slider */}
            <div className="filter-input-col budget-col">
              <div className="budget-slider-labels">
                <span className="filter-input-label">Max Budget</span>
                <span className="budget-value">
                  {priceRange >= 70000000 
                    ? 'Any Price' 
                    : `₹${(priceRange / 10000000).toFixed(2)} Cr`
                  }
                </span>
              </div>
              <input
                type="range"
                min="9000000"
                max="70000000"
                step="2500000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="luxury-slider"
              />
            </div>
          </div>

          {/* Properties Count Info */}
          <div className="results-info-row">
            <span>Found <strong>{filteredProperties.length}</strong> premium listings matching your selection.</span>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid-3">
              {filteredProperties.map((prop) => (
                <div key={prop.id} className="card-premium property-catalog-card">
                  <div className="property-card-image">
                    <img src={prop.image} alt={prop.name} className="zoom-hover-target" />
                    <button
                      className={`favorite-btn ${favorites[prop.id] ? 'active' : ''}`}
                      onClick={(e) => toggleFavorite(prop.id, e)}
                      aria-label="Add to favorites"
                    >
                      <Heart size={16} fill={favorites[prop.id] ? 'var(--color-secondary)' : 'none'} />
                    </button>
                    <span className="status-label-badge">{prop.status}</span>
                    <span className="price-tag-badge">{prop.price}</span>
                  </div>

                  <div className="property-card-body">
                    <div className="property-card-header">
                      <span className="property-type-tag">{prop.type}</span>
                      <h3 className="property-title-name">{prop.name}</h3>
                    </div>

                    <div className="property-location-tag">
                      <MapPin size={15} />
                      <span>{prop.location}</span>
                    </div>

                    <p className="property-intro-desc">
                      {prop.tagline}
                    </p>

                    {/* Features Strip */}
                    <div className="property-features-strip">
                      {prop.bedrooms > 0 && (
                        <div className="feature-block">
                          <BedDouble size={16} />
                          <span>{prop.bedrooms} Bed</span>
                        </div>
                      )}
                      {prop.bathrooms > 0 && (
                        <div className="feature-block">
                          <Bath size={16} />
                          <span>{prop.bathrooms} Bath</span>
                        </div>
                      )}
                      <div className="feature-block">
                        <Maximize2 size={16} />
                        <span>{prop.area}</span>
                      </div>
                    </div>

                    <Link to={`/properties/${prop.id}`} className="btn btn-primary w-full catalog-view-btn">
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-listings-card glass-panel">
              <h3>No properties found matching your constraints</h3>
              <p>Try resetting the category filter or sliding the maximum budget limit upwards.</p>
              <button 
                onClick={() => {
                  setSelectedType('All');
                  setSelectedStatus('All');
                  setPriceRange(70000000);
                }} 
                className="btn btn-secondary"
                style={{ marginTop: '1rem' }}
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .properties-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .properties-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 30, 30, 0.85);
    }

    /* Advanced filter bar styling */
    .filters-bar-premium {
      display: grid;
      grid-template-columns: 1fr 1fr 1.5fr;
      gap: 2rem;
      padding: 2rem;
      margin-top: -80px;
      position: relative;
      z-index: 10;
      border-radius: var(--border-radius-lg);
    }

    .filter-input-col {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .filter-input-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      color: var(--color-primary);
    }

    .filter-select-field {
      padding: 12px 16px;
      border: 1px solid rgba(30, 30, 30, 0.1);
      border-radius: 4px;
      font-family: var(--font-body);
      font-size: 0.9rem;
      color: var(--color-dark);
      background-color: var(--color-white);
      outline: none;
      cursor: pointer;
      transition: var(--transition-fast);
    }

    .filter-select-field:focus {
      border-color: var(--color-secondary);
      box-shadow: 0 0 10px rgba(200, 155, 60, 0.1);
    }

    .budget-slider-labels {
      display: flex;
      justify-content: space-between;
    }

    .budget-value {
      font-weight: 700;
      color: var(--color-primary);
      font-size: 0.95rem;
    }

    .results-info-row {
      margin: 2.5rem 0 1.5rem 0;
      font-size: 0.9rem;
      color: #666;
    }

    /* Catalog Cards styling */
    .property-catalog-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .property-card-image {
      position: relative;
      height: 240px;
      overflow: hidden;
    }

    .property-card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .status-label-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: var(--color-primary);
      color: var(--color-white);
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 3px;
      letter-spacing: 1px;
    }

    .price-tag-badge {
      position: absolute;
      bottom: 15px;
      left: 15px;
      background-color: rgba(27, 27, 27, 0.8);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      color: var(--color-secondary);
      font-size: 0.9rem;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid rgba(200, 155, 60, 0.3);
    }

    .property-card-body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex-grow: 1;
      justify-content: space-between;
    }

    .property-type-tag {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--color-secondary);
      font-weight: 600;
      display: block;
      margin-bottom: 2px;
    }

    .property-title-name {
      font-size: 1.25rem;
      color: var(--color-dark);
      line-height: 1.2;
    }

    .property-location-tag {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      color: #666;
    }

    .property-location-tag svg {
      color: var(--color-secondary);
      flex-shrink: 0;
    }

    .property-intro-desc {
      font-size: 0.85rem;
      color: #666;
      font-style: italic;
    }

    .property-features-strip {
      display: flex;
      gap: 1rem;
      border-top: 1px solid rgba(30, 30, 30, 0.05);
      border-bottom: 1px solid rgba(30, 30, 30, 0.05);
      padding: 10px 0;
      margin: 5px 0;
    }

    .feature-block {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      color: var(--color-text);
    }

    .feature-block svg {
      color: var(--color-secondary);
    }

    .catalog-view-btn {
      width: 100%;
      justify-content: space-between;
      padding: 12px 24px;
    }

    /* No listings fall-back UI */
    .no-listings-card {
      text-align: center;
      padding: 4rem 2rem;
      border-radius: var(--border-radius-lg);
    }

    .no-listings-card h3 {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .favorite-btn {
      position: absolute;
      top: 15px;
      left: 15px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--color-primary);
      transition: var(--transition-fast);
      z-index: 5;
    }

    .favorite-btn:hover {
      transform: scale(1.1);
      background-color: var(--color-white);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .favorite-btn.active {
      color: var(--color-secondary);
    }

    @media (max-width: 768px) {
      .filters-bar-premium {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1.5rem;
        margin-top: -40px;
      }
    }
  `}</style>
);
