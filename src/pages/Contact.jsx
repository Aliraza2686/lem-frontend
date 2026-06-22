import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/forms/Contactform";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../lib/utills";
import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo";

export const Contact = () => {
  const infoCards = [
    {
      icon: Phone,
      title: "Phone",
      primary: PHONE_NUMBER,
      secondary: "Monday – Friday, 8 AM – 6 PM PST",
    },
    {
      icon: Mail,
      title: "Email",
      primary: EMAIL,
      secondary: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "Khewra Salt Mine",
      secondary: ADDRESS,
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: [
        { label: "Monday – Friday", value: "8:00 AM – 6:00 PM" },
        { label: "Saturday", value: "9:00 AM – 4:00 PM" },
        { label: "Sunday", value: "9:00 AM – 4:00 PM" },
      ],
    },
  ];

  return (
    <NavLayoutTwo>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .contact-page { font-family: 'Syne', sans-serif; }

        /* ── Dark Hero ── */
        .contact-hero {
          background: linear-gradient(160deg, #020c06 0%, #041a0c 50%, #020c06 100%);
          position: relative; overflow: hidden;
          padding: 80px 32px 72px; text-align: center;
          border-bottom: 1px solid rgba(74,222,128,0.1);
        }
        .contact-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .ch-glow {
          position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(22,163,74,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-hero-inner {
          position: relative; z-index: 2; max-width: 640px; margin: 0 auto;
        }
        .contact-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(134,239,172,0.55);
          text-transform: uppercase; margin-bottom: 24px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
          animation: pdot 2s ease-in-out infinite;
        }
        @keyframes pdot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .contact-hero h1 {
          font-size: clamp(34px, 5vw, 56px); font-weight: 800;
          color: #fff; letter-spacing: -0.02em; line-height: 1.08; margin: 0 0 20px;
        }
        .contact-hero h1 span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .contact-hero p {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: rgba(134,239,172,0.6); line-height: 1.75; margin: 0;
        }

        /* ── Light section ── */
        .contact-light {
          background: #f8faf8; position: relative; overflow: hidden;
        }
        .contact-light::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }

        /* ── Body layout ── */
        .contact-body {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 64px 32px 80px;
          display: grid; grid-template-columns: 320px 1fr;
          gap: 28px; align-items: start;
        }

        /* ── Info cards ── */
        .info-stack { display: flex; flex-direction: column; gap: 14px; }
        .info-card {
          background: #fff;
          border: 1px solid rgba(22,163,74,0.13);
          border-radius: 8px; padding: 20px 22px;
          transition: all 0.25s ease; position: relative; overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .info-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #16a34a, transparent);
          transform: scaleX(0); transition: transform 0.3s ease;
        }
        .info-card:hover {
          border-color: rgba(22,163,74,0.3);
          box-shadow: 0 10px 32px rgba(0,0,0,0.08), 0 0 16px rgba(22,163,74,0.05);
          transform: translateY(-2px);
        }
        .info-card:hover::before { transform: scaleX(1); }
        .info-card-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
        }
        .info-icon-wrap {
          width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0;
          background: rgba(22,163,74,0.07);
          border: 1px solid rgba(22,163,74,0.18);
          display: flex; align-items: center; justify-content: center;
        }
        .info-card-title {
          font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.12em;
          color: #16a34a; text-transform: uppercase; font-weight: 500;
        }
        .info-primary { font-weight: 700; font-size: 14px; color: #0f2318; margin-bottom: 4px; }
        .info-secondary {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: #4b7060; line-height: 1.5;
        }
        .hours-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 5px 0; border-bottom: 1px solid rgba(22,163,74,0.07);
        }
        .hours-row:last-child { border-bottom: none; padding-bottom: 0; }
        .hours-label {
          font-family: 'DM Mono', monospace; font-size: 11px; color: #4b7060;
        }
        .hours-value {
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500; color: #16a34a;
        }

        /* ── Form card ── */
        .form-card {
          background: #fff;
          border: 1px solid rgba(22,163,74,0.13);
          border-radius: 8px; padding: 40px;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.05);
        }
        .form-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, #16a34a, transparent);
        }
        .form-card-header { margin-bottom: 32px; }
        .form-card-title {
          font-size: 22px; font-weight: 800; color: #0f2318;
          letter-spacing: -0.02em; margin: 0 0 8px;
        }
        .form-card-title span { color: #16a34a; }
        .form-card-desc {
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300;
          color: #4b7060; margin: 0; line-height: 1.6;
        }

        /* ── Form field overrides ── */
        .form-card input,
        .form-card textarea,
        .form-card select {
          font-family: 'DM Mono', monospace !important;
          font-size: 13px !important; font-weight: 300 !important;
          background: #f8faf8 !important;
          border: 1px solid rgba(22,163,74,0.2) !important;
          border-radius: 5px !important;
          color: #0f2318 !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
        }
        .form-card input::placeholder,
        .form-card textarea::placeholder {
          color: #9ca3af !important;
        }
        .form-card input:focus,
        .form-card textarea:focus,
        .form-card select:focus {
          border-color: rgba(22,163,74,0.5) !important;
          box-shadow: 0 0 0 3px rgba(22,163,74,0.08) !important;
          outline: none !important;
          background: #fff !important;
        }
        .form-card label {
          font-family: 'Syne', sans-serif !important;
          font-size: 13px !important; font-weight: 600 !important;
          color: #0f2318 !important;
        }

        /* ── Submit button ── */
        .form-card button[type="submit"],
        .form-card form button[type="submit"] {
          font-family: 'Syne', sans-serif !important;
          font-size: 14px !important; font-weight: 700 !important;
          letter-spacing: 0.06em !important;
          background: linear-gradient(135deg, #16a34a, #15803d) !important;
          color: #fff !important;
          border: 1px solid rgba(22,163,74,0.35) !important;
          border-radius: 4px !important;
          padding: 13px 32px !important;
          cursor: pointer !important;
          transition: all 0.25s ease !important;
          width: 100% !important;
          box-shadow: none !important;
          text-transform: none !important;
        }
        .form-card button[type="submit"]:hover,
        .form-card form button[type="submit"]:hover {
          background: linear-gradient(135deg, #15803d, #166534) !important;
          box-shadow: 0 8px 24px rgba(22,163,74,0.25) !important;
          transform: translateY(-1px) !important;
        }
        .form-card button[type="submit"]:disabled,
        .form-card form button[type="submit"]:disabled {
          opacity: 0.55 !important; cursor: not-allowed !important; transform: none !important;
        }
          

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .contact-body { grid-template-columns: 280px 1fr; gap: 20px; }
        }
        @media (max-width: 768px) {
          .contact-hero { padding: 56px 20px 48px; }
          .contact-body { grid-template-columns: 1fr; padding: 48px 20px 64px; }
          .form-card { padding: 28px 20px; }
        }
      `}</style>

      <div className="contact-page">

        {/* ── Dark Hero ── */}
        <section className="contact-hero">
          <div className="ch-glow" />
          <div className="contact-hero-inner">
            <div className="contact-eyebrow">
              <div className="eyebrow-dot" />
              Get in Touch
            </div>
            <h1>Contact <span>Our Team</span></h1>
         <p>
  Contact us for bulk mineral supply, export inquiries, and customized quotations.
  We provide reliable sourcing solutions for
  <strong> Bentonite, Nephrite, Fluorite, Limestone, Silica Sand, Himalayan Salt</strong>,
  and other minerals for global buyers. Our team responds within 24 hours.
</p>
          </div>
        </section>

        {/* ── Light body ── */}
        <div className="contact-light">
          <div className="contact-body">

            {/* Info sidebar */}
            <div className="info-stack">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div className="info-card" key={i}>
                    <div className="info-card-header">
                      <div className="info-icon-wrap">
                        <Icon size={16} color="#16a34a" />
                      </div>
                      <span className="info-card-title">{card.title}</span>
                    </div>
                    {card.lines ? (
                      <div style={{ marginTop: 4 }}>
                        {card.lines.map((row, j) => (
                          <div className="hours-row" key={j}>
                            <span className="hours-label">{row.label}</span>
                            <span className="hours-value">{row.value}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="info-primary">{card.primary}</div>
                        <div className="info-secondary">{card.secondary}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Form card */}
            <div className="form-card">
              <div className="form-card-header">
                <h2 className="form-card-title">Send Us a <span>Message</span></h2>
                <p className="form-card-desc">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>

      </div>
    </NavLayoutTwo>
  );
};