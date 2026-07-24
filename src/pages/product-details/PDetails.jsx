/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle, Download, FlaskConical, Package, Mountain,
  ChevronLeft, ChevronRight, X, FileText, Truck, ArrowLeft,
  Layers, Globe2, ZoomIn, Award,
} from 'lucide-react';
import { NavLayoutTwo } from '../../components/layouts/NavLayoutTwo';
import { productsTwo } from '../../lib/utills';
import { SEO } from '../../components/atoms/SEO';
import { canonicalFor } from '../../lib/seo';

/* ─────────────────────────────────────────────────────────────────────────
   PRODUCT DATA
   Each product can have multiple "variants" (categories/grades/colors).
   Replace image src values with real Cloudinary URLs.
───────────────────────────────────────────────────────────────────────── */


function Lightbox({ images, index, onClose, _onPrev, onNext }) {
  const item = images[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >

      <button
        className="absolute left-4 md:left-10 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="relative max-w-3xl w-full mx-16">
        {item?.is_video ? (
          <div>
            <video
              src={item.src}
              controls
              autoPlay
              loop
              muted
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg,#3f3a33,#7a6a52)";
              }}
            />
          </div>
        ) : (
          <img
            src={item.src}
            alt=""
            className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            onError={(e) => {
              e.target.style.background =
                "linear-gradient(135deg,#3f3a33,#7a6a52)";
            }}
          />
        )}

        <p className="text-center text-white/40 text-sm mt-3">
          {index + 1} / {images.length}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-10 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition"
      >
        <X className="w-5 h-5" />
      </button>

    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   PRODUCT DETAIL PAGE
