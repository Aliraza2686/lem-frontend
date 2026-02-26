import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Package, Flame } from "lucide-react";

const products = [
  {
    id: "edible-pink-salt",
    name: "Pink Salt Grains",
    description: "Premium grade pink salt for culinary use",
    price: "Starting at $15/kg",
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107986/ChatGPT_Image_Feb_21_2026_11_36_43_AM_i83jd1.png",
    rating: 4.9,
    bulkMin: "25kg",
    category: "Edible Salt",
    popularity: 92,
    badge: "Top Rated",
  },
  {
    id: "salt-candle-holders",
    name: "Animal Lick Salt",
    description: "Handcrafted lick salt for animals — rich in magnesium",
    price: "Starting at $18",
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545593/animal_lick_salt_piece_is_full_of_magniciem_and_uo9qym.jpg",
    rating: 4.6,
    bulkMin: "15 units",
    category: "Animal Products",
    popularity: 75,
    badge: null,
  },
  {
    id: "salt-tiles",
    name: "Customizable Shape Salt Lamps",
    description: "Custom shape salt lamps for decoration and wellness",
    price: "Starting at $35",
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg",
    rating: 4.5,
    bulkMin: "12 units",
    category: "Salt Lamps",
    popularity: 70,
    badge: "Custom",
  },
  {
    id: "small-salt-lamps",
    name: "Natural Himalayan Salt Lamps",
    description: "Compact salt lamps perfect for desks and small spaces",
    price: "Starting at $22",
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107992/ChatGPT_Image_Feb_21_2026_11_52_50_AM_vqebh1.png",
    rating: 4.7,
    bulkMin: "25 units",
    category: "Salt Lamps",
    popularity: 85,
    badge: null,
  },
    {
    id: "himalayan-salt-lamp-large",
    name: "Globe Shape Himalayan Salt Lamp",
    description: "Natural air purifying salt lamp with wooden base — Direct from Khewra Mine",
    price: "Starting at $45",
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107996/ChatGPT_Image_Feb_21_2026_11_52_01_AM_omyvj9.png",
    rating: 4.8,
    bulkMin: "10 units",
    category: "Salt Lamps",
    popularity: 95,
    badge: "Best Seller",
  },
  {
    id: "pink-salt-bricks",
    name: "Pink Salt Bricks for Cooking",
    description: "Pure Himalayan salt bricks perfect for grilling and serving",
    price: "Starting at $25",
    image: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749544296/Gourmet_Himalayan_Pink_Salt_-_5_Pound_Brick_by_u3uxbv.jpg",
    rating: 4.7,
    bulkMin: "20 units",
    category: "Salt Bricks",
    popularity: 88,
    badge: null,
  },
];

const categories = ["All", "Salt Lamps", "Salt Bricks", "Edible Salt", "Animal Products"];

