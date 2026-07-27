import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Clock, Compass, CheckCircle2, Star } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <div className="why-choose-us-page-wrapper">
      {/* Banner */}
      <section className="why-choose-banner-header">
        <div className="banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">THE SHRI KRISHNA PROMISE</span>
          <h1>Why Choose Us</h1>
          <p>Discover the core philosophies, engineering audits, and client relationships that justify our status as Indore's trusted luxury developer.</p>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="section philosophy-details-section">
        <div className="container grid-2">
          <div className="reveal-on-scroll">
            <span className="subtitle-premium">OUR ARCHITECTURAL ETHOS</span>
            <h2 className="title-luxury">Handcrafted Homes Built For Generations</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              At Shri Krishna Builder's & Developers, we do not follow standard build templates. Every layout is crafted individually in collaboration with India's leading landscape architects and Vaastu scholars. We construct spaces that let you live in perfect harmony with natural light, cross-ventilation, and modern aesthetics.
            </p>
            <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
              Our engineering audits are conducted by independent third-party laboratories. From mapping the steel depth to checking the concrete pour density, we document every layer to ensure absolute compliance with national seismic safety norms.
            </p>

            <div className="values-list-vertical" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="value-bullet" style={{ display: 'flex', gap: '12px' }}>
                <ShieldCheck className="bullet-icon" style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-primary)' }}>100% Litigation-Free Land Titles</strong>
                  <p style={{ fontSize: '0.85rem' }}>Every parcel of land is pre-screened by senior legal counsels, ensuring secure registrations and bank funding.</p>
                </div>
              </div>

              <div className="value-bullet" style={{ display: 'flex', gap: '12px' }}>
                <Clock className="bullet-icon" style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-primary)' }}>Escrow & RERA Timeline Protection</strong>
                  <p style={{ fontSize: '0.85rem' }}>Project funds are managed in strict escrow setups. RERA milestones are reported on time to protect client assets.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overlap-composition reveal-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" 
              alt="Bespoke luxury home layout exterior view" 
              className="overlap-bg-img"
            />
            <div className="overlap-fg-card glass-panel" style={{ bottom: '20px' }}>
              <span className="badge-years">15+</span>
              <span className="badge-text" style={{ display: 'block', margin: '4px 0' }}>Years of Engineering Integrity</span>
              <p style={{ fontSize: '0.75rem', color: '#555' }}>Over 250 units handed over across Indore corridors with zero legal escalations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific features grid */}
      <section className="section section-dark details-features-section" style={{ borderTop: '1px solid rgba(200, 164, 93, 0.2)' }}>
        <div className="container">
          <div className="showcase-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-premium">OUR ASSURANCE SYSTEM</span>
            <h2 className="title-luxury title-luxury-center" style={{ color: 'var(--color-white)' }}>Bespoke Quality Frameworks</h2>
          </div>

          <div className="grid-3">
            <div className="card-premium card-dark-wrapper" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Award style={{ color: 'var(--color-secondary)' }} size={32} />
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.25rem' }}>ISO Quality Certified</h3>
              <p style={{ fontSize: '0.85rem' }}>Adhering to certified ISO 9001:2015 processes. All raw materials undergo stringent lab diagnostics before construction placement.</p>
            </div>

            <div className="card-premium card-dark-wrapper" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Compass style={{ color: 'var(--color-secondary)' }} size={32} />
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.25rem' }}>Vaastu-Optimized Layouts</h3>
              <p style={{ fontSize: '0.85rem' }}>Structured according to ancient directions. Main doors, master bedrooms, and kitchens are planned to maximize airflow and prosperity.</p>
            </div>

            <div className="card-premium card-dark-wrapper" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Star style={{ color: 'var(--color-secondary)' }} size={32} />
              <h3 style={{ color: 'var(--color-white)', fontSize: '1.25rem' }}>Bespoke Client Portals</h3>
              <p style={{ fontSize: '0.85rem' }}>Access construction timelines, site photography updates, legal logs, and tax receipt records through dedicated CRM managers.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .why-choose-banner-header {
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          height: 45vh;
          display: flex;
          align-items: center;
          color: var(--color-white);
        }
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(18, 18, 18, 0.8) 100%);
        }
        .banner-text-centered {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
        }
        .banner-text-centered h1 {
          font-size: 3.5rem;
          color: var(--color-white);
          margin-bottom: 1rem;
        }
        .banner-text-centered p {
          color: rgba(255,255,255,0.85);
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
