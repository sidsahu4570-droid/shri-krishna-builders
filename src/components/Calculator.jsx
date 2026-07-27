import React, { useState } from 'react';
import { IndianRupee, TrendingUp, HelpCircle } from 'lucide-react';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState('emi');

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(15000000); // 1.5 Cr default
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default
  const [tenure, setTenure] = useState(20); // 20 years default

  // ROI Calculator State
  const [initialInvestment, setInitialInvestment] = useState(10000000); // 1 Cr default
  const [appreciationRate, setAppreciationRate] = useState(12); // 12% default
  const [holdingPeriod, setHoldingPeriod] = useState(10); // 10 years default
  const [includeRental, setIncludeRental] = useState(true);

  // EMI Calculations
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    
    if (r === 0) return Math.round(P / n);
    
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const emiVal = calculateEMI();
  const totalAmountPayable = emiVal * tenure * 12;
  const totalInterestPayable = totalAmountPayable - loanAmount;
  const interestRatio = totalAmountPayable > 0 ? (totalInterestPayable / totalAmountPayable) * 100 : 0;
  
  // Format Currency
  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  // ROI Calculations
  const calculateROI = () => {
    const P = initialInvestment;
    const r = appreciationRate / 100;
    const t = holdingPeriod;
    
    // Future Value under compound interest
    const futureValue = P * Math.pow(1 + r, t);
    
    // Add 3% annual rental yield compounded if requested
    let rentalAccumulated = 0;
    if (includeRental) {
      const rentalRate = 0.03; // 3% rental yield
      for (let i = 1; i <= t; i++) {
        // Simple approximation of 3% rental on increasing property value each year
        const annualPropVal = P * Math.pow(1 + r, i - 1);
        rentalAccumulated += annualPropVal * rentalRate;
      }
    }
    
    const totalEarnings = futureValue + rentalAccumulated;
    const netProfit = totalEarnings - P;
    const roiMultiplier = (totalEarnings / P).toFixed(1);

    return {
      futureValue: Math.round(futureValue),
      rentalAccumulated: Math.round(rentalAccumulated),
      totalEarnings: Math.round(totalEarnings),
      netProfit: Math.round(netProfit),
      roiMultiplier
    };
  };

  const roiRes = calculateROI();

  return (
    <div className="calculator-wrapper card-premium">
      {/* Tabs */}
      <div className="calc-tabs">
        <button
          onClick={() => setActiveTab('emi')}
          className={`calc-tab-btn ${activeTab === 'emi' ? 'active' : ''}`}
        >
          <IndianRupee size={16} />
          <span>Home Loan EMI</span>
        </button>
        <button
          onClick={() => setActiveTab('roi')}
          className={`calc-tab-btn ${activeTab === 'roi' ? 'active' : ''}`}
        >
          <TrendingUp size={16} />
          <span>Investment ROI Yield</span>
        </button>
      </div>

      <div className="calc-body">
        {activeTab === 'emi' ? (
          /* EMI CALCULATOR */
          <div className="calc-grid">
            <div className="calc-inputs-column">
              <span className="subtitle-premium">Amortization Planner</span>
              <h3 className="calc-title">Monthly EMI Estimator</h3>
              
              {/* Loan Amount Slider */}
              <div className="slider-group">
                <div className="slider-labels">
                  <span className="slider-name">Loan Amount</span>
                  <span className="slider-value-text">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="100000000"
                  step="500000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="luxury-slider"
                />
                <div className="slider-min-max">
                  <span>₹20 L</span>
                  <span>₹10 Cr</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="slider-group">
                <div className="slider-labels">
                  <span className="slider-name">Interest Rate</span>
                  <span className="slider-value-text">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="6.5"
                  max="15.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="luxury-slider"
                />
                <div className="slider-min-max">
                  <span>6.5%</span>
                  <span>15.0%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="slider-group">
                <div className="slider-labels">
                  <span className="slider-name">Tenure (Years)</span>
                  <span className="slider-value-text">{tenure} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="luxury-slider"
                />
                <div className="slider-min-max">
                  <span>5 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>
            </div>

            <div className="calc-outputs-column">
              <div className="result-main-card">
                <span className="result-label">Estimated Monthly EMI</span>
                <span className="result-big-value">{formatCurrency(emiVal)} / Month</span>
              </div>

              <div className="result-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Principal Amount</span>
                  <span className="detail-value">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Interest Payable</span>
                  <span className="detail-value text-gold">{formatCurrency(totalInterestPayable)}</span>
                </div>
                <div className="detail-item full-width">
                  <span className="detail-label">Total Amount Payable</span>
                  <span className="detail-value">{formatCurrency(totalAmountPayable)}</span>
                </div>
              </div>

              {/* SVG Ratio Ring */}
              <div className="chart-container">
                <svg width="100%" height="8" style={{ borderRadius: '4px', backgroundColor: '#e9e9e9' }}>
                  <rect
                    width={`${100 - interestRatio}%`}
                    height="100%"
                    fill="var(--color-primary)"
                  />
                  <rect
                    x={`${100 - interestRatio}%`}
                    width={`${interestRatio}%`}
                    height="100%"
                    fill="var(--color-secondary)"
                  />
                </svg>
                <div className="chart-legend">
                  <span className="legend-item"><span className="dot primary"></span> Principal ({(100 - interestRatio).toFixed(0)}%)</span>
                  <span className="legend-item"><span className="dot secondary"></span> Interest ({interestRatio.toFixed(0)}%)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ROI / YIELD CALCULATOR */
          <div className="calc-grid">
            <div className="calc-inputs-column">
              <span className="subtitle-premium">Indore Corridor Projections</span>
              <h3 className="calc-title">Future Value & Yield Projections</h3>

              {/* Initial Investment Slider */}
              <div className="slider-group">
                <div className="slider-labels">
                  <span className="slider-name">Property Value</span>
                  <span className="slider-value-text">{formatCurrency(initialInvestment)}</span>
                </div>
                <input
                  type="range"
                  min="5000000"
                  max="150000000"
                  step="500000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="luxury-slider"
                />
                <div className="slider-min-max">
                  <span>₹50 L</span>
                  <span>₹15 Cr</span>
                </div>
              </div>

              {/* Appreciation Rate Slider */}
              <div className="slider-group">
                <div className="slider-labels">
                  <span className="slider-name">Annual Appreciation Rate</span>
                  <span className="slider-value-text">{appreciationRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="18"
                  step="0.5"
                  value={appreciationRate}
                  onChange={(e) => setAppreciationRate(Number(e.target.value))}
                  className="luxury-slider"
                />
                <div className="slider-min-max">
                  <span>8% (Conservative)</span>
                  <span>18% (Indore bypass corridor)</span>
                </div>
              </div>

              {/* Holding Period Slider */}
              <div className="slider-group">
                <div className="slider-labels">
                  <span className="slider-name">Holding Period</span>
                  <span className="slider-value-text">{holdingPeriod} Years</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="20"
                  step="1"
                  value={holdingPeriod}
                  onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                  className="luxury-slider"
                />
                <div className="slider-min-max">
                  <span>3 Yrs</span>
                  <span>20 Yrs</span>
                </div>
              </div>

              {/* Checkbox for Rental Yield */}
              <label className="rental-checkbox-label">
                <input
                  type="checkbox"
                  checked={includeRental}
                  onChange={(e) => setIncludeRental(e.target.checked)}
                  className="luxury-checkbox"
                />
                <span>Include 3% estimated annual rental yield income</span>
              </label>
            </div>

            <div className="calc-outputs-column">
              <div className="result-main-card yield-bg">
                <span className="result-label text-gold">Projected Future Wealth Valuation</span>
                <span className="result-big-value">{formatCurrency(roiRes.totalEarnings)}</span>
              </div>

              <div className="result-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Capital Appreciation</span>
                  <span className="detail-value">{formatCurrency(roiRes.futureValue - initialInvestment)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Rental Earnings</span>
                  <span className="detail-value text-gold">{includeRental ? formatCurrency(roiRes.rentalAccumulated) : '₹0'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Net Profit Yield</span>
                  <span className="detail-value">{formatCurrency(roiRes.netProfit)}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Investment Return Multiplier</span>
                  <span className="detail-value text-gold">{roiRes.roiMultiplier}x Return</span>
                </div>
              </div>

              <div className="yield-notice-box">
                <HelpCircle size={16} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                <p>Projections are based on average 12% CAGR historical patterns on MR-12 corridor, Indore. Actual results will vary depending on micro-locality demand shifts.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .calculator-wrapper {
          background-color: var(--color-white);
          border-radius: var(--border-radius-lg);
          padding: 2.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .calc-tabs {
          display: flex;
          border-bottom: 2px solid #eaeaea;
          margin-bottom: 2.5rem;
          gap: 1.5rem;
        }

        .calc-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          padding: 12px 6px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          color: var(--color-text);
          position: relative;
          transition: var(--transition-fast);
        }

        .calc-tab-btn:hover {
          color: var(--color-primary);
        }

        .calc-tab-btn.active {
          color: var(--color-primary);
        }

        .calc-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-primary);
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
        }

        .calc-title {
          font-size: 1.6rem;
          margin-bottom: 1.5rem;
        }

        /* Sliders Styling */
        .slider-group {
          margin-bottom: 1.75rem;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-family: var(--font-body);
        }

        .slider-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text);
        }

        .slider-value-text {
          font-weight: 700;
          color: var(--color-primary);
          font-size: 0.95rem;
        }

        .luxury-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e1dbd2;
          outline: none;
          transition: background 0.3s;
        }

        .luxury-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--color-secondary);
          cursor: pointer;
          transition: transform 0.2s;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }

        .luxury-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider-min-max {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: #888;
          margin-top: 4px;
        }

        /* Checkbox Styling */
        .rental-checkbox-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          color: #555;
          margin-top: 1rem;
        }

        .luxury-checkbox {
          width: 16px;
          height: 16px;
          accent-color: var(--color-primary);
        }

        /* Output Column Styling */
        .result-main-card {
          background-color: var(--color-primary);
          color: var(--color-white);
          padding: 1.5rem 2rem;
          border-radius: var(--border-radius-md);
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .yield-bg {
          background-color: var(--color-dark);
          border-left: 4px solid var(--color-secondary);
        }

        .result-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #a8cfc4;
          font-weight: 500;
        }

        .result-big-value {
          font-family: var(--font-headings);
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-white);
        }

        .result-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .detail-item {
          background-color: var(--color-bg-light);
          padding: 1rem;
          border-radius: var(--border-radius-sm);
          display: flex;
          flex-direction: column;
          gap: 4px;
          border: 1px solid rgba(30, 30, 30, 0.04);
        }

        .detail-item.full-width {
          grid-column: span 2;
        }

        .detail-label {
          font-size: 0.7rem;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-value {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-dark);
        }

        .text-gold {
          color: var(--color-secondary) !important;
        }

        /* Legend details */
        .chart-container {
          margin-top: 1rem;
        }

        .chart-legend {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-top: 6px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot.primary { background-color: var(--color-primary); }
        .dot.secondary { background-color: var(--color-secondary); }

        .yield-notice-box {
          display: flex;
          gap: 8px;
          padding: 0.75rem;
          background-color: #f6f3eb;
          border-radius: var(--border-radius-sm);
          border: 1px solid #eae2d3;
          margin-top: 1rem;
        }

        .yield-notice-box p {
          font-size: 0.75rem;
          color: #7c7263;
        }

        @media (max-width: 768px) {
          .calculator-wrapper {
            padding: 1.5rem;
          }
          .calc-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .result-details-grid {
            grid-template-columns: 1fr;
          }
          .detail-item.full-width {
            grid-column: span 1;
          }
        }
      `}</style>
    </div>
  );
}
