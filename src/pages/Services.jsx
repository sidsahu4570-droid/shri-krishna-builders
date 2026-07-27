import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, Building, PenTool, Layout, ShoppingCart, 
  Tag, FileCheck, Landmark, Map, RefreshCw, 
  HardHat, ArrowRight 
} from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();
  const serviceList = [
    {
      icon: <Home size={32} />,
      title: 'Villa Construction',
      desc: 'Executing custom 3 BHK and 4 BHK luxury villa projects utilizing elite structural guidelines, double-height ceilings, and private pools.'
    },
    {
      icon: <Building size={32} />,
      title: 'Bungalow Construction',
      desc: 'Creating stately architectural bungalow homes designed around client space preferences, custom marble stone choices, and Vaastu.'
    },
    {
      icon: <PenTool size={32} />,
      title: 'Architecture & Design',
      desc: 'Drafting 3D renders, elevation layout blueprints, structural frames, and spatial models by our expert design associates.'
    },
    {
      icon: <Layout size={32} />,
      title: 'Luxury Interiors',
      desc: 'Designing bespoke indoor settings including modular kitchens, Italian marble wall panelling, custom closets, and warm ambient setups.'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'Property Buying Support',
      desc: 'Assisting clients in securing clear-title RERA approved residential plots, duplexes, and commercial lands in high appreciation zones.'
    },
    {
      icon: <Tag size={32} />,
      title: 'Property Selling Assistance',
      desc: 'Providing quick brokerage-free listings, virtual tours, and legal paperwork to help owners sell properties at premium prices.'
    },
    {
      icon: <FileCheck size={32} />,
      title: 'Legal Registry Validation',
      desc: 'Conducting comprehensive title deed verifications, mutation registry assistance, and guiding buyers safely through MP-RERA registries.'
    },
    {
      icon: <Landmark size={32} />,
      title: 'Investment Consulting',
      desc: 'Assisting HNIs and NRI buyers in identifying properties near Vijay Nagar & Super Corridor that offer maximum rental yield and capital gains.'
    },
    {
      icon: <Map size={32} />,
      title: 'Township Planning',
      desc: 'Master planning sustainable community layouts, underground utilities, broad asphalt roads, storm waters, and theme gardens.'
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'High-end Renovations',
      desc: 'Upgrading older properties with contemporary front facades, luxury bathroom fittings, structural repairs, and modern layouts.'
    },
    {
      icon: <HardHat size={32} />,
      title: 'Construction Management',
      desc: 'Directing on-site concrete pours, checking structural steel reinforcements, and tracking strict project delivery timelines.'
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* Banner */}
      <section className="services-banner-header">
        <div className="services-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">WHAT WE DO</span>
          <h1>Our Core Services</h1>
          <p>From architectural drafting and RERA legal consultancies to concrete core engineering, we deliver luxury at every stage.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-sec">
        <div className="container">
          <div className="grid-3" style={{ rowGap: '2.5rem' }}>
            {serviceList.map((srv, idx) => (
              <div key={idx} className="card-premium service-card-box">
                <div className="service-icon-wrapper">
                  {srv.icon}
                </div>
                <h3 className="service-card-title">{srv.title}</h3>
                <p className="service-card-desc">{srv.desc}</p>
                <a 
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact', { state: { selectedService: srv.title } });
                  }}
                  className="service-inquire-link"
                >
                  <span>Request Consultant</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section services-cta-section" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container cta-services-banner glass-panel">
          <div className="cta-services-text">
            <h3>Need a Custom Construction Proposal?</h3>
            <p>Speak directly with our chief planning engineer or request an architectural consultation for your personal bungalow design.</p>
          </div>
          <a href="tel:9644699206" className="btn btn-secondary">
            Call Chief Planner
          </a>
        </div>
      </section>

      {styleTag}
    </div>
  );
}

const styleTag = (
  <style>{`
    .services-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .services-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 30, 30, 0.85);
    }

    /* Service card custom design styling */
    .service-card-box {
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: var(--transition-smooth);
    }

    .service-icon-wrapper {
      width: 60px;
      height: 60px;
      background-color: rgba(30, 30, 30, 0.05);
      border-radius: var(--border-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
      transition: var(--transition-smooth);
      border: 1px solid rgba(30, 30, 30, 0.08);
    }

    .service-card-box:hover .service-icon-wrapper {
      background-color: var(--color-secondary);
      color: var(--color-white);
      transform: scale(1.05);
    }

    .service-card-title {
      font-size: 1.3rem;
      color: var(--color-dark);
      margin-top: 8px;
    }

    .service-card-desc {
      font-size: 0.85rem;
      color: #666;
      line-height: 1.6;
    }

    .service-inquire-link {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-secondary);
      margin-top: 8px;
      width: fit-content;
    }

    .service-inquire-link:hover {
      color: var(--color-primary);
    }

    /* CTA Section Banner */
    .cta-services-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem 4rem;
      border-radius: var(--border-radius-lg);
      border-color: rgba(200, 155, 60, 0.2);
      background-color: var(--color-white);
    }

    .cta-services-text {
      max-width: 65%;
    }

    .cta-services-text h3 {
      font-size: 1.6rem;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .cta-services-text p {
      font-size: 0.9rem;
      color: #555;
    }

    @media (max-width: 768px) {
      .cta-services-banner {
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        text-align: center;
      }
      .cta-services-text {
        max-width: 100%;
      }
    }
  `}</style>
);
