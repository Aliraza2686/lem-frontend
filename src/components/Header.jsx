/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from "react";
import { ArrowRight, Ship, Globe, Award, Package, Phone, Mail, ChevronDown, FileText, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./atoms/Logo";
import { EMAIL, minerals, PHONE_NUMBER } from "../lib/utills";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Private Label", to: "/private-label" },
  { label: "Gallery", to: "/workspace-images" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
    { to: "/terms", label: "Terms & Conditions" },

];

const services = [
  {
    icon: Package,
    title: "Bulk Mineral Supply",
    desc: "Export-grade minerals supplied in custom quantities to meet industrial, wholesale, and manufacturing requirements."
  },
  {
    icon: FileText,
    title: "Custom Packaging",
    desc: "Flexible packaging solutions, private labeling, and product customization tailored to your market needs."
  },
  {
    icon: Globe,
    title: "Global Export & Logistics",
    desc: "Reliable worldwide shipping via air and sea freight, with both LCL and FCL container options."
  },
  {
    icon: Award,
    title: "Quality & Compliance",
    desc: "Carefully sourced minerals with consistent quality standards, export documentation, and inspection support."
  },
];

// Notes, copper, white -- brown -- 
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&family=Source+Sans+3:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }
/* ── Minerals Grid ── */

.minerals-strip {
  background: #f2ede3;
  padding: 80px 48px;
  font-family: 'Source Sans 3', sans-serif;
}


.minerals-grid {
  max-width: 900px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}


.mineral-card {
  background: #ffffff;
  padding: 34px 30px;

  border: 1px solid rgba(200,170,100,0.25);

  position: relative;
  overflow: hidden;

  transition: all 0.3s ease;
}


.mineral-card::before {
  content: "";
  position: absolute;

  top:0;
  left:0;
  right:0;

  height:3px;

  background:#c8aa64;

  transform:scaleX(0);
  transform-origin:left;

  transition:transform .3s ease;
}


.mineral-card:hover {
  transform: translateY(-8px);
  box-shadow:0 15px 35px rgba(0,0,0,.08);
}


.mineral-card:hover::before {
  transform:scaleX(1);
}



.mineral-category {

  font-family:'DM Mono', monospace;

  font-size:10px;

  letter-spacing:.15em;

  text-transform:uppercase;

  color:#8a6f3a;

  margin-bottom:14px;

}



.mineral-card h3 {

  font-family:'Playfair Display', serif;

  font-size:24px;

  color:#0d1f35;

  margin-bottom:14px;

}



.mineral-card p {

  font-size:14px;

  color:#556;

  line-height:1.8;

}



@media(max-width:1024px){

  .minerals-grid{

    grid-template-columns:repeat(2,1fr);

  }

}



