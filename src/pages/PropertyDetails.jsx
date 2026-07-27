import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/PropertyContext';
import { 
  MapPin, BedDouble, Bath, Maximize2, ShieldAlert, 
  CheckCircle, ArrowLeft, Phone, Calendar, Mail, 
  Calculator as CalcIcon, Landmark, ShieldCheck 
} from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();
  const { properties } = useProperties();
  const property = properties.find((p) => p.id === id);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('I am interested in learning more about this property. Please contact me with availability.');
  const [success, setSuccess] = useState(false);

  // Micro EMI State
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

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

  // Calculate Quick EMI
  const calculateQuickEMI = () => {
    // Standard rule: 80% loan amount
    const P = property.priceNum * 0.8;
    const r = interestRate / 12 / 100;
    const n = loanTerm * 12;
    if (isNaN(P)) return '0';
    
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi).toLocaleString('en-IN');
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setPhone('');
    }, 5000);
  };

  const amenityList = [
    'Private Swimming Pool',
    'Smart Home Automation',
    'Double Height Ceilings',
    'Italian Marble Floors',
    'Rooftop Sky deck',
    'Underground Electricity',
    '24/7 CCTV & Security Guards',
    'Vaastu Compliant Elevation'
  ];

  return (
    <div className="property-details-page">
      
      {/* Header bar back arrow */}
      <div className="details-top-nav container">
        <Link to="/properties" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to Catalog</span>
        </Link>
      </div>

      {/* Main Container Grid */}
      <section className="section property-details-core" style={{ paddingTop: '20px' }}>
        <div className="container grid-details-page">
          
          {/* Left Column: Visuals & Info */}
          <div className="details-visual-col">
            <h1 className="details-title-h1">{property.name}</h1>
            <div className="details-subtitle-row">
              <span className="type-tag">{property.type}</span>
              <div className="loc-tag">
                <MapPin size={16} />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="details-showcase-image">
              <img src={property.image} alt={property.name} />
              <span className="details-status-badge">{property.status}</span>
            </div>

            {/* Quick Specs strip */}
            <div className="details-specs-strip glass-panel">
              {property.bedrooms > 0 && (
                <div className="spec-unit">
                  <BedDouble size={20} />
                  <div>
                    <span className="spec-label">Bedrooms</span>
                    <span className="spec-val">{property.bedrooms} Beds</span>
                  </div>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div className="spec-unit">
                  <Bath size={20} />
                  <div>
                    <span className="spec-label">Bathrooms</span>
                    <span className="spec-val">{property.bathrooms} Baths</span>
                  </div>
                </div>
              )}
              <div className="spec-unit">
                <Maximize2 size={20} />
                <div>
                  <span className="spec-label">Carpet Area</span>
                  <span className="spec-val">{property.area}</span>
                </div>
              </div>
              <div className="spec-unit">
                <Landmark size={20} />
                <div>
                  <span className="spec-label">Registry Price</span>
                  <span className="spec-val" style={{ color: 'var(--color-secondary)' }}>{property.price}</span>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="details-desc-box">
              <h3 className="section-title-small">Property Overview</h3>
              <p>{property.description}</p>
              <p style={{ marginTop: '1rem' }}>
                Each material is handpicked. From structural foundations utilizing corrosion-free TMT steel and M25-M35 graded concrete mixes, to final premium finish work like vitrified tiles, custom teak wood doors, modular standard kitchens, and luxury Kohler bath fittings. This is a property engineered for comfort, luxury, and long-term asset value.
              </p>
            </div>

            {/* Premium Amenities list */}
            <div className="details-amenities-box">
              <h3 className="section-title-small">Premium Amenities</h3>
              <div className="amenities-grid-details">
                {amenityList.map((am) => (
                  <div key={am} className="amenity-bullet-detail">
                    <CheckCircle size={18} className="bullet-icon-check" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form & Micro Calculator */}
          <div className="details-form-col">
            
            {/* Inquiry Form */}
            <div className="inquiry-form-card glass-panel">
              <h3 className="form-card-title">Schedule A Private Tour</h3>
              <p className="form-card-subtitle">Leave your phone number below and our relationship manager will contact you with booking status.</p>
              
              {!success ? (
                <form onSubmit={handleInquirySubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="Enter full name"
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
                    <label className="form-label">Inquiry Message</label>
                    <textarea 
                      className="form-textarea"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-secondary w-full" style={{ width: '100%' }}>
                    Submit Inquiry Request
                  </button>
                </form>
              ) : (
                <div className="inquiry-success-screen">
                  <CheckCircle size={48} className="success-icon-check" />
                  <h4>Inquiry Successfully Registered</h4>
                  <p>
                    Thank you <strong>{name}</strong>. Our relations team is verifying site slot availability and will contact you shortly at <strong>+91 {phone}</strong>.
                  </p>
                  <div className="hotline-small-banner">
                    <span>Direct Site Support:</span>
                    <a href="tel:9644699206">9644699206</a>
                  </div>
                </div>
              )}
            </div>

            {/* Micro Loan Calculator */}
            <div className="micro-calc-card card-premium">
              <div className="micro-calc-header">
                <CalcIcon size={18} className="calc-accent-icon" />
                <h4>Micro EMI Loan Estimator</h4>
              </div>
              <p className="micro-calc-desc">Based on 8% standard self downpayment (assuming 80% funding loan amount).</p>
              
              <div className="micro-calc-sliders">
                <div className="micro-slider-row">
                  <div className="slider-values">
                    <span>Loan Term</span>
                    <strong>{loanTerm} Yrs</strong>
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

              <div className="micro-calc-result">
                <span>Estimated Installment</span>
                <strong>₹ {calculateQuickEMI()} / Month</strong>
              </div>

              <div className="approved-badges">
                <ShieldCheck size={14} className="shield-icon-badge" />
                <span>Pre-Approved by HDFC, SBI, and Axis Bank.</span>
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
    .property-details-page {
      padding-top: 110px;
      background-color: var(--color-bg-light);
      font-family: var(--font-body);
    }

    .details-top-nav {
      margin-bottom: 1rem;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    .back-link:hover {
      color: var(--color-secondary);
    }

    .grid-details-page {
      display: grid;
      grid-template-columns: 1.8fr 1fr;
      gap: 3rem;
    }

    /* Left Column Details */
    .details-title-h1 {
      font-size: 2.25rem;
      color: var(--color-dark);
      margin-bottom: 0.5rem;
    }

    .details-subtitle-row {
      display: flex;
      gap: 15px;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .details-subtitle-row .type-tag {
      background-color: var(--color-accent);
      color: var(--color-primary);
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 3px;
      letter-spacing: 1px;
    }

    .details-subtitle-row .loc-tag {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: #666;
    }

    .details-subtitle-row .loc-tag svg {
      color: var(--color-secondary);
    }

    .details-showcase-image {
      position: relative;
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      height: 480px;
      box-shadow: var(--shadow-md);
      margin-bottom: 2rem;
      border: 1px solid rgba(15, 76, 58, 0.05);
    }

    .details-showcase-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .details-status-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: var(--color-secondary);
      color: var(--color-white);
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 4px;
      letter-spacing: 1px;
    }

    /* Specs strip */
    .details-specs-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 1.5rem;
      border-radius: var(--border-radius-md);
      margin-bottom: 2rem;
      gap: 1rem;
    }

    .spec-unit {
      display: flex;
      align-items: center;
      gap: 12px;
      border-right: 1px solid rgba(15, 76, 58, 0.08);
    }

    .spec-unit:last-child {
      border-right: none;
    }

    .spec-unit svg {
      color: var(--color-secondary);
      flex-shrink: 0;
    }

    .spec-label {
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #888;
      display: block;
    }

    .spec-val {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-dark);
    }

    .section-title-small {
      font-size: 1.35rem;
      margin-bottom: 1rem;
      position: relative;
    }

    .section-title-small::after {
      content: '';
      display: block;
      width: 40px;
      height: 2px;
      background-color: var(--color-secondary);
      margin-top: 6px;
    }

    .details-desc-box {
      margin-bottom: 2rem;
    }

    .details-desc-box p {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.6;
    }

    /* Amenities */
    .details-amenities-box {
      margin-bottom: 2rem;
    }

    .amenities-grid-details {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin-top: 1rem;
    }

    .amenity-bullet-detail {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: var(--color-text);
    }

    .bullet-icon-check {
      color: var(--color-primary);
    }

    /* Right column components */
    .inquiry-form-card {
      padding: 2rem;
      border-radius: var(--border-radius-md);
      margin-bottom: 2rem;
    }

    .form-card-title {
      font-size: 1.35rem;
      margin-bottom: 0.25rem;
    }

    .form-card-subtitle {
      font-size: 0.8rem;
      color: #666;
      margin-bottom: 1.5rem;
    }

    .inquiry-success-screen {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .success-icon-check {
      color: var(--color-primary);
    }

    .inquiry-success-screen h4 {
      color: var(--color-primary);
      font-size: 1.15rem;
    }

    .inquiry-success-screen p {
      font-size: 0.85rem;
      color: #555;
    }

    .hotline-small-banner {
      font-size: 0.8rem;
      font-weight: 600;
      display: flex;
      gap: 5px;
    }

    .hotline-small-banner a {
      color: var(--color-secondary);
    }

    /* Micro Calc */
    .micro-calc-card {
      padding: 1.5rem;
      background-color: var(--color-white);
    }

    .micro-calc-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }

    .micro-calc-header h4 {
      font-size: 1rem;
      color: var(--color-primary);
    }

    .calc-accent-icon {
      color: var(--color-secondary);
    }

    .micro-calc-desc {
      font-size: 0.75rem;
      color: #888;
      margin-bottom: 1rem;
    }

    .micro-calc-sliders {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }

    .micro-slider-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .slider-values {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
    }

    .micro-calc-result {
      background-color: var(--color-bg-light);
      padding: 12px;
      border-radius: var(--border-radius-sm);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      border: 1px solid rgba(15, 76, 58, 0.05);
    }

    .micro-calc-result span {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666;
    }

    .micro-calc-result strong {
      font-size: 1.05rem;
      color: var(--color-primary);
    }

    .approved-badges {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.7rem;
      color: #777;
    }

    .shield-icon-badge {
      color: var(--color-primary);
    }

    @media (max-width: 1024px) {
      .grid-details-page {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .details-showcase-image {
        height: 320px;
      }
    }

    @media (max-width: 600px) {
      .details-specs-strip {
        grid-template-columns: repeat(2, 1fr);
      }
      .spec-unit {
        border-right: none;
      }
      .amenities-grid-details {
        grid-template-columns: 1fr;
      }
    }
  `}</style>
);
