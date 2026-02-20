import React from "react";
import { topSellingProducts } from "../lib/utills";
import { Star, ArrowRight, Package } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const TopSelling = () => {
  const navigate = useNavigate();

  const _renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={11}
        fill={i < Math.floor(rating) ? "#16a34a" : "transparent"}
        color={i < Math.floor(rating) ? "#16a34a" : "#d1d5db"}
      />
    ));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        /* ── Section ── */
        .ts-section {
          background: #f8faf8;
          padding: 80px 0;
          font-family: 'Syne', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle grid texture */
        .ts-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* top fade from dark jumbotron */
        .ts-section::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, transparent, rgba(22,163,74,0.3), transparent);
        }

        .ts-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
        }

        /* ── Header ── */
        .ts-header { text-align: center; margin-bottom: 56px; }
        .ts-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: #16a34a;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .ts-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #16a34a;
          animation: tsdot 2s ease-in-out infinite;
        }
        @keyframes tsdot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .ts-title {
          font-size: clamp(28px, 4vw, 42px); font-weight: 800;
          color: #0f2318; letter-spacing: -0.02em; margin: 0 0 12px;
        }
        .ts-title span { color: #16a34a; }
        .ts-subtitle {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: #4b7060; max-width: 500px; margin: 0 auto 28px; line-height: 1.7;
        }
        .ts-view-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white; border: none;
          padding: 11px 28px; border-radius: 4px;
          cursor: pointer; transition: all 0.25s ease;
          text-decoration: none;
        }
        .ts-view-btn:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 8px 24px rgba(22,163,74,0.25);
          transform: translateY(-1px);
        }

        /* ── Grid ── */
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── Card ── */
        .ts-card {
          background: #fff;
          border: 1px solid rgba(22,163,74,0.12);
          border-radius: 10px; overflow: hidden;
          transition: all 0.3s ease;
          display: flex; flex-direction: column;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .ts-card:hover {
          border-color: rgba(22,163,74,0.35);
          box-shadow: 0 16px 48px rgba(0,0,0,0.1), 0 0 20px rgba(22,163,74,0.08);
          transform: translateY(-4px);
        }

        /* image */
        .ts-img-wrap {
          position: relative; overflow: hidden; height: 280px;
        }
        .ts-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease; filter: brightness(0.96);
        }
        .ts-card:hover .ts-img-wrap img { transform: scale(1.06); filter: brightness(1); }

        .ts-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(15,35,24,0.35) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .ts-card:hover .ts-img-overlay { opacity: 1; }

        /* corner accents on hover */
        .ts-corner {
          position: absolute; width: 14px; height: 14px;
          opacity: 0; transition: opacity 0.3s ease; z-index: 5;
        }
        .ts-card:hover .ts-corner { opacity: 1; }
        .ts-corner-tl { top: 8px; left: 8px; border-top: 2px solid #16a34a; border-left: 2px solid #16a34a; border-radius: 3px 0 0 0; }
        .ts-corner-tr { top: 8px; right: 8px; border-top: 2px solid #16a34a; border-right: 2px solid #16a34a; border-radius: 0 3px 0 0; }
        .ts-corner-bl { bottom: 8px; left: 8px; border-bottom: 2px solid #16a34a; border-left: 2px solid #16a34a; border-radius: 0 0 0 3px; }
        .ts-corner-br { bottom: 8px; right: 8px; border-bottom: 2px solid #16a34a; border-right: 2px solid #16a34a; border-radius: 0 0 3px 0; }

        .ts-badge {
          position: absolute; top: 10px; right: 10px; z-index: 4;
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.08em;
          background: rgba(22,163,74,0.9); color: #fff;
          padding: 4px 10px; border-radius: 3px;
          backdrop-filter: blur(6px);
        }

        /* body */
        .ts-body { padding: 18px 18px 20px; flex: 1; display: flex; flex-direction: column; }

        .ts-category {
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em;
          color: #16a34a; text-transform: uppercase; margin-bottom: 6px;
        }
        .ts-name {
          font-size: 15px; font-weight: 700; color: #0f2318;
          letter-spacing: -0.01em; margin: 0 0 10px; line-height: 1.3; flex: 1;
        }
        .ts-meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 14px;
        }
        .ts-stars { display: flex; align-items: center; gap: 2px; }
        .ts-rating-val {
          font-family: 'DM Mono', monospace; font-size: 11px; color: #4b7060; margin-left: 5px;
        }
        .ts-min {
          display: flex; align-items: center; gap: 4px;
          font-family: 'DM Mono', monospace; font-size: 10px; color: #9ca3af; letter-spacing: 0.04em;
        }

        .ts-divider { height: 1px; background: rgba(22,163,74,0.1); margin-bottom: 14px; }

        .ts-cta {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          width: 100%; padding: 10px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: #fff; border: none; border-radius: 4px;
          text-decoration: none; transition: all 0.25s ease; text-align: center;
        }
        .ts-cta:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 6px 20px rgba(22,163,74,0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .ts-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .ts-grid { grid-template-columns: 1fr; }
          .ts-inner { padding: 0 20px; }
          .ts-section { padding: 60px 0; }
          .ts-img-wrap { height: 240px; }
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-inner">

          {/* Header */}
          <div className="ts-header">
            <div className="ts-eyebrow">
              <div className="ts-eyebrow-dot" />
              Wholesale Favorites
            </div>
            <h2 className="ts-title">
              Top Selling <span>Bulk Products</span>
            </h2>
            <p className="ts-subtitle">
              Our most popular wholesale items trusted by businesses worldwide — direct from Khewra Salt Mine.
            </p>
            <button className="ts-view-btn" onClick={() => navigate("/products")}>
              View All Products
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Grid */}
          <div className="ts-grid">
            {topSellingProducts.map((product) => (
              <div className="ts-card" key={product.id}>
                <div className="ts-img-wrap">
                  <img src={product?.image || "/placeholder.svg"} alt={product?.name} />
                  <div className="ts-img-overlay" />
                  <div className="ts-corner ts-corner-tl" />
                  <div className="ts-corner ts-corner-tr" />
                  <div className="ts-corner ts-corner-bl" />
                  <div className="ts-corner ts-corner-br" />
                  <span className="ts-badge">Bulk Only</span>
                </div>

                <div className="ts-body">
                  <div className="ts-category">{product.category}</div>
                  <h3 className="ts-name">{product.name}</h3>

                  <div className="ts-meta">
                    {/* <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="ts-stars">{renderStars(product.rating)}</div>
                      <span className="ts-rating-val">{product.rating}</span>
                    </div> */}
                    <div className="ts-min">
                      <Package size={10} color="#9ca3af" />
                      Min {product.bulkMin}
                    </div>
                  </div>

                  <div className="ts-divider" />

                  <Link to={`/contact?id=${product?.id}`} className="ts-cta">
                    Get a Quote
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};