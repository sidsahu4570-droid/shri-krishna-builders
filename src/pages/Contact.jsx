import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  const prefilledService = location.state?.selectedService;

  // Contact Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Villa');
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // Refs for auto-focusing and scrolling
  const nameInputRef = useRef(null);
  const formCardRef = useRef(null);

  useEffect(() => {
    if (prefilledService) {
      setMsg(`I am interested in consulting about the "${prefilledService}" service. Please contact me with details.`);
      
      const timer = setTimeout(() => {
        if (formCardRef.current) {
          const rect = formCardRef.current.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetY = rect.top + scrollTop - 120; // 120px offset to display form header clearly below sticky navbar
          
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
        if (nameInputRef.current) {
          nameInputRef.current.focus({ preventScroll: true }); // Prevent browser focus from overriding custom smooth scroll positioning
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [prefilledService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setPhone('');
      setEmail('');
      setPropertyType('Villa');
      setMsg('');
    }, 5000);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Banner */}
      <section className="contact-banner-header">
        <div className="contact-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">CONNECT WITH US</span>
          <h1>Reach Our Site Office</h1>
          <p>Get in touch with our Indore relationship management team or schedule a private chauffeur-driven tour to Kanak Smart City.</p>
        </div>
      </section>

      {/* Info and Form Row */}
      <section className="section contact-core-sec">
        <div className="container grid-2">
          
          {/* Left Column: Office details */}
          <div className="contact-details-column">
            <span className="subtitle-premium">HEADQUARTERS</span>
            <h2 className="title-luxury">Indore Site Office</h2>
            <p style={{ marginBottom: '2rem' }}>
              Our sales lounges and customer relation panels are located inside Kanak Smart City. Walk in to explore blueprints, discuss custom engineering details, and receive banking approvals.
            </p>

            <div className="contact-info-list-box">
              {/* Address */}
              <div className="info-detail-row">
                <MapPin className="info-icon" />
                <div>
                  <strong>Physical Address</strong>
                  <p>M3, Kanak Smart City, MR-12 Road, Near Aurobindo Hospital, Indore, Madhya Pradesh - 453555</p>
                </div>
              </div>

              {/* Hotlines */}
              <div className="info-detail-row">
                <Phone className="info-icon" />
                <div>
                  <strong>Customer Hotlines</strong>
                  <a href="tel:9644699206">+91 96446 99206</a>
                  <span>Call to book site pickups</span>
                </div>
              </div>

              {/* Emails */}
              <div className="info-detail-row">
                <Mail className="info-icon" />
                <div>
                  <strong>Electronic Mailing Address</strong>
                  <a href="mailto:info@shrikrishnabuilders.com">info@shrikrishnabuilders.com</a>
                </div>
              </div>

              {/* Working hours */}
              <div className="info-detail-row">
                <Clock className="info-icon" />
                <div>
                  <strong>Lounge Visiting Hours</strong>
                  <p>10:00 AM - 07:00 PM (Opened Seven Days a Week)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="contact-form-column">
            <div ref={formCardRef} className="contact-form-card glass-panel">
              <h3 className="form-card-title">Send An Enquiry Message</h3>
              <p className="form-card-subtitle">Fill in details and our relationship manager will reach you in 24 hours.</p>

              {prefilledService && (
                <div className="selected-service-badge" style={{
                  backgroundColor: 'rgba(200, 164, 93, 0.08)',
                  border: '1px solid rgba(200, 164, 93, 0.25)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-secondary)',
                  fontWeight: '700',
                  textAlign: 'center'
                }}>
                  Service Selected: {prefilledService}
                </div>
              )}

              {!success ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Mishra"
                      className="form-input"
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '1rem', marginBottom: '0.25rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit number"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Interested Property Type</label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="form-input"
                      style={{ padding: '12px 18px' }}
                    >
                      <option value="Villa">Villa</option>
                      <option value="Bungalow">Bungalow</option>
                      <option value="Home">Residential Home</option>
                      <option value="Commercial">Commercial Office</option>
                      <option value="Apartment">Apartment Suite</option>
                      <option value="Farmhouse">Farmhouse Plot</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message</label>
                    <textarea
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder="Write details of query..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-secondary w-full" style={{ width: '100%' }}>
                    <span>Send Message Enquiry</span>
                    <Send size={14} style={{ marginLeft: '6px' }} />
                  </button>
                </form>
              ) : (
                <div className="contact-success-overlay" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle size={50} style={{ color: 'var(--color-primary)' }} />
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>Message Sent Successfully</h4>
                  <p style={{ fontSize: '0.85rem', color: '#555' }}>
                    Thank you <strong>{name}</strong>. Your luxury property request has been dispatched to our sales desk. A specialist manager will connect with you shortly at <strong>+91 {phone}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Mock Map Section */}
      <section className="contact-map-banner-sec">
        <div className="container">
          <div className="showcase-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="subtitle-premium">Find Us On Map</span>
            <h2 className="title-luxury title-luxury-center">Head Office GPS Blueprint</h2>
          </div>
          <div className="contact-mock-map glass-panel">
            <svg viewBox="0 0 1000 400" width="100%" height="100%" style={{ background: '#f5f1ea', borderRadius: '12px' }}>
              {/* Fake street block roads grid */}
              <rect x="0" y="0" width="1000" height="400" fill="#f0eae0" />
              <line x1="100" y1="0" x2="100" y2="400" stroke="#fff" strokeWidth="15" />
              <line x1="400" y1="0" x2="400" y2="400" stroke="#fff" strokeWidth="25" />
              <line x1="800" y1="0" x2="800" y2="400" stroke="#fff" strokeWidth="15" />
              
              <line x1="0" y1="120" x2="1000" y2="120" stroke="#fff" strokeWidth="20" />
              <line x1="0" y1="280" x2="1000" y2="280" stroke="#fff" strokeWidth="30" />

              <rect x="150" y="20" width="180" height="80" fill="#dfd7c7" rx="5" />
              <rect x="450" y="20" width="280" height="80" fill="#dfd7c7" rx="5" />
              <rect x="150" y="160" width="180" height="90" fill="#dfd7c7" rx="5" />
              
              {/* Kanak Smart City Area Block */}
              <rect x="450" y="160" width="300" height="90" fill="var(--color-primary)" opacity="0.1" rx="5" stroke="var(--color-primary)" strokeWidth="1" />
              <text x="470" y="210" fill="var(--color-primary)" fontSize="14" fontWeight="600" letterSpacing="1">KANAK SMART CITY CORRIDOR</text>

              {/* Office pinpoint */}
              <g transform="translate(600, 205)">
                <circle r="30" fill="var(--color-primary)" opacity="0.15" className="pin-pulse" />
                <circle r="15" fill="var(--color-secondary)" opacity="0.4" />
                <circle r="7" fill="var(--color-primary)" />
                <rect x="-100" y="-55" width="200" height="35" fill="var(--color-dark)" rx="4" />
                <text x="0" y="-33" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="500">SHRI KRISHNA HEAD OFFICE</text>
              </g>

              {/* Major Landmarks labels */}
              <text x="410" y="325" fill="#8c8270" fontSize="11" transform="rotate(90 410 325)">MR-12 ROAD CORRIDOR</text>
              <text x="320" y="270" fill="#8c8270" fontSize="10">Aurobindo Medical Hospital Node</text>
            </svg>
          </div>
        </div>
      </section>

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .contact-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .contact-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 30, 30, 0.85);
    }

    /* Info listing layouts */
    .contact-info-list-box {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .info-detail-row {
      display: flex;
      gap: 15px;
      align-items: flex-start;
    }

    .info-icon {
      color: var(--color-secondary);
      flex-shrink: 0;
      margin-top: 3px;
    }

    .info-detail-row strong {
      font-size: 0.95rem;
      color: var(--color-dark);
      display: block;
      margin-bottom: 2px;
    }

    .info-detail-row p {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.5;
    }

    .info-detail-row a {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-primary);
      display: block;
    }

    .info-detail-row a:hover {
      color: var(--color-secondary);
    }

    .info-detail-row span {
      font-size: 0.75rem;
      color: #888;
      display: block;
    }

    /* Contact form card */
    .contact-form-card {
      padding: 2.5rem;
      border-radius: var(--border-radius-lg);
    }

    .form-card-title {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }

    .form-card-subtitle {
      font-size: 0.8rem;
      color: #666;
      margin-bottom: 2rem;
    }

    /* Mock map container layout */
    .contact-mock-map {
      height: 380px;
      overflow: hidden;
      border-radius: var(--border-radius-lg);
      border: 1px solid rgba(30, 30, 30, 0.1);
      box-shadow: var(--shadow-sm);
      margin-bottom: 4rem;
    }

    .contact-mock-map svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    .pin-pulse {
      animation: pin-pulse-wave 2s infinite ease-out;
      transform-origin: center;
    }

    @keyframes pin-pulse-wave {
      0% { transform: scale(0.6); opacity: 0.8; }
      100% { transform: scale(2.2); opacity: 0; }
    }

    @media (max-width: 768px) {
      .contact-mock-map {
        height: 250px;
      }
    }
  `}</style>
);
