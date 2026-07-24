/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utills";
import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo";
import { SEO } from "../components/atoms/SEO";

const galleryImages = [
  { id: 1,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749547014/368171d2-f64c-42c5-9e7d-a4dea0a4b8c0_lk6jrz.jpg",  alt: "Workplace",              colSpan: 2, rowSpan: 2 },
  { id: 2,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945558/Himalayan_Rock_Salt_Candle_Holder__is_available_s6uszh.jpg", alt: "Salt Candle Holder",   colSpan: 1, rowSpan: 2 },
  { id: 3,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945557/Himalayan_Salt_-_Pink_Warmer__A_genuine_zomxzr.jpg",         alt: "Himalayan Salt Warmer",colSpan: 1, rowSpan: 1 },
  { id: 4,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945557/Himalayan_Salt_-_Pink_Warmer__A_genuine_zomxzr.jpg",         alt: "Salt Table Lamp",     colSpan: 2, rowSpan: 1 },
  { id: 5,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg",           alt: "Salt Lamp Variety",   colSpan: 1, rowSpan: 1 },
  { id: 6,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545146/About_this_item_Home_Decor__home_decor_items_such_egksqb.jpg",alt: "Natural Salt Lamp",   colSpan: 1, rowSpan: 2 },
  { id: 7,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945558/HSD_Pink_Himalayan_Salt_Rocks_1Kg___Food_Grade_xx7muw.jpg",   alt: "Raw Pink Himalayan Salt", colSpan: 2, rowSpan: 1 },
  { id: 8,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945081/7ccf29e1-b647-4a76-8fb4-b24aa23b964f_jwhnxt.jpg",            alt: "Himalayan Salt Mine", colSpan: 1, rowSpan: 1 },
  { id: 9,  src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810414/received_867262264765142_atqi8q.jpg",                         alt: "Salt Bricks",         colSpan: 1, rowSpan: 2 },
  { id: 10, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810423/received_3613438468931285_xzarwb.jpg",                        alt: "Edible Himalayan Salt",colSpan: 2, rowSpan: 1 },
  { id: 11, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810416/received_1278297286201813_sn1b82.jpg",                        alt: "Salt Rock Presentation",colSpan:1, rowSpan: 1 },
  { id: 12, src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810414/received_803925301281025_zt56ty.jpg",                         alt: "Pink Himalayan Salt", colSpan: 2, rowSpan: 2 },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState({});

  const handleLoad = (id) => setIsLoaded((prev) => ({ ...prev, [id]: true }));

  const getSpan = (col, row) =>
    `${col === 2 ? "md:col-span-2" : "col-span-1"} ${row === 2 ? "row-span-2" : "row-span-1"}`;

  return (
    <NavLayoutTwo>
      <SEO
        title="Gallery"
        description="Real images of Himalayan salt, industrial minerals, packaging and sourcing activities across Pakistan — authentic products and export preparation from Lumina Earth Minerals."
        path="/workspace-images"
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&family=Source+Sans+3:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');

        .gallery-page { font-family: 'Source Sans 3', sans-serif; }

        /* ── Dark Hero ── */
        .gallery-hero {
          background: linear-gradient(160deg, #051223 0%, #0d1f35 50%, #051223 100%);
          position: relative; overflow: hidden;
          padding: 80px 32px 72px; text-align: center;
          border-bottom: 1px solid rgba(200,170,100,0.1);
        }
        .gallery-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(200,170,100,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,170,100,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .gallery-glow {
          position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(168,137,64,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .gallery-hero-inner { position: relative; z-index: 2; max-width: 660px; margin: 0 auto; }
        .gallery-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(220,200,150,0.55);
          text-transform: uppercase; margin-bottom: 24px;
        }
        .gallery-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #c8aa64;
          animation: gdot 2s ease-in-out infinite;
        }
        @keyframes gdot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.7);} }
        .gallery-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 5vw, 56px); font-weight: 800;
          color: #fff; letter-spacing: -0.02em; line-height: 1.08; margin: 0 0 20px;
        }
        .gallery-hero h1 span {
          background: linear-gradient(135deg, #c8aa64, #d4ba78);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .gallery-hero p {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: rgba(220,200,150,0.6); line-height: 1.75; margin: 0;
        }

        /* ── Light section ── */
        .gallery-light {
          background: #f2ede3; position: relative; overflow: hidden;
        }
        .gallery-light::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(168,137,64,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,137,64,0.05) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }

        /* ── Grid section ── */
        .gallery-section {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto;
          padding: 56px 32px 80px;
        }

        /* ── Grid items ── */
        .gallery-btn {
          position: relative; overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(168,137,64,0.15);
          cursor: pointer; background: #ece5d6;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        }
        .gallery-btn:hover {
          border-color: rgba(168,137,64,0.4);
          box-shadow: 0 16px 48px rgba(0,0,0,0.14), 0 0 20px rgba(168,137,64,0.07);
          transform: scale(1.015);
          z-index: 5;
        }
        .gallery-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(168,137,64,0.2);
        }
        .gallery-btn img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
          filter: brightness(0.95) saturate(1.02);
        }
        .gallery-btn:hover img { transform: scale(1.08); filter: brightness(1) saturate(1.05); }

        /* overlay */
        .gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(13,31,53,0.45) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.3s ease;
        }
        .gallery-btn:hover .gallery-overlay { opacity: 1; }

        /* corner accents — green appropriate for light */
        .g-corner {
          position: absolute; width: 14px; height: 14px;
          opacity: 0; transition: opacity 0.3s ease; z-index: 5;
        }
        .gallery-btn:hover .g-corner { opacity: 1; }
        .g-corner-tl { top: 7px; left: 7px; border-top: 2px solid #a88940; border-left: 2px solid #a88940; border-radius: 3px 0 0 0; }
        .g-corner-tr { top: 7px; right: 7px; border-top: 2px solid #a88940; border-right: 2px solid #a88940; border-radius: 0 3px 0 0; }
        .g-corner-bl { bottom: 7px; left: 7px; border-bottom: 2px solid #a88940; border-left: 2px solid #a88940; border-radius: 0 0 0 3px; }
        .g-corner-br { bottom: 7px; right: 7px; border-bottom: 2px solid #a88940; border-right: 2px solid #a88940; border-radius: 0 0 3px 0; }

        /* caption */
        .gallery-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 12px 14px;
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 400;
          letter-spacing: 0.08em; color: rgba(255,255,255,0.9);
          transform: translateY(100%); transition: transform 0.3s ease; z-index: 6;
        }
        .gallery-btn:hover .gallery-caption { transform: translateY(0); }

        /* ── Lightbox ── (stays dark — correct choice for modal overlay) */
        .lightbox {
          position: fixed; inset: 0; z-index: 200;
          display: flex; align-items: center; justify-content: center;
          background: rgba(5,18,35,0.96); backdrop-filter: blur(20px);
          animation: lbfade 0.25s ease forwards;
        }
        @keyframes lbfade { from{opacity:0;} to{opacity:1;} }
        .lightbox-close {
          position: absolute; top: 20px; right: 20px; z-index: 210;
          width: 40px; height: 40px; border-radius: 8px;
          background: rgba(10,24,40,0.9); border: 1px solid rgba(200,170,100,0.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: rgba(220,200,150,0.7); transition: all 0.2s ease;
        }
        .lightbox-close:hover {
          background: rgba(168,137,64,0.15); border-color: rgba(200,170,100,0.5); color: #c8aa64;
        }
        .lightbox-img-wrap {
          position: relative; max-width: 90vw; max-height: 88vh;
          display: flex; align-items: center; justify-content: center;
          animation: lbzoom 0.3s ease forwards;
        }
        @keyframes lbzoom { from{opacity:0;transform:scale(0.95);} to{opacity:1;transform:scale(1);} }
        .lightbox-img-wrap img {
          max-width: 90vw; max-height: 88vh; object-fit: contain; border-radius: 6px;
          border: 1px solid rgba(200,170,100,0.12);
          box-shadow: 0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(168,137,64,0.08);
        }
        .lb-corner { position: absolute; width: 20px; height: 20px; z-index: 5; }
        .lb-corner-tl { top:-1px; left:-1px; border-top:2px solid #c8aa64; border-left:2px solid #c8aa64; border-radius:5px 0 0 0; }
        .lb-corner-tr { top:-1px; right:-1px; border-top:2px solid #c8aa64; border-right:2px solid #c8aa64; border-radius:0 5px 0 0; }
        .lb-corner-bl { bottom:-1px; left:-1px; border-bottom:2px solid #c8aa64; border-left:2px solid #c8aa64; border-radius:0 0 0 5px; }
        .lb-corner-br { bottom:-1px; right:-1px; border-bottom:2px solid #c8aa64; border-right:2px solid #c8aa64; border-radius:0 0 5px 0; }
        .lightbox-caption {
          position: absolute; bottom: -44px; left: 50%; transform: translateX(-50%);
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 400;
          letter-spacing: 0.1em; color: rgba(220,200,150,0.5); white-space: nowrap;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .gallery-hero { padding: 56px 20px 48px; }
          .gallery-section { padding: 40px 16px 60px; }
        }
      `}</style>

      <div className="gallery-page">

        {/* ── Dark Hero ── */}
        <header className="gallery-hero">
          <div className="gallery-glow" />
          <div className="gallery-hero-inner">
          <div className="gallery-eyebrow">
  <div className="gallery-eyebrow-dot" />
  Khewra & Pakistan Mineral Resources
</div>

<h1>Our <span>Gallery</span></h1>

<p>
  Discover real images of Himalayan salt, industrial minerals, packaging, and sourcing activities across Pakistan.
  Our gallery showcases authentic products and professional export preparation for global buyers.
</p>
          </div>
        </header>

        {/* ── Light grid ── */}
        <div className="gallery-light">
          <section className="gallery-section">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
              style={{ gridAutoRows: "160px", gridAutoFlow: "dense" }}
            >
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    "gallery-btn",
                    getSpan(image.colSpan, image.rowSpan),
                    isLoaded[image.id] ? "opacity-100" : "opacity-0"
                  )}
                  style={{ transition: `opacity 0.5s ease ${index * 50}ms` }}
                  aria-label={`View ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} onLoad={() => handleLoad(image.id)} />
                  <div className="gallery-overlay" />
                  <div className="g-corner g-corner-tl" />
                  <div className="g-corner g-corner-tr" />
                  <div className="g-corner g-corner-bl" />
                  <div className="g-corner g-corner-br" />
                  <div className="gallery-caption">{image.alt}</div>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* ── Lightbox (always dark — modal context) ── */}
        {selectedImage && (
          <div
            className="lightbox"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${selectedImage.alt}`}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close">
              <X size={18} />
            </button>
            <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
              <div className="lb-corner lb-corner-tl" />
              <div className="lb-corner lb-corner-tr" />
              <div className="lb-corner lb-corner-bl" />
              <div className="lb-corner lb-corner-br" />
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="lightbox-caption">{selectedImage.alt}</div>
            </div>
          </div>
        )}

      </div>
    </NavLayoutTwo>
  );
}