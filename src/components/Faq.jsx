import { useState } from "react";
import { ChevronDown, Package, Shield, Award, DollarSign, Tag, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const faqCategories = [
  {
    category: "Products & Services",
    icon: Package,
    questions: [
      {
        q: "What products do you export?",
        a: "We export Himalayan salt and a range of industrial and natural minerals sourced from Pakistan. Contact us for our latest product catalog.",
      },
      {
        q: "Can you supply bulk quantities?",
        a: "Yes. We specialize in bulk mineral exports for importers, distributors, wholesalers, and manufacturers worldwide.",
      },
      {
        q: "Do you offer custom packaging?",
        a: "Yes. We provide flexible packaging options based on customer requirements and market needs.",
      },
    ],
  },
  {
    category: "Private Labeling",
    icon: Tag,
    questions: [
      {
        q: "Do you offer private labeling?",
        a: "Yes. We can provide private label and custom-branded packaging for selected products.",
      },
      {
        q: "Can I use my own brand name and design?",
        a: "Absolutely. We can package products using your branding and labeling requirements.",
      },
    ],
  },
  {
    category: "Ordering & Pricing",
    icon: DollarSign,
    questions: [
      {
        q: "What is your minimum order quantity?",
        a: "Minimum order quantities vary by product and packaging type. Contact us for details.",
      },
      {
        q: "How can I get a quotation?",
        a: "Send us the product name, quantity required, packaging preference, and destination country, and we'll provide a quote.",
      },
      {
        q: "How is pricing determined?",
        a: "Pricing depends on the product, quantity, packaging requirements, and shipping destination.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept international bank transfers through our official business banking channels.",
      },
    ],
  },
  {
    category: "Quality & Compliance",
    icon: Shield,
    questions: [
      {
        q: "How do you ensure product quality?",
        a: "We work with trusted suppliers and follow quality control procedures throughout sourcing, processing, and packaging.",
      },
      {
        q: "Can you provide testing reports or certifications?",
        a: "Yes. Product testing reports and certifications can be arranged based on buyer requirements.",
      },
      {
        q: "Do you support export documentation?",
        a: "Yes. We provide the necessary export documentation required for international shipments.",
      },
    ],
  },
  {
    category: "Company Information",
    icon: Award,
    questions: [
      {
        q: "Who do you work with?",
        a: "We work with importers, distributors, wholesalers, retailers, and manufacturers around the world.",
      },
      {
        q: "Why choose Lumina Earth Minerals?",
        a: "We offer reliable sourcing, competitive pricing, quality-focused supply, and professional export support for international buyers.",
      },
      {
        q: "How can I contact you?",
        a: "You can reach us through our website, email, WhatsApp, or phone. We aim to respond quickly to all inquiries.",
      },
    ],
  },
];

export default function FAQ({ isHome = false }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const allQuestions = faqCategories.flatMap((cat, catIdx) =>
    cat.questions.map((q, qIdx) => ({
      ...q,
      category: cat.category,
      icon: cat.icon,
      index: `${catIdx}-${qIdx}`,
    }))
  );

  const filtered = allQuestions.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const displayed = isHome ? filtered.slice(0, 5) : filtered;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&family=Source+Sans+3:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');

        .faq-page { font-family: 'Source Sans 3', sans-serif; }

        /* ── Dark Hero ── */
        .faq-hero {
          background: ${isHome ? "white" : "linear-gradient(160deg, #051223 0%, #0d1f35 50%, #051223 100%)"} ;
          position: relative; overflow: hidden;
          padding: 80px 32px 72px; text-align: center;
          border-bottom: 1px solid rgba(200,170,100,0.1);
        }
        .faq-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(200,170,100,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,170,100,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .faq-glow {
          position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(168,137,64,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .faq-hero-inner { position: relative; z-index: 2; max-width: 680px; margin: 0 auto; }
        .faq-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(220,200,150,0.55);
          text-transform: uppercase; margin-bottom: 24px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #c8aa64;
          animation: pdot 2s ease-in-out infinite;
        }
        @keyframes pdot { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.7);} }
        .faq-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 5vw, 56px); font-weight: 800;
          color:${isHome ? "#333" : "#fff"}; letter-spacing: -0.02em; line-height: 1.08; margin: 0 0 20px;
        }
        .faq-hero h1 span {
          background: linear-gradient(135deg, #c8aa64, #d4ba78);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .faq-hero p {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color:${isHome ? "#333" : "rgba(220,200,150,0.6)"}; line-height: 1.75; margin: 0;
        }

        /* ── Light section ── */
        .faq-light {
          background: #f2ede3; position: relative; overflow: hidden;
        }
        .faq-light::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(168,137,64,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,137,64,0.05) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }

        /* ── Search ── */
        .faq-search-wrap {
          position: relative; z-index: 2;
          max-width: 860px; margin: 0 auto; padding: 40px 32px 0;
        }
        .faq-search-box { position: relative; }
        .faq-search-box input {
          width: 100%; box-sizing: border-box;
          background: #fff;
          border: 1px solid rgba(168,137,64,0.2);
          border-radius: 6px; padding: 14px 48px 14px 18px;
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300;
          color: #0d1f35; outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .faq-search-box input::placeholder { color: #9ca3af; }
        .faq-search-box input:focus {
          border-color: rgba(168,137,64,0.5);
          box-shadow: 0 0 0 3px rgba(168,137,64,0.08);
        }
        .faq-search-icon {
          position: absolute; right: 16px; top: 50%; transform: translateY(-50%);
          color: #4a5a4a; pointer-events: none;
        }
        .search-count {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: #4a5a4a; letter-spacing: 0.08em; margin-top: 10px;
        }

        /* ── Category tabs ── */
        .faq-tabs-wrap {
          position: relative; z-index: 2;
          max-width: 860px; margin: 0 auto; padding: 20px 32px 0;
        }
        .faq-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .faq-tab {
          font-family: 'Source Sans 3', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.04em; padding: 6px 14px; border-radius: 3px;
          border: 1px solid rgba(168,137,64,0.2); background: #fff;
          color: #4a5a4a; cursor: pointer; transition: all 0.2s ease;
        }
        .faq-tab:hover { border-color: rgba(168,137,64,0.45); color: #a88940; background: rgba(168,137,64,0.04); }
        .faq-tab.active { background: rgba(168,137,64,0.1); border-color: #a88940; color: #a88940; }

        /* ── FAQ list ── */
        .faq-list {
          position: relative; z-index: 2;
          max-width: 860px; margin: 0 auto; padding: 32px 32px 64px;
          display: flex; flex-direction: column; gap: 10px;
        }

        /* ── FAQ item ── */
        .faq-item {
          background: #fff;
          border: 1px solid rgba(168,137,64,0.13);
          border-radius: 8px; overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
        }
        .faq-item:hover {
          border-color: rgba(168,137,64,0.28);
          box-shadow: 0 8px 28px rgba(0,0,0,0.08), 0 0 12px rgba(168,137,64,0.04);
        }
        .faq-item.open {
          border-color: rgba(168,137,64,0.35);
          box-shadow: 0 12px 36px rgba(0,0,0,0.1), 0 0 16px rgba(168,137,64,0.06);
        }

        .faq-trigger {
          width: 100%; background: transparent; border: none;
          padding: 20px 22px; text-align: left;
          display: flex; align-items: flex-start; gap: 14px;
          cursor: pointer; transition: background 0.2s ease;
        }
        .faq-trigger:hover { background: rgba(168,137,64,0.02); }

        .faq-icon-box {
          width: 36px; height: 36px; border-radius: 8px; flex-shrink: 0;
          background: rgba(168,137,64,0.07); border: 1px solid rgba(168,137,64,0.18);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease;
        }
        .faq-item.open .faq-icon-box {
          background: rgba(168,137,64,0.13);
          box-shadow: 0 0 12px rgba(168,137,64,0.15);
        }

        .faq-trigger-content { flex: 1; min-width: 0; }
        .faq-cat-pill {
          display: inline-block;
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #a88940; margin-bottom: 6px;
        }
        .faq-question {
          font-size: 15px; font-weight: 700; color: #0d1f35;
          letter-spacing: -0.01em; line-height: 1.35; margin: 0;
          text-align: left; padding-right: 8px;
        }

        .faq-chevron {
          flex-shrink: 0; margin-top: 2px; color: #4a5a4a;
          transition: transform 0.3s ease, color 0.2s ease;
        }
        .faq-item.open .faq-chevron { transform: rotate(180deg); color: #a88940; }

        .faq-answer-wrap {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .faq-item.open .faq-answer-wrap { max-height: 400px; opacity: 1; }

        .faq-answer {
          margin: 0 22px 22px 72px;
          padding-top: 16px;
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300;
          color: #4a5a4a; line-height: 1.75;
          border-top: 1px solid rgba(168,137,64,0.08);
        }

        /* ── Empty state ── */
        .faq-empty {
          text-align: center; padding: 64px 32px;
          font-family: 'DM Mono', monospace; color: #4a5a4a; font-size: 14px;
        }
        .faq-empty button {
          margin-top: 14px; background: transparent;
          border: 1px solid rgba(168,137,64,0.3); color: #a88940;
          font-family: 'Source Sans 3', sans-serif; font-size: 13px; font-weight: 600;
          padding: 8px 20px; border-radius: 4px; cursor: pointer;
          transition: all 0.2s ease;
        }
        .faq-empty button:hover { background: rgba(168,137,64,0.06); }

        /* ── View all (home only) ── */
        .faq-view-all {
          position: relative; z-index: 2;
          text-align: center; padding: 8px 32px 64px;
        }
        .faq-view-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Source Sans 3', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #a88940, #8a6f3a);
          color: white; border: 1px solid rgba(168,137,64,0.35);
          padding: 12px 28px; border-radius: 4px; text-decoration: none;
          transition: all 0.25s ease;
        }
        .faq-view-btn:hover {
          background: linear-gradient(135deg, #8a6f3a, #6b5530);
          box-shadow: 0 8px 24px rgba(168,137,64,0.25);
          transform: translateY(-1px);
        }
        .faq-view-count {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: #4a5a4a; margin-top: 12px; letter-spacing: 0.08em;
        }

        /* ── CTA (full page only) ── */
        .faq-cta {
          position: relative; z-index: 2;
          max-width: 860px; margin: 0 auto; padding: 0 32px 80px;
        }
        .faq-cta-inner {
          background: #fff;
          border: 1px solid rgba(168,137,64,0.15);
          border-radius: 8px; padding: 48px 40px; text-align: center;
          position: relative; overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .faq-cta-inner::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, #a88940, transparent);
        }
        .faq-cta-inner h3 {
          font-family: 'Playfair Display', serif;
          font-size: 24px; font-weight: 800; color: #0d1f35;
          letter-spacing: -0.02em; margin: 0 0 12px;
        }
        .faq-cta-inner h3 span { color: #a88940; }
        .faq-cta-inner p {
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300;
          color: #4a5a4a; margin: 0 0 28px; line-height: 1.7;
        }
        .faq-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Source Sans 3', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #a88940, #8a6f3a);
          color: white; border: 1px solid rgba(168,137,64,0.35);
          padding: 13px 32px; border-radius: 4px; text-decoration: none;
          transition: all 0.25s ease;
        }
        .faq-cta-btn:hover {
          background: linear-gradient(135deg, #8a6f3a, #6b5530);
          box-shadow: 0 8px 24px rgba(168,137,64,0.25);
          transform: translateY(-1px);
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .faq-hero { padding: 56px 20px 48px; }
          .faq-search-wrap, .faq-tabs-wrap, .faq-list, .faq-cta { padding-left: 20px; padding-right: 20px; }
          .faq-answer { margin-left: 50px; }
          .faq-cta-inner { padding: 32px 24px; }
        }
      `}</style>

      <div className="faq-page">

        {/* ── Dark Hero ── */}
        <section className="faq-hero">
          <div className="faq-glow" />
          <div className="faq-hero-inner">
            <div className="faq-eyebrow">
              <div className="eyebrow-dot" />
              Knowledge Base
            </div>
            <h1>Frequently Asked <span>Questions</span></h1>
            <p>
              Everything you need to know about our Himalayan salt products,
              bulk ordering, private labeling, and global shipping.
            </p>
          </div>
        </section>

        {/* ── Light section ── */}
        <div className="faq-light">

          {/* Search (full page only) */}
          {!isHome && (
            <div className="faq-search-wrap">
              <div className="faq-search-box">
                <input
                  type="text"
                  placeholder="Search questions… e.g. 'shipping', 'MOQ', 'private label'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={16} className="faq-search-icon" />
              </div>
              {searchQuery && (
                <p className="search-count">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
                </p>
              )}
            </div>
          )}

          {/* Category tabs (full page only) */}
          {!isHome && (
            <div className="faq-tabs-wrap">
              <div className="faq-tabs">
                {["All", ...faqCategories.map((c) => c.category)].map((cat) => (
                  <button
                    key={cat}
                    className={`faq-tab ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQ items */}
          <div className="faq-list">
            {displayed.length === 0 ? (
              <div className="faq-empty">
                <p>No questions match your search.</p>
                <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                  Clear filters
                </button>
              </div>
            ) : (
              displayed.map((item) => {
                const Icon = item.icon;
                const isOpen = openIndex === item.index;
                return (
                  <div key={item.index} className={`faq-item ${isOpen ? "open" : ""}`}>
                    <button
                      className="faq-trigger"
                      onClick={() => setOpenIndex(isOpen ? null : item.index)}
                    >
                      <div className="faq-icon-box">
                        <Icon size={16} color="#a88940" />
                      </div>
                      <div className="faq-trigger-content">
                        <div className="faq-cat-pill">{item.category}</div>
                        <p className="faq-question">{item.q}</p>
                      </div>
                      <ChevronDown size={18} className="faq-chevron" />
                    </button>
                    <div className="faq-answer-wrap">
                      <p className="faq-answer">{item.a}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* View All (home only) */}
          {isHome && (
            <div className="faq-view-all">
              <Link to="/faq" className="faq-view-btn">
                View All FAQs
                <ArrowRight size={16} />
              </Link>
              <p className="faq-view-count">
                Showing {displayed.length} of {allQuestions.length} questions
              </p>
            </div>
          )}

          {/* CTA (full page only) */}
          {!isHome && (
            <div className="faq-cta">
              <div className="faq-cta-inner">
                <h3>Still Have <span>Questions?</span></h3>
                <p>
                  Our team is ready to assist you with your bulk Himalayan salt requirements.
                  Get in touch and we&apos;ll respond within 24 hours.
                </p>
                <Link to="/contact" className="faq-cta-btn">
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}