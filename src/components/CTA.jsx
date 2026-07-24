import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&family=Source+Sans+3:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');

        .cta-section {
          background: #f2ede3;
          font-family: 'Source Sans 3', sans-serif;
          padding: 80px 32px;
          position: relative;
          overflow: hidden;
        }

        /* subtle grid */
        .cta-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(168,137,64,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,137,64,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* top/bottom accent lines */
        .cta-section::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, rgba(168,137,64,0.35), transparent);
        }

        .cta-bottom-line {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, rgba(168,137,64,0.35), transparent);
        }

        /* radial glow */
        .cta-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(168,137,64,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-inner {
          position: relative; z-index: 2;
          max-width: 700px; margin: 0 auto; text-align: center;
        }

        .cta-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: #a88940;
          text-transform: uppercase; margin-bottom: 20px;
        }
        .cta-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #a88940;
          animation: ctadot 2s ease-in-out infinite;
        }
        @keyframes ctadot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4.5vw, 46px);
          font-weight: 800; color: #0d1f35;
          letter-spacing: -0.02em; line-height: 1.1;
          margin: 0 0 16px;
        }
        .cta-title span { color: #a88940; }

        .cta-desc {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: #4a5a4a; line-height: 1.75;
          max-width: 540px; margin: 0 auto 36px;
        }

        .cta-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; flex-wrap: wrap;
        }

        .cta-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Source Sans 3', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #a88940, #8a6f3a);
          color: white; border: 1px solid rgba(168,137,64,0.4);
          padding: 13px 30px; border-radius: 4px;
          text-decoration: none; transition: all 0.25s ease;
        }
        .cta-btn-primary:hover {
          background: linear-gradient(135deg, #8a6f3a, #6b5530);
          box-shadow: 0 8px 28px rgba(168,137,64,0.25);
          transform: translateY(-1px);
        }

        .cta-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Source Sans 3', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.05em;
          background: transparent;
          color: #a88940; border: 1px solid rgba(168,137,64,0.35);
          padding: 13px 30px; border-radius: 4px;
          text-decoration: none; transition: all 0.25s ease;
        }
        .cta-btn-outline:hover {
          background: rgba(168,137,64,0.06);
          border-color: rgba(168,137,64,0.6);
          color: #8a6f3a;
          transform: translateY(-1px);
        }

        @media (max-width: 560px) {
          .cta-section { padding: 60px 20px; }
          .cta-btns { flex-direction: column; }
          .cta-btn-primary, .cta-btn-outline { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-bottom-line" />
        <div className="cta-glow" />

        <div className="cta-inner">
          <div className="cta-eyebrow">
            <div className="cta-eyebrow-dot" />
            Wholesale Inquiries
          </div>
          <h2 className="cta-title">
            Ready to Place a <span>Bulk Order?</span>
          </h2>
        <p className="cta-desc">
  Looking for a reliable mineral supplier? We export Himalayan salt and other premium minerals worldwide, offering bulk supply, custom packaging, and competitive pricing.
</p>
          <div className="cta-btns">
            <Link to="/contact" className="cta-btn-primary">
              <Sparkles size={16} />
              Request Custom Quote
            </Link>
            <Link to="/products" className="cta-btn-outline">
              Browse Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};