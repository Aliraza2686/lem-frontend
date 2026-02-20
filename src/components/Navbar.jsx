import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utills";
import { Logo } from "./atoms/Logo";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQ" },
    { to: "/workspace-images", label: "Gallery" },
    { to: "/private-label", label: "Private Labeling" },
  ];

  const isActive = (path) => path === currentPath;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');

        .futuristic-nav {
          background: rgba(2, 12, 6, 0.97);
          border-bottom: 1px solid rgba(74, 222, 128, 0.12);
          backdrop-filter: blur(20px);
          position: sticky;
          top: 0;
          z-index: 100;
          font-family: 'Syne', sans-serif;
        }

        /* ── Desktop bar ── */
        .nav-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
          gap: 8px;
        }

        .nav-logo-wrap {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
          padding: 0 8px;
        }

        .nav-link {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(134, 239, 172, 0.55);
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 4px;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .nav-link:hover { color: #4ade80; background: rgba(74,222,128,0.06); }
        .nav-link.active { color: #4ade80; border-bottom: 2px solid #16a34a; background: rgba(74,222,128,0.05); }

        .nav-cta {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: 1px solid rgba(74,222,128,0.35);
          padding: 8px 20px;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-cta:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 0 20px rgba(74,222,128,0.3);
          transform: translateY(-1px);
        }

        /* hamburger — hidden on desktop */
        .mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid rgba(74,222,128,0.2);
          border-radius: 6px;
          padding: 6px;
          color: rgba(134,239,172,0.7);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .mobile-toggle:hover {
          background: rgba(74,222,128,0.08);
          border-color: rgba(74,222,128,0.4);
          color: #4ade80;
        }

        /* ── Mobile dropdown ── */
        .mobile-panel {
          display: none;
          border-top: 1px solid rgba(74,222,128,0.08);
          background: rgba(2,12,6,0.99);
          padding: 12px 16px 20px;
        }
        .mobile-panel.open { display: block; }

        .mobile-link {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(134,239,172,0.6);
          text-decoration: none;
          padding: 12px 16px;
          border-left: 3px solid transparent;
          border-radius: 0 4px 4px 0;
          transition: all 0.2s ease;
          margin-bottom: 2px;
        }
        .mobile-link:hover { color: #4ade80; background: rgba(74,222,128,0.06); border-left-color: rgba(74,222,128,0.4); }
        .mobile-link.active { color: #4ade80; background: rgba(74,222,128,0.07); border-left-color: #16a34a; }

        .mobile-cta {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white;
          border: 1px solid rgba(74,222,128,0.3);
          padding: 12px 20px;
          border-radius: 4px;
          text-decoration: none;
          text-align: center;
          margin-top: 12px;
          transition: all 0.25s ease;
        }
        .mobile-cta:hover { box-shadow: 0 0 20px rgba(74,222,128,0.25); }

        /* ── Tablet: shrink font ── */
        @media (max-width: 1024px) {
          .nav-link { font-size: 12px; padding: 6px 7px; }
        }

        /* ── Mobile ≤768px ── */
        @media (max-width: 768px) {
          /* hide desktop items */
          .desktop-links { display: none !important; }
          .nav-cta { display: none !important; }

          /* show hamburger */
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* 3-column grid: [hamburger] [logo] [spacer] */
          .nav-inner {
            display: grid;
            grid-template-columns: 40px 1fr 40px;
            padding: 0 16px;
          }
          .nav-logo-wrap {
            justify-content: center;
          }
          .mobile-toggle {
            grid-column: 1;
            grid-row: 1;
          }
        }
      `}</style>

      <nav className="futuristic-nav" ref={menuRef}>
        <div className="nav-inner">
          {/* Hamburger — left slot on mobile */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <XMarkIcon className="size-5" aria-hidden="true" />
              : <Bars3Icon className="size-5" aria-hidden="true" />
            }
          </button>

          {/* Logo — center on mobile via grid */}
          <Link to="/" className="nav-logo-wrap">
            <Logo />
          </Link>

          {/* Desktop links */}
          <div className="desktop-links">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn("nav-link", isActive(link.to) && "active")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/contact" className="nav-cta">
            Get a Quote
          </Link>
        </div>

        {/* Mobile dropdown */}
        <div className={cn("mobile-panel", menuOpen && "open")}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn("mobile-link", isActive(link.to) && "active")}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </nav>
    </>
  );
};