───────────────────────────────────────────────────────────────────────── */
const PDetails = () => {
  const { id } = useParams();
  const product = useMemo(() => productsTwo.find((p) => p.id === id), [id]);

  const [activeVariantKey, setActiveVariantKey] = useState(product?.variants?.[0]?.key);
  const [lightbox, setLightbox] = useState(null); // { images, index }

  const activeVariant = product?.variants?.find((v) => v.key === activeVariantKey) || product?.variants?.[0];

  if (!product) {
    return (
      <NavLayoutTwo>
        <SEO
          title="Product Not Found"
          description="The mineral product you're looking for could not be found. Browse our full export catalog of Himalayan salt and industrial minerals."
          path={`/product-details/${id}`}
        />
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          <Mountain className="w-12 h-12 text-stone-300 mb-4" />
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Product not found</h1>
          <p className="text-stone-500 mb-6">We couldn&apos;t find a product matching that ID.</p>
          <Link to="/productsTwo" className="inline-flex items-center gap-2 bg-stone-800 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-stone-700 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>
      </NavLayoutTwo>
    );
  }

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }));
  const nextImg = () => setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % lb.images.length }));

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    category: product.category,
    image: activeVariant?.images?.filter((img) => !img.is_video).map((img) => img.src),
    brand: { "@type": "Brand", name: "Lumina Earth Minerals" },
    url: canonicalFor(`/product-details/${product.id}`),
  };

  return (
    <NavLayoutTwo>
      <SEO
        title={product.name}
        description={`${product.desc} Sourced from ${product.origin}. Request a bulk quotation and export samples from Lumina Earth Minerals.`}
        path={`/product-details/${product.id}`}
        image={activeVariant?.images?.find((img) => !img.is_video)?.src}
        jsonLd={productJsonLd}
      />
      {lightbox && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={closeLightbox} onPrev={prevImg} onNext={nextImg} />
      )}

      <div className="min-h-screen bg-[#FAF8F4]">

        {/* ── Breadcrumb ── */}
        <div className="max-w-6xl mx-auto px-6 pt-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800 transition font-medium">
            <ArrowLeft className="w-3.5 h-3.5" /> All Products
          </Link>
        </div>

        {/* ── Hero ── */}
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight mb-3">
                {product.name}
              </h1>
              <p className="flex items-center gap-1.5 text-stone-500 text-sm font-medium mb-4">
                <Globe2 className="w-4 h-4" /> {product.origin}
              </p>
              <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
                {product.desc}
              </p>
            </div>

            <div className="bg-[#0d1f35] text-white rounded-2xl px-6 py-5 min-w-[220px]">
              <Mountain className="w-6 h-6 text-amber-400 mb-2" />
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">Sourcing Note</p>
              <p className="text-sm font-medium leading-snug">{product.heroNote}</p>
            </div>
          </div>
        </div>

        {/* ── Variant Selector ── */}
        <div className="max-w-6xl mx-auto px-6 pb-4">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-amber-700" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-700">
              Available Categories / Grades
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((v) => (
              <button
                key={v.key}
                onClick={() => setActiveVariantKey(v.key)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 transition-all ${activeVariantKey === v.key
                  ? 'border-amber-700 bg-amber-50 shadow-sm'
                  : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
              >
                <span
                  className="w-5 h-5 rounded-full border border-black/10 flex-shrink-0"
                  style={{ background: v.swatch }}
                />
                <span className={`text-sm font-semibold ${activeVariantKey === v.key ? 'text-amber-900' : 'text-stone-700'}`}>
                  {v.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Active Variant Detail ── */}
        {activeVariant && (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">

                {/* Images */}
                <div className="p-6">
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 cursor-zoom-in group mb-3"
                    onClick={() => openLightbox(activeVariant.images, 0)}
                  >

                    <img
                      src={activeVariant.images[0]?.src}
                      alt={activeVariant.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = `linear-gradient(135deg, ${activeVariant.swatch}, #d9cdb8)`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  {activeVariant.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-2">
                      {activeVariant.images.slice(1).map((img, i) => (
                        <button
                          key={i}
                          onClick={() => openLightbox(activeVariant.images, i + 1)}
                          className="relative rounded-lg overflow-hidden aspect-square bg-stone-100"
                        >
                          {img?.is_video ? <div>
                            <video
                              autoPlay
                              loop
                              muted
                              src={img.src} alt=""
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = `linear-gradient(135deg, ${activeVariant.swatch}, #d9cdb8)`; }}
                            />
                          </div> :
                            <img
                              src={img.src} alt=""
                              className="w-full h-full object-cover"
                              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = `linear-gradient(135deg, ${activeVariant.swatch}, #d9cdb8)`; }}
                            />
                          }

                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Variant Info */}
                <div className="p-6 lg:py-8 lg:pr-8 border-t lg:border-t-0 lg:border-l border-stone-100 flex flex-col">
                  <h3 className="text-2xl font-extrabold text-stone-900 mb-2">{activeVariant.label}</h3>
                  <p className="text-stone-600 leading-relaxed mb-5">{activeVariant.desc}</p>

                  {(activeVariant.purity || activeVariant.quality) && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {activeVariant.purity && (
                        <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 inline-flex items-center gap-2 w-fit">
                          <FlaskConical className="w-4 h-4 text-amber-700 flex-shrink-0" />
                          <span className="text-sm font-bold text-amber-900">{activeVariant.purity}</span>
                        </div>
                      )}
                      {activeVariant.quality && (
                        <div className="bg-[#0d1f35]/5 border border-[#0d1f35]/15 rounded-xl px-4 py-3 inline-flex items-center gap-2 w-fit">
                          <Award className="w-4 h-4 text-[#0d1f35] flex-shrink-0" />
                          <span className="text-sm font-bold text-[#0d1f35]">{activeVariant.quality}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {activeVariant.highlights?.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {activeVariant.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                          <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Sample chip */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#0d1f35] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#132844] transition"
                    >
                      <Truck className="w-4 h-4" /> Request a Quotation
                    </Link>
                    <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-5 py-3 rounded-xl font-semibold text-sm">
                      <Package className="w-4 h-4" /> Samples available on request
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Applications + Packaging ── */}
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-700 mb-4">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span key={i} className="text-sm font-medium text-stone-700 bg-stone-100 px-3 py-1.5 rounded-lg">
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-700 mb-4">Packaging Options</h3>
              <ul className="space-y-2">
                {product.packaging.map((pack, i) => (
                  <li key={i} className="flex items-center text-sm text-stone-700">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                    {pack}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Lab Reports ── */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-[#0d1f35] rounded-3xl p-8 w-full">
            <div className="flex items-center gap-2 mb-1">
              <FlaskConical className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">Quality Assurance</h3>
            </div>
            <h2 className="text-2xl font-extrabold text-white mb-6">Download Lab Reports</h2>
            {product.labReports?.length > 0 ? <div><div className="grid sm:grid-cols-2 gap-3">
              {product.labReports.map((report, i) => (
                <a
                  key={i}
                  href={report.file}
                  download
                  rel="noreferrer"
                  target='_blank'
                  className="flex items-center justify-between gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm truncate">{report.name}</p>
                      <p className="text-stone-400 text-xs">{report.size}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-stone-400 group-hover:text-amber-400 flex-shrink-0 transition" />
                </a>
              )) }
            </div> </div> : (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
    <div className="max-w-md mx-auto">
      <FileText className="w-10 h-10 text-amber-400 mx-auto mb-4" />

      <h3 className="text-white font-semibold text-lg mb-2">
        Laboratory Reports Available on Request
      </h3>

      <p className="text-stone-400 text-sm leading-relaxed">
        Product-specific laboratory reports can be provided upon request.
        We can also supply samples for independent testing according to
        your required specifications and quality standards.
      </p>

      <p className="text-stone-400 text-sm mt-4 leading-relaxed">
        Contact us for customized product requirements, sample requests,
        technical data sheets, and laboratory analysis reports.
      </p>
    </div>
  </div>
)}
            
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-gradient-to-r from-amber-100 to-stone-100 rounded-3xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-2">
              Interested in {product.name}?
            </h2>
            <p className="text-stone-600 mb-6 max-w-xl mx-auto">
              Request a free sample, ask for a custom quotation, or speak with our export team about your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="bg-[#0d1f35] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#132844] transition">
                Request a Sample
              </Link>
              <Link to="/contact" className="bg-white text-stone-900 border border-stone-300 px-7 py-3 rounded-xl font-semibold hover:bg-stone-50 transition">
                Get a Quotation
              </Link>
            </div>
          </div>
        </div>

      </div>
    </NavLayoutTwo>
  );
};

export default PDetails;