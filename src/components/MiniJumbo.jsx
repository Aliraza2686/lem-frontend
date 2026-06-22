import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Flame } from "lucide-react";
import { productsThree, productsTwo } from "../lib/utills";

export const products = [
  ...productsThree,
  ...productsTwo,
];

// const categories = [
//   "All",
//   "Salt Lamps",
//   "Salt Bricks",
//   "Edible Salt",
//   "Animal Products",
//   "Minerals",
//   "Gemstones & Ornamental",
// ];
const categories = [
  "All",
  ...new Set(products.map((p) => p.category)),
];
// const categories = ["All", "Salt Lamps", "Salt Bricks", "Edible Salt", "Animal Products"];

export const MiniJumbo = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .products-page { font-family: 'Syne', sans-serif; }

        /* ── Dark Hero ── */
        .products-hero {
          background: linear-gradient(160deg, #020c06 0%, #041a0c 50%, #020c06 100%);
          position: relative; overflow: hidden;
          padding: 72px 32px 64px;
          border-bottom: 1px solid rgba(74,222,128,0.1);
        }
        .products-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute; top: -100px; left: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(22,163,74,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute; bottom: -80px; right: 5%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(4,120,87,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 12px;
          letter-spacing: 0.15em; color: rgba(134,239,172,0.6);
          text-transform: uppercase; margin-bottom: 20px;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(0.7); }
        }
        .hero-title {
          font-size: clamp(32px, 5vw, 56px); font-weight: 800;
          color: #fff; margin: 0 0 16px; letter-spacing: -0.02em; line-height: 1.08;
        }
        .hero-title span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-badges { display: flex; flex-wrap: wrap; gap: 10px; }
        .hbadge {
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.08em; padding: 6px 14px;
          border-radius: 3px; font-weight: 500;
        }
        .hbadge-green { background: rgba(22,163,74,0.12); border: 1px solid rgba(74,222,128,0.25); color: #4ade80; }
        .hbadge-orange { background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.25); color: #fb923c; }
        .hbadge-red { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #f87171; }

        /* ── Light section ── */
        .products-light {
          background: #f8faf8;
          position: relative; overflow: hidden;
        }
        .products-light::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── Filter bar ── */
        .filter-section {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; padding: 40px 32px 0;
        }
        .filter-bar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; }
        .filter-label {
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.12em; color: #4b7060;
          text-transform: uppercase; margin-right: 4px;
        }
        .filter-btn {
          font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.04em; padding: 7px 16px; border-radius: 3px;
          border: 1px solid rgba(22,163,74,0.2); background: #fff;
          color: #4b7060; cursor: pointer; transition: all 0.2s ease;
        }
        .filter-btn:hover { border-color: rgba(22,163,74,0.5); color: #16a34a; background: rgba(22,163,74,0.04); }
        .filter-btn.active { background: rgba(22,163,74,0.1); border-color: #16a34a; color: #16a34a; }

        /* ── Grid ── */
        .products-grid {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 0 32px 80px;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }

        /* ── Card ── */
        .product-card {
          background: #fff;
          border: 1px solid rgba(22,163,74,0.13);
          border-radius: 10px; overflow: hidden;
          transition: all 0.3s ease;
          display: flex; flex-direction: column;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .product-card:hover {
          border-color: rgba(22,163,74,0.35);
          box-shadow: 0 20px 56px rgba(0,0,0,0.1), 0 0 20px rgba(22,163,74,0.07);
          transform: translateY(-4px);
        }

        .card-img-wrap {
          position: relative; overflow: hidden; height: 280px;
        }
        .card-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease; filter: brightness(0.95);
        }
        .product-card:hover .card-img-wrap img { transform: scale(1.06); filter: brightness(1); }
        .card-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(15,35,24,0.3) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .product-card:hover .card-img-overlay { opacity: 1; }

        /* corner accents */
        .card-corner {
          position: absolute; width: 14px; height: 14px;
          opacity: 0; transition: opacity 0.3s ease; z-index: 5;
        }
        .product-card:hover .card-corner { opacity: 1; }
        .card-corner-tl { top: 8px; left: 8px; border-top: 2px solid #16a34a; border-left: 2px solid #16a34a; border-radius: 3px 0 0 0; }
        .card-corner-tr { top: 8px; right: 8px; border-top: 2px solid #16a34a; border-right: 2px solid #16a34a; border-radius: 0 3px 0 0; }
        .card-corner-bl { bottom: 8px; left: 8px; border-bottom: 2px solid #16a34a; border-left: 2px solid #16a34a; border-radius: 0 0 0 3px; }
        .card-corner-br { bottom: 8px; right: 8px; border-bottom: 2px solid #16a34a; border-right: 2px solid #16a34a; border-radius: 0 0 3px 0; }

        .card-badge-mine {
          position: absolute; top: 10px; left: 10px;
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.08em;
          padding: 4px 10px; border-radius: 3px;
          background: rgba(239,68,68,0.85); border: 1px solid rgba(239,68,68,0.4);
          color: #fff; z-index: 4; backdrop-filter: blur(6px);
        }
        .card-badge {
          position: absolute; top: 10px; right: 10px;
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.1em;
          padding: 4px 10px; border-radius: 3px;
          background: rgba(22,163,74,0.88); border: 1px solid rgba(22,163,74,0.5);
          color: #fff; z-index: 4; backdrop-filter: blur(6px);
        }

        /* body */
        .card-body { padding: 18px 18px 20px; flex: 1; display: flex; flex-direction: column; }
        .card-category {
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em;
          color: #16a34a; text-transform: uppercase; margin-bottom: 6px;
        }
        .card-title {
          font-weight: 700; font-size: 15px; color: #0f2318;
          margin: 0 0 8px; letter-spacing: -0.01em; line-height: 1.3;
        }
        .card-desc {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: #4b7060; line-height: 1.65; margin: 0 0 14px; flex: 1;
        }
        .card-meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 14px;
        }
        .card-min {
          display: flex; align-items: center; gap: 5px;
          font-family: 'DM Mono', monospace; font-size: 10px;
          color: #9ca3af; letter-spacing: 0.05em;
        }
        .card-divider { height: 1px; background: rgba(22,163,74,0.1); margin-bottom: 14px; }
        .card-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 11px;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: #fff; border: none; border-radius: 4px;
          text-decoration: none; transition: all 0.25s ease; text-align: center;
        }
        .card-cta:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 6px 20px rgba(22,163,74,0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .products-hero { padding: 48px 20px 40px; }
          .filter-section { padding: 28px 20px 0; }
          .products-grid { grid-template-columns: 1fr; padding: 0 20px 60px; }
          .card-img-wrap { height: 240px; }
        }
      `}</style>

      <div className="products-page">

        {/* ── Dark Hero ── */}
        <section className="products-hero">
          <div className="hero-glow" />
          <div className="hero-glow-2" />
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-dot" />
              Minerals & Himalayan Salt Exports
            </div>

            <h1 className="hero-title">
              Premium <span>Minerals & Natural Resources</span>
              <br />for Global Markets
            </h1>

            <div className="hero-badges">
              <span className="hbadge hbadge-green">
                <Package size={12} style={{ display: "inline", marginRight: 5 }} />
                {products.length} Products Available
              </span>

              <span className="hbadge hbadge-orange">
                Bulk Supply
              </span>

              <span className="hbadge hbadge-red">
                <Flame size={12} style={{ display: "inline", marginRight: 5 }} />
                Export Ready
              </span>
            </div>
          </div>
        </section>

        {/* ── Light section: filters + grid ── */}
        <div className="products-light">

          {/* Filter bar */}
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

          {/* Products grid */}
          <div className="products-grid">
            {filtered.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="card-img-wrap">
                  <img
                    src={
                      product.variants?.[0]?.images?.find(
                        (img) => !img.is_video
                      )?.src
                    }
                    alt={product.name}
                  />
                  {/* <img src={product.image} alt={product.name} /> */}
                  <div className="card-img-overlay" />
                  <div className="card-corner card-corner-tl" />
                  <div className="card-corner card-corner-tr" />
                  <div className="card-corner card-corner-bl" />
                  <div className="card-corner card-corner-br" />
                  {/* <span className="card-badge-mine">Khewra Mine</span> */}
                  {/* {product.badge && <span className="card-badge">{product.badge}</span>} */}
                </div>

               <div className="card-body">

  <div className="card-category">
    {product.category}
  </div>

  <h3 className="card-title">
    {product.name}
  </h3>

  <p className="card-desc">
    {product.desc}
  </p>

  <div className="card-meta">

    <div className="card-min">
      <Package size={10} color="#9ca3af" />

      {product.packaging?.[0]}
    </div>

  </div>

  <div className="card-divider" />

  <Link
    to={`/product-details/${product.id}`}
    className="card-cta"
  >
    View Details

    <ArrowRight size={14} />
  </Link>

</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};