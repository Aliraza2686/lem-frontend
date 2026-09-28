import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Camera, Maximize2, MapPin } from "lucide-react";
import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo";
import { SEO } from "../components/atoms/SEO";
import { Lightbox } from "../components/blog/Lightbox";
import { GalleryCard } from "../components/gallery/GalleryCard";
import { GalleryCardSkeleton, GalleryEmpty, GalleryError } from "../components/gallery/GalleryStates";
import { getGallery } from "../lib/gallery";

const SKELETON_COUNT = 8;

// Column count per breakpoint (Tailwind md/xl). Two columns even on phones keeps it a wall of images.
const COLUMN_QUERIES = [
  ["(min-width: 1280px)", 4],
  ["(min-width: 768px)", 3],
];

const getColumnCount = () => {
  if (typeof window === "undefined") return 2;
  return COLUMN_QUERIES.find(([q]) => window.matchMedia(q).matches)?.[1] ?? 2;
};

function useColumnCount() {
  const [count, setCount] = useState(getColumnCount);
  useEffect(() => {
    const lists = COLUMN_QUERIES.map(([q]) => window.matchMedia(q));
    const update = () => setCount(getColumnCount());
    lists.forEach((l) => l.addEventListener("change", update));
    return () => lists.forEach((l) => l.removeEventListener("change", update));
  }, []);
  return count;
}

// Round-robin into columns: unlike CSS `columns`, this keeps displayOrder reading left-to-right.
const toColumns = (list, count) =>
  Array.from({ length: count }, (_, c) => list.map((item, i) => ({ item, i })).filter(({ i }) => i % count === c));

function Masonry({ items, columns, renderItem, ...listProps }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
      {toColumns(items, columns).map((col, c) => (
        <ul key={c} className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4 lg:gap-5" {...listProps}>
          {col.map(({ item, i }) => renderItem(item, i))}
        </ul>
      ))}
    </div>
  );
}

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const formatMonth = (iso) => (iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "—");

export function Gallery() {
  const reduced = useReducedMotion();
  const columns = useColumnCount();
  const [state, setState] = useState({ status: "loading", items: [], error: null });
  const [lightboxImage, setLightboxImage] = useState(null);

  const fetchGallery = useCallback(() => {
    setState((s) => ({ ...s, status: "loading", error: null }));
    getGallery()
      .then((res) => setState({ status: "success", items: res.items || [], error: null }))
      .catch((err) =>
        setState({
          status: "error",
          items: [],
          error: err.response?.data?.message || err.message || "Failed to load the gallery.",
        })
      );
  }, []);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  const openImage = useCallback(
    (item) => setLightboxImage({ src: item.imageUrl, title: item.title, description: item.description, eyebrow: "Gallery" }),
    []
  );
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  const { status, items, error } = state;
  const lastUpdated = items.reduce((latest, i) => (i.updatedAt > latest ? i.updatedAt : latest), "");

  return (
    <NavLayoutTwo>
      <SEO
        title="Gallery — Mineral Sourcing, Pakistan"
        description="Real images of Himalayan salt, industrial minerals, packaging and sourcing activities across Pakistan — authentic products from Lumina Earth Minerals."
        path="/workspace-images"
      />
      <style>{`@keyframes gallery-shimmer { 100% { transform: translateX(100%); } }`}</style>

      <div className="min-h-screen bg-[#f2ede3]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0d1f35] px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(800px 380px at 85% -10%, rgba(200,170,100,0.22), transparent 60%), radial-gradient(600px 320px at -5% 110%, rgba(79,140,200,0.14), transparent 60%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 70% 30%, black 20%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at 70% 30%, black 20%, transparent 70%)",
            }}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            className="relative mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1.4fr_1fr] 2xl:max-w-7xl"
          >
            <div>
              <motion.p
                variants={heroItem}
                custom={0}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8aa64]/30 bg-[#c8aa64]/10 px-3 py-1.5 font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.25em] text-[#e2c98a]"
              >
                <Camera className="size-3.5" /> Khewra &amp; Pakistan Mineral Resources
              </motion.p>
              <motion.h1
                variants={heroItem}
                custom={1}
                className="font-['Playfair_Display',serif] text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl"
              >
                Our <span className="italic font-normal text-[#e2c98a]">Gallery</span>
              </motion.h1>
              <motion.p variants={heroItem} custom={2} className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Discover real images of Himalayan salt, industrial minerals, packaging, and sourcing activities across
                Pakistan. Our gallery showcases authentic products and professional export preparation for global buyers.
              </motion.p>
              <motion.div variants={heroItem} custom={3} className="mt-8 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <Maximize2 className="size-3.5 text-white/80" /> Tap any image to enlarge
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <MapPin className="size-3.5 text-[#e2c98a]" /> Photographed at source
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={heroItem}
              custom={4}
              className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm"
            >
              {[
                { label: "Photographs", value: status === "success" ? items.length : "—" },
                { label: "Origin", value: "PK" },
                { label: "Updated", value: status === "success" && lastUpdated ? formatMonth(lastUpdated) : "—", small: true },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col justify-center bg-[#0d1f35]/80 px-3 py-5 text-center">
                  <div
                    className={`font-['Playfair_Display',serif] font-semibold text-white tabular-nums ${
                      stat.small ? "text-lg sm:text-xl" : "text-3xl"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 font-['DM_Mono',monospace] text-[9px] uppercase tracking-[0.2em] text-white/45">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Masonry grid */}
        <section className="relative mx-auto -mt-10 max-w-6xl px-4 pb-20 sm:px-6 md:-mt-14 2xl:max-w-7xl">
          {status === "loading" && (
            <Masonry
              items={Array.from({ length: SKELETON_COUNT }, (_, i) => i)}
              columns={columns}
              aria-busy="true"
              aria-label="Loading gallery"
              renderItem={(_, i) => <GalleryCardSkeleton key={i} index={i} />}
            />
          )}

          {status === "error" && (
            <div className="pt-24">
              <GalleryError message={error} onRetry={fetchGallery} />
            </div>
          )}

          {status === "success" && items.length === 0 && (
            <div className="pt-24">
              <GalleryEmpty />
            </div>
          )}

          {status === "success" && items.length > 0 && (
            <motion.div initial={reduced ? false : "hidden"} animate="visible">
              <Masonry
                items={items}
                columns={columns}
                renderItem={(item, i) => <GalleryCard key={item._id} item={item} index={i} onOpen={openImage} />}
              />
            </motion.div>
          )}

          {status === "success" && items.length > 0 && (
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0d1f35] px-6 py-8 sm:flex-row sm:items-center sm:px-10">
              <div>
                <h2 className="font-['Playfair_Display',serif] text-2xl font-semibold text-white">Looking for a specific product?</h2>
                <p className="mt-1 text-sm text-white/60">Our team can share detailed photos and samples of any grade we supply.</p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c8aa64] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d1f35] transition hover:bg-[#e2c98a]"
              >
                Request photos <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          )}
        </section>
      </div>

      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </NavLayoutTwo>
  );
}
