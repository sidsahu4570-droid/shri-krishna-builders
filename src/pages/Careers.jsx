import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, FileText, CheckCircle2 } from 'lucide-react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Site Engineer',
    message: '',
    resume: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const jobsList = [
    {
      id: 1,
      title: 'Senior Civil Engineer (RERA Projects)',
      department: 'Construction Operations',
      location: 'MR-12 Road Site, Indore',
      type: 'Full-Time',
      experience: '5-8 Years'
    },
    {
      id: 2,
      title: 'Luxury Client Relationship Manager',
      department: 'Corporate Sales & CRM',
      location: 'Indore Corporate Office',
      type: 'Full-Time',
      experience: '3-5 Years'
    },
    {
      id: 3,
      title: 'Structural CAD Drafter',
      department: 'Architecture & Design',
      location: 'Indore Corporate Office',
      type: 'Full-Time',
      experience: '2-4 Years'
    }
  ];

  return (
    <div className="careers-page-wrapper">
      {/* Banner */}
      <section className="careers-banner-header">
        <div className="banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">JOIN THE EXPERTS</span>
          <h1>Build the Landmarks of Indore</h1>
          <p>Explore leadership career tracks, engineer roles, and client-centric sales careers inside Shri Krishna Builders.</p>
        </div>
      </section>

      {/* Grid splits */}
      <section className="section openings-section">
        <div className="container grid-2">
          
          {/* Job listings */}
          <div className="reveal-on-scroll">
            <span className="subtitle-premium">CURRENT OPENINGS</span>
            <h2 className="title-luxury">Join Our Development Teams</h2>
            
            <div className="jobs-vertical-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              {jobsList.map((job) => (
                <div key={job.id} className="card-premium job-detail-card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>{job.title}</h3>
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', padding: '4px 10px', backgroundColor: 'rgba(200,164,93,0.1)', color: 'var(--color-secondary)', fontWeight: '600', borderRadius: '4px' }}>
                      {job.type}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '8px 0' }}>{job.department} / Min Experience: {job.experience}</p>
                  <div style={{ display: 'flex', gap: '15px', fontSize: '0.8rem', color: '#666', marginTop: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} style={{ color: 'var(--color-secondary)' }} /> {job.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Careers application form */}
          <div className="apply-form-container reveal-on-scroll">
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '12px', border: '1px solid rgba(200, 164, 93, 0.25)' }}>
              <span className="subtitle-premium">APPLY ONLINE</span>
              <h2 className="title-luxury" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Submit Your Portfolio</h2>

              {submitted ? (
                <div className="success-box-careers" style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }} />
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.35rem', marginBottom: '8px' }}>Application Registered</h3>
                  <p style={{ fontSize: '0.85rem' }}>Thank you. Our HR managers will review your experience records and contact you within 5-7 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name} 
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email} 
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone} 
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="e.g. 9644699206"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target Position</label>
                    <select 
                      name="position"
                      value={formData.position} 
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="Site Engineer">Senior Civil Engineer</option>
                      <option value="CRM Manager">Luxury CRM Manager</option>
                      <option value="CAD Drafter">Structural CAD Drafter</option>
                      <option value="Other">Other Openings</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Upload Resume (PDF / DOC)</label>
                    <input 
                      type="file" 
                      required
                      onChange={handleFileChange}
                      className="form-input"
                      style={{ padding: '12px 20px' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Cover Note</label>
                    <textarea 
                      name="message"
                      value={formData.message} 
                      onChange={handleInputChange}
                      className="form-textarea" 
                      placeholder="Detail your construction experience or architect history..."
                    />
                  </div>

                  <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>
                    Submit Candidate Files
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .careers-banner-header {
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          height: 45vh;
          display: flex;
          align-items: center;
          color: var(--color-white);
        }
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(18, 18, 18, 0.85) 100%);
        }
        .banner-text-centered {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
        }
        .banner-text-centered h1 {
          font-size: 3.5rem;
          color: var(--color-white);
          margin-bottom: 1rem;
        }
        .banner-text-centered p {
          color: rgba(255,255,255,0.85);
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
