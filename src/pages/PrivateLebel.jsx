/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Package, CheckCircle, Clock, X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from "lucide-react";
import { NavLayout } from "../components/layouts/NavLayout";
import { Link } from "react-router-dom";

const packagingSamples = [
  { id: 1, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107073/ChatGPT_Image_Feb_23_2026_09_40_58_AM_j4lpth.png", label: "Himalayan Pink Salt", tag: "" },
  { id: 2, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772106872/Gemini_Generated_Image_t1p2cmt1p2cmt1p2_izj2bf.png", label: "White Salt", tag: "Eco" },
  { id: 3, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107048/ChatGPT_Image_Feb_22_2026_05_50_30_PM_lruseq.png", label: "Stand-Up Pouch", tag: "Premium" },
  { id: 4, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107041/ChatGPT_Image_Feb_22_2026_05_45_34_PM_e14jk0.png", label: "Salt Lamp – Branded Box", tag: "Bulk" },
  { id: 5, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1771607940/ChatGPT_Image_Feb_20_2026_10_15_52_PM_ue9gpp.png", label: "Salt Lamp – Gift Box", tag: "Gift" },
  { id: 6, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1772107040/ChatGPT_Image_Feb_22_2026_05_32_17_PM_ivnw1e.png", label: "Salt Bricks – Export Carton", tag: "Export" },
];

const products = [
  "Edible Food-Grade Salts (Himalayan Pink, White, Black)",
  "Salt Grains in Various Sizes",
  "Animal Salt Lick Blocks",
  "Salt Lamps (Private Label Packaging)",
  "Salt Bricks & Salt Tiles (Private Label Packaging)",
];

const process = [
  { step: "1", title: "Inquiry", desc: "Share product type, quantity & destination country" },
  { step: "2", title: "Quotation", desc: "Confirm pricing, packaging & MOQ details" },
  { step: "3", title: "Label Approval", desc: "Buyer provides label or sticker design" },
  { step: "4", title: "Packing & Labeling", desc: "Salt packed and labeled per approved design" },
  { step: "5", title: "Order Confirmation", desc: "Final weight check and packing list review" },
  { step: "6", title: "Dispatch", desc: "Shipment prepared with full export documentation" },
];

const customOptions = [
  { title: "Packaging", items: ["Pouches", "Bulk export bags", "Eco-friendly options"] },
  { title: "Labeling", items: ["Your logo & label design", "Sticker labeling", "Product info labels"] },
  { title: "Pack Sizes", items: ["Fully customizable to your needs"] },
];

const qualitySections = [
  {
    title: "Quality Control",
    items: ["Testing at every production stage", "Third-party lab certifications", "Food safety compliance"],
  },
  {
    title: "Export Documentation",
    items: ["Complete export certificates", "Health & phytosanitary certificates", "Customs documentation support"],
  },
];

function Lightbox({ samples, index, onClose, onPrev, onNext }) {
  const item = samples[index];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(2,12,6,0.96)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{ position: "absolute", left: "20px", background: "rgba(4,20,10,0.9)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "8px", padding: "10px", cursor: "pointer", color: "rgba(134,239,172,0.7)", transition: "all 0.2s ease" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)"; e.currentTarget.style.color = "#4ade80"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.2)"; e.currentTarget.style.color = "rgba(134,239,172,0.7)"; }}
      ><ChevronLeft size={20} /></button>

      <div style={{ position: "relative", maxWidth: "860px", width: "90vw", margin: "0 80px" }} onClick={e => e.stopPropagation()}>
        <img src={item.src} alt={item.label} style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: "8px", border: "1px solid rgba(74,222,128,0.15)", boxShadow: "0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(22,163,74,0.08)" }} />
        <div style={{ marginTop: "16px", textAlign: "center" }}>
          {item.tag && <span style={{ display: "inline-block", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", background: "rgba(22,163,74,0.15)", border: "1px solid rgba(74,222,128,0.3)", color: "#4ade80", padding: "4px 12px", borderRadius: "3px", marginRight: "10px" }}>{item.tag}</span>}
          <span style={{ fontFamily: "'Syne', sans-serif", color: "#fff", fontSize: "15px", fontWeight: 600 }}>{item.label}</span>
        </div>
        <p style={{ textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(134,239,172,0.35)", marginTop: "8px" }}>{index + 1} / {samples.length}</p>
      </div>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{ position: "absolute", right: "20px", background: "rgba(4,20,10,0.9)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "8px", padding: "10px", cursor: "pointer", color: "rgba(134,239,172,0.7)", transition: "all 0.2s ease" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)"; e.currentTarget.style.color = "#4ade80"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.2)"; e.currentTarget.style.color = "rgba(134,239,172,0.7)"; }}
      ><ChevronRight size={20} /></button>

      <button onClick={onClose} style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(4,20,10,0.9)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: "8px", padding: "8px", cursor: "pointer", color: "rgba(134,239,172,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <X size={18} />
      </button>
    </div>
  );
}

export default function PrivateLabelingPage() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <NavLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .pl-page { font-family: 'Syne', sans-serif; }

        /* ── Dark Hero ── */
        .pl-hero {
          background: linear-gradient(160deg, #020c06 0%, #041a0c 50%, #020c06 100%);
          position: relative; overflow: hidden;
          padding: 80px 32px 72px; text-align: center;
          border-bottom: 1px solid rgba(74,222,128,0.1);
        }
        .pl-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .pl-hero-glow {
          position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(22,163,74,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .pl-hero-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
        .pl-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(134,239,172,0.55);
          text-transform: uppercase; margin-bottom: 24px;
        }
        .pl-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
          animation: pdot 2s ease-in-out infinite;
        }
        @keyframes pdot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.7);} }
        .pl-hero h1 {
          font-size: clamp(32px, 5vw, 54px); font-weight: 800;
          color: #fff; letter-spacing: -0.02em; line-height: 1.08; margin: 0 0 20px;
        }
        .pl-hero h1 span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .pl-hero p {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: rgba(134,239,172,0.6); line-height: 1.75; margin: 0 0 28px;
        }
        .pl-hero-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
        .pl-tag {
          font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.08em;
          padding: 6px 14px; border-radius: 3px; font-weight: 500;
          background: rgba(22,163,74,0.1); border: 1px solid rgba(74,222,128,0.22); color: #4ade80;
        }

        /* ── Light section ── */
        .pl-light {
          background: #f8faf8; position: relative; overflow: hidden;
        }
        .pl-light::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }

        /* ── Body ── */
        .pl-body { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 64px 32px; }

        /* ── Top grid ── */
        .pl-top-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 64px;
        }
        .pl-section-eyebrow {
          font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.15em;
          color: #16a34a; text-transform: uppercase; margin-bottom: 10px;
          display: flex; align-items: center; gap: 10px;
        }
        .pl-section-eyebrow::before {
          content: ''; display: inline-block; width: 24px; height: 1px; background: #16a34a;
        }
        .pl-section-title {
          font-size: 22px; font-weight: 800; color: #0f2318;
          letter-spacing: -0.02em; margin: 0 0 24px; line-height: 1.2;
        }
        .pl-section-title span { color: #16a34a; }

        /* Product list */
        .pl-product-item {
          display: flex; align-items: center; gap: 12px;
          background: #fff; border: 1px solid rgba(22,163,74,0.13);
          border-radius: 6px; padding: 14px 16px; margin-bottom: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .pl-product-item:hover { border-color: rgba(22,163,74,0.3); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
        .pl-product-item span {
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300; color: #4b7060;
        }

        /* MOQ / Lead time */
        .pl-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
        .pl-meta-card {
          background: #fff; border: 1px solid rgba(22,163,74,0.15);
          border-radius: 6px; padding: 18px 16px; text-align: center;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .pl-meta-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #16a34a, transparent);
        }
        .pl-meta-card-label { font-weight: 700; font-size: 14px; color: #0f2318; margin: 8px 0 4px; }
        .pl-meta-card-sub {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 300; color: #4b7060;
        }

        /* Gallery */
        .pl-gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .pl-gallery-btn {
          position: relative; overflow: hidden; border-radius: 6px;
          aspect-ratio: 1; background: #e8f0eb;
          border: 1px solid rgba(22,163,74,0.15); cursor: pointer;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .pl-gallery-btn:hover {
          border-color: rgba(22,163,74,0.4);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 0 12px rgba(22,163,74,0.07);
        }
        .pl-gallery-btn img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease; filter: brightness(0.95);
        }
        .pl-gallery-btn:hover img { transform: scale(1.08); filter: brightness(1); }
        .pl-gallery-overlay {
          position: absolute; inset: 0;
          background: rgba(15,35,24,0.55);
          opacity: 0; transition: opacity 0.25s ease;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
        }
        .pl-gallery-btn:hover .pl-gallery-overlay { opacity: 1; }
        .pl-gallery-tag {
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.1em;
          color: #4ade80; margin-top: 4px;
        }
        .pl-gallery-hint {
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.08em;
          color: #4b7060; margin-top: 8px; text-align: center;
        }

        /* ── Bottom 3-col cards ── */
        .pl-bottom-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
          border-top: 1px solid rgba(22,163,74,0.1); padding-top: 56px;
        }
        .pl-info-card {
          background: #fff; border: 1px solid rgba(22,163,74,0.13);
          border-radius: 8px; padding: 28px 24px;
          transition: all 0.25s ease; position: relative; overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .pl-info-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #16a34a, transparent);
          transform: scaleX(0); transition: transform 0.3s ease;
        }
        .pl-info-card:hover {
          border-color: rgba(22,163,74,0.3);
          box-shadow: 0 12px 40px rgba(0,0,0,0.09), 0 0 16px rgba(22,163,74,0.05);
          transform: translateY(-3px);
        }
        .pl-info-card:hover::before { transform: scaleX(1); }
        .pl-info-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .pl-info-icon { font-size: 22px; line-height: 1; }
        .pl-info-card-title { font-size: 15px; font-weight: 700; color: #0f2318; letter-spacing: -0.01em; }

        /* custom options */
        .pl-custom-group { margin-bottom: 16px; }
        .pl-custom-group:last-child { margin-bottom: 0; }
        .pl-custom-group-label {
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em;
          color: #16a34a; text-transform: uppercase; margin-bottom: 6px;
        }
        .pl-custom-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: #4b7060; margin-bottom: 4px;
        }
        .pl-custom-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(22,163,74,0.5); flex-shrink: 0; }

        /* process steps */
        .pl-step { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; }
        .pl-step:last-child { margin-bottom: 0; }
        .pl-step-num {
          width: 26px; height: 26px; border-radius: 6px; flex-shrink: 0;
          background: rgba(22,163,74,0.1); border: 1px solid rgba(22,163,74,0.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500; color: #16a34a;
          margin-top: 1px;
        }
        .pl-step-title { font-size: 13px; font-weight: 700; color: #0f2318; margin-bottom: 2px; }
        .pl-step-desc {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 300;
          color: #4b7060; line-height: 1.5;
        }

        /* quality */
        .pl-quality-group { margin-bottom: 16px; }
        .pl-quality-group:last-child { margin-bottom: 0; }
        .pl-quality-label {
          font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em;
          color: #16a34a; text-transform: uppercase; margin-bottom: 8px;
        }
        .pl-quality-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: #4b7060; margin-bottom: 6px; line-height: 1.4;
        }

        /* ── CTA ── */
        .pl-cta {
          background: #f0f7f2;
          border-top: 1px solid rgba(22,163,74,0.1);
          padding: 64px 32px 80px; text-align: center;
          position: relative; overflow: hidden;
        }
        .pl-cta::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .pl-cta-glow {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(22,163,74,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .pl-cta-inner { position: relative; z-index: 2; max-width: 560px; margin: 0 auto; }
        .pl-cta-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.15em;
          color: #16a34a; text-transform: uppercase; margin-bottom: 20px;
        }
        .pl-cta-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #16a34a;
          animation: pdot 2s ease-in-out infinite;
        }
        .pl-cta h2 {
          font-size: clamp(28px, 4vw, 44px); font-weight: 800; color: #0f2318;
          letter-spacing: -0.02em; margin: 0 0 16px;
        }
        .pl-cta h2 span { color: #16a34a; }
        .pl-cta p {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: #4b7060; margin: 0 0 32px; line-height: 1.7;
        }
        .pl-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white; border: 1px solid rgba(22,163,74,0.35);
          padding: 14px 36px; border-radius: 4px; text-decoration: none;
          transition: all 0.25s ease;
        }
        .pl-cta-btn:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 8px 28px rgba(22,163,74,0.25);
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .pl-bottom-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 768px) {
          .pl-hero { padding: 56px 20px 48px; }
          .pl-body { padding: 48px 20px; }
          .pl-top-grid { grid-template-columns: 1fr; gap: 40px; }
          .pl-bottom-grid { grid-template-columns: 1fr; }
          .pl-cta { padding: 56px 20px 64px; }
        }
      `}</style>

      {lightboxIdx !== null && (
        <Lightbox
          samples={packagingSamples}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((i) => (i - 1 + packagingSamples.length) % packagingSamples.length)}
          onNext={() => setLightboxIdx((i) => (i + 1) % packagingSamples.length)}
        />
      )}

      <div className="pl-page">

        {/* ── Dark Hero ── */}
        <section className="pl-hero">
          <div className="pl-hero-glow" />
          <div className="pl-hero-inner">
            <div className="pl-eyebrow">
              <div className="pl-eyebrow-dot" />
              Private Label Services
            </div>
            <h1>Build Your Brand with <span>Premium Salt Products</span></h1>
            <p>
              We supply, pack, and label world-class Himalayan salt products under your brand —
              export-ready, globally shipped, quality guaranteed.
            </p>
            <div className="pl-hero-tags">
              {["🌍 Global Export", "🏷️ Your Brand", "📦 Flexible Pack Sizes", "✅ Quality Certified"].map((t, i) => (
                <span key={i} className="pl-tag">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Light body ── */}
        <div className="pl-light">
          <div className="pl-body">

            {/* Top: Products + Gallery */}
            <div className="pl-top-grid">

              <div>
                <div className="pl-section-eyebrow">Product Range</div>
                <h2 className="pl-section-title">Available for <span>Private Labeling</span></h2>
                {products.map((p, i) => (
                  <div className="pl-product-item" key={i}>
                    <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>{p}</span>
                  </div>
                ))}
                <div className="pl-meta-grid">
                  <div className="pl-meta-card">
                    <Package size={18} color="#16a34a" style={{ margin: "0 auto" }} />
                    <div className="pl-meta-card-label">MOQ</div>
                    <div className="pl-meta-card-sub">From 100 kg per product</div>
                  </div>
                  <div className="pl-meta-card">
                    <Clock size={18} color="#16a34a" style={{ margin: "0 auto" }} />
                    <div className="pl-meta-card-label">Lead Time</div>
                    <div className="pl-meta-card-sub">7–15 days after label approval</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="pl-section-eyebrow">Packaging Gallery</div>
                <h2 className="pl-section-title">Our <span>Packaging Samples</span></h2>
                <div className="pl-gallery-grid">
                  {packagingSamples.map((sample, idx) => (
                    <button key={sample.id} className="pl-gallery-btn" onClick={() => setLightboxIdx(idx)} aria-label={`View ${sample.label}`}>
                      <img src={sample.src} alt={sample.label} />
                      <div className="pl-gallery-overlay">
                        <ZoomIn size={20} color="rgba(134,239,172,0.9)" />
                        {sample.tag && <div className="pl-gallery-tag">{sample.tag}</div>}
                      </div>
                    </button>
                  ))}
                </div>
                <p className="pl-gallery-hint">Click any image to enlarge · Custom packaging available</p>
              </div>

            </div>

            {/* Bottom: 3 info cards */}
            <div className="pl-bottom-grid">

              <div className="pl-info-card">
                <div className="pl-info-card-header">
                  <div className="pl-info-icon">🎨</div>
                  <div className="pl-info-card-title">Customization Options</div>
                </div>
                {customOptions.map((cat, i) => (
                  <div className="pl-custom-group" key={i}>
                    <div className="pl-custom-group-label">{cat.title}</div>
                    {cat.items.map((item, j) => (
                      <div className="pl-custom-item" key={j}>
                        <div className="pl-custom-dot" />
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="pl-info-card">
                <div className="pl-info-card-header">
                  <div className="pl-info-icon">⚙️</div>
                  <div className="pl-info-card-title">How It Works</div>
                </div>
                {process.map((item) => (
                  <div className="pl-step" key={item.step}>
                    <div className="pl-step-num">{item.step}</div>
                    <div>
                      <div className="pl-step-title">{item.title}</div>
                      <div className="pl-step-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pl-info-card">
                <div className="pl-info-card-header">
                  <div className="pl-info-icon">🏆</div>
                  <div className="pl-info-card-title">Quality & Export</div>
                </div>
                {qualitySections.map((section, si) => (
                  <div className="pl-quality-group" key={si}>
                    <div className="pl-quality-label">{section.title}</div>
                    {section.items.map((item, i) => (
                      <div className="pl-quality-item" key={i}>
                        <CheckCircle size={13} color="#16a34a" style={{ flexShrink: 0, marginTop: 2 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* CTA */}
          <section className="pl-cta">
            <div className="pl-cta-glow" />
            <div className="pl-cta-inner">
              <div className="pl-cta-eyebrow">
                <div className="pl-cta-dot" />
                Wholesale Inquiries
              </div>
              <h2>Ready to <span>Launch Your Brand?</span></h2>
              <p>
                Contact us today for a tailored quotation on private label Himalayan salt products.
                We respond within 24 hours.
              </p>
              <Link to="/contact" className="pl-cta-btn">
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        </div>

      </div>
    </NavLayout>
  );
}