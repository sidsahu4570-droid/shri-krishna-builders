import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import { 
  MapPin, BedDouble, Bath, Maximize2, ShieldAlert, 
  CheckCircle, ArrowLeft, Phone, Calendar, Mail, 
  Calculator as CalcIcon, Landmark, ShieldCheck, Compass,
  Info, FileText, Check, ChevronLeft, ChevronRight, HelpCircle,
  Star, Shield, Award, Droplet, Zap, Wifi, Eye, Play, ArrowRight,
  Sparkles, Home as HomeIcon, Map, Flame, Layers, DollarSign
} from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();
  const { properties } = useProperties();
  const property = properties.find((p) => p.id === id);

  // Gallery States
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Floor Plan State
  const [activeFloorPlan, setActiveFloorPlan] = useState('4 BHK');

  // Interactive Media Mode
  const [mediaMode, setMediaMode] = useState('gallery'); // gallery, video, 360

  // Collapsible FAQs State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [msg, setMsg] = useState('I am interested in scheduling a premium site tour. Please contact me with availability.');
  const [success, setSuccess] = useState(false);

  // Interactive EMI States
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [customLoanAmount, setCustomLoanAmount] = useState(0);

  // Set default custom loan amount when property changes
  useEffect(() => {
    if (property) {
      const baseAmount = property.priceNum || 20000000;
      setCustomLoanAmount(Math.round(baseAmount * 0.8));
      setActiveImgIndex(0);
      window.scrollTo(0, 0);
    }
  }, [property, id]);

  if (!property) {
    return (
      <div className="container" style={{ padding: '120px 0 80px', textAlign: 'center' }}>
        <ShieldAlert size={60} style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }} />
        <h2>Property Not Found</h2>
        <p>The premium property you are looking for does not exist or has been registered by another owner.</p>
        <Link to="/properties" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Back to Luxury Catalog
        </Link>
      </div>
    );
  }

  // Gallery images (simulated premium list based on property type)
  const galleryImages = [
    property.image,
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80'
  ];

  // Specific properties calculations
  const basePrice = property.priceNum || 20000000;
  const calculatedDownPayment = Math.round(basePrice * (downPaymentPercent / 100));
  const calculatedLoanAmount = basePrice - calculatedDownPayment;

  // Calculate Monthly EMI
  const calculateEMI = () => {
    const P = calculatedLoanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTerm * 12;
    if (isNaN(P) || P <= 0) return 0;
    
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setPhone('');
      setEmail('');
      setBudget('');
      setVisitDate('');
    }, 6000);
  };

  // 10 Collapsible FAQs
  const faqData = [
    {
      q: 'Is this project approved by Madhya Pradesh RERA?',
      a: `Yes. This development has been fully audited and registered under MP-RERA code MP-RERA-IND-PROJ-8930. The developer has clean, verified land titles with zero legal encumbrances, ensuring secure asset ownership.`
    },
    {
      q: 'What is the current construction status and timeline for possession?',
      a: `The project is currently in the advanced finishing phases. Core civil concrete frames and brickwork installations are complete. Standard plumbing, painting, and interior styling layouts are underway. Final keys and possession handovers are scheduled for December 2026.`
    },
    {
      q: 'Which banks offer home loan approvals for this property?',
      a: 'This project is pre-approved for up to 80-85% funding by all major financial institutions including SBI, HDFC Bank, ICICI Bank, Axis Bank, and LIC Housing Finance. We have dedicated banking managers who can expedite documentation.'
    },
    {
      q: 'Are custom changes in layout permitted during finishing stages?',
      a: 'Yes. Buyers booking properties prior to the final plastering phase can collaborate with our architecture division to choose marble accents, modular kitchen designs, electrical plug distributions, and bathroom tile motifs.'
    },
    {
      q: 'What are the charges for society club membership and monthly maintenance?',
      a: 'The premium clubhouse membership is included with the registry purchase. Monthly society upkeep maintenance is estimated at ₹3.5 per Sq.Ft. of carpet area, covering garden upkeep, lift safety, guard security, and lighting.'
    },
    {
      q: 'Does the property have dedicated car parking, and what are the allocations?',
      a: 'Yes, this unit comes with two dedicated, covered parking spaces on the stilt/basement level. Gated visitors parking blocks are separate and situated near the entrance checkpost.'
    },
    {
      q: 'What eco-friendly systems are implemented in the project layout?',
      a: 'The project integrates organic landscape grids, full rainwater harvesting channels, decentralized sewage processing columns, smart LED solar street lighting, and dedicated EV charging outlets.'
    },
    {
      q: 'What are the primary booking payment milestones?',
      a: 'The property can be locked with a 10% booking token. 10% is due during contract signing, 60% is distributed over slab construction milestones, and the final 20% is payable upon possession handover.'
    },
    {
      q: 'Are backup power systems provided for personal residences?',
      a: 'Yes, the township is equipped with dual heavy-duty silent DG generators providing 100% backup for all common elevators, streetlights, and security grids, alongside a 5kVA power feed to every personal unit.'
    },
    {
      q: 'How can I schedule a physical walkthrough or site pickup?',
      a: 'You can easily request a physical walkthrough by clicking "Book Site Visit" on the inquiry card. We provide chauffeured, air-conditioned pickup and drop services from anywhere within Indore city boundaries.'
    }
  ];

  // Amenities Data
  const amenitiesList = [
    { title: 'Private Swimming Pool', desc: 'Temperature-controlled lap pool', icon: <Droplet size={20} /> },
    { title: 'Grand Clubhouse', desc: 'Double-height luxury lounge', icon: <Award size={20} /> },
    { title: 'Premium Wellness Gym', desc: 'World-class training equipment', icon: <Sparkles size={20} /> },
    { title: 'Jogging Track', desc: 'Cushioned green walking paths', icon: <Compass size={20} /> },
    { title: 'Thematic Garden', desc: 'Manicured botanical arrays', icon: <CheckCircle size={20} /> },
    { title: 'Children Play Park', desc: 'Safe kids recreation layout', icon: <HomeIcon size={20} /> },
    { title: 'Indoor Games Room', desc: 'Billiards, tennis & chess lounge', icon: <Layers size={20} /> },
    { title: 'Smart Home Hub', desc: 'Full automated lighting & climate', icon: <Zap size={20} /> },
    { title: 'EV Charging Bay', desc: 'Dedicated electric vehicle ports', icon: <BatteryIcon size={20} /> },
    { title: 'Visitor Parking Grid', desc: 'Separate secure parking slots', icon: <Landmark size={20} /> },
    { title: '100% Power Backup', desc: 'Dual heavy-duty silent generators', icon: <Zap size={20} /> },
    { title: 'Rain Water Harvesting', desc: 'Eco-conscious ground recharging', icon: <Droplet size={20} /> },
    { title: '24x7 Armed Security', desc: 'Triple-tier perimeter checkposts', icon: <ShieldCheck size={20} /> },
    { title: 'CCTV Surveillance', desc: 'Continuous high-definition monitors', icon: <Eye size={20} /> },
    { title: 'High-Speed Elevators', desc: 'Premium Schindler lift capsules', icon: <ArrowRight size={20} /> },
    { title: 'Grand Community Hall', desc: 'Air-conditioned banquet venue', icon: <Award size={20} /> },
    { title: 'Meditation Zone', desc: 'Zen rock gardens & silence deck', icon: <Compass size={20} /> },
    { title: 'Senior Citizen Arena', desc: 'Shaded seating & memory groves', icon: <HomeIcon size={20} /> },
    { title: 'Landscape Yoga Deck', desc: 'Sunrise facing wooden platform', icon: <Compass size={20} /> },
    { title: 'Open Amphitheatre', desc: 'Outdoor screening & event bowl', icon: <Map size={20} /> },
    { title: 'Smart High-Speed WiFi', desc: 'Fiber-optic broadband pre-wired', icon: <Wifi size={20} /> }
  ];

  // Floor plan details data lookup
  const floorPlanDetails = {
    '2 BHK': { area: '1,450 Sq.Ft.', rooms: '2 Bed, 2 Bath, 1 Balcony', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80', desc: 'Compact luxury plan with optimized ventilation, modular kitchen, and spacious master suite.' },
    '3 BHK': { area: '2,200 Sq.Ft.', rooms: '3 Bed, 3 Bath, 2 Balconies', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80', desc: 'Generous layout featuring separate family living lounges, guest bedrooms, and servant quarters.' },
    '4 BHK': { area: '3,800 Sq.Ft.', rooms: '4 Bed, 5 Bath, 3 Balconies', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80', desc: ' Breathtaking double-height lounge planning, private office room, and dual master suites with modular wardrobes.' },
    'Villa Layout': { area: '4,500 Sq.Ft.', rooms: '4 Bed, 6 Bath, Private Pool, Rooftop Deck', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80', desc: 'Flagship elevation mapping. Comes with a private courtyard garden, private plunge pool, and rooftop sky bar.' },
    'Master Plan': { area: '10+ Acres Gated', rooms: 'Total Estate Infrastructure', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80', desc: 'Complete layout showing clubhouse location, asphalt lanes, green belts, guard checkpoints, and water towers.' }
  };

  // Get similar properties (exclude current property)
  const similarProps = properties.filter((p) => p.id !== property.id).slice(0, 4);

  return (
    <div className="property-details-page">
      
      {/* 1. Header Navigation bar */}
      <div className="details-top-nav container">
        <Link to="/properties" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to Luxury Catalog</span>
        </Link>
        <span className="project-code-label">Project Code: {property.id.toUpperCase().substring(0, 8)}</span>
      </div>

      {/* 2. Hero Gallery Section */}
      <section className="section gallery-showcase-section">
        <div className="container">
          <div className="gallery-showcase-wrapper">
            
            {/* Interactive Visual Panel */}
            <div className="main-visual-display">
              {mediaMode === 'gallery' && (
                <img 
                  src={galleryImages[activeImgIndex]} 
                  alt={property.name} 
                  className="main-gallery-img"
                  onClick={() => setLightboxOpen(true)}
                />
              )}
              {mediaMode === 'video' && (
                <div className="video-player-simulation">
                  <div className="simulation-overlay">
                    <Play size={64} className="play-pulse-btn" />
                    <span>Watch Premium Architectural Film</span>
                  </div>
                  <img src={property.image} alt="Video Thumbnail" />
                </div>
              )}

              {/* Media Controls Bar */}
              <div className="media-selector-tabs">
                <button 
                  onClick={() => setMediaMode('gallery')} 
                  className={`media-tab ${mediaMode === 'gallery' ? 'active' : ''}`}
                >
                  <FileText size={14} />
                  <span>Image Slider</span>
                </button>
                <button 
                  onClick={() => setMediaMode('video')} 
                  className={`media-tab ${mediaMode === 'video' ? 'active' : ''}`}
                >
                  <Play size={14} />
                  <span>Play Video</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="thumbnail-gallery-grid">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`thumb-box ${activeImgIndex === idx && mediaMode === 'gallery' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveImgIndex(idx);
                    setMediaMode('gallery');
                  }}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  {idx === galleryImages.length - 1 && (
                    <div className="more-overlay" onClick={() => setLightboxOpen(true)}>
                      <Eye size={20} />
                      <span>+{galleryImages.length} More</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Double Column Core Page layout */}
      <section className="section core-details-body">
        <div className="container grid-details-page">
          
          {/* LEFT COLUMN: Visuals, specifications, copy storytelling */}
          <div className="details-main-content-col">
            
            {/* Header summary info block */}
            <div className="property-summary-badge-card glass-panel">
              <div className="summary-left-info">
                <span className="summary-status-tag">{property.status}</span>
                <span className="summary-type-tag">{property.type}</span>
                <h1 className="summary-h1-name">{property.name}</h1>
                <div className="summary-pin-row">
                  <MapPin size={16} />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="summary-right-price">
                <span className="price-tag-label">Exclusive Pricing</span>
                <h2 className="price-tag-h2">{property.price}</h2>
                <span className="price-approx-sq">Built area: {property.area}</span>
              </div>
            </div>

            {/* General Property details metrics table */}
            <div className="property-specs-summary-grid">
              <div className="summary-spec-card">
                <span className="spec-metric-label">Builder Entity</span>
                <strong className="spec-metric-val">Shri Krishna Builders</strong>
              </div>
              <div className="summary-spec-card">
                <span className="spec-metric-label">Possession Date</span>
                <strong className="spec-metric-val">Dec 2026</strong>
              </div>
              <div className="summary-spec-card">
                <span className="spec-metric-label">Project Scale</span>
                <strong className="spec-metric-val">10+ Acres</strong>
              </div>
              <div className="summary-spec-card">
                <span className="spec-metric-label">RERA Number</span>
                <strong className="spec-metric-val" style={{ color: 'var(--color-secondary)' }}>MP-RERA-IND-PROJ-8930</strong>
              </div>
            </div>

            {/* Key Highlights Elegant Cards Grid */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Key Highlights</h3>
              <div className="highlights-grid-cards">
                <div className="highlight-card">
                  <span className="hl-title">Bedrooms</span>
                  <span className="hl-value">{property.bedrooms > 0 ? `${property.bedrooms} BHK` : 'Commercial'}</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Bathrooms</span>
                  <span className="hl-value">{property.bathrooms} Baths</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Balconies</span>
                  <span className="hl-value">3 Premium</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Car Parking</span>
                  <span className="hl-value">2 Covered</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Built-up Area</span>
                  <span className="hl-value">{property.area}</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Plot Size</span>
                  <span className="hl-value">2,400 Sq.Yd</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Facing</span>
                  <span className="hl-value">East Vaastu</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Floor Options</span>
                  <span className="hl-value">G+1 Duplex</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Possession</span>
                  <span className="hl-value">Immediate</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Furnishing</span>
                  <span className="hl-value">Semi-Furnished</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Construction Type</span>
                  <span className="hl-value">Monolithic Concrete</span>
                </div>
                <div className="highlight-card">
                  <span className="hl-title">Age of Property</span>
                  <span className="hl-value">Brand New</span>
                </div>
              </div>
            </div>

            {/* Property Overview Extended Narrative */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Property Overview</h3>
              <div className="narrative-editorial-block">
                <p>
                  <strong>Architectural Philosophy & Elegance:</strong> Engineered to provide a bespoke lifestyle, these residences represent the absolute zenith of luxury development. We merge clean, contemporary minimalist geometry with floor-to-ceiling glass paneling and raw travertine stone columns. The double-height family living lounges are meticulously aligned with natural air-circulation vents, creating spaces that feel grand, bright, and breezy.
                </p>
                <p>
                  <strong>Uncompromising Structural Integrity:</strong> Built for generations, the foundations are structured with corrosion-resistant premium TMT steel bars and high-grade M25 concrete, providing ultimate seismic resistance. Every piping run utilizes leakproof composite layers, and acoustic wall linings separate personal suites to ensure absolute peace and quiet inside the rooms.
                </p>
                <p>
                  <strong>Finest Global Finishes:</strong> All interiors are dressed in imported Italian marble (Bottochino and Satvario options). Features include modular designer kitchens equipped with soft-close Blum hardware, integrated chimney hoods, smart vanity bathroom mirrors, and premium Kohler bath hardware. The entryways feature solid solid teak wood doors with multi-point smart safety locks.
                </p>
                <p>
                  <strong>Connected & Green Living:</strong> Situated in Indore's most promising investment corridor, this property incorporates advanced sustainability. Integrated rainwater harvesting columns recharge local aquifers, while solar panels heat the water. The residences are pre-wired with high-speed fiber-optic lines and automated home hubs for seamless app-based control of lights, security cameras, and ambient cooling systems.
                </p>
              </div>
            </div>

            {/* Premium Amenities Icon Cards Grid */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Exclusive Amenities</h3>
              <div className="amenities-grid-premium">
                {amenitiesList.map((am, idx) => (
                  <div key={idx} className="amenity-premium-card">
                    <div className="amenity-icon-box">{am.icon}</div>
                    <div className="amenity-text-box">
                      <span className="am-card-title">{am.title}</span>
                      <span className="am-card-desc">{am.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Floor Plans Section */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Interactive Floor Plans</h3>
              <p className="section-desc-para">Toggle the architectural layouts to explore spatial room planning.</p>
              <div className="floorplans-container glass-panel">
                <div className="floorplans-selector-bar">
                  {Object.keys(floorPlanDetails).map((plan) => (
                    <button 
                      key={plan}
                      onClick={() => setActiveFloorPlan(plan)}
                      className={`floorplan-tab-btn ${activeFloorPlan === plan ? 'active' : ''}`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
                <div className="floorplan-content-grid">
                  <div className="floorplan-specs-box">
                    <h4>{activeFloorPlan} Layout Schema</h4>
                    <ul className="floorplan-specs-list">
                      <li><strong>Area Scale:</strong> {floorPlanDetails[activeFloorPlan].area}</li>
                      <li><strong>Layout Split:</strong> {floorPlanDetails[activeFloorPlan].rooms}</li>
                      <li><strong>Vaastu Aligned:</strong> 100% Compliant</li>
                    </ul>
                    <p className="floorplan-desc-text">{floorPlanDetails[activeFloorPlan].desc}</p>
                    <button onClick={() => setSuccess(true)} className="btn btn-secondary text-sm">
                      Request PDF Blueprints
                    </button>
                  </div>
                  <div className="floorplan-visual-box">
                    <img src={floorPlanDetails[activeFloorPlan].image} alt="Floor Plan Blueprint" />
                    <span className="blueprint-stamp">ARCHITECTURAL PREVIEW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Specifications Table */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Technical Specifications</h3>
              <div className="specs-table-container">
                <table className="specs-luxury-table">
                  <thead>
                    <tr>
                      <th>Structure Domain</th>
                      <th>Premium Material Standard Spec</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Structure</strong></td>
                      <td>Seismic resistant RCC framed construction using M25 grade concrete and premium TMT steel bars.</td>
                    </tr>
                    <tr>
                      <td><strong>Flooring</strong></td>
                      <td>Imported Bottochino Italian marble in living rooms, engineered wooden flooring in master bedrooms, anti-skid premium tiles in wet areas.</td>
                    </tr>
                    <tr>
                      <td><strong>Doors & Windows</strong></td>
                      <td>Heavy 8ft solid teak wood entrance door with digital safety locks. Double-glazed UPVC window frames for acoustic insulation.</td>
                    </tr>
                    <tr>
                      <td><strong>Kitchen studio</strong></td>
                      <td>Premium modular layout with granite countertops, soft-close Blum drawers, pre-wired chimney exhaust, and double bowl stainless steel sink.</td>
                    </tr>
                    <tr>
                      <td><strong>Bathrooms</strong></td>
                      <td>Kohler sanitary ware, anti-fog automated smart mirrors, and wall-mounted water closets.</td>
                    </tr>
                    <tr>
                      <td><strong>Electrical</strong></td>
                      <td>Concealed fire-resistant copper wiring, Legrand modular smart switches, pre-wired split AC conduits.</td>
                    </tr>
                    <tr>
                      <td><strong>Paint Finishes</strong></td>
                      <td>Internal walls finished with premium Birla white putty and plastic emulsion paint. Weatherproof exterior cladding.</td>
                    </tr>
                    <tr>
                      <td><strong>Water Supply</strong></td>
                      <td>Dual plumbing system for recycled greywater. 24-hour pressurized overhead municipal water feeds.</td>
                    </tr>
                    <tr>
                      <td><strong>Elevators & Lifts</strong></td>
                      <td>Schindler or Otis high-speed glass capsule elevators with automated rescue devices.</td>
                    </tr>
                    <tr>
                      <td><strong>Security Guard</strong></td>
                      <td>Triple-tier perimeter security checkposts, intercom system, video doorbells, and 24/7 CCTV surveillance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Construction Progress timeline */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Construction Timeline Progress</h3>
              <div className="construction-progress-timeline glass-panel">
                <div className="progress-bar-level">
                  <div className="level-label-row">
                    <span>Overall Construction Progress</span>
                    <strong>88% Completed</strong>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div className="timeline-vertical-steps">
                  <div className="timeline-step completed">
                    <div className="step-marker"><Check size={14} /></div>
                    <div className="step-content">
                      <h5>Phase 1: Architecture & Planning</h5>
                      <p>Approved floorplans, layouts, and MP-RERA registries locked. (Q1 2025)</p>
                    </div>
                  </div>
                  <div className="timeline-step completed">
                    <div className="step-marker"><Check size={14} /></div>
                    <div className="step-content">
                      <h5>Phase 2: Foundation & Piling</h5>
                      <p>RCC concrete base layout, underground water grids, and core piling completed. (Q3 2025)</p>
                    </div>
                  </div>
                  <div className="timeline-step completed">
                    <div className="step-marker"><Check size={14} /></div>
                    <div className="step-content">
                      <h5>Phase 3: Structural Framing</h5>
                      <p>Superstructure columns, brickwork partition layouts, and ceiling slabs completed. (Q1 2026)</p>
                    </div>
                  </div>
                  <div className="timeline-step active">
                    <div className="step-marker"><Sparkles size={14} /></div>
                    <div className="step-content">
                      <h5>Phase 4: Plastering & Finishes</h5>
                      <p>Plumbing, electrical switch boxes, Italian marble flooring laying, and initial wall painting. (Ongoing)</p>
                    </div>
                  </div>
                  <div className="timeline-step pending">
                    <div className="step-marker"></div>
                    <div className="step-content">
                      <h5>Phase 5: Key Handovers</h5>
                      <p>Final inspections, municipal occupancy certificates, and direct registration handover. (Est. Dec 2026)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Advantages and Distances */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Location Advantages & Proximity</h3>
              <p className="section-desc-para">Calculated distances from Indore's key infrastructure hubs.</p>
              <div className="location-advantages-grid">
                <div className="loc-adv-card">
                  <span className="loc-adv-category">Hospitals</span>
                  <div className="loc-adv-item">
                    <span>Aurobindo Medical Zone</span>
                    <strong>2 Mins (0.8 Km)</strong>
                  </div>
                  <div className="loc-adv-item">
                    <span>Bombay Hospital Indore</span>
                    <strong>12 Mins (6.5 Km)</strong>
                  </div>
                </div>
                <div className="loc-adv-card">
                  <span className="loc-adv-category">Transit</span>
                  <div className="loc-adv-item">
                    <span>Indore Metro Station Grid</span>
                    <strong>3 Mins (1.2 Km)</strong>
                  </div>
                  <div className="loc-adv-item">
                    <span>Devi Ahilya Airport</span>
                    <strong>18 Mins (14.0 Km)</strong>
                  </div>
                </div>
                <div className="loc-adv-card">
                  <span className="loc-adv-category">Education</span>
                  <div className="loc-adv-item">
                    <span>SAGE University Campus</span>
                    <strong>5 Mins (2.5 Km)</strong>
                  </div>
                  <div className="loc-adv-item">
                    <span>Delhi Public School (DPS)</span>
                    <strong>8 Mins (4.0 Km)</strong>
                  </div>
                </div>
                <div className="loc-adv-card">
                  <span className="loc-adv-category">Retail</span>
                  <div className="loc-adv-item">
                    <span>C21 Shopping Mall</span>
                    <strong>12 Mins (7.0 Km)</strong>
                  </div>
                  <div className="loc-adv-item">
                    <span>Vijay Nagar Business Hub</span>
                    <strong>10 Mins (5.8 Km)</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Google map iframe container */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Geographical Landmark Location</h3>
              <div className="details-map-frame-wrapper glass-panel">
                <iframe 
                  title="Indore Real Estate Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915647!2d75.82138988583984!3d22.78401319760773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b4ebbbf%3A0x334ab51cc4b6babf!2sAurobindo%20Hospital%20Indore!5e0!3m2!1sen!2sin!4v1700000000000" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Investment Benefits */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Why Invest In This Landmark?</h3>
              <div className="investment-benefits-row">
                <div className="benefit-card card-premium">
                  <h5>Double-Digit CAGR Growth</h5>
                  <p>Historically, real estate values in the Aurobindo Hospital corridor have appreciated by 14% annually over the last 4 years.</p>
                </div>
                <div className="benefit-card card-premium">
                  <h5>High Rental Yield</h5>
                  <p>Its proximity to business parks, SAGE University, and medical centers ensures steady high-end tenant demand.</p>
                </div>
                <div className="benefit-card card-premium">
                  <h5>Metro Connectivity Impact</h5>
                  <p>Property values are expected to appreciate by an estimated 20% once the upcoming Indore metro stations open in this sector.</p>
                </div>
              </div>
            </div>

            {/* Premium Download Brochure card */}
            <div className="details-subheading-block">
              <div className="brochure-download-cta-panel card-premium">
                <div className="brochure-text-box">
                  <span className="bronze-badge">ESTATE DOCUMENTATION</span>
                  <h3>Download Project E-Brochure</h3>
                  <p>Get instant access to structural layouts, floor plans, material schedules, and pricing plans.</p>
                </div>
                <button onClick={() => setSuccess(true)} className="btn btn-secondary">
                  <FileText size={16} />
                  <span>Download PDF Brochure</span>
                </button>
              </div>
            </div>

            {/* Bespoke FAQs list */}
            <div className="details-subheading-block">
              <h3 className="premium-section-title">Frequently Asked Questions</h3>
              <div className="details-faqs-accordion">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="details-faq-item glass-panel">
                    <div 
                      className="faq-question-bar" 
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <HelpCircle size={18} className={`faq-chevron-icon ${openFaqIndex === idx ? 'rotated' : ''}`} />
                    </div>
                    {openFaqIndex === idx && (
                      <div className="faq-answer-panel">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Inquiry Form & Calculator */}
          <div className="details-sidebar-sticky-col">
            
            {/* Inquiry Form */}
            <div className="inquiry-form-card glass-panel">
              <h3 className="form-card-title">Inquire About This Unit</h3>
              <p className="form-card-subtitle">Verify layout configurations, scheduling availability, and lock site visit slots.</p>
              
              {!success ? (
                <form onSubmit={handleInquirySubmit} className="inquiry-fields-stack">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Anand Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      pattern="[0-9]{10}"
                      className="form-input" 
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="form-input" 
                      placeholder="e.g. anand@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid-2" style={{ gap: '10px' }}>
                    <div className="form-group">
                      <label className="form-label">Select Budget</label>
                      <select 
                        className="form-input" 
                        value={budget} 
                        onChange={(e) => setBudget(e.target.value)}
                      >
                        <option value="">Choose Budget</option>
                        <option value="1.5">₹1.5 - ₹2.0 Cr</option>
                        <option value="2.0">₹2.0 - ₹3.0 Cr</option>
                        <option value="3.0">₹3.0 - ₹4.0 Cr</option>
                        <option value="4.0+">Above ₹4.0 Cr</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Visit Date</label>
                      <input 
                        type="date" 
                        className="form-input" 
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message Details</label>
                    <textarea 
                      className="form-textarea"
                      rows="3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Inquiry buttons */}
                  <div className="inquiry-buttons-group">
                    <button type="submit" className="btn btn-secondary w-full submit-inq-btn">
                      Submit Inquiry Request
                    </button>
                    <a href="tel:9644699206" className="btn btn-outline text-sm icon-btn call-now-btn">
                      <Phone size={14} />
                      <span>Call Now</span>
                    </a>
                    <a href="https://wa.me/919644699206?text=Hi,%20I'm%20interested%20in%20Shri%20Krishna%20properties" target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm icon-btn whatsapp-btn">
                      <Sparkles size={14} />
                      <span>WhatsApp</span>
                    </a>
                    <button type="button" onClick={() => setSuccess(true)} className="btn btn-primary text-sm w-full site-visit-btn">
                      <Calendar size={14} />
                      <span>Book VIP Site Visit</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="inquiry-success-screen">
                  <CheckCircle size={48} className="success-icon-check" />
                  <h4>Inquiry Successfully Registered</h4>
                  <p>
                    Thank you <strong>{name}</strong>. Our relations team is checking slot availability and will contact you shortly at <strong>+91 {phone}</strong> or <strong>{email}</strong>.
                  </p>
                  <div className="hotline-small-banner" style={{ marginTop: '1.5rem', background: 'rgba(200, 164, 93, 0.08)', padding: '12px', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-secondary)', fontWeight: 600, display: 'block' }}>Direct Helpline:</span>
                    <a href="tel:9644699206" style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-primary)' }}>+91 9644699206</a>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Interactive EMI Calculator */}
            <div className="micro-calc-card card-premium">
              <div className="micro-calc-header">
                <CalcIcon size={18} className="calc-accent-icon" />
                <h4>Dynamic EMI Calculator</h4>
              </div>
              <p className="micro-calc-desc">Calculate estimated monthly installments based on your target payment structures.</p>
              
              <div className="micro-calc-sliders">
                {/* Property Price Label */}
                <div className="calc-price-readout">
                  <span>Property Price</span>
                  <strong>₹ {(basePrice / 10000000).toFixed(2)} Cr</strong>
                </div>

                {/* Down Payment slider */}
                <div className="micro-slider-row">
                  <div className="slider-values">
                    <span>Down Payment ({downPaymentPercent}%)</span>
                    <strong>₹ {(calculatedDownPayment / 100000).toFixed(1)} Lakh</strong>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="50" 
                    step="5"
                    value={downPaymentPercent} 
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))} 
                    className="luxury-slider"
                  />
                </div>

                {/* Loan Amount Readout */}
                <div className="calc-price-readout select-amount-row">
                  <span>Funding Loan Amount</span>
                  <strong>₹ {(calculatedLoanAmount / 100000).toFixed(1)} Lakh</strong>
                </div>

                {/* Loan Term slider */}
                <div className="micro-slider-row">
                  <div className="slider-values">
                    <span>Loan Term</span>
                    <strong>{loanTerm} Years</strong>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    value={loanTerm} 
                    onChange={(e) => setLoanTerm(Number(e.target.value))} 
                    className="luxury-slider"
                  />
                </div>

                {/* Interest Rate slider */}
                <div className="micro-slider-row">
                  <div className="slider-values">
                    <span>Interest Rate</span>
                    <strong>{interestRate}%</strong>
                  </div>
                  <input 
                    type="range" 
                    min="6.5" 
                    max="12.0" 
                    step="0.1" 
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))} 
                    className="luxury-slider"
                  />
                </div>
              </div>

              {/* Monthly Installment */}
              <div className="micro-calc-result" style={{ marginTop: '1.5rem' }}>
                <span>Estimated Installment</span>
                <strong>₹ {calculateEMI().toLocaleString('en-IN')} / Month</strong>
              </div>

              <div className="approved-badges">
                <ShieldCheck size={14} className="shield-icon-badge" />
                <span>Pre-Approved for HDFC, SBI, Axis and ICICI Bank.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Similar properties grid loop at the bottom */}
      <section className="section similar-properties-catalog-wrapper" style={{ borderTop: '1px solid rgba(30, 30, 30, 0.05)', backgroundColor: 'rgba(30,30,30,0.01)' }}>
        <div className="container">
          <h3 className="premium-section-title centered" style={{ marginBottom: '3rem', textAlign: 'center' }}>Explore Similar Premium Offerings</h3>
          
          <div className="grid-3">
            {similarProps.map((prop) => (
              <div key={prop.id} className="card-premium property-catalog-card">
                <div className="property-card-image">
                  <img src={prop.image} alt={prop.name} className="zoom-hover-target" />
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
        </div>
      </section>

      {/* Lightbox component for gallery slider */}
      {lightboxOpen && (
        <div className="lightbox-overlay-modal" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-lightbox-btn" onClick={() => setLightboxOpen(false)}>&times;</button>
            <div className="lightbox-image-container">
              <img src={galleryImages[activeImgIndex]} alt="Fullscreen View" />
            </div>
            
            {/* Lightbox Controls */}
            <div className="lightbox-navigation-bar">
              <button 
                className="arrow-nav-btn"
                onClick={() => setActiveImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
              >
                <ChevronLeft size={24} />
              </button>
              <span>Image {activeImgIndex + 1} of {galleryImages.length}</span>
              <button 
                className="arrow-nav-btn"
                onClick={() => setActiveImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      {styleTag}
    </div>
  );
}

// Battery icon mockup fallback to prevent compilation failure
function BatteryIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery">
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  );
}

const styleTag = (
  <style>{`
    .property-details-page {
      padding-top: 110px;
      background-color: var(--color-bg-light);
      font-family: var(--font-body);
      overflow-x: hidden;
    }

    .details-top-nav {
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(30, 30, 30, 0.05);
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-primary);
      transition: var(--transition-fast);
    }

    .back-link:hover {
      color: var(--color-secondary);
      transform: translateX(-3px);
    }

    .project-code-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-text-muted);
      font-weight: 500;
    }

    .grid-details-page {
      display: grid;
      grid-template-columns: 1.7fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    /* Visual Showcase Slider CSS */
    .gallery-showcase-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }

    .main-visual-display {
      position: relative;
      height: 480px;
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      background-color: #000;
      border: 1px solid rgba(30, 30, 30, 0.05);
    }

    .main-gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: zoom-in;
      transition: transform 0.4s ease;
    }

    .main-gallery-img:hover {
      transform: scale(1.02);
    }

    .video-player-simulation, .virtual-360-simulation {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .video-player-simulation img, .virtual-360-simulation img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.6);
    }

    .simulation-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      color: #fff;
      z-index: 10;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }

    .play-pulse-btn {
      color: var(--color-secondary);
      background: rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      padding: 12px;
      border: 2px solid var(--color-secondary);
      animation: pulse-ring 1.8s infinite ease-in-out;
    }

    .spin-slow {
      animation: rotate-slow 10s infinite linear;
      color: var(--color-secondary);
    }

    @keyframes pulse-ring {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(200, 164, 93, 0.5); }
      70% { transform: scale(1.08); box-shadow: 0 0 0 15px rgba(200, 164, 93, 0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(200, 164, 93, 0); }
    }

    @keyframes rotate-slow {
      0% { transform: rotate(0); }
      100% { transform: rotate(360deg); }
    }

    .media-selector-tabs {
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      gap: 8px;
      z-index: 20;
    }

    .media-tab {
      background: rgba(30, 30, 30, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #fff;
      padding: 8px 16px;
      border-radius: 30px;
      font-size: 0.8rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
      transition: var(--transition-fast);
    }

    .media-tab.active, .media-tab:hover {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
      color: #fff;
    }

    .thumbnail-gallery-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
      width: 100%;
    }

    .thumb-box {
      height: 90px;
      border-radius: var(--border-radius-sm);
      overflow: hidden;
      cursor: pointer;
      border: 2px solid transparent;
      transition: var(--transition-fast);
      position: relative;
    }

    .thumb-box.active {
      border-color: var(--color-secondary);
    }

    .thumb-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .more-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 30, 30, 0.75);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 0.75rem;
      gap: 4px;
      font-weight: 600;
    }

    /* Property Summary Panel */
    .property-summary-badge-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      border-radius: var(--border-radius-md);
      margin-bottom: 2rem;
    }

    .summary-left-info {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .summary-status-tag {
      background-color: var(--color-secondary);
      color: #fff;
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 4px;
      letter-spacing: 1px;
      width: max-content;
    }

    .summary-type-tag {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-text-muted);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-top: 4px;
    }

    .summary-h1-name {
      font-size: 2.25rem;
      color: var(--color-primary);
      margin: 4px 0;
      font-weight: 700;
    }

    .summary-pin-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }

    .summary-pin-row svg {
      color: var(--color-secondary);
    }

    .summary-right-price {
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .price-tag-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--color-text-muted);
    }

    .price-tag-h2 {
      font-size: 2.25rem;
      color: var(--color-secondary);
      font-weight: 800;
      margin: 0;
    }

    .price-approx-sq {
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }

    /* General Property Specs grid */
    .property-specs-summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 2.5rem;
    }

    .summary-spec-card {
      background-color: var(--color-white);
      border: 1px solid rgba(30, 30, 30, 0.05);
      padding: 14px;
      border-radius: var(--border-radius-sm);
      display: flex;
      flex-direction: column;
      gap: 4px;
      text-align: center;
      box-shadow: var(--shadow-sm);
    }

    .spec-metric-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-text-muted);
    }

    .spec-metric-val {
      font-size: 0.9rem;
      color: var(--color-primary);
    }

    /* Key Highlights styling */
    .premium-section-title {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin-bottom: 1.25rem;
      position: relative;
      padding-bottom: 10px;
      font-weight: 700;
    }

    .premium-section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background-color: var(--color-secondary);
    }

    .premium-section-title.centered::after {
      left: 50%;
      transform: translateX(-50%);
    }

    .details-subheading-block {
      margin-bottom: 3.5rem;
    }

    .highlights-grid-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .highlight-card {
      background: var(--color-white);
      border-left: 3px solid var(--color-secondary);
      padding: 16px;
      border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .hl-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--color-text-muted);
    }

    .hl-value {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    /* Editorial narrative paragraphs */
    .narrative-editorial-block {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .narrative-editorial-block p {
      font-size: 0.95rem;
      line-height: 1.8;
      color: var(--color-text);
      font-weight: 300;
    }

    /* Premium Amenities grid list */
    .amenities-grid-premium {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .amenity-premium-card {
      background-color: var(--color-white);
      border: 1px solid rgba(30, 30, 30, 0.05);
      padding: 16px;
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-fast);
    }

    .amenity-premium-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      border-color: rgba(200, 164, 93, 0.2);
    }

    .amenity-icon-box {
      color: var(--color-secondary);
      background-color: rgba(200, 164, 93, 0.08);
      padding: 10px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .amenity-text-box {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .am-card-title {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    .am-card-desc {
      font-size: 0.7rem;
      color: var(--color-text-muted);
    }

    /* Floor Plan layout interactive elements */
    .section-desc-para {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      margin-top: -8px;
      margin-bottom: 1.5rem;
    }

    .floorplans-container {
      border-radius: var(--border-radius-md);
      padding: 2rem;
    }

    .floorplans-selector-bar {
      display: flex;
      gap: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
      overflow-x: auto;
    }

    .floorplan-tab-btn {
      background: transparent;
      border: none;
      color: rgba(30, 30, 30, 0.6);
      padding: 8px 16px;
      cursor: pointer;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 0.9rem;
      border-bottom: 2px solid transparent;
      transition: var(--transition-fast);
      white-space: nowrap;
    }

    .floorplan-tab-btn:hover,
    .floorplan-tab-btn.active {
      color: var(--color-secondary);
      border-bottom-color: var(--color-secondary);
    }

    .floorplan-content-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
    }

    .floorplan-specs-box {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .floorplan-specs-box h4 {
      font-size: 1.25rem;
      color: var(--color-primary);
    }

    .floorplan-specs-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .floorplan-specs-list li {
      font-size: 0.9rem;
      color: var(--color-text);
      display: flex;
      justify-content: space-between;
      padding-bottom: 6px;
      border-bottom: 1px dashed rgba(30, 30, 30, 0.1);
    }

    .floorplan-desc-text {
      font-size: 0.85rem;
      line-height: 1.6;
      color: var(--color-text-muted);
    }

    .floorplan-visual-box {
      position: relative;
      height: 250px;
      border-radius: var(--border-radius-sm);
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .floorplan-visual-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background-color: #fcfcfc;
    }

    .blueprint-stamp {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: rgba(30, 30, 30, 0.8);
      color: #fff;
      font-size: 0.65rem;
      letter-spacing: 1px;
      padding: 3px 8px;
      border-radius: 3px;
    }

    /* Specs luxury table list */
    .specs-table-container {
      width: 100%;
      border-radius: var(--border-radius-md);
      overflow: hidden;
      border: 1px solid rgba(30, 30, 30, 0.05);
      box-shadow: var(--shadow-sm);
    }

    .specs-luxury-table {
      width: 100%;
      border-collapse: collapse;
      background-color: var(--color-white);
      text-align: left;
    }

    .specs-luxury-table th {
      background-color: var(--color-primary);
      color: var(--color-white);
      padding: 14px 20px;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
    }

    .specs-luxury-table td {
      padding: 14px 20px;
      border-bottom: 1px solid rgba(30, 30, 30, 0.05);
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--color-text);
    }

    .specs-luxury-table tr:last-child td {
      border-bottom: none;
    }

    .specs-luxury-table tr:nth-child(even) {
      background-color: rgba(30, 30, 30, 0.01);
    }

    /* Construction progress timeline */
    .progress-bar-level {
      margin-bottom: 2rem;
    }

    .level-label-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .bar-track {
      height: 8px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      background-color: var(--color-secondary);
      border-radius: 10px;
    }

    .timeline-vertical-steps {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-left: 20px;
    }

    .timeline-vertical-steps::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 31px;
      bottom: 20px;
      width: 2px;
      background-color: rgba(255, 255, 255, 0.1);
      pointer-events: none;
    }

    .timeline-step {
      display: flex;
      gap: 20px;
      margin-bottom: 1.75rem;
      position: relative;
    }

    .timeline-step:last-child {
      margin-bottom: 0;
    }

    .step-marker {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(30, 30, 30, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      z-index: 2;
    }

    .timeline-step.completed .step-marker {
      background-color: var(--color-secondary);
      border-color: var(--color-secondary);
    }

    .timeline-step.active .step-marker {
      background-color: var(--color-primary);
      border-color: var(--color-secondary);
      color: var(--color-secondary);
    }

    .step-content h5 {
      font-size: 0.95rem;
      color: var(--color-primary);
      margin-bottom: 4px;
    }

    .step-content p {
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }

    /* Location advantages grid details */
    .location-advantages-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .loc-adv-card {
      background-color: var(--color-white);
      border: 1px solid rgba(30, 30, 30, 0.05);
      border-radius: var(--border-radius-sm);
      padding: 1.5rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .loc-adv-category {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--color-secondary);
      font-weight: 600;
      border-bottom: 1px solid rgba(30, 30, 30, 0.05);
      padding-bottom: 6px;
    }

    .loc-adv-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.85rem;
    }

    .loc-adv-item span {
      color: var(--color-text);
    }

    .loc-adv-item strong {
      color: var(--color-primary);
      font-weight: 600;
    }

    /* Investment benefits */
    .investment-benefits-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .benefit-card {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .benefit-card h5 {
      font-size: 1rem;
      color: var(--color-secondary);
    }

    .benefit-card p {
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* Download Brochure panel */
    .brochure-download-cta-panel {
      padding: 2.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      border-radius: var(--border-radius-md);
      position: relative;
      overflow: hidden;
    }

    .brochure-download-cta-panel::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(200,164,93,0.1) 0%, transparent 70%);
      pointer-events: none;
    }

    .brochure-text-box {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .bronze-badge {
      font-size: 0.7rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--color-secondary);
      font-weight: 600;
    }

    .brochure-text-box h3 {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin: 0;
    }

    .brochure-text-box p {
      font-size: 0.85rem;
      margin: 0;
    }

    /* FAQs Collapsible style */
    .details-faqs-accordion {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .details-faq-item {
      border-radius: var(--border-radius-sm);
      overflow: hidden;
      transition: var(--transition-fast);
    }

    .faq-question-bar {
      padding: 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--color-primary);
    }

    .faq-chevron-icon {
      color: var(--color-secondary);
      transition: transform 0.3s ease;
    }

    .faq-chevron-icon.rotated {
      transform: rotate(180deg);
    }

    .faq-answer-panel {
      padding: 0 1.25rem 1.25rem;
      font-size: 0.85rem;
      line-height: 1.6;
      color: var(--color-text-muted);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* RIGHT COLUMN STICKY SIDEBAR */
    .details-sidebar-sticky-col {
      position: sticky;
      top: 110px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      z-index: 100;
    }

    .inquiry-form-card {
      padding: 2rem;
      border-radius: var(--border-radius-md);
    }

    .form-card-title {
      font-size: 1.25rem;
      color: var(--color-primary);
      margin-bottom: 6px;
      font-weight: 700;
    }

    .form-card-subtitle {
      font-size: 0.8rem;
      color: var(--color-text-muted);
      margin-bottom: 1.5rem;
      line-height: 1.4;
    }

    .inquiry-fields-stack {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .inquiry-buttons-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 1rem;
    }

    .inquiry-buttons-group .btn {
      width: 100% !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .submit-inq-btn {
      min-height: 48px;
      font-weight: 600;
    }

    .call-now-btn {
      border: 1px solid rgba(30,30,30,0.1);
      color: var(--color-primary);
    }

    .call-now-btn:hover {
      background-color: rgba(30,30,30,0.02);
    }

    .whatsapp-btn {
      border: 1px solid rgba(200, 164, 93, 0.2);
      color: var(--color-secondary);
    }

    .whatsapp-btn:hover {
      background-color: rgba(200, 164, 93, 0.04);
    }

    .site-visit-btn {
      background-color: var(--color-primary);
      color: #fff;
    }

    /* EMI calculator sliders */
    .calc-price-readout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid rgba(30, 30, 30, 0.08);
      font-size: 0.9rem;
    }

    .calc-price-readout strong {
      color: var(--color-primary);
      font-weight: 700;
    }

    .calc-price-readout.select-amount-row {
      margin-top: 10px;
      border-top: 1px dashed rgba(30, 30, 30, 0.08);
      border-bottom: none;
    }

    .calc-price-readout.select-amount-row strong {
      color: var(--color-secondary);
    }

    .micro-calc-result strong {
      color: var(--color-secondary) !important;
      font-size: 1.25rem !important;
      font-weight: 800;
    }

    /* Lightbox Modal fullscreen style */
    .lightbox-overlay-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.95);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
    }

    .lightbox-content-box {
      width: 90%;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      position: relative;
    }

    .close-lightbox-btn {
      position: absolute;
      top: -40px;
      right: 0;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 2.5rem;
      cursor: pointer;
    }

    .lightbox-image-container {
      width: 100%;
      height: 550px;
      border-radius: 8px;
      overflow: hidden;
    }

    .lightbox-image-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .lightbox-navigation-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      font-size: 0.9rem;
    }

    .arrow-nav-btn {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: #fff;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .arrow-nav-btn:hover {
      background-color: var(--color-secondary);
    }

    /* Responsive Settings */
    @media (max-width: 1024px) {
      .grid-details-page {
        grid-template-columns: 1.5fr 1fr;
        gap: 2rem;
      }
      .summary-h1-name, .price-tag-h2 {
        font-size: 1.75rem;
      }
    }

    @media (max-width: 768px) {
      .property-details-page {
        padding-top: 84px;
      }
      .grid-details-page {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      .details-sidebar-sticky-col {
        position: static;
        z-index: 1;
      }
      .main-visual-display {
        height: 280px;
      }
      .thumbnail-gallery-grid {
        grid-template-columns: repeat(5, 1fr);
      }
      .thumb-box {
        height: 60px;
      }
      .property-summary-badge-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        padding: 1.5rem;
      }
      .summary-right-price {
        text-align: left;
      }
      .property-specs-summary-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .highlights-grid-cards {
        grid-template-columns: repeat(2, 1fr);
      }
      .amenities-grid-premium {
        grid-template-columns: repeat(2, 1fr);
      }
      .floorplan-content-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .floorplan-visual-box {
        height: 200px;
      }
      .location-advantages-grid {
        grid-template-columns: 1fr;
      }
      .investment-benefits-row {
        grid-template-columns: 1fr;
      }
      .brochure-download-cta-panel {
        flex-direction: column;
        align-items: flex-start;
        padding: 1.5rem;
      }
      .brochure-download-cta-panel .btn {
        width: 100% !important;
      }
    }
  `}</style>
);
