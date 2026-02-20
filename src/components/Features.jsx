import { Factory, Package, Shield, Truck } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Factory,
    title: "Direct from Khewra Salt Mine",
    description:
      "We are the first company in the world to source directly from the authentic Khewra Salt Mine in Pakistan, delivering unmatched quality and provenance.",
  },
  {
    icon: Package,
    title: "Bulk Orders Only",
    description:
      "Minimum order quantities ensure the best wholesale pricing for your business across all product categories.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "Every product undergoes rigorous testing to meet our premium standards — from salt lamps to edible grains.",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    description:
      "We ship globally to over 15 countries with reliable tracking and insurance included on all bulk orders.",
  },
];

export const Features = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .feat-section {
          background: #ffffff;
          padding: 80px 32px;
          font-family: 'Syne', sans-serif;
          position: relative;
        }

        .feat-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .feat-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .feat-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: #16a34a;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .feat-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #16a34a;
          animation: fdot 2s ease-in-out infinite;
        }
        @keyframes fdot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .feat-title {
          font-size: clamp(26px, 3.5vw, 40px); font-weight: 800;
          color: #0f2318; letter-spacing: -0.02em;
          margin: 0 0 14px; line-height: 1.1;
        }
        .feat-title span { color: #16a34a; }
        .feat-subtitle {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: #4b7060; max-width: 520px; margin: 0 auto; line-height: 1.75;
        }

        /* ── Grid ── */
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── Card ── */
        .feat-card {
          background: #fff;
          border: 1px solid rgba(22,163,74,0.15);
          border-radius: 10px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        /* top line reveal on hover */
        .feat-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, #16a34a, transparent);
          transform: scaleX(0);
          transition: transform 0.35s ease;
        }
        .feat-card:hover {
          border-color: rgba(22,163,74,0.35);
          box-shadow: 0 16px 48px rgba(0,0,0,0.07), 0 0 20px rgba(22,163,74,0.06);
          transform: translateY(-4px);
        }
        .feat-card:hover::before { transform: scaleX(1); }

        /* icon */
        .feat-icon-wrap {
          width: 56px; height: 56px; border-radius: 14px;
          background: rgba(22,163,74,0.07);
          border: 1px solid rgba(22,163,74,0.18);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          transition: all 0.3s ease;
        }
        .feat-card:hover .feat-icon-wrap {
          background: rgba(22,163,74,0.12);
          box-shadow: 0 0 20px rgba(22,163,74,0.15);
        }

        .feat-card-title {
          font-size: 16px; font-weight: 700; color: #0f2318;
          letter-spacing: -0.01em; margin: 0 0 10px; line-height: 1.3;
        }
        .feat-card-desc {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: #4b7060; line-height: 1.75; margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .feat-section { padding: 60px 20px; }
          .feat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="feat-section">
        <div className="feat-inner">

          <div className="feat-header">
            <div className="feat-eyebrow">
              <div className="feat-eyebrow-dot" />
              Why Choose Us
            </div>
            <h2 className="feat-title">
              Why Choose <span>Lumina Earth Minerals?</span>
            </h2>
            <p className="feat-subtitle">
              We&apos;re not just another supplier — we&apos;re your direct connection to the world&apos;s finest
              natural products, sourced straight from Khewra Salt Mine.
            </p>
          </div>

          <div className="feat-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div className="feat-card" key={index}>
                  <div className="feat-icon-wrap">
                    <Icon size={24} color="#16a34a" />
                  </div>
                  <h3 className="feat-card-title">{feature.title}</h3>
                  <p className="feat-card-desc">{feature.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};