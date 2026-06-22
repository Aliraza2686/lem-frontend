import { Mountain, Leaf, Award, Users, Globe, Heart } from "lucide-react";
import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo";

export const About = () => {
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
    { number: "Export", label: "Licensed Company" },
    { number: "Premium", label: "Himalayan Source" },
    { number: "Bulk", label: "Supply Capacity" },
    { number: "Private", label: "Label Solutions" },
  ];

  return (
    <NavLayoutTwo>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .about-page {
          background: linear-gradient(160deg, #020c06 0%, #041a0c 50%, #020c06 100%);
          min-height: 100vh;
          font-family: 'Syne', sans-serif;
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          overflow: hidden;
          padding: 80px 32px 72px;
          text-align: center;
          border-bottom: 1px solid rgba(74,222,128,0.1);
        }
        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .ah-glow {
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(22,163,74,0.13) 0%, transparent 70%);
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
          color: rgba(134,239,172,0.55);
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: pdot 2s ease-in-out infinite;
        }
        @keyframes pdot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .about-hero h1 {
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.08;
          margin: 0 0 20px;
        }
        .about-hero h1 span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-hero p {
          font-family: 'DM Mono', monospace;
          font-size: 15px;
          font-weight: 300;
          color: rgba(134,239,172,0.6);
          line-height: 1.75;
          margin: 0;
        }

        /* ── Stats strip ── */
        .stats-strip {
          border-bottom: 1px solid rgba(74,222,128,0.08);
          border-top: 1px solid rgba(74,222,128,0.08);
          background: rgba(4,20,10,0.5);
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
          border-right: 1px solid rgba(74,222,128,0.08);
        }
        .stat-cell:last-child { border-right: none; }
        .stat-num {
          font-size: 36px;
          font-weight: 800;
          color: #4ade80;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-lbl {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(134,239,172,0.4);
          text-transform: uppercase;
        }

        /* ── Light lower half ── */
        .about-light {
          background: #f8faf8;
          position: relative;
          overflow: hidden;
        }
        .about-light::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px);
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
          color: #16a34a;
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
          background: #16a34a;
        }
        .story-section h2 {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #0f2318;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
          line-height: 1.15;
        }
        .story-section h2 span { color: #16a34a; }
        .story-p {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          font-weight: 300;
          color: #4b7060;
          line-height: 1.85;
          margin-bottom: 16px;
        }
        .story-p:last-of-type { margin-bottom: 0; }
        .story-p strong { color: #0f2318; font-weight: 500; }

        .story-img-wrap {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(22,163,74,0.2);
          box-shadow: 0 32px 64px rgba(0,0,0,0.1), 0 0 30px rgba(22,163,74,0.06);
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
          background: linear-gradient(0deg, rgba(15,35,24,0.2) 0%, transparent 50%);
        }
        .img-corner {
          position: absolute; width: 20px; height: 20px; z-index: 5;
        }
        .img-corner-tl { top: 10px; left: 10px; border-top: 2px solid #16a34a; border-left: 2px solid #16a34a; border-radius: 3px 0 0 0; }
        .img-corner-tr { top: 10px; right: 10px; border-top: 2px solid #16a34a; border-right: 2px solid #16a34a; border-radius: 0 3px 0 0; }
        .img-corner-bl { bottom: 10px; left: 10px; border-bottom: 2px solid #16a34a; border-left: 2px solid #16a34a; border-radius: 0 0 0 3px; }
        .img-corner-br { bottom: 10px; right: 10px; border-bottom: 2px solid #16a34a; border-right: 2px solid #16a34a; border-radius: 0 0 3px 0; }

        /* ── Values section ── */
        .values-section {
          border-top: 1px solid rgba(22,163,74,0.1);
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
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800; color: #0f2318;
          letter-spacing: -0.02em; margin: 12px 0 16px;
        }
        .values-header h2 span { color: #16a34a; }
        .values-header p {
          font-family: 'DM Mono', monospace; font-size: 14px;
          color: #4b7060; font-weight: 300;
        }
        /* override eyebrow dot color inside light section */
        .about-light .eyebrow-dot { background: #16a34a; }
        .about-light .about-eyebrow { color: #16a34a; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .value-card {
          background: #fff;
          border: 1px solid rgba(22,163,74,0.15);
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
          background: linear-gradient(90deg, transparent, #16a34a, transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .value-card:hover {
          border-color: rgba(22,163,74,0.35);
          box-shadow: 0 16px 48px rgba(0,0,0,0.08), 0 0 20px rgba(22,163,74,0.06);
          transform: translateY(-3px);
        }
        .value-card:hover::before { transform: scaleX(1); }

        .value-icon-wrap {
          width: 48px; height: 48px; border-radius: 10px;
          background: rgba(22,163,74,0.07);
          border: 1px solid rgba(22,163,74,0.18);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; transition: all 0.3s ease;
        }
        .value-card:hover .value-icon-wrap {
          background: rgba(22,163,74,0.13);
          box-shadow: 0 0 18px rgba(22,163,74,0.12);
        }
        .value-card h3 {
          font-size: 17px; font-weight: 700; color: #0f2318;
          margin: 0 0 10px; letter-spacing: -0.01em;
        }
        .value-card p {
          font-family: 'DM Mono', monospace; font-size: 13px;
          font-weight: 300; color: #4b7060; line-height: 1.7; margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .story-section { gap: 48px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-cell:nth-child(2) { border-right: none; }
          .stat-cell:nth-child(3) { border-right: 1px solid rgba(74,222,128,0.08); }
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
  Our minerals are sourced from Pakistan's rich geological regions and supplied to
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
      />
    </div>
  </div>
</div>

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
                        <Icon size={22} color="#16a34a" />
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