import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatusMsg('Thank you! You have successfully subscribed to our luxury property catalog.');
    setEmail('');
    setTimeout(() => {
      setStatusMsg('');
    }, 5000);
  };

  return (
    <footer className="redesigned-footer section" style={{ padding: '80px 0 40px' }}>
      <div className="container">
        
        {/* Main Footer Content Grid */}
        <div className="footer-top-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-box">
            <Link to="/" className="navbar-logo" style={{ color: 'var(--color-white)', marginBottom: '1.25rem' }}>
              <Building className="logo-icon" />
              <div className="logo-text-wrapper">
                <span className="logo-title">SHRI KRISHNA</span>
                <span className="logo-subtitle">BUILDERS & DEVELOPERS</span>
              </div>
            </Link>
            
            <p style={{ color: '#bbb', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              "Building Trust. Creating Landmarks."<br />
              Indore's leading builder of boutique luxury villas, custom bungalows, and RERA-approved smart townships.
            </p>

            <div className="footer-contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#ccc' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--color-secondary)' }} />
                M3, Kanak Smart City, MR-12 Road, Indore - 453555
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--color-secondary)' }} />
                +91 96446 99206
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: 'var(--color-secondary)' }} />
                Mon - Sat: 9:00 AM - 7:00 PM
              </span>
            </div>
          </div>

          {/* Quick Links Matrix */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Landmarks</h4>
              <ul className="footer-nav-list">
                <li><Link to="/properties">Ready to Move</Link></li>
                <li><Link to="/properties">Under Construction</Link></li>
                <li><Link to="/properties">Premium Villas</Link></li>
                <li><Link to="/projects">Townships</Link></li>
                <li><Link to="/projects">Commercial Plazas</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul className="footer-nav-list">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/why-choose-us">Why Choose Us</Link></li>
                <li><Link to="/investment-guide">Investment Guide</Link></li>
                <li><Link to="/careers">Careers Track</Link></li>
                <li><Link to="/blogs">Blogs & PR</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Google Map */}
          <div className="footer-newsletter-box">
            <h4>Newsletter</h4>
            <p style={{ color: '#bbb', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Subscribe to receive private previews of our upcoming luxury launches in Indore.
            </p>

            <form onSubmit={handleSubscribe} style={{ position: 'relative', display: 'flex' }}>
              <input 
                type="email" 
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address" 
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(250, 250, 250, 0.1)',
                  color: 'var(--color-white)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  borderRadius: '4px'
                }}
              />
              <button 
                type="submit" 
                aria-label="Submit newsletter subscription"
                style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                  bottom: '4px',
                  width: '34px',
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Send size={14} />
              </button>
            </form>
            {statusMsg && (
              <span style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', marginTop: '6px', display: 'block' }}>
                {statusMsg}
              </span>
            )}

            {/* Google Map Preview */}
            <div className="footer-map-preview-wrapper">
              <iframe
                title="Shri Krishna Builders Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.890666014496!2d75.8753234!3d22.806509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzIzLjQiTiA3NcKwNTInMzEuMiJF!5e0!3m2!1sen!2sin!4v1627341234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="footer-bottom-bar">
          <div>
            <span>© {new Date().getFullYear()} Shri Krishna Builder's & Developers. All Rights Reserved. RERA No: MP-RERA-P-IND-2026-9912.</span>
          </div>

          <div className="footer-social-row">
            <a href="https://facebook.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
