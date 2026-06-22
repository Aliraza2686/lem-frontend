import { Mountain, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../lib/utills";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .footer {
          background: rgba(2, 12, 6, 0.99);
          border-top: 1px solid rgba(74, 222, 128, 0.12);
          font-family: 'Syne', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(74,222,128,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .footer-glow {
          position: absolute; bottom: -80px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(22,163,74,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Main grid ── */
        .footer-inner {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 64px 32px 0;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 48px;
        }

        /* ── Brand col ── */
        .footer-brand-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; margin-bottom: 16px;
        }
        .footer-logo-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: linear-gradient(135deg, #16a34a, #047857);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 16px rgba(74,222,128,0.25);
          flex-shrink: 0;
        }
        .footer-brand-name {
          font-family: 'DM Mono', monospace; font-size: 13px;
          letter-spacing: 0.1em; color: rgba(134,239,172,0.7);
          text-transform: uppercase; font-weight: 500;
        }
        .footer-brand-desc {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: rgba(134,239,172,0.4); line-height: 1.75; margin-bottom: 20px;
        }

        /* Socials */
        .footer-socials { display: flex; gap: 10px; }
        .footer-social-btn {
          width: 34px; height: 34px; border-radius: 7px;
          background: rgba(4,20,10,0.9);
          border: 1px solid rgba(74,222,128,0.15);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease; color: rgba(134,239,172,0.45);
          text-decoration: none;
        }
        .footer-social-btn:hover {
          border-color: rgba(74,222,128,0.45);
          color: #4ade80;
          background: rgba(22,163,74,0.1);
          box-shadow: 0 0 12px rgba(74,222,128,0.15);
        }

        /* ── Link cols ── */
        .footer-col-title {
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(74,222,128,0.6);
          text-transform: uppercase; font-weight: 500;
          margin-bottom: 18px;
          display: flex; align-items: center; gap: 10px;
        }
        .footer-col-title::after {
          content: '';
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(74,222,128,0.25), transparent);
        }

        .footer-link {
          display: flex; align-items: center; gap: 6px;
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: rgba(134,239,172,0.45); text-decoration: none;
          padding: 5px 0; transition: color 0.2s ease;
        }
        .footer-link:hover { color: #4ade80; }
        .footer-link-arrow {
          opacity: 0; transform: translateX(-4px);
          transition: all 0.2s ease; flex-shrink: 0;
        }
        .footer-link:hover .footer-link-arrow {
          opacity: 1; transform: translateX(0);
        }

        /* ── Contact col ── */
        .footer-contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 14px;
        }
        .footer-contact-icon {
          width: 28px; height: 28px; border-radius: 6px; flex-shrink: 0;
          background: rgba(22,163,74,0.08);
          border: 1px solid rgba(74,222,128,0.15);
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .footer-contact-text {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: rgba(134,239,172,0.5); line-height: 1.5;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 20px 32px 28px;
          border-top: 1px solid rgba(74,222,128,0.07);
          margin-top: 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 300;
          color: rgba(134,239,172,0.3); letter-spacing: 0.05em;
        }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-link {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 300;
          color: rgba(134,239,172,0.3); text-decoration: none;
          transition: color 0.2s ease; letter-spacing: 0.05em;
        }
        .footer-bottom-link:hover { color: #4ade80; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 640px) {
          .footer-inner { grid-template-columns: 1fr; padding: 48px 20px 0; gap: 32px; }
          .footer-bottom { padding: 20px 20px 28px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-glow" />

        <div className="footer-inner">

          {/* ── Brand ── */}
          <div>
            <Link to="/" className="footer-brand-logo">
              <div className="footer-logo-icon">
                <Mountain size={18} color="white" />
              </div>
              <span className="footer-brand-name">Lumina Earth Minerals</span>
            </Link>
         <p className="footer-brand-desc">
  Your trusted export partner for Himalayan salt and premium minerals from Pakistan.
  Reliable sourcing, quality assurance, and worldwide bulk supply.
</p>
            <div className="footer-socials">
              <Link to="https://web.facebook.com/LuminaEarthMineralsLLP" target="_blank" className="footer-social-btn" aria-label="Facebook">
                <Facebook size={15} />
              </Link>
              <Link to="https://www.instagram.com/luminaearthminerals" target="_blank" className="footer-social-btn" aria-label="Instagram">
                <Instagram size={15} />
              </Link>
              <Link href="https://x.com/LuminaExports" target="_blank" className="footer-social-btn" aria-label="Twitter">
                <Twitter size={15} />
              </Link>
              {/* <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a> */}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/private-label", label: "Private Labeling" },
              { to: "/workspace-images", label: "Gallery" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="footer-link">
                <ArrowRight size={11} className="footer-link-arrow" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Customer Service ── */}
          <div>
            <div className="footer-col-title">Support</div>
            {[
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="footer-link">
                <ArrowRight size={11} className="footer-link-arrow" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Contact Info ── */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <Phone size={13} color="#4ade80" />
              </div>
              <span className="footer-contact-text">{PHONE_NUMBER}</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <Mail size={13} color="#4ade80" />
              </div>
              <span className="footer-contact-text">{EMAIL}</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <MapPin size={13} color="#4ade80" />
              </div>
              <span className="footer-contact-text">{ADDRESS}</span>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 Lumina Earth Minerals. All rights reserved.
          </span>
          {/* <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
          </div> */}
        </div>
      </footer>
    </>
  );
}