import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, BadgeCheck, Maximize2 } from "lucide-react";
import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo";
import { SEO } from "../components/atoms/SEO";
import { Lightbox } from "../components/blog/Lightbox";
import { CertificationCard } from "../components/certifications/CertificationCard";
import {
  CertificationCardSkeleton,
  CertificationsEmpty,
  CertificationsError,
} from "../components/certifications/CertificationStates";
import { getCertifications, downloadCertification } from "../lib/certifications";

const SKELETON_COUNT = 6;
const GRID = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-8";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export const Certifications = () => {
  const reduced = useReducedMotion();
  const [state, setState] = useState({ status: "loading", items: [], error: null });
  const [lightboxImage, setLightboxImage] = useState(null);

  const fetchCertifications = useCallback(() => {
    setState((s) => ({ ...s, status: "loading", error: null }));
    getCertifications()
      .then((res) => setState({ status: "success", items: res.certifications || [], error: null }))
      .catch((err) =>
        setState({
          status: "error",
          items: [],
          error: err.response?.data?.message || err.message || "Failed to load certifications.",
        })
      );
  }, []);

  useEffect(() => {
    fetchCertifications();
  }, [fetchCertifications]);

  const openImage = useCallback(
    (cert) => setLightboxImage({ src: cert.fileUrl, title: cert.title, description: cert.description }),
    []
  );
  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  const { status, items, error } = state;
  const imageCount = items.filter((c) => c.fileType === "image").length;
  const fileCount = items.length - imageCount;

  return (
    <NavLayoutTwo>
      <SEO
        title="Certifications & Accreditations"
        description="You can view our available documents here or request additional documents related to our products and operations."
        path="/certifications"
      />
      <style>{`@keyframes cert-shimmer { 100% { transform: translateX(100%); } }`}</style>

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
            className="relative mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-[1.4fr_1fr]"
          >
            <div>
              <motion.p
                variants={heroItem}
                custom={0}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8aa64]/30 bg-[#c8aa64]/10 px-3 py-1.5 font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.25em] text-[#e2c98a]"
              >
                <BadgeCheck className="size-3.5" /> Quality &amp; Compliance
              </motion.p>
              <motion.h1
                variants={heroItem}
                custom={1}
                className="font-['Playfair_Display',serif] text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl"
              >
                Certifications <span className="italic font-normal text-[#e2c98a]">&amp;</span>
                <br className="hidden sm:block" /> Accreditations
              </motion.h1>
              <motion.p variants={heroItem} custom={2} className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
               You can view our available documents here or request additional documents related to our products and operations.

              </motion.p>
              <motion.div variants={heroItem} custom={3} className="mt-8 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <Maximize2 className="size-3.5 text-white/80" /> Images open in a viewer
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <ArrowDown className="size-3.5 text-[#e2c98a]" /> Documents download directly
                </span>
              </motion.div>
            </div>

            <motion.div variants={heroItem} custom={4} className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm">
              {[
                { label: "On record", value: status === "success" ? items.length : "—" },
                { label: "Images", value: status === "success" ? imageCount : "—" },
                { label: "Documents", value: status === "success" ? fileCount : "—" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0d1f35]/80 px-4 py-5 text-center">
                  <div className="font-['Playfair_Display',serif] text-3xl font-semibold text-white tabular-nums">{stat.value}</div>
                  <div className="mt-1 font-['DM_Mono',monospace] text-[9px] uppercase tracking-[0.2em] text-white/45">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Grid */}
        <section className="relative mx-auto -mt-10 max-w-6xl px-4 pb-20 sm:px-6 md:-mt-14 2xl:max-w-7xl">
          {status === "loading" && (
            <ul className={GRID} aria-busy="true" aria-label="Loading certifications">
              {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <CertificationCardSkeleton key={i} />
              ))}
            </ul>
          )}

          {status === "error" && (
            <div className="pt-24">
              <CertificationsError message={error} onRetry={fetchCertifications} />
            </div>
          )}

          {status === "success" && items.length === 0 && (
            <div className="pt-24">
              <CertificationsEmpty />
            </div>
          )}

          {status === "success" && items.length > 0 && (
            <motion.ul
              className={GRID}
              variants={gridVariants}
              initial={reduced ? false : "hidden"}
              animate="visible"
            >
              {items.map((cert) => (
                <CertificationCard
                  key={cert._id}
                  cert={cert}
                  onOpenImage={openImage}
                  onDownload={downloadCertification}
                />
              ))}
            </motion.ul>
          )}

          {status === "success" && items.length > 0 && (
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0d1f35] px-6 py-8 sm:flex-row sm:items-center sm:px-10">
              <div>
                <h2 className="font-['Playfair_Display',serif] text-2xl font-semibold text-white">Need a document not listed here?</h2>
                <p className="mt-1 text-sm text-white/60">Our team can share additional compliance paperwork directly on request.</p>
              </div>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c8aa64] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d1f35] transition hover:bg-[#e2c98a]"
              >
                Request documentation <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          )}
        </section>
      </div>

      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </NavLayoutTwo>
  );
};
