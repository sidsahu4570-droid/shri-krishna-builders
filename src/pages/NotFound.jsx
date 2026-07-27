import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="notfound-page-wrapper">
      <div className="container notfound-content card-premium">
        <Compass size={60} className="notfound-icon" />
        <h1>Lost Your Way to Your Dream Home?</h1>
        <p>The premium project route you requested is unavailable or has been relocated by our architects.</p>
        <Link to="/" className="btn btn-secondary" style={{ marginTop: '1.5rem' }}>
          Back to Homepage
        </Link>
      </div>

      <style>{`
        .notfound-page-wrapper {
          height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-bg-light);
          font-family: var(--font-body);
        }

        .notfound-content {
          max-width: 600px;
          padding: 4rem 3rem;
          text-align: center;
          background-color: var(--color-white);
        }

        .notfound-icon {
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          animation: compass-spin 10s infinite linear;
        }

        @keyframes compass-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .notfound-content h1 {
          font-family: var(--font-headings);
          font-size: 1.85rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .notfound-content p {
          font-size: 0.95rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}
