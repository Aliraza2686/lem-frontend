import { useState, useEffect } from "react";
import { Mountain, Leaf, Award, Users, Globe, Heart, FlaskConical, Gem, Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo";
import { SEO } from "../components/atoms/SEO";
import { CATALOG_URL } from "../lib/utills";
import { getProducts } from "../lib/products";
import { canonicalFor, ORGANIZATION_ID } from "../lib/seo";

const portfolioSpec = (product) => {
  const v = product.variants?.[0];
  return v?.purity || v?.quality || "";
};

const portfolioImage = (product) =>
  product.variants?.[0]?.images?.find((img) => !img.is_video)?.src;

const additionalMinerals = [
  {
    name: "Lead Ore",
    desc: "Sourced on request for smelting and industrial lead production. Quantities, grades, and lab documentation are confirmed per order based on the buyer's destination and required specification.",
  },
  {
    name: "Chrome Ore",
    desc: "Available on inquiry for ferrochrome, stainless steel, and refractory applications, subject to current mine availability across our sourcing network in Balochistan and surrounding regions.",
  },
  {
    name: "Pumice Stone",
    desc: "A lightweight volcanic mineral suitable for construction blocks, abrasives, cosmetics, and horticultural applications — sourced on request from our partner quarries.",
  },
];

export const About = () => {
const [portfolioProducts, setPortfolioProducts] = useState([]);

useEffect(() => {
  let cancelled = false;
  getProducts().then((data) => {
    if (!cancelled) setPortfolioProducts(data);
  });
  return () => {
    cancelled = true;
  };
}, []);

const values = [
  {
    icon: Mountain,
    title: "Authentic Mineral Sources",
    desc: "We source premium minerals from Pakistan including Bentonite, Nephrite, Fluorite, Limestone, Silica Sand, Himalayan Salt, and other natural resources.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Every mineral shipment is carefully inspected to maintain consistent quality, specifications, and export standards for global buyers.",
  },
  {
    icon: Users,
    title: "Trusted Partnerships",
    desc: "We work closely with importers, distributors, and industries worldwide to provide reliable mineral supply solutions.",
  },
  {
    icon: Globe,
    title: "Global Mineral Export",
    desc: "We supply Bentonite, Nephrite, Fluorite, Limestone, Silica Sand, and other minerals with worldwide shipping support.",
  },
  {
    icon: Leaf,
    title: "Natural Resources",
    desc: "Our portfolio focuses on naturally sourced minerals from Pakistan's rich geological regions with strong origin value.",
  },
  {
    icon: Heart,
    title: "Long-Term Reliability",
    desc: "We prioritize transparency, competitive pricing, and dependable supply chains to build lasting global partnerships.",
  },
];

  const stats = [
    { number: "2015", label: "Established In Export Business" },
    { number: "250+", label: "Tons Bentonite & Minerals Supplied" },
    { number: "8", label: "Minerals In Export Catalog" },
    { number: "100%", label: "Direct-From-Source Sourcing" },
  ];

  return (
    <NavLayoutTwo>
      <SEO
        title="About Us"
        description="Lumina Earth Minerals is a Pakistan-based mineral export company sourcing Bentonite, Nephrite, Fluorite, Limestone, Silica Sand and Himalayan Salt from the Khewra Salt Range for global B2B buyers."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${canonicalFor("/about")}#webpage`,
          url: canonicalFor("/about"),
          about: { "@id": ORGANIZATION_ID },
          mainEntity: { "@id": ORGANIZATION_ID },
        }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&family=Source+Sans+3:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');

        .about-page {
          background: linear-gradient(160deg, #051223 0%, #0d1f35 50%, #051223 100%);
          min-height: 100vh;
          font-family: 'Source Sans 3', sans-serif;
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          overflow: hidden;
          padding: 80px 32px 72px;
          text-align: center;
          border-bottom: 1px solid rgba(200,170,100,0.1);
        }
        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(200,170,100,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(200,170,100,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .ah-glow {
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(168,137,64,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
        }
        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(220,200,150,0.55);
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #c8aa64;
          animation: pdot 2s ease-in-out infinite;
        }
        @keyframes pdot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .about-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin: 0 0 20px;
        }
        .about-hero h1 span {
          background: linear-gradient(135deg, #c8aa64, #d4ba78);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-hero p {
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          font-weight: 300;
          color: rgba(220,200,150,0.6);
          line-height: 1.75;
          margin: 0;
        }

        /* ── Stats strip ── */
        .stats-strip {
          border-bottom: 1px solid rgba(200,170,100,0.08);
          border-top: 1px solid rgba(200,170,100,0.08);
          background: rgba(10,24,40,0.5);
        }
        .stats-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-cell {
          padding: 32px 24px;
          text-align: center;
          border-right: 1px solid rgba(200,170,100,0.08);
        }
        .stat-cell:last-child { border-right: none; }
        .stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 800;
          color: #c8aa64;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-lbl {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(220,200,150,0.4);
          text-transform: uppercase;
        }

        /* ── Light lower half ── */
        .about-light {
          background: #f2ede3;
          position: relative;
          overflow: hidden;
        }
        .about-light::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(168,137,64,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,137,64,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── Story section ── */
        .story-section {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .story-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #a88940;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .story-eyebrow::before {
          content: '';
          display: inline-block;
          width: 32px; height: 1px;
          background: #a88940;
        }
        .story-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #0d1f35;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
          line-height: 1.15;
        }
        .story-section h2 span { color: #a88940; }
        .story-p {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          font-weight: 300;
          color: #57534e;
          line-height: 1.85;
          margin-bottom: 16px;
        }
        .story-p:last-of-type { margin-bottom: 0; }
        .story-p strong { color: #0d1f35; font-weight: 500; }

        .story-img-wrap {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(168,137,64,0.2);
          box-shadow: 0 32px 64px rgba(0,0,0,0.1), 0 0 30px rgba(168,137,64,0.06);
        }
        .story-img-wrap img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
          filter: brightness(0.95) saturate(1.05);
        }
        .story-img-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(13,31,53,0.2) 0%, transparent 50%);
        }
        .img-corner {
          position: absolute; width: 20px; height: 20px; z-index: 5;
        }
        .img-corner-tl { top: 10px; left: 10px; border-top: 2px solid #a88940; border-left: 2px solid #a88940; border-radius: 3px 0 0 0; }
        .img-corner-tr { top: 10px; right: 10px; border-top: 2px solid #a88940; border-right: 2px solid #a88940; border-radius: 0 3px 0 0; }
        .img-corner-bl { bottom: 10px; left: 10px; border-bottom: 2px solid #a88940; border-left: 2px solid #a88940; border-radius: 0 0 0 3px; }
        .img-corner-br { bottom: 10px; right: 10px; border-bottom: 2px solid #a88940; border-right: 2px solid #a88940; border-radius: 0 0 3px 0; }

        /* ── Purity / Rarity spotlight ── */
        .spotlight-band {
          background: linear-gradient(160deg, #051223 0%, #0d1f35 60%, #051223 100%);
          padding: 72px 32px;
          position: relative; z-index: 2;
        }
        .spotlight-inner { max-width: 1280px; margin: 0 auto; }
        .spotlight-header { text-align: center; margin-bottom: 44px; }
        .spotlight-header .about-eyebrow { justify-content: center; color: rgba(200,170,100,0.75); }
        .spotlight-header .about-eyebrow .eyebrow-dot { background: #c8aa64; }
        .spotlight-header h2 {
          font-size: clamp(26px, 3.2vw, 38px); font-weight: 800; color: #fff;
          letter-spacing: -0.02em; margin: 12px 0 14px;
        }
        .spotlight-header h2 span { color: #c8aa64; font-style: italic; }
        .spotlight-header p { font-family: 'DM Mono', monospace; font-size: 13px; color: rgba(220,200,150,0.55); max-width: 620px; margin: 0 auto; line-height: 1.7; }

        .spotlight-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 24px; }
        .spotlight-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,170,100,0.3);
          border-radius: 12px; padding: 32px 24px; text-align: center;
          transition: all 0.3s ease;
        }
        .spotlight-stat:hover { border-color: rgba(200,170,100,0.6); background: rgba(200,170,100,0.05); transform: translateY(-3px); }
        .spotlight-num {
          font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 900;
          color: #c8aa64; letter-spacing: -0.02em; line-height: 1; margin-bottom: 10px;
        }
        .spotlight-label { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #fff; font-weight: 600; margin-bottom: 8px; }
        .spotlight-sub { font-size: 12.5px; color: rgba(255,255,255,0.55); line-height: 1.6; }

        /* Rare & precious metals banner */
        .rare-banner {
          background: linear-gradient(135deg, rgba(200,170,100,0.1), rgba(200,170,100,0.02));
          border: 1px solid rgba(200,170,100,0.5);
          border-radius: 14px; padding: 40px 44px;
          display: grid; grid-template-columns: auto 1fr; gap: 28px; align-items: center;
        }
        .rare-banner-icon {
          width: 68px; height: 68px; border-radius: 50%; flex-shrink: 0;
          background: rgba(200,170,100,0.15); border: 1px solid rgba(200,170,100,0.5);
          display: flex; align-items: center; justify-content: center; color: #c8aa64;
        }
        .rare-banner h3 { color: #fff; font-size: 24px; font-weight: 800; margin-bottom: 10px; }
        .rare-banner h3 span { color: #c8aa64; font-style: italic; }
        .rare-banner p { color: rgba(255,255,255,0.7); font-size: 13.5px; line-height: 1.85; margin-bottom: 10px; }
        .rare-banner p:last-of-type { margin-bottom: 0; }
        .rare-tag-row { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
        .rare-tag {
          background: rgba(200,170,100,0.15); border: 1px solid rgba(200,170,100,0.45);
          color: #e8d9b5; border-radius: 20px; padding: 6px 16px; font-size: 12px; font-weight: 700;
          font-family: 'DM Mono', monospace; letter-spacing: 0.04em;
        }

        /* ── Product portfolio ── */
        .portfolio-section { padding: 80px 32px 20px; position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; }
        .portfolio-intro { max-width: 720px; margin-bottom: 12px; }
        .portfolio-intro p { font-size: 13.5px; color: #57534e; line-height: 1.85; margin-bottom: 14px; }
        .portfolio-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 36px; }
        .portfolio-card {
          background: #fff; border: 1px solid rgba(168,137,64,0.18); border-radius: 12px;
          overflow: hidden; display: grid; grid-template-columns: 150px 1fr;
          transition: all 0.3s ease;
        }
        .portfolio-card:hover { border-color: rgba(168,137,64,0.4); box-shadow: 0 18px 48px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .portfolio-card.featured { grid-column: span 2; grid-template-columns: 220px 1fr; border-color: rgba(168,137,64,0.5); box-shadow: 0 4px 24px rgba(168,137,64,0.1); }
        .portfolio-img { width: 100%; height: 100%; min-height: 170px; object-fit: cover; }
        .portfolio-body { padding: 18px 20px; display: flex; flex-direction: column; }
        .portfolio-cat { font-family: 'DM Mono', monospace; font-size: 9.5px; letter-spacing: 0.1em; text-transform: uppercase; color: #a88940; margin-bottom: 4px; }
        .portfolio-body h3 { font-size: 17px; font-weight: 700; color: #0d1f35; margin-bottom: 6px; }
        .portfolio-body p { font-size: 11.5px; color: #57534e; line-height: 1.7; margin-bottom: 10px; flex: 1; }
        .portfolio-spec {
          display: inline-flex; align-items: center; gap: 6px; width: fit-content;
          font-size: 11px; font-weight: 800; color: #0d1f35;
          background: linear-gradient(135deg, rgba(200,170,100,0.25), rgba(200,170,100,0.1));
          border: 1px solid rgba(168,137,64,0.4);
          border-radius: 5px; padding: 5px 11px;
        }
        .portfolio-link { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; color: #0d1f35; text-decoration: none; margin-top: 10px; letter-spacing: 0.03em; }
        .portfolio-link:hover { color: #a88940; }

        /* ── Additional minerals on request ── */
        .request-section { padding: 60px 32px 20px; max-width: 1280px; margin: 0 auto; position: relative; z-index: 2; }
        .request-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
        .request-card { background: #fff; border: 1px solid rgba(168,137,64,0.2); border-radius: 10px; padding: 22px 24px; }
        .request-card h3 { font-size: 15px; font-weight: 700; color: #0d1f35; margin-bottom: 8px; }
        .request-card p { font-size: 12px; color: #57534e; line-height: 1.7; }
        .request-note {
          margin-top: 22px; border-left: 3px solid #a88940; background: #fff;
          border-radius: 0 8px 8px 0; padding: 16px 20px; font-size: 12px; color: #57534e; line-height: 1.7;
        }

        /* ── Retail range mini ── */
        .retail-section { padding: 60px 32px 20px; max-width: 1280px; margin: 0 auto; position: relative; z-index: 2; }
        .retail-mini-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 24px; }
        .retail-mini-card { background: #fff; border: 1px solid rgba(168,137,64,0.18); border-radius: 10px; overflow: hidden; }
        .retail-mini-card img { width: 100%; height: 110px; object-fit: cover; display: block; }
        .retail-mini-card .rb { padding: 12px 14px 16px; }
        .retail-mini-card h3 { font-size: 12px; font-weight: 700; color: #0d1f35; margin-bottom: 4px; }
        .retail-mini-card p { font-size: 10px; color: #57534e; line-height: 1.5; }

        .catalog-cta-strip {
          margin-top: 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
          background: #0d1f35; border-radius: 12px; padding: 24px 28px;
        }
        .catalog-cta-strip h4 { color: #fff; font-size: 16px; font-weight: 700; margin-bottom: 4px; }
        .catalog-cta-strip p { font-family: 'DM Mono', monospace; font-size: 11.5px; color: rgba(220,200,150,0.55); }
        .catalog-cta-strip a {
          display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
          background: linear-gradient(135deg, #c8aa64, #a88940); color: #0d1f35;
          font-size: 12.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
          padding: 12px 24px; border-radius: 6px; text-decoration: none; transition: all 0.2s ease;
        }
        .catalog-cta-strip a:hover { background: linear-gradient(135deg, #d4ba78, #b89848); }

        @media (max-width: 1024px) {
          .spotlight-grid { grid-template-columns: 1fr; }
          .rare-banner { grid-template-columns: 1fr; text-align: center; }
          .rare-banner-icon { margin: 0 auto; }
          .portfolio-grid { grid-template-columns: 1fr; }
          .portfolio-card.featured { grid-column: span 1; grid-template-columns: 150px 1fr; }
          .request-grid { grid-template-columns: 1fr; }
          .retail-mini-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .portfolio-card { grid-template-columns: 1fr; }
          .portfolio-img { height: 160px; }
          .rare-banner { padding: 28px 24px; }
        }

        /* ── Values section ── */
        .values-section {
          border-top: 1px solid rgba(168,137,64,0.1);
          padding: 80px 32px;
          position: relative;
        }
        .values-glow { display: none; }
        .values-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
        }
        .values-header {
          text-align: center; margin-bottom: 56px;
        }
        .values-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800; color: #0d1f35;
          letter-spacing: -0.02em; margin: 12px 0 16px;
        }
        .values-header h2 span { color: #a88940; }
        .values-header p {
          font-family: 'DM Mono', monospace; font-size: 14px;
          color: #57534e; font-weight: 300;
        }
        /* override eyebrow dot color inside light section */
        .about-light .eyebrow-dot { background: #a88940; }
        .about-light .about-eyebrow { color: #a88940; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .value-card {
          background: #fff;
          border: 1px solid rgba(168,137,64,0.15);
          border-radius: 8px;
          padding: 32px 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .value-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #a88940, transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .value-card:hover {
          border-color: rgba(168,137,64,0.35);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08), 0 0 20px rgba(168,137,64,0.06);
          transform: translateY(-3px);
        }
        .value-card:hover::before { transform: scaleX(1); }

        .value-icon-wrap {
          width: 48px; height: 48px; border-radius: 10px;
          background: rgba(168,137,64,0.07);
          border: 1px solid rgba(168,137,64,0.18);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; transition: all 0.3s ease;
        }
        .value-card:hover .value-icon-wrap {
          background: rgba(168,137,64,0.13);
          box-shadow: 0 0 18px rgba(168,137,64,0.12);
        }
        .value-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 17px; font-weight: 700; color: #0d1f35;
          margin: 0 0 10px; letter-spacing: -0.01em;
        }
        .value-card p {
          font-family: 'DM Mono', monospace; font-size: 13px;
          font-weight: 300; color: #57534e; line-height: 1.7; margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .story-section { gap: 48px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-cell:nth-child(2) { border-right: none; }
          .stat-cell:nth-child(3) { border-right: 1px solid rgba(200,170,100,0.08); }
          .stat-cell:nth-child(4) { border-right: none; }
        }
        @media (max-width: 768px) {
          .about-hero { padding: 56px 20px 48px; }
          .story-section { grid-template-columns: 1fr; padding: 56px 20px; gap: 40px; }
          .values-section { padding: 56px 20px; }
          .values-grid { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); padding: 0 20px; }
          .stat-cell:nth-child(3) { border-right: none; }
        }
        @media (max-width: 480px) {
          .stats-inner { grid-template-columns: repeat(1, 1fr); }
          .story-img-wrap img { height: 280px; }
        }
      `}</style>

      <div className="about-page">

        {/* ── Hero ── */}
        <section className="about-hero">
          <div className="ah-glow" />
          <div className="about-hero-inner">
            <div className="about-eyebrow">
              <div className="eyebrow-dot" />
              Lumina Earth Minerals — Est. 2015
            </div>
            <h1>About <span>Our Company</span></h1>
            <p>
              Your reliable wholesale partner for premium minerals from Pakistan. From Himalayan salt to diverse
              mineral products, we provide quality sourcing, competitive pricing, and export solutions for global buyers.
            </p>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <div className="stats-strip">
          <div className="stats-inner">
            {stats.map((s, i) => (
              <div className="stat-cell" key={i}>
                <div className="stat-num">{s.number}</div>
                <div className="stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Story + Values on light bg ── */}
        <div className="about-light">

          {/* ── Story ── */}
       <div className="story-section">
<div>
  <div className="story-eyebrow">Our Story</div>

  <h2>
    Rooted in Heritage <span>Driven by Global Vision</span>
  </h2>
  <p className="story-p">
  Based in Pakistan, <strong>Lumina Earth Minerals</strong> is a trusted mineral export
  company built on reliable sourcing, quality standards, and international trade.

  We specialize in supplying:
</p>

<div className="flex flex-wrap gap-3 my-6">
  {[
    "Bentonite",
    "Nephrite",
    "Fluorite",
    "Limestone",
    "Silica Sand",
    "Himalayan Salt",
  ].map((mineral) => (
    <span
      key={mineral}
      className="
        inline-flex items-center
        px-5 py-2.5
        rounded-full
        bg-gradient-to-br from-yellow-100/20 to-white/10
        border border-yellow-600/30
        text-yellow-700
        font-bold
        text-sm
        tracking-wide
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-yellow-100/30
      "
    >
      {mineral}
    </span>
  ))}
</div>

<p className="story-p">
  Our minerals are sourced from Pakistan&apos;s rich geological regions and supplied to
  global buyers with a focus on quality, consistency, and reliable export solutions.
</p>

  <p className="story-p">
    Based in Pakistan, <strong>Lumina Earth Minerals</strong> is a trusted mineral export
    company built on reliable sourcing, quality standards, and international trade.
    We supply premium minerals including 
    <strong> Bentonite, Nephrite, Fluorite, Limestone, Silica Sand, Himalayan Salt</strong>,
    and other natural resources to global markets.
  </p>

  <p className="story-p">
    Our company is officially registered with the Chamber of Commerce and operates according
    to export regulations and international trade standards. We work with trusted suppliers,
    processors, and partners across Pakistan to ensure consistent quality, competitive pricing,
    and dependable worldwide delivery of 
    <strong> industrial minerals and natural resources.</strong>
  </p>

  <p className="story-p">
    What started with authentic Himalayan salt has evolved into a specialized 
    <strong> mineral export company</strong> offering a diverse portfolio of products such as
    <strong> Bentonite for industrial applications, Nephrite, Fluorite, Limestone,
    Silica Sand, and other high-quality minerals</strong> tailored for international buyers.
  </p>

  <p className="story-p">
    <strong>
      Our team specializes in international trade, export documentation, logistics coordination,
      and customer support. We focus on transparency, reliable supply chains, and building
      long-term partnerships with importers, distributors, and industries worldwide.
    </strong>
  </p>
</div>

  <div>
    <div className="story-img-wrap">
      <div className="img-corner img-corner-tl" />
      <div className="img-corner img-corner-tr" />
      <div className="img-corner img-corner-bl" />
      <div className="img-corner img-corner-br" />

      <img
        src="https://res.cloudinary.com/dptmeakuy/image/upload/v1749547014/368171d2-f64c-42c5-9e7d-a4dea0a4b8c0_lk6jrz.jpg"
        alt="Lumina Earth Minerals facility"
        width={700}
        height={390}
      />
    </div>
  </div>
</div>

        </div> {/* end .about-light (first half) */}

        {/* ── Purity & Rarity Spotlight ── */}
        <section className="spotlight-band">
          <div className="spotlight-inner">
            <div className="spotlight-header">
              <div className="about-eyebrow">
                <div className="eyebrow-dot" />
                Verified By The Numbers
              </div>
              <h2>Purity &amp; <span>Rarity, Documented</span></h2>
              <p>
                Some figures matter more than others in mineral export. These are the ones our
                buyers ask about first — independently lab-tested where noted, and available with
                supporting documentation on request.
              </p>
            </div>

            <div className="spotlight-grid">
              <div className="spotlight-stat">
                <div className="spotlight-num">60%+</div>
                <div className="spotlight-label">Sb Content — Antimony Ore</div>
                <div className="spotlight-sub">
                  Sourced from Balochistan&rsquo;s mineral-rich deposits, our Antimony Ore is supplied
                  at 60% or higher antimony (Sb) content — export grade, with assay documentation
                  available on request for smelting and alloy production buyers.
                </div>
              </div>
              <div className="spotlight-stat">
                <div className="spotlight-num">99.9774%</div>
                <div className="spotlight-label">SiO₂ Purity — White Quartz</div>
                <div className="spotlight-sub">
                  Our high-purity White Quartz lump, sourced from Khyber Pakhtunkhwa, carries
                  exceptionally low iron contamination and is supplied raw or crushed to the
                  buyer&rsquo;s specified mesh size for glass and industrial applications.
                </div>
              </div>
              <div className="spotlight-stat">
                <div className="spotlight-num">98%+</div>
                <div className="spotlight-label">SiO₂ Purity — White Silica Sand</div>
                <div className="spotlight-sub">
                  Laboratory tested with very low iron content (Fe₂O₃: 0.018%), our premium white
                  Silica Sand grade reaches up to 99.6% purity, suitable for glass manufacturing,
                  foundry, and filtration use.
                </div>
              </div>
            </div>

            <div className="rare-banner">
              <div className="rare-banner-icon"><Gem size={30} /></div>
              <div>
                <h3>Rare &amp; Precious Metals — <span>Iridium &amp; Osmium</span></h3>
                <p>
                  Beyond our core mineral catalog, Lumina Earth Minerals also facilitates inquiries
                  for <strong style={{ color: "#fff" }}>Iridium</strong> and{" "}
                  <strong style={{ color: "#fff" }}>Osmium</strong> — two of the rarest and densest
                  metals found on Earth. Both belong to the platinum-group metals, are measured in
                  parts per billion within the Earth&rsquo;s crust, and are valued for extreme
                  hardness, corrosion resistance, and stability under intense heat.
                </p>
                <p>
                  Iridium is used in spark plug electrodes, high-temperature crucibles, aerospace
                  components, and specialized electrical contacts. Osmium — the densest naturally
                  occurring element — is used in fountain pen nibs, electrical contacts, and select
                  catalytic and alloy applications. Both are supplied through our specialized
                  sourcing network on a strictly per-inquiry basis.
                </p>
                <p>
                  Availability, quantity, purity grade, and full documentation are confirmed
                  individually for every inquiry, and are subject to applicable export regulations
                  and additional verification requirements given their classification as rare and
                  precious metals.
                </p>
                <div className="rare-tag-row">
                  <span className="rare-tag">Iridium</span>
                  <span className="rare-tag">Osmium</span>
                  <span className="rare-tag">Platinum-Group Metals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Full Product Portfolio ── */}
        <div className="about-light">
          <section className="portfolio-section">
            <div className="about-eyebrow">
              <div className="eyebrow-dot" />
              What We Export
            </div>
            <h2 className="about-title" style={{ marginBottom: "16px" }}>
              Our Complete <em>Mineral Portfolio</em>
            </h2>
            <div className="portfolio-intro">
              <p>
                Lumina Earth Minerals supplies eight core minerals as our primary export catalog,
                each sourced directly from a specific mining region in Pakistan and supplied in
                bulk with full documentation support. Every shipment — whether a natural mineral
                like Himalayan Salt or a metallic ore like Antimony or Copper — passes through the
                same sourcing discipline: verified origin, consistent grading, and export-ready
                packaging.
              </p>
              <p>
                Below is the full range, in the buyer&rsquo;s own words: what each mineral is, where
                it comes from, what it is used for, and — where independently verified — its purity
                or quality grade.
              </p>
            </div>

            <div className="portfolio-grid">
              {portfolioProducts.map((product) => {
                const spec = portfolioSpec(product);
                const featured = product.id === "antimony";
                return (
                  <div className={`portfolio-card ${featured ? "featured" : ""}`} key={product.id}>
                    <img className="portfolio-img" src={portfolioImage(product)} alt={product.name} />
                    <div className="portfolio-body">
                      <div className="portfolio-cat">{product.category} · {product.origin}</div>
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
                      {spec && (
                        <div className="portfolio-spec">
                          <FlaskConical size={12} /> {spec}
                        </div>
                      )}
                      <Link to={`/product-details/${product.id}`} className="portfolio-link">
                        View Full Specifications <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="catalog-cta-strip">
              <div>
                <h4>Want every specification in one document?</h4>
                <p>Company profile, purity grades, packaging &amp; MOQs — one PDF download.</p>
              </div>
              <a href={CATALOG_URL} download>
                <Package size={15} /> Download Full Catalog (PDF)
              </a>
            </div>
          </section>

          {/* ── Additional Minerals On Request ── */}
          <section className="request-section">
            <div className="about-eyebrow">
              <div className="eyebrow-dot" />
              Sourced On Request
            </div>
            <h2 className="about-title" style={{ marginBottom: "12px" }}>
              Additional Minerals <em>We Can Source</em>
            </h2>
            <p style={{ fontSize: "13.5px", color: "#57534e", lineHeight: 1.85, maxWidth: "720px" }}>
              Beyond our standard catalog, our sourcing network across Pakistan&rsquo;s mineral-rich
              regions allows us to arrange supply of additional ores and industrial minerals on
              inquiry. If you need something not listed on this page — including rare or precious
              metals such as Iridium and Osmium above — share your specification and target
              quantity, and our sourcing team will confirm availability.
            </p>

            <div className="request-grid">
              {additionalMinerals.map((m) => (
                <div className="request-card" key={m.name}>
                  <h3>{m.name}</h3>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="request-note">
              <strong>Note:</strong> Supply of additional or rare minerals is arranged on a
              per-inquiry basis and is subject to availability, applicable export regulations, and
              (for rare/precious metals) additional verification and documentation requirements.
              Contact our team with your required specification, quantity, and destination for a
              formal confirmation and quotation.
            </div>
          </section>

          {/* ── Retail / Wellness Range ── */}
          <section className="retail-section">
            <div className="about-eyebrow">
              <div className="eyebrow-dot" />
              Beyond Bulk Minerals
            </div>
            <h2 className="about-title" style={{ marginBottom: "12px" }}>
              Salt Home &amp; <em>Wellness Range</em>
            </h2>
            <p style={{ fontSize: "13.5px", color: "#57534e", lineHeight: 1.85, maxWidth: "720px" }}>
              Alongside our bulk industrial and natural mineral exports, we also supply a range of
              finished Himalayan salt products for retail, wellness, and animal nutrition markets —
              all available with private label and custom packaging.
            </p>

            <div className="retail-mini-grid">
              <div className="retail-mini-card">
                <img src="https://res.cloudinary.com/dptmeakuy/image/upload/v1772107986/ChatGPT_Image_Feb_21_2026_11_36_43_AM_i83jd1.png" alt="Pink Salt Grains" width={1536} height={1024} />
                <div className="rb"><h3>Pink Salt Grains</h3><p>Premium culinary grade, retail-ready.</p></div>
              </div>
              <div className="retail-mini-card">
                <img src="https://res.cloudinary.com/dptmeakuy/image/upload/v1749545593/animal_lick_salt_piece_is_full_of_magniciem_and_uo9qym.jpg" alt="Animal Lick Salt" width={736} height={736} />
                <div className="rb"><h3>Animal Lick Salt</h3><p>Magnesium-rich blocks for livestock.</p></div>
              </div>
              <div className="retail-mini-card">
                <img src="https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg" alt="Custom Shape Salt Lamps" width={675} height={1200} />
                <div className="rb"><h3>Custom Shape Lamps</h3><p>Custom manufactured designs.</p></div>
              </div>
              <div className="retail-mini-card">
                <img src="https://res.cloudinary.com/dptmeakuy/image/upload/v1772107992/ChatGPT_Image_Feb_21_2026_11_52_50_AM_vqebh1.png" alt="Natural Himalayan Salt Lamps" width={1536} height={1024} />
                <div className="rb"><h3>Natural Salt Lamps</h3><p>Compact decor for desks &amp; homes.</p></div>
              </div>
              <div className="retail-mini-card">
                <img src="https://res.cloudinary.com/dptmeakuy/image/upload/v1749544296/Gourmet_Himalayan_Pink_Salt_-_5_Pound_Brick_by_u3uxbv.jpg" alt="Pink Salt Bricks" width={500} height={500} />
                <div className="rb"><h3>Pink Salt Bricks</h3><p>Architectural grade for spa &amp; walls.</p></div>
              </div>
            </div>
          </section>

          {/* ── Values ── */}
          <section className="values-section">
            <div className="values-glow" />
            <div className="values-inner">
              <div className="values-header">
                <div className="about-eyebrow" style={{ justifyContent: "center" }}>
                  <div className="eyebrow-dot" />
                  What We Stand For
                </div>
                <h2>Our Core <span>Values</span></h2>
                <p>The principles that guide everything we do</p>
              </div>
              <div className="values-grid">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div className="value-card" key={i}>
                      <div className="value-icon-wrap">
                        <Icon size={22} color="#a88940" />
                      </div>
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </div> {/* end .about-light */}

      </div>
    </NavLayoutTwo>
  );
};