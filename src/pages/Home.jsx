import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import Calculator from '../components/Calculator';
import { 
  Building, Calendar, ShieldCheck, Landmark, Compass, Award, 
  MapPin, Play, Star, ChevronLeft, ChevronRight, 
  ArrowRight, Phone, CheckCircle2, Shield, Award as AwardIcon, CheckCircle, HelpCircle, HardHat, FileDown 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ onOpenVisitModal }) {
  const { properties, projects, testimonials, faqs, blogs } = useProperties();
  const navigate = useNavigate();
  
  // Interactive States
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeMapPin, setActiveMapPin] = useState(null);
  const [currentProject, setCurrentProject] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [downloadingBrochure, setDownloadingBrochure] = useState(false);

  // Hero Search States
  const [searchZone, setSearchZone] = useState('MR-12 Road');
  const [searchBudget, setSearchBudget] = useState('3.0');
  const [searchType, setSearchType] = useState('Villa');

  const containerRef = useRef(null);
  const heroTextRef = useRef(null);

  // Mouse move Parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // Max offset 30px
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  // Testimonial Nav
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Projects Carousel Navigation
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1 >= projects.length - 2 ? 0 : prev + 1));
  };
  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 3 : prev - 1));
  };

  // Search Action
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/properties');
  };

  // Brochure Download Simulator
  const triggerBrochureDownload = (e) => {
    e.preventDefault();
    setDownloadingBrochure(true);
    setTimeout(() => {
      setDownloadingBrochure(false);
      alert("Brochure Download Started! Shri_Krishna_Corporate_Portfolio.pdf has been simulated successfully.");
    }, 1500);
  };

  // GSAP Reveals
  useGSAP(() => {
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-reveal', 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' }
    );
    heroTl.fromTo('.hero-stats-fade', 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.4'
    );

    gsap.utils.toArray('.reveal-on-scroll').forEach((sec) => {
      gsap.fromTo(sec, 
        { y: 50, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 1, 
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
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
      <section className="hero-section" onMouseMove={handleMouseMove}>
        <div className="hero-bg-zoom"></div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div ref={heroTextRef} className="hero-text-container">
            {/* Mobile-only logo indicator inside flow */}
            <div className="mobile-hero-logo-wrapper">
              <Building className="mobile-hero-logo-icon" />
              <span className="mobile-hero-logo-text">SHRI KRISHNA</span>
              <span className="mobile-hero-logo-sub">BUILDERS & DEVELOPERS</span>
            </div>
            <span className="subtitle-premium hero-reveal">Indore's Architectural Landmarks</span>
            <h1 className="hero-heading hero-reveal">
              Crafting Premium Living Spaces in Indore
            </h1>
            <p className="hero-subheading hero-reveal">
              Shri Krishna Builder's & Developers creates luxurious villas, premium bungalows, residential projects and investment opportunities that redefine modern living.
            </p>
            
            {/* Glassmorphic Search Bar widget */}
            <form onSubmit={handleSearchSubmit} className="hero-search-bar-widget glass-panel hero-reveal">
              <div className="hero-search-field">
                <label>Corridor Zone</label>
                <select 
                  value={searchZone} 
                  onChange={(e) => setSearchZone(e.target.value)}
                  className="hero-search-select"
                >
                  <option value="MR-12 Road">MR-12 Road (Aurobindo)</option>
                  <option value="Super Corridor">Super Corridor</option>
                  <option value="Bypass Road">Bypass Corridor</option>
                  <option value="Kanak Smart City">Kanak Smart City</option>
                </select>
              </div>

              <div className="hero-search-divider"></div>

              <div className="hero-search-field">
                <label>Budget Limit</label>
                <select 
                  value={searchBudget} 
                  onChange={(e) => setSearchBudget(e.target.value)}
                  className="hero-search-select"
                >
                  <option value="1.5">Under ₹1.5 Crore</option>
                  <option value="3.0">₹1.5 - ₹3.0 Crore</option>
                  <option value="5.0">₹3.0 - ₹5.0 Crore</option>
                  <option value="any">Any Budget</option>
                </select>
              </div>

              <div className="hero-search-divider"></div>

              <div className="hero-search-field">
                <label>Property Type</label>
                <select 
                  value={searchType} 
                  onChange={(e) => setSearchType(e.target.value)}
                  className="hero-search-select"
                >
                  <option value="Villa">Luxury Villa</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Apartment">Apartment Suite</option>
                  <option value="Farm House">Farm House Plot</option>
                </select>
              </div>

              <button type="submit" className="btn btn-secondary" style={{ padding: '12px 24px' }}>
                Search
              </button>
            </form>
          </div>

          {/* Floating statistics cards */}
          <div className="hero-stats-grid hero-stats-fade" style={{
            transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}>
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
              <span className="stat-number">1.5M+</span>
              <span className="stat-label">Sq Ft Developed</span>
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

      {/* 3. ASYMMETRICAL ABOUT COMPOSITION */}
      <section className="section about-highlights-section">
        <div className="container grid-2">
          
          <div className="overlap-composition reveal-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Villa elevation framing" 
              className="overlap-bg-img" 
            />
            <div className="overlap-fg-card glass-panel">
              <div className="about-floating-experience-badge">
                <span className="badge-years">15+</span>
                <span className="badge-text">Years of Building trust Landmarks</span>
              </div>
              <p style={{ fontSize: '0.8rem', marginTop: '10px', color: '#555' }}>
                We design environments where architectural details, green space coordinates, and concrete safety standards merge.
              </p>
            </div>
          </div>

          <div className="about-text-content reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', justify: 'center' }}>
            <span className="subtitle-premium">Legacy of Elegance</span>
            <h2 className="title-luxury">Building Trust. Creating Landmarks.</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
              For over a decade and a half, Shri Krishna Builder's & Developers has stood at the absolute forefront of Indore's luxury real estate development. We do not just lay bricks; we design landmarks that reflect status, elegance, and architectural innovation.
            </p>
            <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
              We specialize in custom architectural designs, earthquake-resistant high-rise residences, fully integrated smart townships, and luxury villas. Every home we create represents a perfect fusion of aesthetics and durable engineering.
            </p>
            
            <div className="about-buttons-row" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link to="/about" className="btn btn-primary">
                Our History
              </Link>
              <button 
                onClick={triggerBrochureDownload} 
                className="btn btn-outline" 
                style={{ color: 'var(--color-primary)', borderColor: 'var(--color-secondary)' }}
                disabled={downloadingBrochure}
              >
                <FileDown size={18} style={{ marginRight: '8px', color: 'var(--color-secondary)' }} />
                {downloadingBrochure ? 'Downloading...' : 'Download Brochure'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3.3. FOUNDER / CEO MESSAGE SECTION */}
      <section className="section founder-message-section" style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid rgba(200, 164, 93, 0.12)' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div className="reveal-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
              alt="Shri Krishna Builders Founder CEO" 
              className="founder-profile-img"
            />
          </div>

          <div className="reveal-on-scroll">
            <span className="subtitle-premium">FOUNDER'S ADDRESS</span>
            <div className="founder-quote-box glass-panel">
              <p className="founder-quote-text">
                "Our philosophy is simple: we build structures that endure. Real estate is not about short-term metrics; it is a promise of space, safety, and legacy that we carry for families in Indore."
              </p>
              <h3 className="founder-signature">G.S. Sharma</h3>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600', color: 'var(--color-secondary)' }}>
                Founder & Chief Executive Officer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. WHY INVEST IN INDORE */}
      <section className="section why-invest-section" style={{ backgroundColor: '#f6f2eb', borderTop: '1px solid rgba(200, 164, 93, 0.15)', borderBottom: '1px solid rgba(200, 164, 93, 0.15)' }}>
        <div className="container">
          <div className="showcase-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-premium">GROWTH CORRIDORS</span>
            <h2 className="title-luxury title-luxury-center">Why Invest in Indore Corridor?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Indore ranks as India's cleaner city champion and is central India's fastest expanding economic hub.
            </p>
          </div>

          <div className="invest-grid reveal-on-scroll">
            <div className="invest-card">
              <Shield className="invest-icon" size={32} />
              <h3>Cleanest City Champion</h3>
              <p>Ranked #1 cleanest city in India 7 times consecutively. Excellent municipal infrastructure, low air pollution indexes, and beautiful landscape gardens.</p>
            </div>
            <div className="invest-card">
              <Landmark className="invest-icon" size={32} />
              <h3>Mega Tech Hub Expansions</h3>
              <p>Hosts TCS & Infosys corporate campuses. Rapid workforce migration drives massive annual double-digit rental appreciation near MR-12 Road.</p>
            </div>
            <div className="invest-card">
              <Compass className="invest-icon" size={32} />
              <h3>Indore Metro Rail Corridor</h3>
              <p>Direct transit nodes connecting our townships to Vijay Nagar shopping hubs and the international airport, ensuring guaranteed asset liquidity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE CAROUSEL */}
      <section className="section section-dark featured-showcase-section">
        <div className="container">
          <div className="showcase-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="subtitle-premium">Exclusive Landmarks</span>
            <h2 className="title-luxury title-luxury-center" style={{ color: 'var(--color-white)' }}>Our Featured Projects</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore Shri Krishna Builder's primary residential and commercial developments shaping Indore's skyline.
            </p>
          </div>

          {/* Interactive slider */}
          <div className="slider-wrapper reveal-on-scroll">
            <div className="slider-track" style={{ transform: `translate3d(calc(-${currentProject} * var(--slider-width)), 0, 0)` }}>
              {projects.map((proj) => (
                <div key={proj.id} className="card-premium card-dark-wrapper" style={{ minWidth: 'calc(var(--slider-width) - 1.5rem)', margin: '0 0.75rem' }}>
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
          </div>

          <div className="slider-control-bar reveal-on-scroll">
            <button onClick={prevProject} className="slider-nav-arrow" aria-label="Previous project">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextProject} className="slider-nav-arrow" aria-label="Next project">
              <ChevronRight size={24} />
            </button>
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
            <div className="map-illustration-box reveal-on-scroll">
              <svg className="indore-svg-map" viewBox="0 0 500 400" width="100%" height="100%">
                <path d="M50 150 C 120 80, 220 50, 320 80 C 400 110, 450 190, 420 280 C 390 350, 290 380, 200 370 C 100 350, 30 250, 50 150 Z" fill="#F1ECE4" stroke="#E2D6C0" strokeWidth="3" />
                <path d="M200 150 C 230 130, 280 130, 300 160 C 310 180, 290 220, 260 230 C 220 240, 180 200, 200 150 Z" fill="#EAE2D3" stroke="#DFD7C7" strokeWidth="2" opacity="0.6" />
                
                <line x1="50" y1="150" x2="450" y2="280" stroke="#DFD7C7" strokeWidth="3" strokeDasharray="5,5" />
                <line x1="250" y1="50" x2="250" y2="370" stroke="#DFD7C7" strokeWidth="3" strokeDasharray="5,5" />

                <text x="260" y="70" fill="#a49984" fontSize="10" letterSpacing="1">MR-12 ROAD</text>
                <text x="70" y="220" fill="#a49984" fontSize="10" letterSpacing="1" transform="rotate(-30 70 220)">SUPER CORRIDOR</text>
                <text x="320" y="320" fill="#a49984" fontSize="10" letterSpacing="1">BYPASS CORRIDOR</text>

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

      {/* 6.3. PREMIUM MATERIALS & ENGINEERING SPOTLIGHT */}
      <section className="section materials-craft-section" style={{ borderBottom: '1px solid rgba(200, 164, 93, 0.15)' }}>
        <div className="container materials-split-wrapper reveal-on-scroll">
          <div className="materials-text-col">
            <span className="subtitle-premium">ENGINEERING EXCELLENCE</span>
            <h2 className="title-luxury">Premium Materials & Craftsmanship</h2>
            <p style={{ marginBottom: '2rem' }}>
              We believe structural safety forms the foundation of luxury. Every column is reinforced with high-strength concrete to assure timeless durability.
            </p>

            <div className="materials-detail-list">
              <div className="materials-item-row">
                <h4>M25 - M35 Structural Concrete</h4>
                <p>Mixed and poured using certified ready-mix processes, offering standard high seismic protections to our duplex and penthouse buildings.</p>
              </div>
              <div className="materials-item-row">
                <h4>Corrosion-Free TMT Steel Reinforcement</h4>
                <p>Heavy-duty anti-corrosive coated iron structural steel rods protecting foundations against moisture seepage and cracks.</p>
              </div>
              <div className="materials-item-row">
                <h4>Kohler Premium Bath Fittings</h4>
                <p>Installed standard across all luxury master bathrooms, offering sleek modular design and low maintenance costs.</p>
              </div>
            </div>
          </div>

          <div className="materials-image-col">
            <img 
              src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80" 
              alt="High quality steel construction framing details" 
              className="materials-premium-img"
            />
          </div>
        </div>
      </section>

      {/* 6.5. FULL-BLEED LUXURY LIFESTYLE SECTION */}
      <section className="lifestyle-section" style={{ borderBottom: '1px solid rgba(200, 164, 93, 0.15)' }}>
        <div className="lifestyle-fullbleed-wrapper reveal-on-scroll">
          <div className="lifestyle-item-block">
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" alt="Clubhouse lounge" />
            <div className="lifestyle-overlay-content">
              <span className="subtitle-premium">RECREATION</span>
              <h3>Private Elite Clubhouse</h3>
              <p>An exclusive wellness lounge reserved for residents, equipped with high-end gym equipment and gourmet coffee decks.</p>
            </div>
          </div>

          <div className="lifestyle-item-block">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" alt="Infinity Swimming pool" />
            <div className="lifestyle-overlay-content">
              <span className="subtitle-premium">WELLNESS</span>
              <h3>Infinity Edge Pool</h3>
              <p>A heated infinity pool with standard luxury sunbeds and poolside garden landscaping.</p>
            </div>
          </div>

          <div className="lifestyle-item-block">
            <img src="https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80" alt="Botanical landscaped garden path" />
            <div className="lifestyle-overlay-content">
              <span className="subtitle-premium">BIOPHILIA</span>
              <h3>Landscaped Gardens</h3>
              <p>Manicured green avenues, themed parks, and walking pathways designed by botanists for pure air quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONSTRUCTION PROCESS (7-Node Horizontal Timeline) */}
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
            
            <div className="timeline-node">
              <div className="node-circle">1</div>
              <div className="node-content-box">
                <h4>Planning</h4>
                <p>Zoning checks, legal title clearances, and MP-RERA submissions.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-circle">2</div>
              <div className="node-content-box">
                <h4>Architecture</h4>
                <p>Blueprints, Vaastu alignment, structures, and detailed 3D elevations.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-circle">3</div>
              <div className="node-content-box">
                <h4>Approval</h4>
                <p>Obtaining corporation NOCs, builder clearances, and loan credentials.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-circle">4</div>
              <div className="node-content-box">
                <h4>Construction</h4>
                <p>RCC framing concrete pours, structural columns, blockwork foundations.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-circle">5</div>
              <div className="node-content-box">
                <h4>Interior</h4>
                <p>Premium wiring setups, Italian marble floor laying, modular adjustments.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-circle">6</div>
              <div className="node-content-box">
                <h4>Finishing</h4>
                <p>Plumbing inspections, sanitary fittings (Kohler), final detailing & paints.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-circle">7</div>
              <div className="node-content-box">
                <h4>Handover</h4>
                <p>Registry validation, key handovers, and housewarming support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7.5. AWARDS & RECOGNITION SECTION */}
      <section className="section awards-recognition-section" style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid rgba(200, 164, 93, 0.12)' }}>
        <div className="container">
          <div className="showcase-header reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-premium">HONORS & MILESTONES</span>
            <h2 className="title-luxury title-luxury-center">Awards & Recognition</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Our commitment to delivering structural integrity and luxurious layout designs has earned us key regional and national accolades.
            </p>
          </div>

          <div className="grid-3 reveal-on-scroll">
            <div className="card-premium" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '15px', borderLeft: '3px solid var(--color-secondary)' }}>
              <AwardIcon size={36} style={{ color: 'var(--color-secondary)' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>Best Luxury Builder Indore</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#888' }}>CENTRAL INDIA PROPERTY FORUM 2025</span>
              <p style={{ fontSize: '0.85rem' }}>Awarded in recognition of our flagship premium duplex bungalows and Vaastu design alignments at Kanak Smart City.</p>
            </div>

            <div className="card-premium" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '15px', borderLeft: '3px solid var(--color-secondary)' }}>
              <AwardIcon size={36} style={{ color: 'var(--color-secondary)' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>Excellence in Structural Quality</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#888' }}>MADHYA PRADESH ENGINEERING COUNCIL</span>
              <p style={{ fontSize: '0.85rem' }}>Acknowledging our commitment to concrete compressive checks, TMT iron diagnostics, and seismic column protection.</p>
            </div>

            <div className="card-premium" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '15px', borderLeft: '3px solid var(--color-secondary)' }}>
              <AwardIcon size={36} style={{ color: 'var(--color-secondary)' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>Clean RERA Compliance Lead</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#888' }}>REAL ESTATE TRUST COUNCIL OF INDIA</span>
              <p style={{ fontSize: '0.85rem' }}>Honored for zero regulatory delays, absolute escrow clarity, and timely registry handovers across our townships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INVESTMENT & EMI CALCULATOR SECTION */}
      <section className="section calculator-section" style={{ backgroundColor: '#FAF8F5', borderTop: '1px solid rgba(200, 164, 93, 0.15)' }}>
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

      {/* 8.5. PRE-APPROVED BANKING PARTNERS STRIP */}
      <section className="section banking-partners-section" style={{ backgroundColor: '#f6f2eb', borderTop: '1px solid rgba(200, 164, 93, 0.12)', borderBottom: '1px solid rgba(200, 164, 93, 0.12)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="subtitle-premium">HOME FINANCE</span>
            <h3 className="title-luxury title-luxury-center" style={{ fontSize: '2rem' }}>Our Pre-Approved Banking Partners</h3>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Acquire competitive mortgage rates and quick sanction files through our verified financial relationships.
            </p>
          </div>

          <div className="banking-slider-track reveal-on-scroll">
            <div className="banking-partner-logo">
              <Landmark size={20} />
              <span>State Bank of India</span>
            </div>
            <div className="banking-partner-logo">
              <Landmark size={20} />
              <span>HDFC Bank</span>
            </div>
            <div className="banking-partner-logo">
              <Landmark size={20} />
              <span>ICICI Bank</span>
            </div>
            <div className="banking-partner-logo">
              <Landmark size={20} />
              <span>Axis Bank</span>
            </div>
            <div className="banking-partner-logo">
              <Landmark size={20} />
              <span>Bank of Baroda</span>
            </div>
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
    </div>
  );
}
