import React, { useState } from 'react';
import { useProperties } from '../context/PropertyContext';
import { Star, MessageSquare, Check, User } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = useProperties();

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [success, setSuccess] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!name || !feedback) return;

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setRole('');
      setFeedback('');
      setRating(5);
    }, 5000);
  };

  return (
    <div className="testimonials-page-wrapper">
      {/* Banner */}
      <section className="testimonials-banner-header">
        <div className="testimonials-banner-overlay"></div>
        <div className="container banner-text-centered">
          <span className="subtitle-premium">VERIFIED REVIEWS</span>
          <h1>Client Testimonials</h1>
          <p>Read about the experiences of families and investors who built their landmarks in Indore with us.</p>
        </div>
      </section>

      {/* Grid and Form */}
      <section className="section testimonials-core-sec">
        <div className="container grid-details-page">
          
          {/* Left Column: Grid of Testimonials */}
          <div className="reviews-grid-column">
            <div className="grid-2" style={{ gap: '1.5rem' }}>
              {testimonials.map((t) => (
                <div key={t.id} className="card-premium review-full-card">
                  <div className="stars-row" style={{ display: 'flex', gap: '3px', marginBottom: '10px' }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--color-secondary)" stroke="var(--color-secondary)" />
                    ))}
                  </div>
                  <p className="review-quote-text">
                    "{t.feedback}"
                  </p>
                  <div className="review-profile-footer" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1.25rem' }}>
                    <img src={t.avatar} alt={t.name} className="reviewer-avatar" />
                    <div>
                      <h4 className="reviewer-name">{t.name}</h4>
                      <span className="reviewer-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Submit review form */}
          <div className="reviews-form-column">
            <div className="write-review-card glass-panel">
              <h3 className="form-card-title">Share Your Experience</h3>
              <p className="form-card-subtitle">Are you a registered homeowner or investor with Shri Krishna Builders? Write a review below.</p>
              
              {!success ? (
                <form onSubmit={handleSubmitReview} className="review-submission-form">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Vyas"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Role / Occupation</label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. IT Professional, Indore"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Rating</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="form-input"
                      style={{ padding: '12px 18px' }}
                    >
                      <option value="5">5 Stars (Excellent)</option>
                      <option value="4">4 Stars (Good)</option>
                      <option value="3">3 Stars (Average)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Review Feedback</label>
                    <textarea
                      required
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Write your experience..."
                      className="form-textarea"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-secondary w-full" style={{ width: '100%' }}>
                    Submit Review Rating
                  </button>
                </form>
              ) : (
                <div className="review-success-screen" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <div className="success-icon-badge" style={{ backgroundColor: 'rgba(30, 30, 30, 0.05)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                    <Check size={28} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>Feedback Submitted Successfully</h4>
                  <p style={{ fontSize: '0.85rem', color: '#555' }}>
                    Thank you <strong>{name}</strong>. Your rating proposal has been sent to our relationship team. It will appear on our website after verification.
                  </p>
                </div>
              )}
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
    .testimonials-banner-header {
      height: 45vh;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1920&q=80');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--color-white);
    }

    .testimonials-banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(30, 30, 30, 0.85);
    }

    .testimonials-core-sec {
      background-color: var(--color-bg-light);
    }

    /* Testimonial cards listing */
    .review-full-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .review-quote-text {
      font-size: 0.9rem;
      color: #444;
      line-height: 1.6;
      font-style: italic;
    }

    .reviewer-avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid rgba(200, 155, 60, 0.3);
    }

    .reviewer-name {
      font-size: 0.9rem;
      color: var(--color-dark);
      font-weight: 600;
    }

    .reviewer-role {
      font-size: 0.75rem;
      color: var(--color-secondary);
      display: block;
    }

    /* Review submission form card */
    .write-review-card {
      padding: 2rem;
      border-radius: var(--border-radius-md);
      position: sticky;
      top: 110px;
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

    @media (max-width: 1024px) {
      .grid-details-page {
        grid-template-columns: 1fr;
      }
      .write-review-card {
        position: static;
      }
    }
  `}</style>
);