@media(max-width:768px){

  .minerals-strip{

    padding:60px 20px;

  }


  .minerals-grid{

    grid-template-columns:1fr;

  }

}
        /* ── Hero ── */
        .hero {
          position: relative; min-height: 100vh; width: 100%;
          display: flex; flex-direction: column;
          font-family: 'Source Sans 3', sans-serif; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background-image: url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=85&fit=crop');
          background-size: cover; background-position: center 55%;
          animation: subtle-drift 35s ease-in-out infinite alternate;
        }
        @keyframes subtle-drift {
          from { background-position: center 53%; }
          to   { background-position: center 60%; }
        }
        .hero-bg::after {
          content: ''; position: absolute; inset: 0;
          background:
            linear-gradient(180deg, rgba(5,18,35,0.78) 0%, rgba(5,18,35,0.40) 30%, rgba(5,18,35,0.50) 60%, rgba(5,18,35,0.90) 100%),
            linear-gradient(100deg, rgba(5,18,35,0.55) 0%, transparent 60%);
        }

        /* ── Top bar ── */
        .hero-topbar {
          position: relative; z-index: 30; width: 100%;
          background: rgba(5,18,35,0.7);
          border-bottom: 1px solid rgba(200,170,100,0.18);
          backdrop-filter: blur(6px);
          padding: 9px 48px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .topbar-left  { display: flex; align-items: center; gap: 28px; }
        .topbar-item  {
          display: flex; align-items: center; gap: 7px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(220,200,150,0.72); letter-spacing: 0.04em;
        }
        .topbar-right {
          font-family: 'DM Mono', monospace; font-size: 10px;
          color: rgba(220,200,150,0.5); letter-spacing: 0.15em; text-transform: uppercase;
        }

        /* ── Nav ── */
        .hero-nav {
          position: relative; z-index: 30; width: 100%;
          padding: 16px 48px;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.3s ease;
        }
        .hero-nav.scrolled {
          position: fixed; top: 0; left: 0; right: 0;
          background: rgba(5,18,35,0.97);
          border-bottom: 1px solid rgba(200,170,100,0.22);
          backdrop-filter: blur(16px);
          padding: 12px 48px;
        }

        .nav-logo { display: flex; align-items: center; gap: 13px; text-decoration: none; }
        .nav-logo-icon {
          width: 63px; height: 63px;
          background: rgba(200,170,100,0.12);
          border: 1px solid rgba(200,170,100,0.35);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .nav-logo-text { display: flex; flex-direction: column; line-height: 1; }
        .nav-logo-name {
          font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700;
          color: #fff; letter-spacing: 0.02em;
        }
        .nav-logo-sub {
          font-family: 'DM Mono', monospace; font-size: 9px;
          color: rgba(200,170,100,0.6); letter-spacing: 0.18em;
          text-transform: uppercase; margin-top: 3px;
        }

        .nav-links { display: flex; align-items: center; gap: 28px; }
        .nav-link {
          font-family: 'Source Sans 3', sans-serif; font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,0.78); text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: color 0.2s ease; position: relative;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px;
          background: #c8aa64; transform: scaleX(0); transition: transform 0.25s ease;
        }
        .nav-link:hover, .nav-link.active { color: #c8aa64; }
        .nav-link.active::after, .nav-link:hover::after { transform: scaleX(1); }

        .nav-cta {
          font-family: 'Source Sans 3', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 10px 22px; background: transparent;
          border: 1px solid rgba(200,170,100,0.65);
          color: #c8aa64; text-decoration: none; transition: all 0.25s ease;
          white-space: nowrap;
        }
        .nav-cta:hover { background: rgba(200,170,100,0.12); border-color: rgba(200,170,100,0.9); color: #fff; }

        /* ── Hamburger (mobile only) ── */
        .nav-hamburger {
          display: none;
          align-items: center; justify-content: center;
          width: 40px; height: 40px; flex-shrink: 0;
          background: rgba(200,170,100,0.1);
          border: 1px solid rgba(200,170,100,0.3);
          color: #c8aa64; cursor: pointer;
          transition: all 0.2s ease;
          /* ensure it's always clickable */
          position: relative; z-index: 40;
        }
        .nav-hamburger:hover { background: rgba(200,170,100,0.2); border-color: rgba(200,170,100,0.6); }

        /* ── Drawer overlay ── */
        .drawer-overlay {
          display: none;
          position: fixed; inset: 0; z-index: "999 !important";
          background: rgba(3,10,22,0.65); backdrop-filter: blur(4px);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .drawer-overlay.open { opacity: 1; pointer-events: all; }

        /* ── Drawer panel ── */
        .drawer-panel {
          position: fixed; top: 0; left: 0; bottom: 0; z-index: 999;
          width: 280px; max-width: 85vw;
          background: #0a1828;
          border-right: 1px solid rgba(200,170,100,0.2);
          display: flex; flex-direction: column;
          transform: translateX(-100%);
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
          overflow-y: auto;
        }
        .drawer-panel.open { transform: translateX(0); }

        .drawer-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 20px 16px;
          border-bottom: 1px solid rgba(200,170,100,0.12);
          flex-shrink: 0;
        }
        .drawer-close-btn {
          width: 36px; height: 36px;
          background: rgba(200,170,100,0.08); border: 1px solid rgba(200,170,100,0.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(200,170,100,0.7); cursor: pointer; transition: all 0.2s ease;
        }
        .drawer-close-btn:hover { background: rgba(200,170,100,0.18); color: #c8aa64; }

        .drawer-links { display: flex; flex-direction: column; padding: 8px 0; flex: 1; }
        .drawer-link {
          display: flex; align-items: center;
          padding: 14px 24px;
          font-family: 'Source Sans 3', sans-serif; font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.72); text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase;
          border-left: 2px solid transparent;
          transition: all 0.2s ease;
        }
        .drawer-link:hover, .drawer-link.active {
          color: #c8aa64; background: rgba(200,170,100,0.05); border-left-color: #c8aa64;
        }
        .drawer-hr { height: 1px; background: rgba(200,170,100,0.1); margin: 8px 24px; }

        .drawer-quote {
          margin: 12px 20px 20px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: 'Source Sans 3', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 13px 24px; text-decoration: none;
          background: linear-gradient(135deg, #c8aa64, #a88940); color: #0d1f35;
          transition: all 0.2s ease;
        }
        .drawer-quote:hover { background: linear-gradient(135deg, #d4ba78, #b89848); }

        .drawer-foot {
          padding: 14px 24px 24px;
          border-top: 1px solid rgba(200,170,100,0.1);
          flex-shrink: 0;
        }
        .drawer-foot-row {
          display: flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(220,200,150,0.5); margin-bottom: 8px;
        }

        /* ── Hero content ── */
        .hero-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; flex-direction: column; justify-content: center;
          padding: 40px 48px 80px; max-width: 860px;
        }
        .hero-badge { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 30px; }
        .badge-rule { width: 36px; height: 1px; background: rgba(200,170,100,0.55); }
        .badge-text {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(200,170,100,0.75); letter-spacing: 0.18em; text-transform: uppercase;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 6.5vw, 90px); font-weight: 900; color: #fff;
          line-height: 1.0; letter-spacing: -0.01em; margin-bottom: 0;
          text-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }
        .hero-title-outline {
          font-style: italic; color: transparent;
          -webkit-text-stroke: 1.5px rgba(200,170,100,0.8); display: block;
        }
        .hero-title-sub {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 3vw, 46px); font-weight: 400; font-style: italic;
          color: rgba(220,200,150,0.88); display: block; margin-bottom: 30px;
        }
        .hero-tagline {
          font-size: 15px; font-weight: 400; color: rgba(255,255,255,0.68);
          line-height: 1.8; max-width: 500px; margin-bottom: 44px;
        }
        .hero-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Source Sans 3', sans-serif; font-size: 13px;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 15px 36px; text-decoration: none;
          background: linear-gradient(135deg, #c8aa64, #a88940); color: #0d1f35;
          transition: all 0.3s ease; box-shadow: 0 4px 24px rgba(200,170,100,0.35);
        }
        .btn-primary:hover { background: linear-gradient(135deg, #d4ba78, #b89848); box-shadow: 0 8px 36px rgba(200,170,100,0.45); transform: translateY(-2px); }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Source Sans 3', sans-serif; font-size: 13px;
          font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 14px 30px; text-decoration: none;
          background: transparent; color: rgba(255,255,255,0.82);
          border: 1px solid rgba(255,255,255,0.28); transition: all 0.25s ease;
        }
        .btn-secondary:hover { border-color: rgba(255,255,255,0.58); background: rgba(255,255,255,0.07); color: #fff; }

        /* scroll hint */
        .scroll-hint {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
          z-index: 10; display: flex; flex-direction: column; align-items: center; gap: 5px;
          font-family: 'DM Mono', monospace; font-size: 9px;
          letter-spacing: 0.18em; text-transform: uppercase; color: rgba(200,170,100,0.45);
          animation: sh 2.5s ease-in-out infinite;
        }
        @keyframes sh {
          0%,100% { transform: translateX(-50%) translateY(0); opacity: 0.45; }
          50%      { transform: translateX(-50%) translateY(7px); opacity: 0.85; }
        }
        .hero-ribbon {
          position: absolute; right: 20px; top: 50%; transform: translateY(-50%);
          z-index: 10; writing-mode: vertical-rl; display: flex; align-items: center; gap: 12px;
        }
        .ribbon-text { font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(200,170,100,0.4); letter-spacing: 0.18em; text-transform: uppercase; }
        .ribbon-rule { width: 1px; height: 55px; background: linear-gradient(180deg, rgba(200,170,100,0.35), transparent); }

        /* ── Services ── */
        .services-strip { background: #0d1f35; border-top: 3px solid #c8aa64; border-bottom: 1px solid rgba(200,170,100,0.12); padding: 64px 48px; font-family: 'Source Sans 3', sans-serif; }
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-eyebrow { display: inline-flex; align-items: center; gap: 14px; font-family: 'DM Mono', monospace; font-size: 11px; color: rgba(200,170,100,0.6); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 14px; }
        .eyebrow-rule { width: 30px; height: 1px; background: rgba(200,170,100,0.4); }
        .section-title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; color: #fff; }
        .section-title span { color: #c8aa64; font-style: italic; }
        .services-grid { display: grid; grid-template-columns: repeat(4,1fr); border: 1px solid rgba(200,170,100,0.12); }
        .service-card { background: rgba(255,255,255,0.02); padding: 36px 28px; border-right: 1px solid rgba(200,170,100,0.1); position: relative; overflow: hidden; transition: background 0.3s ease; }
        .service-card:last-child { border-right: none; }
        .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: #c8aa64; transform: scaleX(0); transition: transform 0.35s ease; transform-origin: left; }
        .service-card:hover { background: rgba(200,170,100,0.04); }
        .service-card:hover::before { transform: scaleX(1); }
        .service-icon { width: 44px; height: 44px; margin-bottom: 20px; border: 1px solid rgba(200,170,100,0.3); display: flex; align-items: center; justify-content: center; color: #c8aa64; }
        .service-card h3 { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; color: #fff; margin-bottom: 10px; }
        .service-card p { font-size: 13px; color: rgba(255,255,255,0.48); line-height: 1.75; }

        /* ── About ── */
        .about-strip { background: #f2ede3; padding: 80px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; font-family: 'Source Sans 3', sans-serif; }
        .about-overline { font-family: 'DM Mono', monospace; font-size: 11px; color: #8a6f3a; letter-spacing: 0.2em; text-transform: uppercase; display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .about-overline::before { content: ''; width: 28px; height: 1px; background: #8a6f3a; }
        .about-title { font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700; color: #1a2a1a; line-height: 1.15; margin-bottom: 20px; }
        .about-title em { font-style: italic; color: #4a6a28; }
        .about-body { font-size: 15px; color: #4a5a4a; line-height: 1.85; margin-bottom: 32px; }
        .about-link { display: inline-flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #0d1f35; text-decoration: none; border-bottom: 1px solid rgba(13,31,53,0.3); padding-bottom: 3px; transition: all 0.2s ease; }
        .about-link:hover { color: #4a6a28; border-color: #4a6a28; }
        .about-img-wrap { position: relative; }
        .about-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border: 5px solid #fff; box-shadow: 14px 14px 0 #c8aa64; display: block; }
        .about-seal { position: absolute; bottom: -22px; right: -22px; width: 104px; height: 104px; background: #0d1f35; border: 3px solid #c8aa64; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .seal-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #c8aa64; line-height: 1; }
        .seal-lbl { font-family: 'DM Mono', monospace; font-size: 8px; color: rgba(200,170,100,0.65); letter-spacing: 0.12em; text-transform: uppercase; text-align: center; margin-top: 4px; }

        /* ── CTA ── */
        .cta-banner { position: relative; overflow: hidden; background: #0d1f35; border-top: 3px solid #c8aa64; padding: 88px 48px; text-align: center; font-family: 'Source Sans 3', sans-serif; }
        .cta-banner-bg { position: absolute; inset: 0; background-image: url('https://images.unsplash.com/photo-1622535943584-e10258e61c47?w=1600&q=50'); background-size: cover; background-position: center; opacity: 0.07; }
        .cta-inner { position: relative; z-index: 2; max-width: 660px; margin: 0 auto; }
        .cta-overline { font-family: 'DM Mono', monospace; font-size: 11px; color: rgba(200,170,100,0.6); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 18px; }
        .cta-title { font-family: 'Playfair Display', serif; font-size: 44px; font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 18px; }
        .cta-title span { color: #c8aa64; font-style: italic; }
        .cta-body { font-size: 15px; color: rgba(255,255,255,0.58); line-height: 1.8; margin-bottom: 42px; }
        .cta-actions { display: flex; align-items: center; justify-content: center; gap: 16px; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-nav, .hero-nav.scrolled, .hero-topbar, .services-strip, .about-strip, .cta-banner { padding-left: 28px; padding-right: 28px; }
          .services-grid { grid-template-columns: repeat(2,1fr); }
          .about-strip { grid-template-columns: 1fr; gap: 52px; }
          .hero-ribbon { display: none; }
        }

        @media (max-width: 768px) {
          /* Show hamburger, hide desktop links + CTA */
          .nav-hamburger { display: flex !important; }
          .nav-links     { display: none !important; }
          .nav-cta       { display: none !important; }

          /* Show drawer overlay */
          .drawer-overlay { display: block; }

          /* Mobile nav layout: hamburger | logo | spacer */
          .hero-nav, .hero-nav.scrolled {
            padding: 12px 16px;
            display: flex; align-items: center; gap: 0;
          }
          .nav-logo { flex: 1; justify-content: center; }

          .hero-topbar  { padding: 8px 16px; }
          .hero-content { padding: 20px 20px 72px; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .services-strip, .about-strip, .cta-banner { padding: 52px 20px; }
          .services-grid { grid-template-columns: 1fr; }
          .cta-title { font-size: 32px; }
          .cta-actions { flex-direction: column; }
          .about-seal { display: none; }
        }

        @media (max-width: 480px) {
          .hero-topbar { display: none; }
          .hero-title  { font-size: 38px; }
        }
      `}</style>

      {/* ══ DRAWER OVERLAY ══ */}
      <div
        className={`drawer-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ══ DRAWER PANEL ══ */}
      <div className={`drawer-panel ${menuOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="drawer-head">
          <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <div className="nav-logo-icon !w-[63px] !rounded-xl">
              <Logo />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name" style={{ fontSize: "15px" }}>Lumina Earth</span>
              <span className="nav-logo-sub">Minerals · Khewra, PK</span>
            </div>
          </Link>
          <button className="drawer-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={16} />
          </button>
        </div>

        {/* Links */}
        <nav className="drawer-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`drawer-link ${location.pathname === link.to ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="drawer-hr" />
        </nav>

        {/* Quote CTA */}
        <Link to="/contact" className="drawer-quote" onClick={() => setMenuOpen(false)}>
          Request a Quote <ArrowRight size={14} />
        </Link>

        {/* Footer contact */}
        <div className="drawer-foot">
          <div className="drawer-foot-row"><Phone size={11} /> {PHONE_NUMBER}</div>
          <div className="drawer-foot-row"><Mail size={11} /> {EMAIL}</div>
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-bg" />

        {/* Top bar */}
        <div className="hero-topbar">
          <div className="topbar-left">
            <span className="topbar-item"><Phone size={11} /> {PHONE_NUMBER}</span>
            <span className="topbar-item"><Mail size={11} /> {EMAIL}</span>
          </div>
          <div className="topbar-right">Est. Khewra · Punjab · Pakistan</div>
        </div>

        {/* Nav — hamburger FIRST in DOM so it sits left, logo in middle via flex */}
        <nav className={`hero-nav ${scrolled ? "scrolled" : ""}`}>
          {/* Hamburger (visible on mobile only) */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            type="button"
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-icon !w-[63px] !rounded-xl">
              <Logo />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Lumina Earth</span>
              <span className="nav-logo-sub">Minerals · Khewra, PK</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/contact" className="nav-cta">Request a Quote</Link>
        </nav>

        {/* Hero copy */}
        <div className="flex justify-between items-start gap-5 flex-wrap">


          <div className="hero-content  ">
            <div>

              <div className="hero-badge">
                <div className="badge-rule" />
                <span className="badge-text">Direct from Source · Mines</span>
                <div className="badge-rule" />
              </div>

              <h1 className="hero-title">
                Natural Minerals
                <span className="hero-title-outline">Exported</span>
                <span className="hero-title-sub"> Worldwide</span>
              </h1>

              <p className="hero-tagline">
                Global supplier of Himalayan Salt, Bentonite, Limestone, Antimony, Nephrite Jade, White Quartz, and a wide range of
                premium minerals sourced from Pakistan. Serving importers, manufacturers, distributors, and wholesalers worldwide with
                reliable sourcing, private labeling, and end-to-end logistics.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn-primary">
                  Request a Quote <ArrowRight size={15} />
                </Link>
                <Link to="/products" className="btn-secondary">
                  <Ship size={14} /> View Our Products
                </Link>
              </div>
            </div>

          </div>
          <div>{/* ══ MINERALS GRID ══ */}

            <section className="minerals-strip">
              <div className="minerals-grid">


                {minerals.map((mineral) => (

                  <Link
                    to={`/product-details/${mineral?.id}`}
                    key={mineral.name}
                    className="mineral-card"
                  >

                    <div className="mineral-category">
                      {mineral.category}
                    </div>


                    <h3>
                      {mineral.name}
                    </h3>


                    <p>
                      {mineral.desc}
                    </p>


                    <Link
                      to={`/product-details/${mineral?.id}`}
                      className="mineral-btn flex gap-2 items-center mt-2"
                    >
                      View Details <ArrowRight size={14} />
                    </Link>


                  </Link>

                ))}


              </div>


            </section></div>
        </div>


        {/* Side ribbon */}
        <div className="hero-ribbon">
          <span className="ribbon-text">Port of Origin · Karachi, Pakistan</span>
          <div className="ribbon-rule" />
          <Globe size={13} color="rgba(200,170,100,0.35)" />
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span>Scroll</span>
          <ChevronDown size={13} />
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="services-strip">
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-rule" /> What We Offer <div className="eyebrow-rule" />
          </div>
          <h2 className="section-title">End-to-End <span>Export Services</span></h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon"><s.icon size={20} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="about-strip items-center">
        <div>
          <div className="about-overline">Our Story</div>
          <h2 className="about-title">
            Sourced at the<br />
            <em>Heart of the Mines</em>
          </h2>

          <p className="about-body">
            Lumina Earth Minerals sources premium minerals directly from Pakistan&apos;s richest mining regions,
            including the renowned Khewra Salt Range and our network of partner mines and processing facilities.
            From Himalayan Salt, Bentonite, Limestone, Antimony, Nephrite Jade, and White Quartz to other
            industrial and natural minerals, we maintain strict quality control from extraction to export.
            We work exclusively with B2B clients worldwide, providing reliable supply, traceable sourcing,
            custom packaging, and export-ready logistics for bulk orders.
          </p>
          <Link to="/about" className="about-link">
            Learn About Us <ArrowRight size={13} />
          </Link>
        </div>
        <div className="about-img-wrap">
          <img
            className="about-img"
            src="https://res.cloudinary.com/dptmeakuy/image/upload/v1755945081/7ccf29e1-b647-4a76-8fb4-b24aa23b964f_jwhnxt.jpg"
            alt="Khewra Salt Mine"
          />
          <div className="about-seal">
            <span className="seal-num">Direct</span>
            <span className="seal-lbl">From Himalayan Source</span>
          </div>
        </div>


      </section>

      {/* ══ CTA ══ */}
      <section className="cta-banner">
        <div className="cta-banner-bg" />
        <div className="cta-inner">
          <p className="cta-overline">Ready to Ship Worldwide</p>
          <h2 className="cta-title">Get a <span>Custom Quote</span><br />for Your Order</h2>
          <p className="cta-body">
            Tell us your product, quantity, destination, and packaging needs.
            We respond within 24 hours with pricing and lead time.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">
              Request a Quote <ArrowRight size={15} />
            </Link>
            <Link to="/products" className="btn-secondary">Browse Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;