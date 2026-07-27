import React from 'react';
import { Landmark, Compass, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import Calculator from '../components/Calculator';

export default function InvestmentGuide() {
  return (
    <div className="investment-guide-page-wrapper">
      {/* Banner */}
      <section className="invest-banner-header">
        <div className="banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">CORRIDOR INTELLIGENCE</span>
          <h1>Indore Investment Guide</h1>
          <p>Read expert analysis on Indore's high appreciation corridors, land registry rules, tax exemptions, and expected asset liquidity metrics.</p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="section guide-content-section">
        <div className="container grid-2">
          
          <div className="reveal-on-scroll">
            <span className="subtitle-premium">Indore Market Dynamics</span>
            <h2 className="title-luxury">Central India's Economic Capital</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Indore stands as the industrial and IT growth center of Central India. Thanks to the expanding Super Corridor and Vijay Nagar extensions, real estate values in these zones have shown an annual capital appreciation rate of 12% to 15% over the past seven years.
            </p>
            <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
              Our RERA-compliant projects are located in strategic vicinity to the upcoming metro ring lanes and the IT corridor (which hosts TCS, Infosys, and international business parks). Investing here ensures reliable rental yields and robust asset security.
            </p>

            <div className="stats-row-small" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="stat-card-outline" style={{ padding: '1.5rem', border: '1px solid rgba(200, 164, 93, 0.25)', borderRadius: '4px' }}>
                <strong style={{ fontSize: '2rem', color: 'var(--color-secondary)', display: 'block', fontFamily: 'var(--font-headings)' }}>12-15%</strong>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Avg. Annual Appreciation</span>
              </div>
              <div className="stat-card-outline" style={{ padding: '1.5rem', border: '1px solid rgba(200, 164, 93, 0.25)', borderRadius: '4px' }}>
                <strong style={{ fontSize: '2rem', color: 'var(--color-secondary)', display: 'block', fontFamily: 'var(--font-headings)' }}>₹1500+ Cr</strong>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Corridor Infrastructure Outlays</span>
              </div>
            </div>
          </div>

          <div className="guide-faq-lists reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card-premium" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', marginBottom: '8px' }}>RERA Registration Safety</h3>
              <p style={{ fontSize: '0.85rem' }}>Always verify the RERA number on the MP government portal. All Shri Krishna Builder's townships (e.g., Kanak Smart City) are fully registered with visible legal project numbers.</p>
            </div>

            <div className="card-premium" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', marginBottom: '8px' }}>NRI Tax & Investment Rules</h3>
              <p style={{ fontSize: '0.85rem' }}>Non-resident Indians can seamlessly acquire immovable residential assets in India. Purchases can be funded through standard NRE/NRO accounts with pre-approved banking partners.</p>
            </div>

            <div className="card-premium" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.15rem', marginBottom: '8px' }}>Favorable Registry Offsets</h3>
              <p style={{ fontSize: '0.85rem' }}>Acquiring under-construction assets offers tax advantages under Section 54F of the Income Tax Act when reinvesting long-term capital gains.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded ROI Calculator */}
      <section className="section section-dark calculation-guide-section" style={{ borderTop: '1px solid rgba(200, 164, 93, 0.2)' }}>
        <div className="container">
          <div className="showcase-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-premium">ROI & MORTGAGE PLANNERS</span>
            <h2 className="title-luxury title-luxury-center" style={{ color: 'var(--color-white)' }}>Evaluate Asset Performance</h2>
          </div>
          
          <Calculator />
        </div>
      </section>

      <style>{`
        .invest-banner-header {
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80');
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
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(18, 18, 18, 0.85) 100%);
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
