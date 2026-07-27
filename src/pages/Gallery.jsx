import React, { useState } from 'react';
import { useProperties } from '../context/PropertyContext';
import Lightbox from '../components/Lightbox';
import { Maximize } from 'lucide-react';

export default function Gallery() {
  const { gallery } = useProperties();
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Architecture', 'Interiors', 'Amenities', 'Aerial'];

  const filteredImages = activeCategory === 'All'
    ? gallery
    : gallery.filter((img) => img.category.toLowerCase() === activeCategory.toLowerCase());

  // Lightbox Navigation helpers
  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-page-wrapper">
      {/* Banner */}
      <section className="gallery-banner-header">
        <div className="gallery-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">VISUAL STORY</span>
          <h1>Luxury Gallery</h1>
          <p>A curated collection of architectural exteriors, drone panoramas, and high-end finished interiors in Indore.</p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section gallery-masonry-sec">
        <div className="container">
          
          {/* Category Filters */}
          <div className="filters-container-wrapper" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="filter-label" style={{ display: 'block', marginBottom: '10px' }}>Filter Media</span>
            <div className="filter-buttons-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxOpen(false);
                  }}
                  className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat === 'All' ? 'All Images' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Layout */}
          <div className="masonry-grid-wrapper">
            {filteredImages.map((img, index) => (
              <div 
                key={img.id} 
                className="masonry-item card-premium"
                onClick={() => handleOpenLightbox(index)}
              >
                <img src={img.url} alt={img.title} className="masonry-image" />
                
                {/* Elegant Hover Overlay */}
                <div className="masonry-hover-overlay">
                  <span className="masonry-hover-cat">{img.category}</span>
                  <h4 className="masonry-hover-title">{img.title}</h4>
                  <div className="zoom-indicator-icon">
                    <Maximize size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevImage}
        onNext={handleNextImage}
      />

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .gallery-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .gallery-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 76, 58, 0.85);
    }

    /* Filters buttons matching styling */
    .filter-tab-btn {
      background-color: var(--color-white);
      border: 1px solid rgba(15, 76, 58, 0.1);
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

    /* Masonry grid column layout */
    .masonry-grid-wrapper {
      column-count: 3;
      column-gap: 1.5rem;
      width: 100%;
    }

    .masonry-item {
      break-inside: avoid;
      margin-bottom: 1.5rem;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      border-radius: var(--border-radius-md);
      box-shadow: var(--shadow-sm);
    }

    .masonry-image {
      width: 100%;
      height: auto;
      display: block;
      transition: var(--transition-luxury);
    }

    /* Elegant Hover overlay */
    .masonry-hover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(15, 76, 58, 0.9) 0%, rgba(27, 27, 27, 0.4) 100%);
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 1.5rem;
      color: var(--color-white);
      transition: var(--transition-smooth);
      font-family: var(--font-body);
    }

    .masonry-item:hover .masonry-hover-overlay {
      opacity: 1;
    }

    .masonry-item:hover .masonry-image {
      transform: scale(1.08);
    }

    .masonry-hover-cat {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-secondary);
      font-weight: 600;
      margin-bottom: 4px;
    }

    .masonry-hover-title {
      font-family: var(--font-headings);
      font-size: 1.15rem;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .zoom-indicator-icon {
      width: 32px;
      height: 32px;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-start;
    }

    @media (max-width: 1024px) {
      .masonry-grid-wrapper {
        column-count: 2;
      }
    }

    @media (max-width: 600px) {
      .masonry-grid-wrapper {
        column-count: 1;
      }
    }
  `}</style>
);
