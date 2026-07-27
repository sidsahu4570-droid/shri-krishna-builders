import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="terms-page-wrapper">
      <div className="container terms-container card-premium">
        <div className="terms-header">
          <FileText className="terms-icon" />
          <h1>Terms & Conditions</h1>
          <p>Effective Date: July 27, 2026</p>
        </div>

        <div className="terms-body">
          <p>
            Welcome to the online real estate portal of Shri Krishna Builder's & Developers. By using this website, you agree to comply with the terms and guidelines detailed below.
          </p>

          <h3>1. Frontend Demonstration Limits</h3>
          <p>
            This website is strictly a frontend demonstration. All listings, property values (villas, plots, duplex houses), project completion states, dynamic EMI calculations, and site visit schedules represent mock data. No real-world financial commitments or binding contracts are initiated through button clicks on this site.
          </p>

          <h3>2. RERA Registration Rules</h3>
          <p>
            All formal transactions, land title allotments, downpayment receipts, and sale agreement signing are executed physically at our Indore corporate site lounge under strict MP-RERA guidelines.
          </p>

          <h3>3. Brand Trademarks</h3>
          <p>
            The typography, design layouts, custom illustrated Indore vectors, and content copyright are owned by Shri Krishna Builder's & Developers. Unlicensed reproduction is subject to legal action under Madhya Pradesh jurisdiction.
          </p>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/" className="btn btn-primary">Return to Homepage</Link>
          </div>
        </div>
      </div>

      <style>{`
        .terms-page-wrapper {
          padding: 130px 0 80px 0;
          background-color: var(--color-bg-light);
          font-family: var(--font-body);
        }

        .terms-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem;
          background-color: var(--color-white);
        }

        .terms-header {
          text-align: center;
          margin-bottom: 2.5rem;
          border-bottom: 1px solid rgba(15, 76, 58, 0.08);
          padding-bottom: 1.5rem;
        }

        .terms-icon {
          color: var(--color-secondary);
          width: 44px;
          height: 44px;
          margin-bottom: 10px;
        }

        .terms-header h1 {
          font-family: var(--font-headings);
          font-size: 2.2rem;
          color: var(--color-primary);
        }

        .terms-header p {
          font-size: 0.8rem;
          color: #888;
        }

        .terms-body h3 {
          font-size: 1.25rem;
          color: var(--color-primary);
          margin: 2rem 0 0.75rem 0;
        }

        .terms-body p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
