import React, { useEffect, useRef } from "react";
import { Mountain, Sparkles, ArrowRight, Package, Factory } from "lucide-react";
import { Link } from "react-router-dom";
// import { Button } from "./button";
// import { Badge } from "./badge";

export const Header = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 255, 200, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Syne', sans-serif",
        background: "linear-gradient(135deg, #020c06 0%, #041a0c 40%, #03260e 70%, #052010 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(74, 222, 128, 0.3); }
          50% { box-shadow: 0 0 50px rgba(74, 222, 128, 0.6), 0 0 100px rgba(74, 222, 128, 0.2); }
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        .hero-badge {
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.1s;
          opacity: 0;
        }
        .hero-brand {
          animation: fadeUp 0.6s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        .hero-headline {
          animation: fadeUp 0.7s ease forwards;
          animation-delay: 0.35s;
          opacity: 0;
        }
        .hero-sub {
          animation: fadeUp 0.7s ease forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        .hero-cta {
          animation: fadeUp 0.7s ease forwards;
          animation-delay: 0.65s;
          opacity: 0;
        }
        .hero-stats {
          animation: fadeUp 0.7s ease forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
        .hero-image {
          animation: fadeIn 1s ease forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        .card-float {
          animation: float 4s ease-in-out infinite;
        }
        .card-float-2 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .glow-btn {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .shimmer-line {
          animation: shimmer 2s ease-in-out infinite;
        }

        .btn-primary {
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: 1px solid rgba(74, 222, 128, 0.4);
          padding: 14px 32px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.05em;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 0 30px rgba(74, 222, 128, 0.4);
          transform: translateY(-1px);
        }
        .btn-outline {
          background: transparent;
          color: #86efac;
          border: 1px solid rgba(74, 222, 128, 0.4);
          padding: 14px 32px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.05em;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-outline:hover {
          background: rgba(74, 222, 128, 0.08);
          border-color: rgba(74, 222, 128, 0.7);
          color: #ffffff;
          transform: translateY(-1px);
        }
        .stat-item {
          border-left: 1px solid rgba(74, 222, 128, 0.2);
          padding-left: 20px;
        }
        .stat-item:first-child {
          border-left: none;
          padding-left: 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hero-image-col {
          position: relative;
        }
        .hero-image-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
          filter: brightness(0.92) saturate(1.1);
        }
        .hero-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
          position: relative;
          z-index: 10;
        }
        .card-bl {
          position: absolute;
          bottom: -24px;
          left: -28px;
        }
        .card-tr {
          position: absolute;
          top: -20px;
          right: -24px;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            gap: 48px;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-inner {
            padding: 60px 20px;
          }
          .hero-image-img {
            height: 320px;
          }
          .card-bl {
            bottom: -16px;
            left: 8px;
          }
          .card-tr {
            top: -16px;
            right: 8px;
          }
        }

        @media (max-width: 480px) {
          .hero-image-img {
            height: 260px;
          }
          .card-bl, .card-tr {
            position: static;
            margin-top: 12px;
            display: inline-flex;
          }
          .floating-cards-row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 16px;
          }
        }
      `}</style>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      />

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial green glow */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)",
        zIndex: 0,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", right: "10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(4,120,87,0.1) 0%, transparent 70%)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Scanline */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.4), transparent)",
        animation: "scanline 6s linear infinite",
        zIndex: 1,
        pointerEvents: "none",
      }} />

      {/* Main content */}
      <div className="hero-inner">
        <div className="hero-grid">

          {/* LEFT COLUMN */}
          <div>
            {/* Brand line */}
            <div className="hero-brand" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "8px",
                background: "linear-gradient(135deg, #16a34a, #047857)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(74,222,128,0.3)",
              }}>
                <Mountain size={18} color="white" />
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "rgba(134,239,172,0.7)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Lumina Earth Minerals
              </span>
              <div className="shimmer-line" style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(74,222,128,0.4), transparent)" }} />
            </div>

            {/* Badge */}
            <div className="hero-badge" style={{ marginBottom: "28px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)",
                color: "#fb923c", padding: "6px 16px", borderRadius: "3px",
                fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em",
              }}>
                🏆 WORLD&apos;S FIRST — DIRECT FROM KHEWRA SALT MINE
              </span>
            </div>

            {/* Headline */}
            <div className="hero-headline" style={{ marginBottom: "24px" }}>
              <h1 style={{
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-0.02em",
              }}>
                Premium Natural
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #4ade80, #86efac, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Products
                </span>{" "}
                <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>for</span>
                <br />
                Your Business
              </h1>
            </div>

            {/* Subtext */}
            <div className="hero-sub" style={{ marginBottom: "40px" }}>
              <p style={{
                color: "rgba(134,239,172,0.65)",
                fontSize: "16px",
                lineHeight: 1.75,
                margin: 0,
                maxWidth: "480px",
                fontFamily: "'DM Mono', monospace",
                fontWeight: 300,
              }}>
                Sourcing directly from the Khewra Salt Mine in Pakistan — delivering high-quality Himalayan salt products for global wholesale buyers.
              </p>
              <div style={{
                marginTop: "16px",
                padding: "12px 16px",
                borderLeft: "2px solid #16a34a",
                background: "rgba(22,163,74,0.06)",
                borderRadius: "0 4px 4px 0",
              }}>
                <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: 700, letterSpacing: "0.05em" }}>
                  Bulk quantities only — Quality guaranteed.
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-cta" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "56px" }}>
              <Link to="/contact" className="btn-primary glow-btn">
                <Sparkles size={17} />
                Get Bulk Quote
              </Link>
              <Link to="/products" className="btn-outline">
                View Products
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="hero-stats" style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
              {[
                { number: "500+", label: "Business Clients" },
                { number: "70+", label: "Product Lines" },
                { number: "15", label: "Countries Served" },
                { number: "99%", label: "Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="stat-item" style={{ paddingRight: "24px", marginBottom: "8px" }}>
                  <div style={{ fontWeight: 800, fontSize: "22px", color: "#4ade80", letterSpacing: "-0.02em" }}>
                    {stat.number}
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(134,239,172,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT COLUMN */}
          <div className="hero-image hero-image-col">
            {/* Image frame */}
            <div style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(74,222,128,0.15)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(22,163,74,0.1)",
            }}>
              {/* Corner accents */}
              {[
                { top: 0, left: 0, borderTop: "2px solid #4ade80", borderLeft: "2px solid #4ade80", borderRadius: "8px 0 0 0" },
                { top: 0, right: 0, borderTop: "2px solid #4ade80", borderRight: "2px solid #4ade80", borderRadius: "0 8px 0 0" },
                { bottom: 0, left: 0, borderBottom: "2px solid #4ade80", borderLeft: "2px solid #4ade80", borderRadius: "0 0 0 8px" },
                { bottom: 0, right: 0, borderBottom: "2px solid #4ade80", borderRight: "2px solid #4ade80", borderRadius: "0 0 8px 0" },
              ].map((style, i) => (
                <div key={i} style={{ position: "absolute", width: "24px", height: "24px", zIndex: 10, ...style }} />
              ))}

              {/* Scan line on image */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none",
                background: "linear-gradient(180deg, transparent 40%, rgba(22,163,74,0.04) 100%)",
              }} />

              <img
                src="https://res.cloudinary.com/dptmeakuy/image/upload/v1772181633/file_000000004a4471fab3cbb178fdf1348b_c16iru.png"
                alt="Himalayan Salt Products from Khewra Mine"
                className="hero-image-img"
              />

              {/* Bottom gradient */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
                background: "linear-gradient(0deg, rgba(2,12,6,0.7), transparent)",
                zIndex: 5,
              }} />
            </div>

            {/* Floating card — bottom left */}
            <div className="card-float card-bl" style={{
              background: "rgba(2,12,6,0.9)",
              border: "1px solid rgba(74,222,128,0.2)",
              backdropFilter: "blur(20px)",
              padding: "18px 22px",
              borderRadius: "8px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(22,163,74,0.1)",
              zIndex: 20,
              minWidth: "200px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "8px",
                  background: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))",
                  border: "1px solid rgba(249,115,22,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Factory size={18} color="#fb923c" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "#ffffff", letterSpacing: "-0.01em" }}>Khewra Salt Mine</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(134,239,172,0.5)", marginTop: "2px" }}>Direct Source Partnership</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#fb923c", marginTop: "2px", letterSpacing: "0.05em" }}>WORLD&apos;S FIRST SUPPLIER</div>
                </div>
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="card-float-2 card-tr" style={{
              background: "rgba(2,12,6,0.9)",
              border: "1px solid rgba(74,222,128,0.2)",
              backdropFilter: "blur(20px)",
              padding: "16px 20px",
              borderRadius: "8px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              zIndex: 20,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Package size={16} color="#4ade80" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#ffffff" }}>
                    Licensed Export Company
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(134,239,172,0.5)" }}>
                    International Trade Compliant
                  </div>
                </div>
              </div>
            </div>

            {/* Glow beneath image */}
            <div style={{
              position: "absolute", bottom: "-60px", left: "50%", transform: "translateX(-50%)",
              width: "70%", height: "80px",
              background: "radial-gradient(ellipse, rgba(22,163,74,0.25), transparent 70%)",
              filter: "blur(20px)",
              zIndex: 0,
              pointerEvents: "none",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};