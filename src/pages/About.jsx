import React, { useRef } from 'react';
import { ShieldCheck, Award, Users, Compass, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.about-fade-up', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo('.timeline-slide-in',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: containerRef });

  const timelineEvents = [
    { year: '2011', title: 'The Foundation', desc: 'Shri Krishna Builders was founded in Indore with a vision to build luxury duplex homes.' },
    { year: '2015', title: 'First Mega Bungalow', desc: 'Successfully delivered a premium row housing complex of 35 luxury bungalows in Bypass corridor.' },
    { year: '2018', title: 'Heights & Penthouses', desc: 'Inaugurated Krishna Heights in Vijay Nagar, marking our entry into premium residential high-rises.' },
    { year: '2021', title: 'Integrated Smart Township', desc: 'Launched Kanak Smart City near Aurobindo Hospital, spanning 50+ acres of premium plots.' },
    { year: '2024', title: 'Villa Landmarks', desc: 'Delivered Krishna Aura Villas, featuring Indore\'s first double-height glass villa elevations.' },
    { year: '2026', title: 'Entering Commercials', desc: 'Broke ground on Shri Krishna Royal Plaza to establish Indore\'s next corporate business address.' }
  ];

  return (
    <div ref={containerRef} className="about-page-wrapper">
      {/* Banner */}
      <section className="about-banner-header">
        <div className="about-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium about-fade-up">ABOUT THE DEVELOPER</span>
          <h1 className="about-fade-up">Shri Krishna Builder's & Developers</h1>
          <p className="about-fade-up">Building Trust. Creating Landmarks since 2011 in Indore, Madhya Pradesh.</p>
        </div>
      </section>

      {/* Intro details */}
      <section className="section about-story-sec">
        <div className="container grid-2">
          <div className="story-text-box about-fade-up">
            <span className="subtitle-premium">OUR STORY</span>
            <h2 className="title-luxury">A Legacy of High-End Architecture</h2>
            <p style={{ marginBottom: '1rem' }}>
              Shri Krishna Builder's & Developers was established with a singular mission: to provide the people of Indore with premium, modern homes that do not compromise on construction safety or architectural elegance. Over the last 15 years, we have grown from building bespoke duplex houses to developing massive gated townships and commercial complexes.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Our projects, located in key strategic expansion zones of Indore like MR-12 Road, Vijay Nagar, and Super Corridor, represent safe investments. We adhere strictly to RERA guidelines and utilize the highest quality engineering resources.
            </p>
            <div className="achievements-mini-row">
              <div className="achievement-item">
                <span className="number">15+</span>
                <span className="label">Years of Trust</span>
              </div>
              <div className="achievement-item">
                <span className="number">250+</span>
                <span className="label">Landmarks Delivered</span>
              </div>
              <div className="achievement-item">
                <span className="number">1200+</span>
                <span className="label">Homeowners</span>
              </div>
            </div>
          </div>
          <div className="story-image-box about-fade-up">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury interior showroom design" 
              className="story-premium-img" 
            />
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section section-dark mission-vision-section">
        <div className="container grid-3">
          {/* Mission */}
          <div className="mvv-card glass-panel-dark about-fade-up">
            <Award className="mvv-icon" />
            <h3>Our Mission</h3>
            <p>
              To construct top-tier, Vaastu-compliant residential and commercial properties that raise the standard of luxury living, utilizing modern material science and structural engineering.
            </p>
          </div>

          {/* Vision */}
          <div className="mvv-card glass-panel-dark about-fade-up">
            <Compass className="mvv-icon" />
            <h3>Our Vision</h3>
            <p>
              To lead Central India’s high-end property segment by building integrated smart townships that prioritize green landscaping, underground services, and advanced client security.
            </p>
          </div>

          {/* Values */}
          <div className="mvv-card glass-panel-dark about-fade-up">
            <ShieldCheck className="mvv-icon" />
            <h3>Our Core Values</h3>
            <p>
              Uncompromising legal registry transparency, structural concrete longevity, rigid on-time key deliveries, and lifelong customer relationship care.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section timeline-section">
        <div className="container timeline-container">
          <div className="showcase-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-premium">Growth Path</span>
            <h2 className="title-luxury title-luxury-center">Our Historic Milestones</h2>
          </div>

          <div className="vertical-timeline-line">
            <div className="timeline-progress-bar"></div>
            
            {timelineEvents.map((evt, idx) => (
              <div 
                key={idx} 
                className={`timeline-row-item timeline-slide-in ${
                  idx % 2 === 0 ? 'left-aligned' : 'right-aligned'
                }`}
              >
                <div className="timeline-bullet-node"></div>
                <div className="timeline-card-content card-premium">
                  <span className="timeline-year">{evt.year}</span>
                  <h4>{evt.title}</h4>
                  <p>{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Bullets */}
      <section className="section why-choose-sec" style={{ backgroundColor: '#fdfbfa' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div className="why-text-box">
            <span className="subtitle-premium">Uncompromising Details</span>
            <h2 className="title-luxury">Why Shri Krishna Builders?</h2>
            <p style={{ marginBottom: '2rem' }}>
              We build luxury that lasts. Our properties are crafted with attention to architectural details, green space ratios, and client investment goals.
            </p>
            <div className="bullets-container-vertical">
              <div className="why-bullet-row">
                <CheckCircle2 className="why-bullet-icon" />
                <p><strong>Premium Materials Only:</strong> M25 grade concrete, standard TMT steel reinforcement, and imported Italian stone finishes.</p>
              </div>
              <div className="why-bullet-row">
                <CheckCircle2 className="why-bullet-icon" />
                <p><strong>Compliant with MP-RERA:</strong> Clean title deeds, immediate registry, and secure escrow accounting systems.</p>
              </div>
              <div className="why-bullet-row">
                <CheckCircle2 className="why-bullet-icon" />
                <p><strong>Client Relationship Management:</strong> Fortnightly video and photo status updates sent to buyers directly.</p>
              </div>
              <div className="why-bullet-row">
                <CheckCircle2 className="why-bullet-icon" />
                <p><strong>Vaastu Friendly Architecture:</strong> Directional planning for optimal light, ventilation, and prosperity parameters.</p>
              </div>
            </div>
          </div>
          <div className="why-img-box">
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" 
              alt="Bungalow architecture framing" 
              className="why-premium-img" 
            />
          </div>
        </div>
      </section>

      {/* CSS Styles for About Page */}
      <style>{`
        .about-banner-header {
          height: 50vh;
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: var(--color-white);
        }

        .about-banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 76, 58, 0.85);
        }

        .banner-text-centered {
          position: relative;
          z-index: 2;
          text-align: center;
          width: 100%;
        }

        .banner-text-centered h1 {
          color: var(--color-white);
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .banner-text-centered p {
          color: var(--color-accent);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Story layout */
        .story-premium-img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .achievements-mini-row {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .achievement-item {
          display: flex;
          flex-direction: column;
        }

        .achievement-item .number {
          font-family: var(--font-headings);
          font-size: 2.2rem;
          color: var(--color-primary);
          font-weight: 700;
          line-height: 1.1;
        }

        .achievement-item .label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #666;
        }

        /* MVV layout */
        .mvv-card {
          padding: 2.5rem;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .mvv-icon {
          color: var(--color-secondary);
          width: 36px;
          height: 36px;
        }

        .mvv-card h3 {
          font-size: 1.35rem;
          color: var(--color-white);
        }

        /* Vertical Timeline */
        .timeline-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .vertical-timeline-line {
          position: relative;
          padding: 2rem 0;
        }

        .vertical-timeline-line::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background-color: rgba(200, 155, 60, 0.3);
        }

        .timeline-row-item {
          display: flex;
          position: relative;
          width: 50%;
          margin-bottom: 3rem;
        }

        .timeline-row-item.left-aligned {
          left: 0;
          padding-right: 40px;
          justify-content: flex-end;
        }

        .timeline-row-item.right-aligned {
          left: 50%;
          padding-left: 40px;
          justify-content: flex-start;
        }

        .timeline-bullet-node {
          position: absolute;
          top: 30px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--color-secondary);
          border: 3px solid var(--color-bg-light);
          z-index: 10;
        }

        .left-aligned .timeline-bullet-node {
          right: -7px;
        }

        .right-aligned .timeline-bullet-node {
          left: -7px;
        }

        .timeline-card-content {
          padding: 1.5rem 2rem;
          width: 100%;
          max-width: 380px;
        }

        .timeline-year {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-secondary);
          display: block;
          margin-bottom: 6px;
        }

        .timeline-card-content h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .timeline-card-content p {
          font-size: 0.8rem;
          color: #666;
        }

        /* Why choose us styles */
        .why-premium-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-md);
        }

        .bullets-container-vertical {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .why-bullet-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .why-bullet-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .why-bullet-row p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .banner-text-centered h1 {
            font-size: 2.2rem;
          }
          .achievements-mini-row {
            gap: 1rem;
          }
          .vertical-timeline-line::before {
            left: 20px;
          }
          .timeline-row-item {
            width: 100%;
            left: 0 !important;
            padding-left: 45px !important;
            padding-right: 0 !important;
            justify-content: flex-start;
          }
          .timeline-bullet-node {
            left: 13px !important;
          }
          .timeline-card-content {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
