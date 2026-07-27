import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="policy-page-wrapper">
      <div className="container policy-container card-premium">
        <div className="policy-header">
          <Lock className="policy-icon" />
          <h1>Privacy Policy</h1>
          <p>Effective Date: July 27, 2026</p>
        </div>
        
        <div className="policy-body">
          <p>
            Shri Krishna Builder's & Developers is committed to protecting the privacy of our site visitors and buyers. This policy outlines how we handle data collected during your interaction with our online real estate portal.
          </p>

          <h3>1. Data We Collect</h3>
          <p>
            Since this is a client demonstration frontend portal, any information you enter into the booking scheduling sheets, EMI calculator sliders, or contact forms is processed entirely within your local browser storage. No data is stored in remote databases or shared with third-party analytical companies.
          </p>

          <h3>2. RERA Compliance & Gated Security</h3>
          <p>
            In accordance with Madhya Pradesh RERA policies and local town planning guidelines, all physical documents, title verification sheets, and registry records submitted at our Indore site lounge are kept in highly secured, encrypted digital lockers.
          </p>

          <h3>3. Contacts & Support</h3>
          <p>
            If you have questions regarding land title papers, escrow accounts, or this privacy document, contact our legal desk at 9644699206 or mail us at info@shrikrishnabuilders.com.
          </p>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/" className="btn btn-primary">Return to Homepage</Link>
          </div>
        </div>
      </div>

      <style>{`
        .policy-page-wrapper {
          padding: 130px 0 80px 0;
          background-color: var(--color-bg-light);
          font-family: var(--font-body);
        }

        .policy-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem;
          background-color: var(--color-white);
        }

        .policy-header {
          text-align: center;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid rgba(30, 30, 30, 0.08);
          padding-bottom: 1.5rem;
        }

        .policy-icon {
          color: var(--color-secondary);
          width: 44px;
          height: 44px;
          margin-bottom: 10px;
        }

        .policy-header h1 {
          font-family: var(--font-headings);
          font-size: 2.2rem;
          color: var(--color-primary);
        }

        .policy-header p {
          font-size: 0.8rem;
          color: #888;
        }

        .policy-body h3 {
          font-size: 1.25rem;
          color: var(--color-primary);
          margin: 2rem 0 0.75rem 0;
        }

        .policy-body p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
