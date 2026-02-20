import { useState } from "react";
import { ChevronDown, Package, Shield, Truck, Award, DollarSign, Tag, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    category: "Products & Services",
    icon: Package,
    questions: [
      {
        q: "What salt products does Lumina Earth Minerals offer?",
        a: "We supply export-quality Himalayan salt products including edible food-grade salts (pink, white, and black), salt grains in various sizes, animal salt lick blocks, salt lamps, and salt bricks. Products are available for bulk supply and private label packaging.",
      },
      {
        q: "Do you sell retail quantities?",
        a: "No, we work exclusively with B2B clients. However, we support smaller bulk orders for new brands and private label customers, starting from lower minimum quantities depending on the product.",
      },
      {
        q: "Where is your Himalayan salt sourced from?",
        a: "Our salt is sourced from the Himalayan salt region in Punjab, Pakistan, including the Khewra salt belt, and supplied through established local partners.",
      },
      {
        q: "What grain sizes are available for edible salt?",
        a: "We offer fine, medium, and coarse grain sizes suitable for cooking, seasoning, and food processing. Grain size availability may vary depending on order volume.",
      },
    ],
  },
  {
    category: "Private Labeling",
    icon: Tag,
    questions: [
      {
        q: "Do you offer private labeling services?",
        a: "Yes. We offer private label packaging services using plain pouches or bags with buyer-provided sticker or label designs. This service is ideal for brands starting or testing the market.",
      },
      {
        q: "What products are available for private labeling?",
        a: "Private labeling is available for edible salts, salt grains, animal salt lick blocks, salt lamps (packaging only), and salt bricks or tiles (outer packaging only).",
      },
      {
        q: "Do you provide printed packaging?",
        a: "Currently, private labeling is offered through plain packaging with sticker labeling. Printed packaging may be discussed for larger or repeat orders.",
      },
      {
        q: "Do you provide samples before order?",
        a: "No, samples are not provided for initial private label orders. Detailed product images, specifications, and packaging details are shared for confirmation before production.",
      },
    ],
  },
  {
    category: "Ordering & Pricing",
    icon: DollarSign,
    questions: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQ typically starts from 100 kg for edible salt products and varies by product type and packaging. Exact MOQ is confirmed during quotation.",
      },
      {
        q: "How do I request a quote?",
        a: "You can contact us with product type, required quantity, packaging preference, and destination country. We will respond with pricing and lead time details.",
      },
      {
        q: "How is pricing calculated?",
        a: "Pricing depends on product type, quantity, packaging, labeling requirements, and destination. Private labeling costs are calculated separately from product pricing.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept international bank transfers via SWIFT/BIC using our official business bank account details. We also support secure payments through Payoneer for international buyers. Complete payment instructions are shared during order confirmation.",
      },
    ],
  },
  {
    category: "Shipping & Logistics",
    icon: Truck,
    questions: [
      {
        q: "Which countries do you ship to?",
        a: "We support international shipments worldwide, subject to local import regulations and logistics feasibility.",
      },
      {
        q: "What shipping methods are available?",
        a: "Shipping options include air freight and sea freight (LCL or FCL), depending on order size and destination.",
      },
      {
        q: "How long does order processing take?",
        a: "Orders are typically packed and ready for dispatch within 7–15 working days after label and order confirmation.",
      },
      {
        q: "Do you provide export documentation?",
        a: "Yes. We provide standard export documents such as commercial invoice, packing list, and certificate of origin when required.",
      },
    ],
  },
  {
    category: "Quality & Compliance",
    icon: Shield,
    questions: [
      {
        q: "How do you ensure product quality?",
        a: "We ensure quality through careful sourcing, clean handling, accurate weight control, and proper packaging suitable for export.",
      },
      {
        q: "Do you provide laboratory testing or certifications?",
        a: "Third-party testing and certifications can be arranged upon buyer request, subject to additional cost and feasibility.",
      },
      {
        q: "Is your salt food-grade?",
        a: "Yes, edible salt supplied for food use is food-grade and suitable for culinary applications.",
      },
    ],
  },
  {
    category: "Company Information",
    icon: Award,
    questions: [
      {
        q: "What type of clients do you work with?",
        a: "We work with importers, distributors, wholesalers, and brand owners looking for reliable salt supply and private label packaging.",
      },
      {
        q: "Why choose Lumina Earth Minerals?",
        a: "Lumina Earth Minerals is based in Khewra, Pakistan, home to the world-famous Himalayan salt mines. Operating directly from the source allows us close access to authentic Himalayan salt, better supply control, and reliable quality for export and private label orders.",
      },
      {
        q: "How can I contact you?",
        a: "You can contact us via email, phone, or through the website contact form. We aim to respond to all inquiries promptly.",
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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        .faq-page {
          background: linear-gradient(160deg, #020c06 0%, #041a0c 50%, #020c06 100%);
          min-height: 100vh;
          font-family: 'Syne', sans-serif;
        }

        /* ── Hero ── */
        .faq-hero {
          position: relative;
          overflow: hidden;
          padding: 80px 32px 72px;
          text-align: center;
          border-bottom: 1px solid rgba(74,222,128,0.1);
        }
        .faq-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .faq-glow {
          position: absolute;
          top: -80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(22,163,74,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .faq-hero-inner {
          position: relative; z-index: 2;
          max-width: 680px; margin: 0 auto;
        }
        .faq-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(134,239,172,0.55);
          text-transform: uppercase; margin-bottom: 24px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80;
          animation: pdot 2s ease-in-out infinite;
        }
        @keyframes pdot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.7); }
        }
        .faq-hero h1 {
          font-size: clamp(34px, 5vw, 56px); font-weight: 800;
          color: #fff; letter-spacing: -0.02em; line-height: 1.08;
          margin: 0 0 20px;
        }
        .faq-hero h1 span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .faq-hero p {
          font-family: 'DM Mono', monospace; font-size: 14px; font-weight: 300;
          color: rgba(134,239,172,0.6); line-height: 1.75; margin: 0;
        }

        /* ── Search ── */
        .faq-search-wrap {
          max-width: 860px; margin: 0 auto; padding: 40px 32px 0;
        }
        .faq-search-box {
          position: relative;
        }
        .faq-search-box input {
          width: 100%; box-sizing: border-box;
          background: rgba(4,20,10,0.8);
          border: 1px solid rgba(74,222,128,0.18);
          border-radius: 6px;
          padding: 14px 48px 14px 18px;
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300;
          color: rgba(134,239,172,0.8);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-search-box input::placeholder { color: rgba(134,239,172,0.3); }
        .faq-search-box input:focus {
          border-color: rgba(74,222,128,0.45);
          box-shadow: 0 0 0 3px rgba(74,222,128,0.06);
        }
        .faq-search-icon {
          position: absolute; right: 16px; top: 50%; transform: translateY(-50%);
          color: rgba(74,222,128,0.4); pointer-events: none;
        }
        .search-count {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(134,239,172,0.4); letter-spacing: 0.08em; margin-top: 10px;
        }

        /* ── Category tabs ── */
        .faq-tabs-wrap {
          max-width: 860px; margin: 0 auto; padding: 20px 32px 0;
        }
        .faq-tabs {
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .faq-tab {
          font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.04em; padding: 6px 14px; border-radius: 3px;
          border: 1px solid rgba(74,222,128,0.15);
          background: transparent; color: rgba(134,239,172,0.45);
          cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; gap: 6px;
        }
        .faq-tab:hover { border-color: rgba(74,222,128,0.35); color: #4ade80; background: rgba(74,222,128,0.05); }
        .faq-tab.active { background: rgba(22,163,74,0.15); border-color: #16a34a; color: #4ade80; }

        /* ── FAQ list ── */
        .faq-list {
          max-width: 860px; margin: 0 auto; padding: 32px 32px 80px;
          display: flex; flex-direction: column; gap: 12px;
        }

        /* ── FAQ item ── */
        .faq-item {
          background: rgba(4,20,10,0.7);
          border: 1px solid rgba(74,222,128,0.1);
          border-radius: 8px; overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .faq-item:hover {
          border-color: rgba(74,222,128,0.22);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3), 0 0 16px rgba(22,163,74,0.05);
        }
        .faq-item.open {
          border-color: rgba(74,222,128,0.25);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(22,163,74,0.07);
        }
        .faq-trigger {
          width: 100%; background: transparent; border: none;
          padding: 20px 22px; text-align: left;
          display: flex; align-items: flex-start; gap: 14px;
          cursor: pointer; transition: background 0.2s ease;
        }
        .faq-trigger:hover { background: rgba(74,222,128,0.03); }
        .faq-icon-box {
          width: 36px; height: 36px; border-radius: 8px; flex-shrink: 0;
          background: rgba(22,163,74,0.1); border: 1px solid rgba(74,222,128,0.18);
          display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease;
        }
        .faq-item.open .faq-icon-box {
          background: rgba(22,163,74,0.18);
          box-shadow: 0 0 14px rgba(74,222,128,0.12);
        }
        .faq-trigger-content { flex: 1; min-width: 0; }
        .faq-cat-pill {
          display: inline-block;
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(74,222,128,0.55); margin-bottom: 6px;
        }
        .faq-question {
          font-size: 15px; font-weight: 700; color: #fff;
          letter-spacing: -0.01em; line-height: 1.35; margin: 0;
          text-align: left; padding-right: 8px;
        }
        .faq-chevron {
          flex-shrink: 0; margin-top: 2px;
          color: rgba(74,222,128,0.5);
          transition: transform 0.3s ease, color 0.2s ease;
        }
        .faq-item.open .faq-chevron { transform: rotate(180deg); color: #4ade80; }

        .faq-answer-wrap {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease;
          opacity: 0;
        }
        .faq-item.open .faq-answer-wrap {
          max-height: 400px; opacity: 1;
        }
        .faq-answer {
          padding: 0 22px 22px 72px;
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300;
          color: rgba(134,239,172,0.6); line-height: 1.75;
          border-top: 1px solid rgba(74,222,128,0.07);
          padding-top: 16px; margin: 0 22px 0 72px;
          padding-left: 0;
        }

        /* ── Empty state ── */
        .faq-empty {
          text-align: center; padding: 64px 32px;
          font-family: 'DM Mono', monospace;
          color: rgba(134,239,172,0.4); font-size: 14px;
        }
        .faq-empty button {
          margin-top: 14px; background: transparent;
          border: 1px solid rgba(74,222,128,0.25); color: #4ade80;
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600;
          padding: 8px 20px; border-radius: 4px; cursor: pointer;
          transition: all 0.2s ease;
        }
        .faq-empty button:hover { background: rgba(74,222,128,0.07); }

        /* ── View all btn ── */
        .faq-view-all {
          text-align: center; padding: 8px 32px 64px;
        }
        .faq-view-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white; border: 1px solid rgba(74,222,128,0.35);
          padding: 12px 28px; border-radius: 4px; text-decoration: none;
          transition: all 0.25s ease;
        }
        .faq-view-btn:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 0 24px rgba(74,222,128,0.3);
          transform: translateY(-1px);
        }
        .faq-view-count {
          font-family: 'DM Mono', monospace; font-size: 11px;
          color: rgba(134,239,172,0.35); margin-top: 12px; letter-spacing: 0.08em;
        }

        /* ── CTA ── */
        .faq-cta {
          max-width: 860px; margin: 0 auto 80px;
          padding: 0 32px;
        }
        .faq-cta-inner {
          background: rgba(4,20,10,0.8);
          border: 1px solid rgba(74,222,128,0.15);
          border-radius: 8px; padding: 48px 40px; text-align: center;
          position: relative; overflow: hidden;
        }
        .faq-cta-inner::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(74,222,128,0.5), transparent);
        }
        .faq-cta-inner h3 {
          font-size: 24px; font-weight: 800; color: #fff;
          letter-spacing: -0.02em; margin: 0 0 12px;
        }
        .faq-cta-inner h3 span {
          background: linear-gradient(135deg, #4ade80, #86efac);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .faq-cta-inner p {
          font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 300;
          color: rgba(134,239,172,0.5); margin: 0 0 28px; line-height: 1.7;
        }
        .faq-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 0.06em;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white; border: 1px solid rgba(74,222,128,0.35);
          padding: 13px 32px; border-radius: 4px; text-decoration: none;
          transition: all 0.25s ease;
        }
        .faq-cta-btn:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 0 24px rgba(74,222,128,0.3);
          transform: translateY(-1px);
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .faq-hero { padding: 56px 20px 48px; }
          .faq-search-wrap, .faq-tabs-wrap, .faq-list, .faq-cta { padding-left: 20px; padding-right: 20px; }
          .faq-answer { padding-left: 0; margin-left: 50px; }
          .faq-cta-inner { padding: 32px 24px; }
        }
      `}</style>

      <div className="faq-page">

        {/* ── Hero ── */}
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

        {/* ── Search (full page only) ── */}
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

        {/* ── Category tabs (full page only) ── */}
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

        {/* ── FAQ items ── */}
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
                <div
                  key={item.index}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => setOpenIndex(isOpen ? null : item.index)}
                  >
                    <div className="faq-icon-box">
                      <Icon size={16} color="#4ade80" />
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

        {/* ── View All (home only) ── */}
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

        {/* ── CTA (full page only) ── */}
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
    </>
  );
}