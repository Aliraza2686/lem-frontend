/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from "react";
import { ArrowRight, Phone, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { EMAIL, PHONE_NUMBER } from "../../lib/utills";
import { Logo } from "../atoms/Logo";
import Footer from "../Footer";

const NAV_LINKS = [
  { label: "Home",          to: "/" },
  { label: "Products",      to: "/products" },
  { label: "Private Label", to: "/private-label" },
  { label: "Gallery",       to: "/workspace-images" },
  { label: "About",         to: "/about" },
  { label: "FAQ",           to: "/faq" },
  { label: "Contact",       to: "/contact" },
];

export function NavLayoutTwo({ children }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
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

        /* ── Top bar ── */
        .nl-topbar {
          width: 100%; background: #0d1f35;
          border-bottom: 1px solid rgba(200,170,100,0.18);
          padding: 9px 48px;
          display: flex; align-items: center; justify-content: space-between;
          position: relative; z-index: 50;
        }
        .nl-topbar-left  { display: flex; align-items: center; gap: 28px; }
        .nl-topbar-item  {
          display: flex; align-items: center; gap: 7px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(220,200,150,0.72); letter-spacing: 0.04em;
        }
        .nl-topbar-right {
          font-family: 'DM Mono', monospace; font-size: 10px;
          color: rgba(220,200,150,0.5); letter-spacing: 0.15em; text-transform: uppercase;
        }

        /* ── Nav ── */
        .nl-nav {
          width: 100%; background: #0d1f35;
          border-bottom: 1px solid rgba(200,170,100,0.15);
          padding: 14px 48px;
          display: flex; align-items: center; justify-content: space-between;
          position: sticky; top: 0; z-index: 50;
          transition: all 0.3s ease;
        }
        .nl-nav.scrolled {
          background: rgba(5,18,35,0.97);
          border-bottom-color: rgba(200,170,100,0.22);
          backdrop-filter: blur(16px);
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
        }

        /* Logo */
        .nl-logo { display: flex; align-items: center; gap: 13px; text-decoration: none; }
        .nl-logo-icon {
          width: 63px; height: 63px;
          background: rgba(200,170,100,0.12);
          border: 1px solid rgba(200,170,100,0.35);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .nl-logo-text  { display: flex; flex-direction: column; line-height: 1; }
        .nl-logo-name  {
          font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700;
          color: #fff; letter-spacing: 0.02em;
        }
        .nl-logo-sub   {
          font-family: 'DM Mono', monospace; font-size: 9px;
          color: rgba(200,170,100,0.6); letter-spacing: 0.18em;
          text-transform: uppercase; margin-top: 3px;
        }

        /* Desktop links */
        .nl-links { display: flex; align-items: center; gap: 28px; }
        .nl-link  {
          font-family: 'Source Sans 3', sans-serif; font-size: 12px; font-weight: 500;
          color: rgba(255,255,255,0.78); text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: color 0.2s ease; position: relative;
        }
        .nl-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px;
          background: #c8aa64; transform: scaleX(0); transition: transform 0.25s ease;
        }
        .nl-link:hover, .nl-link.active { color: #c8aa64; }
        .nl-link.active::after, .nl-link:hover::after { transform: scaleX(1); }

        /* Desktop CTA */
        .nl-cta {
          font-family: 'Source Sans 3', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 10px 22px; background: transparent;
          border: 1px solid rgba(200,170,100,0.65);
          color: #c8aa64; text-decoration: none;
          transition: all 0.25s ease; white-space: nowrap;
        }
        .nl-cta:hover { background: rgba(200,170,100,0.12); border-color: rgba(200,170,100,0.9); color: #fff; }

        /* Hamburger */
        .nl-hamburger {
          display: none;
          align-items: center; justify-content: center;
          width: 40px; height: 40px; flex-shrink: 0;
          background: rgba(200,170,100,0.1);
          border: 1px solid rgba(200,170,100,0.3);
          color: #c8aa64; cursor: pointer;
          transition: all 0.2s ease;
          position: relative; z-index: 60;
        }
        .nl-hamburger:hover { background: rgba(200,170,100,0.2); border-color: rgba(200,170,100,0.6); }

        /* ── Drawer overlay ── */
        .nl-overlay {
          display: none;
          position: fixed; inset: 0; z-index: "999 !important";
          background: rgba(3,10,22,0.65); backdrop-filter: blur(4px);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .nl-overlay.open { opacity: 1; pointer-events: all; }

        /* ── Drawer panel ── */
        .nl-drawer {
          position: fixed; top: 0; left: 0; bottom: 0; z-index: 999;
          width: 280px; max-width: 85vw;
          background: #0a1828;
          border-right: 1px solid rgba(200,170,100,0.2);
          display: flex; flex-direction: column;
          transform: translateX(-100%);
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
          overflow-y: auto;
        }
        .nl-drawer.open { transform: translateX(0); }

        .nl-drawer-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 20px 16px;
          border-bottom: 1px solid rgba(200,170,100,0.12);
          flex-shrink: 0;
        }
        .nl-drawer-close {
          width: 36px; height: 36px;
          background: rgba(200,170,100,0.08); border: 1px solid rgba(200,170,100,0.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(200,170,100,0.7); cursor: pointer; transition: all 0.2s ease;
        }
        .nl-drawer-close:hover { background: rgba(200,170,100,0.18); color: #c8aa64; }

        .nl-drawer-links { display: flex; flex-direction: column; padding: 8px 0; flex: 1; }
        .nl-drawer-link  {
          display: flex; align-items: center;
          padding: 14px 24px;
          font-family: 'Source Sans 3', sans-serif; font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.72); text-decoration: none;
          letter-spacing: 0.08em; text-transform: uppercase;
          border-left: 2px solid transparent;
          transition: all 0.2s ease;
        }
        .nl-drawer-link:hover, .nl-drawer-link.active {
          color: #c8aa64; background: rgba(200,170,100,0.05); border-left-color: #c8aa64;
        }
        .nl-drawer-hr    { height: 1px; background: rgba(200,170,100,0.1); margin: 8px 24px; }

        .nl-drawer-quote {
          margin: 12px 20px 20px;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-family: 'Source Sans 3', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 13px 24px; text-decoration: none;
          background: linear-gradient(135deg, #c8aa64, #a88940); color: #0d1f35;
          transition: all 0.2s ease;
        }
        .nl-drawer-quote:hover { background: linear-gradient(135deg, #d4ba78, #b89848); }

        .nl-drawer-foot  {
          padding: 14px 24px 24px;
          border-top: 1px solid rgba(200,170,100,0.1); flex-shrink: 0;
        }
        .nl-drawer-foot-row {
          display: flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(220,200,150,0.5); margin-bottom: 8px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nl-topbar, .nl-nav { padding-left: 28px; padding-right: 28px; }
        }

        @media (max-width: 768px) {
          .nl-hamburger { display: flex !important; }
          .nl-links     { display: none !important; }
          .nl-cta       { display: none !important; }
          .nl-overlay   { display: block; }

          .nl-topbar, .nl-nav { padding: 10px 16px; }
          .nl-logo { flex: 1; justify-content: center; }
        }

        @media (max-width: 480px) {
          .nl-topbar { display: none; }
        }
      `}</style>

      {/* ── Drawer overlay ── */}
      <div
        className={`nl-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Drawer panel ── */}
      <div className={`nl-drawer ${menuOpen ? "open" : ""}`}>
        <div className="nl-drawer-head">
          <Link to="/" className="nl-logo" onClick={() => setMenuOpen(false)}>
            <div className="nl-logo-icon !rounded-xl"><Logo /></div>
            <div className="nl-logo-text">
              <span className="nl-logo-name" style={{ fontSize: "15px" }}>Lumina Earth</span>
              <span className="nl-logo-sub">Minerals · Khewra, PK</span>
            </div>
          </Link>
          <button className="nl-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={16} />
          </button>
        </div>

        <nav className="nl-drawer-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`nl-drawer-link ${location.pathname === link.to ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="nl-drawer-hr" />
        </nav>

        <Link to="/contact" className="nl-drawer-quote" onClick={() => setMenuOpen(false)}>
          Request a Quote <ArrowRight size={14} />
        </Link>

        <div className="nl-drawer-foot">
          <div className="nl-drawer-foot-row"><Phone size={11} /> {PHONE_NUMBER}</div>
          <div className="nl-drawer-foot-row"><Mail size={11} /> {EMAIL}</div>
        </div>
      </div>

      {/* ── Top info bar ── */}
      <div className="nl-topbar">
        <div className="nl-topbar-left">
          <span className="nl-topbar-item"><Phone size={11} /> {PHONE_NUMBER}</span>
          <span className="nl-topbar-item"><Mail size={11} /> {EMAIL}</span>
        </div>
        <div className="nl-topbar-right">Est. Khewra · Punjab · Pakistan</div>
      </div>

      {/* ── Sticky nav ── */}
      <nav className={`nl-nav ${scrolled ? "scrolled" : ""}`}>
        {/* Hamburger — left on mobile */}
        <button
          className="nl-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          type="button"
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <Link to="/" className="nl-logo">
          <div className="nl-logo-icon !rounded-xl"><Logo /></div>
          <div className="nl-logo-text">
            <span className="nl-logo-name" style={{ fontSize: "15px" }}>Lumina Earth</span>
            <span className="nl-logo-sub">Minerals · Khewra, PK</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="nl-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nl-link ${location.pathname === link.to ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link to="/contact" className="nl-cta">Request a Quote</Link>
      </nav>

      {/* ── Page content ── */}
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}