import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import { Building } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import Testimonials from './pages/Testimonials';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';
import WhyChooseUs from './pages/WhyChooseUs';
import InvestmentGuide from './pages/InvestmentGuide';
import Careers from './pages/Careers';

function App() {
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const toggleVisitModal = () => {
    setShowVisitModal((prev) => !prev);
  };

  return (
    <PropertyProvider>
      {/* Luxury Fullscreen Preloader */}
      <div className={`luxury-preloader ${loading ? '' : 'preloader-hidden'}`}>
        <div className="preloader-logo-wrap">
          <Building className="preloader-icon" size={60} />
          <h2>SHRI KRISHNA</h2>
          <span>BUILDERS & DEVELOPERS</span>
        </div>
      </div>

      <Router>
        <div className="app-layout">
          {/* Navbar with modal click launcher */}
          <Navbar onOpenVisitModal={toggleVisitModal} />
          
          <main className="main-content-layout">
            <Routes>
              <Route path="/" element={<Home onOpenVisitModal={toggleVisitModal} />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<SingleBlog />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/investment-guide" element={<InvestmentGuide />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />

          {/* Floating actions (Call, WhatsApp, Top, Visit Scheduler) */}
          <FloatingActions 
            showVisitModal={showVisitModal} 
            onToggleVisitModal={toggleVisitModal} 
          />
        </div>
      </Router>
    </PropertyProvider>
  );
}

export default App;
