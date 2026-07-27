import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Calendar, X, CheckCircle } from 'lucide-react';

export default function FloatingActions({ showVisitModal, onToggleVisitModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Villa');
  const [visitDate, setVisitDate] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Simulate scheduling visit success
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setPhone('');
      setEmail('');
      setVisitDate('');
      onToggleVisitModal();
    }, 4000);
  };

  return (
    <>
      <div className="floating-bar">
        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className={`floating-btn btn-scroll-top ${isVisible ? 'visible' : ''}`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        {/* Site Visit Trigger */}
        <button
          onClick={onToggleVisitModal}
          className="floating-btn btn-visit-schedule"
          aria-label="Schedule site visit"
        >
          <Calendar size={20} className="pulse-icon" />
          <span className="btn-tooltip">Book Site Visit</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919644699206?text=Hello!%20I%20am%20interested%20in%20learning%20more%20about%20your%20luxury%20real%20estate%20projects."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn btn-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} />
          <span className="btn-tooltip">WhatsApp Us</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:9644699206"
          className="floating-btn btn-call"
          aria-label="Call Customer Care"
        >
          <Phone size={20} />
          <span className="btn-tooltip">Call Developer</span>
        </a>
      </div>

      {/* Booking Modal */}
      {showVisitModal && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <button className="modal-close-btn" onClick={onToggleVisitModal}>
              <X size={20} />
            </button>

            {!success ? (
              <form onSubmit={handleFormSubmit} className="visit-booking-form">
                <span className="subtitle-premium">Private Tour</span>
                <h3 className="modal-title">Schedule A Luxury Site Visit</h3>
                <p className="modal-subtitle">
                  Experience our premium villas and construction quality first hand. We provide complimentary luxury chauffeur service across Indore.
                </p>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Property Preference</label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="form-input"
                      style={{ padding: '13px 18px' }}
                    >
                      <option value="Villa">Villa</option>
                      <option value="Bungalow">Bungalow</option>
                      <option value="Farmhouse">Farmhouse</option>
                      <option value="Duplex House">Duplex House</option>
                      <option value="Plot Development">Plots / Township</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="form-input"
                      style={{ padding: '10px 18px' }}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-secondary w-full" style={{ width: '100%', marginTop: '1rem' }}>
                  Schedule Private Tour
                </button>
              </form>
            ) : (
              <div className="modal-success-screen">
                <CheckCircle size={60} className="success-icon" />
                <h3>Tour Scheduled Successfully</h3>
                <p>
                  Thank you, <strong>{name}</strong>. Your request for a private chauffeur-driven tour to our premium sites has been registered.
                </p>
                <div className="success-details-card">
                  <p><strong>Property Interest:</strong> {propertyType}</p>
                  <p><strong>Proposed Date:</strong> {visitDate || 'Contacting to confirm'}</p>
                  <p>Our dedicated Relationship Manager will contact you shortly at <strong>+91 {phone}</strong>.</p>
                </div>
                <div className="hotline-banner">
                  <span>Hotline Support:</span>
                  <a href="tel:9644699206">+91 96446 99206</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CSS Styles for Floating Buttons and Modals */}
      <style>{`
        .floating-bar {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 999;
        }

        .floating-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: var(--transition-smooth);
          position: relative;
        }

        .floating-btn:hover {
          transform: translateY(-5px);
        }

        .btn-scroll-top {
          background-color: var(--color-dark);
          opacity: 0;
          pointer-events: none;
          transform: scale(0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-scroll-top.visible {
          opacity: 1;
          pointer-events: auto;
          transform: scale(1);
        }

        .btn-visit-schedule {
          background-color: var(--color-secondary);
        }

        .btn-whatsapp {
          background-color: #25D366;
        }

        .btn-call {
          background-color: var(--color-primary);
        }

        /* Tooltip text styling */
        .btn-tooltip {
          position: absolute;
          right: 65px;
          background-color: var(--color-dark);
          color: var(--color-white);
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: var(--transition-fast);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .floating-btn:hover .btn-tooltip {
          opacity: 1;
          right: 60px;
        }

        .pulse-icon {
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(0.95);
          }
        }

        /* Modal Layout */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(15, 76, 58, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        .modal-content {
          width: 90%;
          max-width: 550px;
          border-radius: var(--border-radius-lg);
          padding: 2.5rem;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--color-text);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--color-secondary);
        }

        .modal-title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .modal-subtitle {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 1.5rem;
        }

        /* Success Screen inside Modal */
        .modal-success-screen {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: var(--color-primary);
        }

        .modal-success-screen h3 {
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        .modal-success-screen p {
          font-size: 0.9rem;
          color: #555;
        }

        .success-details-card {
          background-color: rgba(15, 76, 58, 0.05);
          border: 1px solid rgba(15, 76, 58, 0.1);
          padding: 1.25rem;
          border-radius: var(--border-radius-md);
          width: 100%;
          text-align: left;
          font-size: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .hotline-banner {
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: 1rem;
          display: flex;
          gap: 5px;
        }

        .hotline-banner a {
          color: var(--color-secondary);
        }

        @media (max-width: 480px) {
          .modal-content {
            padding: 1.5rem;
          }
          .modal-title {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </>
  );
}
