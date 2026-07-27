import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenVisitModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
        {/* Left: Logo */}
        <Link to="/" className="navbar-logo">
          <Building className="logo-icon" />
          <div className="logo-text-wrapper">
            <span className="logo-title">SHRI KRISHNA</span>
            <span className="logo-subtitle">BUILDERS & DEVELOPERS</span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Grouped & Narrower) */}
        <nav className="nav-menu-desktop">
          <Link to="/" className={`nav-link-item ${location.pathname === '/' ? 'nav-link-active' : ''}`}>
            Home
          </Link>

          {/* Projects Dropdown */}
          <div className="nav-link-item dropdown-trigger">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'default' }}>
              Projects <ChevronDown size={12} />
            </span>
            <div className="dropdown-menu-panel">
              <Link to="/projects" className="dropdown-item-link">Residential Sector</Link>
              <Link to="/projects" className="dropdown-item-link">Premium Villas</Link>
              <Link to="/projects" className="dropdown-item-link">Luxury Bungalows</Link>
              <Link to="/projects" className="dropdown-item-link">Commercial Plazas</Link>
            </div>
          </div>

          {/* Properties Dropdown */}
          <div className="nav-link-item dropdown-trigger">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'default' }}>
              Properties <ChevronDown size={12} />
            </span>
            <div className="dropdown-menu-panel">
              <Link to="/properties" className="dropdown-item-link">Ready to Move</Link>
              <Link to="/properties" className="dropdown-item-link">Under Construction</Link>
              <Link to="/properties" className="dropdown-item-link">Premium Estates</Link>
              <Link to="/properties" className="dropdown-item-link">Appreciation Plots</Link>
            </div>
          </div>

          {/* Company Dropdown (Consolidated) */}
          <div className="nav-link-item dropdown-trigger">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'default' }}>
              Company <ChevronDown size={12} />
            </span>
            <div className="dropdown-menu-panel">
              <Link to="/about" className="dropdown-item-link">About Us</Link>
              <Link to="/why-choose-us" className="dropdown-item-link">Why Choose Us</Link>
              <Link to="/careers" className="dropdown-item-link">Careers</Link>
              <Link to="/testimonials" className="dropdown-item-link">Testimonials</Link>
            </div>
          </div>

          <Link to="/services" className={`nav-link-item ${location.pathname === '/services' ? 'nav-link-active' : ''}`}>
            Services
          </Link>

          <Link to="/gallery" className={`nav-link-item ${location.pathname === '/gallery' ? 'nav-link-active' : ''}`}>
            Gallery
          </Link>

          {/* Resources Dropdown (Consolidated) */}
          <div className="nav-link-item dropdown-trigger">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'default' }}>
              Resources <ChevronDown size={12} />
            </span>
            <div className="dropdown-menu-panel">
              <Link to="/investment-guide" className="dropdown-item-link">Investment Guide</Link>
              <Link to="/blogs" className="dropdown-item-link">Blogs & Updates</Link>
              <Link to="/faqs" className="dropdown-item-link">Frequently Asked FAQs</Link>
            </div>
          </div>
        </nav>

        {/* Right: Contact CTA Button */}
        <div className="navbar-cta-desktop">
          <Link to="/contact" className="btn btn-secondary btn-nav">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <Link to="/" className="mobile-link-item">Home</Link>
          <Link to="/about" className="mobile-link-item">About Company</Link>
          <Link to="/projects" className="mobile-link-item">Our Projects</Link>
          <Link to="/properties" className="mobile-link-item">Properties Catalog</Link>
          <Link to="/services" className="mobile-link-item">Services</Link>
          <Link to="/gallery" className="mobile-link-item">Gallery</Link>
          <Link to="/why-choose-us" className="mobile-link-item">Why Choose Us</Link>
          <Link to="/investment-guide" className="mobile-link-item">Investment Guide</Link>
          <Link to="/blogs" className="mobile-link-item">Blogs</Link>
          <Link to="/careers" className="mobile-link-item">Careers</Link>
          <Link to="/contact" className="mobile-link-item mobile-contact-link">Contact</Link>
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
    </header>
  );
}
