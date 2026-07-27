import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building } from 'lucide-react';

export default function Navbar({ onOpenVisitModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      className={`navbar-fixed ${
        isScrolled 
          ? 'navbar-glass' 
          : isHome 
            ? 'navbar-transparent' 
            : 'navbar-solid'
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <Building className="logo-icon" />
          <div className="logo-text-wrapper">
            <span className="logo-title">SHRI KRISHNA</span>
            <span className="logo-subtitle">BUILDERS & DEVELOPERS</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-menu-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link-item ${
                location.pathname === link.path ? 'nav-link-active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="navbar-cta-desktop">
          <Link to="/contact" className="btn btn-secondary btn-nav">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-link-item ${
                location.pathname === link.path ? 'mobile-link-active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="mobile-link-item mobile-contact-link">
            Contact Details
          </Link>
          <button 
            className="btn btn-secondary mobile-visit-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenVisitModal();
            }}
          >
            Schedule Site Visit
          </button>
        </div>
      </div>

      {/* Embedded CSS for Navbar */}
      <style>{`
        .navbar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition-smooth);
          height: 90px;
          display: flex;
          align-items: center;
        }

        .navbar-container {
          width: 90%;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: inherit;
        }

        .logo-icon {
          color: var(--color-secondary);
          width: 32px;
          height: 32px;
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.1;
        }

        .logo-subtitle {
          font-size: 0.6rem;
          letter-spacing: 3px;
          color: var(--color-secondary);
          font-weight: 600;
        }

        /* Menu styles based on page scroll state */
        .navbar-transparent {
          background-color: transparent;
          color: var(--color-white);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar-solid {
          background-color: var(--color-primary);
          color: var(--color-white);
        }

        .navbar-glass {
          background-color: rgba(15, 76, 58, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: var(--color-white);
          height: 80px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border-bottom: 1px solid rgba(200, 155, 60, 0.2);
        }

        /* Desktop Nav Link Styles */
        .nav-menu-desktop {
          display: flex;
          gap: 2rem;
        }

        .nav-link-item {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 500;
          position: relative;
          padding: 6px 0;
          color: rgba(255, 255, 255, 0.8);
        }

        .nav-link-item:hover {
          color: var(--color-secondary);
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-secondary);
          transition: var(--transition-smooth);
        }

        .nav-link-item:hover::after,
        .nav-link-active::after {
          width: 100%;
        }

        .nav-link-active {
          color: var(--color-secondary) !important;
        }

        .btn-nav {
          padding: 10px 24px;
          font-size: 0.85rem;
        }

        /* Mobile Styles */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-white);
          cursor: pointer;
        }

        .mobile-menu-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--color-primary);
          border-bottom: 2px solid var(--color-secondary);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out;
        }

        .mobile-menu-dropdown.open {
          max-height: 500px;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          padding: 2rem 5%;
          gap: 1.25rem;
        }

        .mobile-link-item {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-link-item:hover,
        .mobile-link-active {
          color: var(--color-secondary);
          padding-left: 8px;
        }

        .mobile-contact-link {
          color: var(--color-accent);
          border-bottom: none;
        }

        .mobile-visit-btn {
          margin-top: 1rem;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .nav-menu-desktop,
          .navbar-cta-desktop {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
