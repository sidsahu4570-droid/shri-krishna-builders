import React, { useState } from 'react';
import { useProperties } from '../context/PropertyContext';
import { HelpCircle, Search, Phone } from 'lucide-react';

export default function FAQs() {
  const { faqs } = useProperties();
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Expand / collapse all accordion logic
  const handleToggle = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Filter FAQs based on search input
  const filteredFaqs = faqs.filter((faq) => {
    const query = searchQuery.toLowerCase();
    return faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query);
  });

  return (
    <div className="faqs-page-wrapper">
      {/* Banner */}
      <section className="faqs-banner-header">
        <div className="faqs-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">ANSWERS & ASSISTANCE</span>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to booking registrations, legal compliance rules, construction phases, and home financing plans.</p>
        </div>
      </section>

      {/* Accordion core section */}
      <section className="section faqs-core-sec">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          {/* Search bar helper */}
          <div className="faq-search-box-wrapper glass-panel">
            <Search size={18} className="search-icon-decor" />
            <input
              type="text"
              placeholder="Search FAQs by keywords (e.g., RERA, home loans, customization)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveFaq(null); // Reset expand states on filter change
              }}
              className="faq-search-input"
            />
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="faq-accordions-list">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-accordion-card card-premium ${activeFaq === index ? 'expanded' : ''}`}
                >
                  <button 
                    className="faq-accordion-header-btn"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{faq.q}</span>
                    <span className="expand-indicator">{activeFaq === index ? '-' : '+'}</span>
                  </button>
                  <div className="faq-accordion-body-panel">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="faq-empty-search glass-panel">
              <h3>No matching questions found</h3>
              <p>Try searching using broader terms like "booking" or "Indore" or click below to consult our customer service managers directly.</p>
              <a href="tel:9644699206" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Consult Site Manager
              </a>
            </div>
          )}

          {/* Additional Help notice card */}
          <div className="faq-help-support-card glass-panel" style={{ marginTop: '3.5rem' }}>
            <HelpCircle size={24} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
            <div className="help-support-desc">
              <h4>Still Have Unanswered Questions?</h4>
              <p>Our sales and legal team is ready to assist you. Contact our head office at MR-12 Road directly for one-on-one consulting support.</p>
              <div className="help-phone-line" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '8px', fontWeight: '700' }}>
                <Phone size={16} style={{ color: 'var(--color-secondary)' }} />
                <a href="tel:9644699206" style={{ color: 'var(--color-primary)' }}>+91 96446 99206</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .faqs-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .faqs-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 76, 58, 0.85);
    }

    /* FAQ Search Bar widget */
    .faq-search-box-wrapper {
      display: flex;
      align-items: center;
      padding: 1rem 1.5rem;
      border-radius: var(--border-radius-md);
      margin-top: -60px;
      margin-bottom: 2.5rem;
      position: relative;
      z-index: 10;
      gap: 12px;
      border-color: rgba(200, 155, 60, 0.15);
    }

    .search-icon-decor {
      color: var(--color-secondary);
      flex-shrink: 0;
    }

    .faq-search-input {
      width: 100%;
      border: none;
      background: none;
      font-family: var(--font-body);
      font-size: 0.95rem;
      color: var(--color-dark);
      outline: none;
    }

    .faq-search-input::placeholder {
      color: #888;
    }

    /* FAQ List */
    .faq-accordions-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .faq-accordion-card {
      background-color: var(--color-white);
      border-radius: var(--border-radius-sm);
      overflow: hidden;
      transition: var(--transition-smooth);
    }

    .faq-accordion-header-btn {
      width: 100%;
      padding: 22px 28px;
      background: none;
      border: none;
      text-align: left;
      font-family: var(--font-body);
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-dark);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .expand-indicator {
      font-size: 1.35rem;
      color: var(--color-secondary);
      line-height: 1;
    }

    .faq-accordion-body-panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      padding: 0 28px;
    }

    .faq-accordion-card.expanded {
      border-color: var(--color-secondary);
      box-shadow: var(--shadow-sm);
    }

    .faq-accordion-card.expanded .faq-accordion-body-panel {
      max-height: 300px;
      padding-bottom: 22px;
    }

    .faq-accordion-body-panel p {
      font-size: 0.9rem;
      color: #555;
      line-height: 1.6;
    }

    /* Fallback UI */
    .faq-empty-search {
      text-align: center;
      padding: 3rem 1.5rem;
      border-radius: var(--border-radius-md);
    }

    .faq-empty-search h3 {
      font-size: 1.35rem;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .faq-help-support-card {
      display: flex;
      gap: 15px;
      padding: 1.5rem;
      border-radius: var(--border-radius-md);
      align-items: center;
    }

    .help-support-desc h4 {
      font-size: 1rem;
      color: var(--color-primary);
    }

    .help-support-desc p {
      font-size: 0.8rem;
      color: #666;
    }
  `}</style>
);
