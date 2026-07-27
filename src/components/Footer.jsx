import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate frontend newsletter subscription
    setStatusMsg('Thank you! You have successfully subscribed to our luxury property catalog.');
    setEmail('');
    setTimeout(() => {
      setStatusMsg('');
    }, 5000);
  };

  return (
    <footer className="footer-luxury">
      <div className="container footer-grid">
        {/* Brand Info */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-logo">
            <Building className="footer-logo-icon" />
            <div className="footer-logo-text">
              <span className="logo-title">SHRI KRISHNA</span>
              <span className="logo-subtitle">BUILDERS & DEVELOPERS</span>
            </div>
          </Link>
          <p className="footer-desc">
            "Building Trust. Creating Landmarks."<br />
            We craft ultra-premium villas, luxury bungalows, and state-of-the-art townships designed for Indore's elite.
          </p>
          <div className="footer-social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Corporate</h4>
          <ul className="footer-links-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/services">Services Offered</Link></li>
            <li><Link to="/testimonials">Client Reviews</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Compliance</h4>
          <ul className="footer-links-list">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><a href="#rera-indore">MP-RERA Approved</a></li>
            <li><a href="#legal-deeds">Land Clearance Titles</a></li>
            <li><Link to="/contact">Reach Site Office</Link></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="footer-contact-col">
          <h4 className="footer-heading">Head Office</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="contact-list-icon" />
              <span>
                M3, Kanak Smart City,<br />
                MR-12 Road, Near Aurobindo Hospital,<br />
                Indore, Madhya Pradesh - 453555
              </span>
            </li>
            <li>
              <Phone size={16} className="contact-list-icon" />
              <a href="tel:9644699206">+91 96446 99206</a>
            </li>
            <li>
              <Mail size={16} className="contact-list-icon" />
              <a href="mailto:info@shrikrishnabuilders.com">info@shrikrishnabuilders.com</a>
            </li>
          </ul>

          <div className="footer-newsletter-box">
            <h5 className="newsletter-title">Subscribe to Private Catalogs</h5>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
            {statusMsg && <p className="newsletter-success">{statusMsg}</p>}
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container bottom-bar-container">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Shri Krishna Builder's & Developers. All rights reserved.
          </p>
          <p className="developer-tag">
            Indore's Premier Luxury Landmark Architects.
          </p>
        </div>
      </div>

      <style>{`
        .footer-luxury {
          background-color: var(--color-dark);
          color: var(--color-white);
          padding: 80px 0 0 0;
          border-top: 3px solid var(--color-secondary);
          font-family: var(--font-body);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 3rem;
          padding-bottom: 60px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-white);
        }

        .footer-logo-icon {
          color: var(--color-secondary);
          width: 28px;
          height: 28px;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-text .logo-title {
          font-family: var(--font-headings);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          line-height: 1.1;
        }

        .footer-logo-text .logo-subtitle {
          font-size: 0.55rem;
          letter-spacing: 2px;
          color: var(--color-secondary);
          font-weight: 600;
        }

        .footer-desc {
          font-size: 0.85rem;
          color: #b0b0b0;
          line-height: 1.6;
        }

        .footer-social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          background-color: var(--color-secondary);
          border-color: var(--color-secondary);
          transform: translateY(-3px);
        }

        .footer-heading {
          font-family: var(--font-headings);
          font-size: 1.2rem;
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-list a {
          font-size: 0.85rem;
          color: #c0c0c0;
          transition: var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--color-secondary);
          padding-left: 5px;
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .footer-contact-list li {
          display: flex;
          gap: 10px;
          font-size: 0.85rem;
          color: #c0c0c0;
          line-height: 1.5;
        }

        .contact-list-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-contact-list a:hover {
          color: var(--color-secondary);
        }

        .footer-newsletter-box {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: var(--border-radius-sm);
        }

        .newsletter-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-secondary);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .newsletter-form {
          display: flex;
          position: relative;
        }

        .newsletter-input {
          width: 100%;
          padding: 10px 45px 10px 12px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          color: var(--color-white);
          font-size: 0.85rem;
          font-family: var(--font-body);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--color-secondary);
          background-color: rgba(255, 255, 255, 0.08);
        }

        .newsletter-submit-btn {
          position: absolute;
          right: 5px;
          top: 5px;
          bottom: 5px;
          width: 32px;
          background-color: var(--color-secondary);
          color: var(--color-white);
          border: none;
          border-radius: 3px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .newsletter-submit-btn:hover {
          background-color: var(--color-gold-hover);
        }

        .newsletter-success {
          font-size: 0.75rem;
          color: #a8ffb2;
          margin-top: 8px;
        }

        .footer-bottom-bar {
          margin-top: 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 24px 0;
        }

        .bottom-bar-container {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #888888;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .bottom-bar-container {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
