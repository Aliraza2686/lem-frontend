import { Mountain, Leaf, Award, Users, Globe, Heart } from "lucide-react";
import { NavLayout } from "../components/layouts/NavLayout";

export const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Natural",
      desc: "We source only the purest, most natural products without artificial additives or chemicals.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      desc: "Every product undergoes rigorous quality testing to ensure it meets our high standards.",
    },
    {
      icon: Users,
      title: "Customer First",
      desc: "Your success is our success. We provide personalized service and support for every client.",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      desc: "We work with trusted suppliers worldwide to bring you authentic products from their origins.",
    },
    {
      icon: Heart,
      title: "Ethical Practices",
      desc: "We ensure fair trade practices and support sustainable farming and production methods.",
    },
    {
      icon: Mountain,
      title: "Authentic Origins",
      desc: "All products are sourced from their authentic origins, ensuring genuine quality and heritage.",
    },
  ];

  const stats = [
{ number: "10+", label: "Years of Expertise" },
    { number: "50+", label: "Product Lines" },
    { number: "15+", label: "Countries Served" },
    { number: "2015", label: "Founded" },
  ];

  return (
    <NavLayout>
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

        /* ── Story section ── */
        .story-section {
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
          color: #4ade80;
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
          background: #4ade80;
        }
        .story-section h2 {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
          line-height: 1.15;
        }
        .story-section h2 span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .story-p {
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          font-weight: 300;
          color: rgba(134,239,172,0.6);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .story-p:last-of-type { margin-bottom: 0; }

        .story-img-wrap {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(74,222,128,0.12);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(22,163,74,0.08);
        }
        .story-img-wrap img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          display: block;
          filter: brightness(0.88) saturate(1.1);
        }
        .story-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(2,12,6,0.5) 0%, transparent 60%);
        }
        /* corner accents */
        .img-corner {
          position: absolute;
          width: 20px; height: 20px;
          z-index: 5;
        }
        .img-corner-tl { top: 10px; left: 10px; border-top: 2px solid #4ade80; border-left: 2px solid #4ade80; border-radius: 3px 0 0 0; }
        .img-corner-tr { top: 10px; right: 10px; border-top: 2px solid #4ade80; border-right: 2px solid #4ade80; border-radius: 0 3px 0 0; }
        .img-corner-bl { bottom: 10px; left: 10px; border-bottom: 2px solid #4ade80; border-left: 2px solid #4ade80; border-radius: 0 0 0 3px; }
        .img-corner-br { bottom: 10px; right: 10px; border-bottom: 2px solid #4ade80; border-right: 2px solid #4ade80; border-radius: 0 0 3px 0; }

        /* ── Values section ── */
        .values-section {
          border-top: 1px solid rgba(74,222,128,0.08);
          padding: 80px 32px;
          position: relative;
          overflow: hidden;
        }
        .values-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(74,222,128,0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(74,222,128,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .values-glow {
          position: absolute;
          bottom: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(4,120,87,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .values-inner {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
        }
        .values-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .values-header h2 {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 12px 0 16px;
        }
        .values-header h2 span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .values-header p {
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          color: rgba(134,239,172,0.5);
          font-weight: 300;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .value-card {
          background: rgba(4,20,10,0.6);
          border: 1px solid rgba(74,222,128,0.1);
          border-radius: 8px;
          padding: 32px 28px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .value-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(74,222,128,0.4), transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .value-card:hover {
          border-color: rgba(74,222,128,0.25);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 20px rgba(22,163,74,0.06);
          transform: translateY(-3px);
        }
        .value-card:hover::before { transform: scaleX(1); }

        .value-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 10px;
          background: rgba(22,163,74,0.1);
          border: 1px solid rgba(74,222,128,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .value-card:hover .value-icon-wrap {
          background: rgba(22,163,74,0.18);
          box-shadow: 0 0 20px rgba(74,222,128,0.15);
        }
        .value-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .value-card p {
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          font-weight: 300;
          color: rgba(134,239,172,0.5);
          line-height: 1.7;
          margin: 0;
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
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
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
              Your trusted wholesale partner for premium natural products since 2015. We source the finest
              Himalayan salt products directly from the Khewra Mine — quality, authenticity, and value in every order.
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

        {/* ── Story ── */}
        <div className="story-section">
          <div>
            <div className="story-eyebrow">Our Story</div>
            <h2>From a Family <span>Mission</span> to a Global Brand</h2>
            <p className="story-p">
              We are proud to build direct relationships with the legendary Khewra Salt Mine in Pakistan.
              This 700-million-year-old mine, discovered by Alexander the Great&apos;s army in 326 BC,
              produces the world&apos;s finest pink Himalayan salt, known for its purity, rich mineral content,
              and natural beauty.
            </p>

            <p className="story-p">
              Our founder, inspired by a visit to the mine in 2015, recognized the opportunity to bring
              authentic Himalayan salt directly to global markets without middlemen. What started as a
              passion for genuine salt products has grown into a specialized salt export company offering
              edible salt, industrial salt, salt lamps, cooking slabs, bath salt, and custom private label
              packaging solutions.
              <strong className="block mt-2">
                We&apos;ve built strong partnerships with trusted processors and manufacturers across Pakistan,
                ensuring consistent quality, competitive pricing, and reliable worldwide delivery in every shipment.
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
                alt="Our facility"
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
                      <Icon size={22} color="#4ade80" />
                    </div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </NavLayout>
  );
};