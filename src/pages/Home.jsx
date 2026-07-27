import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import Calculator from '../components/Calculator';
import { 
  Building, Calendar, ShieldCheck, Landmark, Compass, Award, 
  MapPin, Play, UserCheck, Star, ChevronLeft, ChevronRight, 
  ArrowRight, Phone, Clock, FileText, CheckCircle2 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ onOpenVisitModal }) {
  const { properties, projects, testimonials, faqs, blogs } = useProperties();
  const navigate = useNavigate();
  
  // States
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeMapPin, setActiveMapPin] = useState(null);

  // References for GSAP
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);

  // Testimonial Navigation
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // GSAP Animations
  useGSAP(() => {
    // Hero Text entrance animation
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-reveal', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power4.out' }
    );
    heroTl.fromTo('.hero-stats-fade', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
      '-=0.4'
    );

    // Scroll trigger reveals
    const sections = gsap.utils.toArray('.reveal-on-scroll');
    sections.forEach((sec) => {
      gsap.fromTo(sec, 
        { y: 60, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 1, 
          scrollTrigger: {
            trigger: sec,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Image Zoom effect on hover
    gsap.utils.toArray('.zoom-hover-target').forEach((img) => {
      img.addEventListener('mouseenter', () => {
        gsap.to(img, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
      });
      img.addEventListener('mouseleave', () => {
        gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
      });
    });

  }, { scope: containerRef });

  const mapPins = [
    { id: 1, name: 'Kanak Smart City', x: '45%', y: '40%', type: 'Township', path: '/projects' },
    { id: 2, name: 'Krishna Aura Villas', x: '35%', y: '48%', type: 'Villas', path: '/properties/villa-krishna-aura' },
    { id: 3, name: 'Krishna Heights Penthouse', x: '58%', y: '32%', type: 'Apartments', path: '/properties/apartments-krishna-heights' },
    { id: 4, name: 'Shri Nivas Bungalows', x: '42%', y: '55%', type: 'Bungalows', path: '/properties/bungalow-shri-nivas' },
    { id: 5, name: 'Krishna Royal Plaza', x: '63%', y: '52%', type: 'Commercial', path: '/properties/villa-royal-arcade' }
  ];

  return (
    <div ref={containerRef} className="home-page-container">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Slow zooming luxury background image */}
        <div className="hero-bg-zoom"></div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div ref={heroTextRef} className="hero-text-container">
            <span className="subtitle-premium hero-reveal">Indore's Architectural Landmarks</span>
            <h1 className="hero-heading hero-reveal">
              Crafting Premium Living Spaces in Indore
            </h1>
            <p className="hero-subheading hero-reveal">
              Shri Krishna Builder's & Developers creates luxurious villas, premium bungalows, residential projects and investment opportunities that redefine modern living.
            </p>
            <div className="hero-buttons hero-reveal">
              <Link to="/properties" className="btn btn-secondary">Explore Projects</Link>
              <button onClick={onOpenVisitModal} className="btn btn-outline">Schedule Site Visit</button>
            </div>
          </div>

          {/* Floating statistics cards */}
          <div className="hero-stats-grid hero-stats-fade">
            <div className="hero-stat-card glass-panel">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-card glass-panel">
              <span className="stat-number">250+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="hero-stat-card glass-panel">
              <span className="stat-number">1200+</span>
              <span className="stat-label">Happy Families</span>
            </div>
            <div className="hero-stat-card glass-panel">
              <span className="stat-number">50+</span>
              <span className="stat-label">Luxury Villas</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mouse-scroll-indicator">
          <span className="mouse-wheel"></span>
        </div>
      </section>

      {/* 2. TRUST STRIP (Partner Logos) */}
      <section className="trust-strip-section">
        <div className="container trust-container">
          <span className="trust-title">TRUSTED & COMPLIANT WITH</span>
          <div className="trust-logos">
            <div className="trust-logo-item">
              <ShieldCheck className="trust-icon" />
              <span>MP-RERA REGISTERED</span>
            </div>
            <div className="trust-logo-item">
              <Landmark className="trust-icon" />
              <span>SBI PRE-APPROVED</span>
            </div>
            <div className="trust-logo-item">
              <Compass className="trust-icon" />
              <span>VAASTU COMPLIANT</span>
            </div>
            <div className="trust-logo-item">
              <Building className="trust-icon" />
              <span>CREDAI MEMBER</span>
            </div>
            <div className="trust-logo-item">
              <Award className="trust-icon" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT HIGHLIGHTS */}
      <section className="section about-highlights-section">
        <div className="container grid-2">
          <div className="about-visual reveal-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Bungalow Architecture" 
              className="about-premium-img zoom-hover-target" 
            />
            <div className="about-floating-experience-badge glass-panel">
              <span className="badge-years">15+</span>
              <span className="badge-text">Years of Building Landmarks</span>
            </div>
          </div>

          <div className="about-text-content reveal-on-scroll">
            <span className="subtitle-premium">Legacy of Elegance</span>
            <h2 className="title-luxury">Building Trust. Creating Landmarks.</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              For over a decade and a half, Shri Krishna Builder's & Developers has stood at the absolute forefront of Indore's luxury real estate development. We do not just lay bricks; we design landmarks that reflect status, elegance, and architectural innovation.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              We specialize in custom architectural designs, earthquake-resistant high-rise residences, fully integrated smart townships, and luxury villas. Every home we create represents a perfect fusion of aesthetics and durable engineering.
            </p>
            <div className="about-values-bullet-grid">
              <div className="value-bullet">
                <CheckCircle2 className="bullet-icon" />
                <div>
                  <strong>Architectural Excellence</strong>
                  <p>Designs built by India's top landscape & facade experts.</p>
                </div>
              </div>
              <div className="value-bullet">
                <CheckCircle2 className="bullet-icon" />
                <div>
                  <strong>On-Time Delivery Guarantee</strong>
                  <p>Commitment backed by legal escrow registry clauses.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Discover Our History
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE */}
      <section className="section section-dark featured-showcase-section">
        <div className="container">
          <div className="showcase-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-premium">Exclusive Landmarks</span>
            <h2 className="title-luxury title-luxury-center" style={{ color: 'var(--color-white)' }}>Our Featured Projects</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore Shri Krishna Builder's primary residential and commercial developments shaping Indore's skyline.
            </p>
          </div>

          <div className="grid-3">
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="card-premium card-dark-wrapper reveal-on-scroll">
                <div className="card-image-box">
                  <img src={proj.image} alt={proj.name} className="zoom-hover-target" />
                  <span className="card-status-badge">{proj.status}</span>
                </div>
                <div className="card-body-content dark-card-body">
                  <span className="card-meta-type">{proj.type}</span>
                  <h3 className="card-project-title">{proj.name}</h3>
                  <div className="card-location-row">
                    <MapPin size={16} className="loc-icon" />
                    <span>{proj.location}</span>
                  </div>
                  <p className="card-project-desc">{proj.description}</p>
                  <div className="card-details-row">
                    <span><strong>Size:</strong> {proj.size}</span>
                    <span><strong>Volume:</strong> {proj.units}</span>
                  </div>
                  <Link to="/projects" className="btn btn-outline btn-card-arrow">
                    <span>Explore Project Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/projects" className="btn btn-secondary">View All Active Projects</Link>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE INDORE SVG MAP SECTION */}
      <section className="section map-section">
        <div className="container">
          <div className="showcase-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="subtitle-premium">Strategic Locations</span>
            <h2 className="title-luxury title-luxury-center">Indore Corridor Site Map</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We build in Indore's highest appreciating zones: MR-12 Road, Super Corridor, Bypass Road, and Kanak Smart City. Hover on pins to explore projects.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'center' }}>
            {/* Elegant SVG Mock Map of Indore */}
            <div className="map-illustration-box reveal-on-scroll">
              <svg className="indore-svg-map" viewBox="0 0 500 400" width="100%" height="100%">
                {/* Simulated Indore Outline Paths */}
                <path d="M50 150 C 120 80, 220 50, 320 80 C 400 110, 450 190, 420 280 C 390 350, 290 380, 200 370 C 100 350, 30 250, 50 150 Z" fill="#F1ECE4" stroke="#E2D6C0" strokeWidth="3" />
                <path d="M200 150 C 230 130, 280 130, 300 160 C 310 180, 290 220, 260 230 C 220 240, 180 200, 200 150 Z" fill="#EAE2D3" stroke="#DFD7C7" strokeWidth="2" opacity="0.6" />
                
                {/* Major Connecting Roads */}
                <line x1="50" y1="150" x2="450" y2="280" stroke="#DFD7C7" strokeWidth="3" strokeDasharray="5,5" />
                <line x1="250" y1="50" x2="250" y2="370" stroke="#DFD7C7" strokeWidth="3" strokeDasharray="5,5" />

                {/* Map Grid Labels */}
                <text x="260" y="70" fill="#a49984" fontSize="10" letterSpacing="1">MR-12 ROAD</text>
                <text x="70" y="220" fill="#a49984" fontSize="10" letterSpacing="1" transform="rotate(-30 70 220)">SUPER CORRIDOR</text>
                <text x="320" y="320" fill="#a49984" fontSize="10" letterSpacing="1">BYPASS CORRIDOR</text>

                {/* Pulsing Pins */}
                {mapPins.map((pin) => (
                  <g 
                    key={pin.id} 
                    transform={`translate(${parseFloat(pin.x) * 5}, ${parseFloat(pin.y) * 4})`}
                    className="map-pin-group"
                    onMouseEnter={() => setActiveMapPin(pin)}
                    onMouseLeave={() => setActiveMapPin(null)}
                    onClick={() => navigate(pin.path)}
                    style={{ cursor: 'pointer' }}
                  >
                    <circle r="14" fill="var(--color-primary)" opacity="0.25" className="pin-pulse" />
                    <circle r="6" fill="var(--color-secondary)" />
                  </g>
                ))}
              </svg>

              {/* Dynamic tooltip box inside container */}
              {activeMapPin && (
                <div 
                  className="map-tooltip-box glass-panel"
                  style={{
                    position: 'absolute',
                    left: activeMapPin.x,
                    top: activeMapPin.y,
                    transform: 'translate(-50%, -120%)',
                    zIndex: 20
                  }}
                >
                  <span className="tooltip-type">{activeMapPin.type}</span>
                  <h4 className="tooltip-title">{activeMapPin.name}</h4>
                  <span className="tooltip-cta">Click to View Details</span>
                </div>
              )}
            </div>

            <div className="map-legend-list reveal-on-scroll">
              <span className="subtitle-premium">Indore Expansion Zones</span>
              <h3 className="legend-main-title">Select Corridors</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Indore is expanding outward rapidly. By centering our projects around Aurobindo Hospital and the Super Corridor, we guarantee premium residents quick access to schools, state-of-the-art hospitals, and the international airport, while guaranteeing investors maximum rental yield.
              </p>
              
              <div className="legend-items-box">
                {mapPins.map((pin) => (
                  <div 
                    key={pin.id} 
                    className={`legend-map-row ${activeMapPin?.id === pin.id ? 'active' : ''}`}
                    onMouseEnter={() => setActiveMapPin(pin)}
                    onMouseLeave={() => setActiveMapPin(null)}
                    onClick={() => navigate(pin.path)}
                  >
                    <MapPin className="legend-pin-icon" />
                    <div className="legend-pin-details">
                      <strong>{pin.name}</strong>
                      <span>MR-12 Corridor / {pin.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIRTUAL PROPERTY TOUR CARD */}
      <section className="section section-dark tour-section">
        <div className="container">
          <div className="tour-banner-wrapper glass-panel-dark reveal-on-scroll">
            <div className="tour-visual-box">
              <img 
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Penthouse Virtual walkthrough preview" 
              />
              <button onClick={() => setVideoOpen(true)} className="play-tour-btn" aria-label="Play virtual video walk through">
                <Play size={24} fill="var(--color-dark)" />
              </button>
            </div>
            
            <div className="tour-text-box">
              <span className="subtitle-premium">Cinematic Preview</span>
              <h3 className="tour-title">Take A Virtual Property Tour</h3>
              <p>
                Cannot visit Indore in person right now? Watch our ultra-HD drone flight walkthrough detailing the concrete layouts, emerald landscapes, and finished luxury bungalows of Kanak Smart City.
              </p>
              <div className="tour-features-bullets">
                <span className="tour-feature-tag">4K Drone Elevation</span>
                <span className="tour-feature-tag">3D Interior Spatial View</span>
                <span className="tour-feature-tag">Landscape Garden Walk</span>
              </div>
              <button onClick={() => setVideoOpen(true)} className="btn btn-secondary">
                Play HD Video Walkthrough
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONSTRUCTION PROCESS (Horizontal Timeline) */}
      <section className="section construction-process-section">
        <div className="container">
          <div className="showcase-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="subtitle-premium">Quality Lifecycles</span>
            <h2 className="title-luxury title-luxury-center">Our Construction Philosophy</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We adhere to rigid engineering and construction timelines to guarantee absolute transparency and seamless delivery of your dream home.
            </p>
          </div>

          <div className="timeline-horizontal reveal-on-scroll">
            <div className="timeline-line"></div>
            
            {/* Step 1 */}
            <div className="timeline-node">
              <div className="node-circle">1</div>
              <div className="node-content-box">
                <h4>Planning & Legal</h4>
                <p>Acquiring clean land titles and registering with MP-RERA guidelines.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-node">
              <div className="node-circle">2</div>
              <div className="node-content-box">
                <h4>Architecture & Design</h4>
                <p>Drafting 3D structures, Vaastu checks, and floor elevation blueprints.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-node">
              <div className="node-circle">3</div>
              <div className="node-content-box">
                <h4>Government Approvals</h4>
                <p>Acquiring municipal certificates and corporate home loan pre-approvals.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="timeline-node">
              <div className="node-circle">4</div>
              <div className="node-content-box">
                <h4>Core Construction</h4>
                <p>Executing RCC concrete framing and laying high-strength TMT steel columns.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="timeline-node">
              <div className="node-circle">5</div>
              <div className="node-content-box">
                <h4>Luxury Finishes</h4>
                <p>Installing imported Italian marble, modular kitchens, and smart wiring.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="timeline-node">
              <div className="node-circle">6</div>
              <div className="node-content-box">
                <h4>Handover</h4>
                <p>Final quality inspection, registry paperwork, and key handover celebration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INVESTMENT & EMI CALCULATOR SECTION */}
      <section className="section calculator-section" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container">
          <div className="showcase-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-premium">Financial Clarity</span>
            <h2 className="title-luxury title-luxury-center">Mortgage & ROI Planners</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Determine your monthly home loan installments or estimate the capital appreciation yield of properties in Indore over the next 5-20 years.
            </p>
          </div>
          
          <div className="reveal-on-scroll">
            <Calculator />
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER SECTION */}
      <section className="section testimonials-section section-dark">
        <div className="container">
          <div className="testimonials-box-wrapper reveal-on-scroll">
            <span className="subtitle-premium">Client Testimonials</span>
            <h2 className="title-luxury" style={{ color: 'var(--color-white)', marginBottom: '3rem' }}>
              What Verified Homeowners Say
            </h2>

            {/* Slider Content */}
            <div className="testimonial-slider-container">
              <div className="testimonial-slider-card glass-panel-dark">
                <div className="stars-row">
                  {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-secondary)" stroke="var(--color-secondary)" />
                  ))}
                </div>
                <p className="testimonial-quote">
                  "{testimonials[activeTestimonial].feedback}"
                </p>
                <div className="testimonial-profile">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].name} 
                    className="profile-avatar" 
                  />
                  <div className="profile-details">
                    <span className="profile-name">{testimonials[activeTestimonial].name}</span>
                    <span className="profile-role">{testimonials[activeTestimonial].role}</span>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="slider-navigation-btns">
                <button onClick={prevTestimonial} className="slider-btn" aria-label="Previous testimonial">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextTestimonial} className="slider-btn" aria-label="Next testimonial">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION SECTION */}
      <section className="section faq-home-section">
        <div className="container grid-2">
          <div className="faq-intro-text reveal-on-scroll">
            <span className="subtitle-premium">Answers & Advice</span>
            <h2 className="title-luxury">Frequently Asked Questions</h2>
            <p style={{ marginBottom: '2rem' }}>
              Have questions regarding booking registry, custom villa construction layouts, home loan approvals, or RERA numbers? Browse our key FAQ responses or call our Indore site managers directly.
            </p>
            <div className="contact-small-card glass-panel">
              <Phone size={20} className="phone-accent-icon" />
              <div>
                <strong>Talk to Site Manager</strong>
                <a href="tel:9644699206">+91 96446 99206</a>
              </div>
            </div>
          </div>

          <div className="faq-accordions-box reveal-on-scroll">
            {faqs.slice(0, 5).map((faq, index) => (
              <div 
                key={index} 
                className={`faq-accordion-item ${activeFaq === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{activeFaq === index ? '-' : '+'}</span>
                </button>
                <div className="faq-answer-panel">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA SITE VISIT SECTION */}
      <section className="section cta-visit-banner-section">
        <div className="container banner-flex-wrapper glass-panel reveal-on-scroll">
          <div className="cta-left-text">
            <span className="subtitle-premium">Book Tour</span>
            <h3>Schedule a Chauffeur-Driven Site Visit Today</h3>
            <p>
              Allow us to showcase the construction quality and spacious interiors of our luxury villas and bungalows. Chauffeur services are available within Indore municipal limits.
            </p>
          </div>
          <div className="cta-right-btn">
            <button onClick={onOpenVisitModal} className="btn btn-primary">
              Book Private Site Tour
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      {videoOpen && (
        <div className="video-modal-overlay" onClick={() => setVideoOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)}>×</button>
            <iframe 
              width="100%" 
              height="450" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Shri Krishna Builders Virtual Property Tour" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Embedded CSS Specific for Home Page */}
      <style>{`
        /* Hero Section Styling */
        .hero-section {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          color: var(--color-white);
          overflow: hidden;
        }

        .hero-bg-zoom {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          animation: ken-burns-zoom 25s infinite alternate ease-in-out;
          z-index: 1;
        }

        @keyframes ken-burns-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(15, 76, 58, 0.85) 0%, rgba(27, 27, 27, 0.7) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 70vh;
          margin-top: 80px;
        }

        .hero-text-container {
          max-width: 750px;
        }

        .hero-heading {
          font-size: 3.85rem;
          color: var(--color-white);
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .hero-subheading {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2rem;
          font-weight: 300;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.25rem;
        }

        /* Floating statistics card list */
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .hero-stat-card {
          padding: 1.5rem;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          gap: 5px;
          border-color: rgba(255,255,255,0.15);
        }

        .stat-number {
          font-family: var(--font-headings);
          font-size: 2.25rem;
          color: var(--color-secondary);
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.8);
          font-weight: 500;
        }

        /* Mouse Scroll indicator */
        .mouse-scroll-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          width: 30px;
          height: 50px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 15px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .mouse-wheel {
          width: 6px;
          height: 10px;
          background-color: var(--color-secondary);
          border-radius: 3px;
          animation: wheel-down 1.5s infinite;
        }

        @keyframes wheel-down {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(12px); }
        }

        /* Trust Strip Styles */
        .trust-strip-section {
          background-color: var(--color-primary);
          color: var(--color-white);
          padding: 24px 0;
          border-bottom: 2px solid var(--color-secondary);
        }

        .trust-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .trust-title {
          font-size: 0.75rem;
          letter-spacing: 2px;
          font-weight: 600;
          color: var(--color-secondary);
        }

        .trust-logos {
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .trust-logo-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .trust-icon {
          color: var(--color-secondary);
          width: 18px;
          height: 18px;
        }

        /* About Showcase Visual */
        .about-visual {
          position: relative;
        }

        .about-premium-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(15, 76, 58, 0.1);
        }

        .about-floating-experience-badge {
          position: absolute;
          bottom: 30px;
          left: 30px;
          padding: 1.5rem;
          border-radius: var(--border-radius-md);
          display: flex;
          align-items: center;
          gap: 15px;
          border-color: rgba(255,255,255,0.3);
          max-width: 250px;
        }

        .badge-years {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          color: var(--color-primary);
          font-weight: 700;
        }

        .badge-text {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about-values-bullet-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .value-bullet {
          display: flex;
          gap: 12px;
        }

        .bullet-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }

        .value-bullet strong {
          font-size: 0.95rem;
          color: var(--color-dark);
        }

        /* Dark project cards styling */
        .card-dark-wrapper {
          background-color: #252525;
          border-color: rgba(255,255,255,0.04);
        }

        .dark-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .card-image-box {
          position: relative;
          overflow: hidden;
          height: 240px;
        }

        .card-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-status-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: var(--color-secondary);
          color: var(--color-white);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 3px;
          letter-spacing: 1px;
        }

        .card-meta-type {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-secondary);
          font-weight: 600;
        }

        .card-project-title {
          font-size: 1.35rem;
          color: var(--color-white);
        }

        .card-location-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #bbb;
        }

        .loc-icon {
          color: var(--color-secondary);
        }

        .card-project-desc {
          font-size: 0.85rem;
          color: #aaa;
          margin-bottom: 8px;
        }

        .card-details-row {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 10px;
          font-size: 0.8rem;
          color: #ccc;
          margin-bottom: 12px;
        }

        .btn-card-arrow {
          display: flex;
          justify-content: space-between;
          padding: 10px 18px;
          font-size: 0.8rem;
        }

        /* Map illustration styles */
        .map-illustration-box {
          position: relative;
          background-color: #f1ede6;
          border-radius: var(--border-radius-lg);
          border: 2px dashed rgba(200, 155, 60, 0.3);
          box-shadow: var(--shadow-md);
          overflow: visible;
          padding: 1rem;
        }

        .indore-svg-map {
          display: block;
          max-height: 400px;
        }

        .pin-pulse {
          animation: wave 2s infinite ease-out;
          transform-origin: center;
        }

        @keyframes wave {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .map-tooltip-box {
          width: 220px;
          padding: 1rem;
          border-radius: var(--border-radius-sm);
          border-color: rgba(200, 155, 60, 0.3);
          text-align: center;
        }

        .tooltip-type {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-secondary);
          font-weight: 600;
          display: block;
        }

        .tooltip-title {
          font-size: 0.95rem;
          margin: 4px 0 8px;
          color: var(--color-primary);
        }

        .tooltip-cta {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--color-secondary);
          border-bottom: 1px solid var(--color-secondary);
        }

        .legend-items-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .legend-map-row {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 18px;
          background-color: var(--color-white);
          border: 1px solid rgba(15, 76, 58, 0.03);
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .legend-map-row:hover,
        .legend-map-row.active {
          border-color: var(--color-secondary);
          background-color: rgba(200, 155, 60, 0.05);
          transform: translateX(5px);
        }

        .legend-pin-icon {
          color: var(--color-secondary);
        }

        .legend-pin-details {
          display: flex;
          flex-direction: column;
        }

        .legend-pin-details strong {
          font-size: 0.9rem;
          color: var(--color-dark);
        }

        .legend-pin-details span {
          font-size: 0.75rem;
          color: #777;
        }

        /* Virtual Tour card layout */
        .tour-banner-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          overflow: hidden;
          border-radius: var(--border-radius-lg);
        }

        .tour-visual-box {
          position: relative;
          height: 380px;
        }

        .tour-visual-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-tour-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: var(--color-white);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .play-tour-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background-color: var(--color-secondary);
        }

        .tour-text-box {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 15px;
        }

        .tour-title {
          font-size: 1.75rem;
        }

        .tour-features-bullets {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .tour-feature-tag {
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          background-color: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 10px;
          border-radius: 3px;
          color: var(--color-accent);
          letter-spacing: 0.5px;
        }

        /* Construction Process timeline horizontal */
        .timeline-horizontal {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
          position: relative;
          padding-top: 40px;
        }

        .timeline-line {
          position: absolute;
          top: 57px;
          left: 5%;
          right: 5%;
          height: 2px;
          background-color: rgba(200, 155, 60, 0.3);
          z-index: 1;
        }

        .timeline-node {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .node-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--color-white);
          border: 2px solid var(--color-secondary);
          color: var(--color-primary);
          font-family: var(--font-headings);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .timeline-node:hover .node-circle {
          background-color: var(--color-secondary);
          color: var(--color-white);
          transform: scale(1.15);
        }

        .node-content-box h4 {
          font-size: 0.95rem;
          margin-bottom: 6px;
          color: var(--color-dark);
        }

        .node-content-box p {
          font-size: 0.75rem;
          line-height: 1.4;
          color: #666;
        }

        /* Testimonials layout */
        .testimonials-box-wrapper {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonial-slider-card {
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .stars-row {
          display: flex;
          gap: 4px;
        }

        .testimonial-quote {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          color: #e5e5e5;
          font-style: italic;
          line-height: 1.6;
        }

        .testimonial-profile {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 1rem;
        }

        .profile-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-secondary);
        }

        .profile-details {
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .profile-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-white);
        }

        .profile-role {
          font-size: 0.75rem;
          color: var(--color-secondary);
        }

        .slider-navigation-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .slider-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--color-white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .slider-btn:hover {
          background-color: var(--color-secondary);
          border-color: var(--color-secondary);
        }

        /* FAQ accordion styles */
        .faq-intro-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-small-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 1.25rem;
          border-radius: var(--border-radius-md);
          max-width: 320px;
        }

        .phone-accent-icon {
          color: var(--color-secondary);
        }

        .contact-small-card a {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-primary);
          display: block;
        }

        .faq-accordions-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-accordion-item {
          background-color: var(--color-white);
          border: 1px solid rgba(15, 76, 58, 0.05);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .faq-question-btn {
          width: 100%;
          padding: 18px 24px;
          background: none;
          border: none;
          text-align: left;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-dark);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .faq-toggle-icon {
          font-size: 1.2rem;
          color: var(--color-secondary);
        }

        .faq-answer-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          padding: 0 24px;
        }

        .faq-accordion-item.open {
          border-color: var(--color-secondary);
          box-shadow: var(--shadow-sm);
        }

        .faq-accordion-item.open .faq-answer-panel {
          max-height: 200px;
          padding-bottom: 20px;
        }

        .faq-answer-panel p {
          font-size: 0.85rem;
          color: #555;
          line-height: 1.5;
        }

        /* Banner CTA site visit */
        .banner-flex-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3rem 4rem;
          border-radius: var(--border-radius-lg);
          border-color: rgba(200, 155, 60, 0.2);
          background-color: var(--color-white);
        }

        .cta-left-text {
          max-width: 60%;
        }

        .cta-left-text h3 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: var(--color-primary);
        }

        .cta-left-text p {
          font-size: 0.9rem;
        }

        /* Video Modal Overlays */
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2100;
        }

        .video-modal-content {
          width: 90%;
          max-width: 800px;
          position: relative;
        }

        .video-modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: var(--color-white);
          font-size: 32px;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .hero-heading {
            font-size: 2.75rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tour-banner-wrapper {
            grid-template-columns: 1fr;
          }
          .tour-visual-box {
            height: 280px;
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 2.2rem;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr;
            margin-top: 1.5rem;
          }
          .hero-content {
            height: 80vh;
          }
          .timeline-horizontal {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .timeline-line {
            display: none;
          }
          .timeline-node {
            align-items: flex-start;
            text-align: left;
            flex-direction: row;
            gap: 15px;
          }
          .node-circle {
            flex-shrink: 0;
          }
          .banner-flex-wrapper {
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            text-align: center;
          }
          .cta-left-text {
            max-width: 100%;
          }
          .map-illustration-box {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