export const MiniJumbo = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const _renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={11}
        fill={i < Math.floor(rating) ? "#4ade80" : "transparent"}
        color={i < Math.floor(rating) ? "#4ade80" : "rgba(74,222,128,0.25)"}
      />
    ));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .products-page {
          background: linear-gradient(160deg, #020c06 0%, #041a0c 50%, #020c06 100%);
          min-height: 100vh;
          font-family: 'Syne', sans-serif;
        }

        /* ── Hero banner ── */
        .products-hero {
          position: relative;
          overflow: hidden;
          padding: 72px 32px 64px;
          border-bottom: 1px solid rgba(74,222,128,0.1);
        }
        .products-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute;
          top: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(22,163,74,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          bottom: -80px; right: 5%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(4,120,87,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          color: rgba(134,239,172,0.6);
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        .hero-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
          line-height: 1.08;
        }
        .hero-title span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-desc {
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          font-weight: 300;
          color: rgba(134,239,172,0.6);
          max-width: 560px;
          line-height: 1.7;
          margin: 0 0 32px;
        }
        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .hbadge {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          padding: 6px 14px;
          border-radius: 3px;
          font-weight: 500;
        }
        .hbadge-green {
          background: rgba(22,163,74,0.12);
          border: 1px solid rgba(74,222,128,0.25);
          color: #4ade80;
        }
        .hbadge-orange {
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.25);
          color: #fb923c;
        }
        .hbadge-red {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          color: #f87171;
        }

        /* ── Filter bar ── */
        .filter-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 32px 0;
        }
        .filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .filter-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: rgba(134,239,172,0.4);
          text-transform: uppercase;
          margin-right: 4px;
        }
        .filter-btn {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 7px 16px;
          border-radius: 3px;
          border: 1px solid rgba(74,222,128,0.15);
          background: transparent;
          color: rgba(134,239,172,0.5);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-btn:hover {
          border-color: rgba(74,222,128,0.4);
          color: #4ade80;
          background: rgba(74,222,128,0.05);
        }
        .filter-btn.active {
          background: rgba(22,163,74,0.15);
          border-color: #16a34a;
          color: #4ade80;
        }

        /* ── Products grid ── */
        .products-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px 80px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ── Product card ── */
        .product-card {
          background: rgba(4,20,10,0.7);
          border: 1px solid rgba(74,222,128,0.1);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          border-color: rgba(74,222,128,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(22,163,74,0.08);
          transform: translateY(-4px);
        }

        .card-img-wrap {
          position: relative;
          overflow: hidden;
          height: 280px;
        }
        .card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          filter: brightness(0.9) saturate(1.05);
        }
        .product-card:hover .card-img-wrap img {
          transform: scale(1.06);
        }
        .card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(2,12,6,0.7) 0%, transparent 50%);
        }

        /* corner accents on hover */
        .card-corner {
          position: absolute;
          width: 16px; height: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 5;
        }
        .product-card:hover .card-corner { opacity: 1; }
        .card-corner-tl { top: 8px; left: 8px; border-top: 2px solid #4ade80; border-left: 2px solid #4ade80; border-radius: 3px 0 0 0; }
        .card-corner-tr { top: 8px; right: 8px; border-top: 2px solid #4ade80; border-right: 2px solid #4ade80; border-radius: 0 3px 0 0; }
        .card-corner-bl { bottom: 8px; left: 8px; border-bottom: 2px solid #4ade80; border-left: 2px solid #4ade80; border-radius: 0 0 0 3px; }
        .card-corner-br { bottom: 8px; right: 8px; border-bottom: 2px solid #4ade80; border-right: 2px solid #4ade80; border-radius: 0 0 3px 0; }

        .card-badge {
          position: absolute;
          top: 12px; right: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 3px;
          background: rgba(22,163,74,0.85);
          border: 1px solid rgba(74,222,128,0.4);
          color: #fff;
          z-index: 4;
          backdrop-filter: blur(8px);
        }
        .card-badge-mine {
          position: absolute;
          top: 12px; left: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 3px;
          background: rgba(239,68,68,0.8);
          border: 1px solid rgba(239,68,68,0.4);
          color: #fff;
          z-index: 4;
          backdrop-filter: blur(8px);
        }

        .card-body {
          padding: 20px 20px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .card-category {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(74,222,128,0.5);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .card-title {
          font-weight: 700;
          font-size: 16px;
          color: #fff;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .card-desc {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 300;
          color: rgba(134,239,172,0.5);
          line-height: 1.6;
          margin: 0 0 16px;
          flex: 1;
        }
        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .card-stars {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .card-rating-text {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(134,239,172,0.5);
          margin-left: 5px;
        }
        .card-min {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(134,239,172,0.4);
          letter-spacing: 0.05em;
        }

        .card-divider {
          height: 1px;
          background: rgba(74,222,128,0.08);
          margin-bottom: 16px;
        }

        .card-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 11px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: #fff;
          border: 1px solid rgba(74,222,128,0.3);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
          text-align: center;
        }
        .card-cta:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 0 20px rgba(74,222,128,0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .products-hero { padding: 48px 20px 40px; }
          .filter-section { padding: 28px 20px 0; }
          .products-grid { grid-template-columns: 1fr; padding: 0 20px 60px; }
          .card-img-wrap { height: 240px; }
        }
      `}</style>

      <div className="products-page">

        {/* ── Hero ── */}
        <section className="products-hero">
          <div className="hero-glow" />
          <div className="hero-glow-2" />
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-dot" />
              Salt Products — Khewra Mine Collection
            </div>
            <h1 className="hero-title">
              Premium Natural <span>Salt Products</span>
              <br />for Your Business
            </h1>
            {/* <p className="hero-desc">
              Premium Himalayan salt products sourced directly from the Khewra Salt Mine —
              bulk orders only, quality guaranteed for global wholesale buyers.
            </p> */}
            <div className="hero-badges">
              <span className="hbadge hbadge-green">
                <Package size={12} style={{ display: "inline", marginRight: 5 }} />
                {products.length} Products Available
              </span>
              <span className="hbadge hbadge-orange">Bulk Orders Only</span>
              <span className="hbadge hbadge-red">
                <Flame size={12} style={{ display: "inline", marginRight: 5 }} />
                Direct from Khewra Mine
              </span>
            </div>
          </div>
        </section>

        {/* ── Filter bar ── */}
        <div className="filter-section">
          <div className="filter-bar">
            <span className="filter-label">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Products Grid ── */}
        <div className="products-grid">
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="card-img-wrap">
                <img src={product.image} alt={product.name} />
                <div className="card-img-overlay" />
                <div className="card-corner card-corner-tl" />
                <div className="card-corner card-corner-tr" />
                <div className="card-corner card-corner-bl" />
                <div className="card-corner card-corner-br" />
                <span className="card-badge-mine">Khewra Mine</span>
                {/* {product.badge && <span className="card-badge">{product.badge}</span>} */}
              </div>

              <div className="card-body">
                <div className="card-category">{product.category}</div>
                <h3 className="card-title">{product.name}</h3>
                <p className="card-desc">{product.description}</p>

                <div className="card-meta">
                  {/* <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="card-stars">{renderStars(product.rating)}</div>
                    <span className="card-rating-text">{product.rating}</span>
                  </div> */}
                  <div className="card-min">
                    <Package size={10} color="rgba(134,239,172,0.4)" />
                    Min {product.bulkMin}
                  </div>
                </div>

                <div className="card-divider" />

                <Link to={`/contact?id=${product.id}`} className="card-cta">
                  Get a Quote
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};