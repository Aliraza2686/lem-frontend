import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Camera, RotateCw } from "lucide-react";
import { Link } from "react-router-dom";

// Varied heights so the loading state already reads as a masonry wall.
const SKELETON_ASPECTS = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[2/3]", "aspect-[5/4]"];

export function GalleryCardSkeleton({ index }) {
  return (
    <li
      className={`list-none relative overflow-hidden rounded-2xl border border-stone-200/80 bg-[#efe8da] ${
        SKELETON_ASPECTS[index % SKELETON_ASPECTS.length]
      }`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 -translate-x-full animate-[gallery-shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <div className="h-2 w-10 rounded-full bg-stone-300/60" />
        <div className="h-3.5 w-2/3 rounded bg-stone-300/70" />
      </div>
    </li>
  );
}

export function GalleryEmpty() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex max-w-xl flex-col items-center overflow-hidden rounded-3xl border border-stone-200/80 bg-white px-8 py-14 text-center shadow-[0_24px_48px_-28px_rgba(13,31,53,0.3)]"
    >
      <div className="relative mb-8 flex size-28 items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border border-[#c8aa64]/40"
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: 1.35, opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity, delay: i, ease: "easeOut" }}
          />
        ))}
        <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0d1f35] to-[#051223] text-[#e2c98a] shadow-[0_12px_30px_-10px_rgba(13,31,53,0.6)] ring-4 ring-[#c8aa64]/15">
          <Camera className="size-9" strokeWidth={1.5} />
        </div>
      </div>
      <p className="font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.25em] text-[#a88940]">Gallery in progress</p>
      <h2 className="mt-3 font-['Playfair_Display',serif] text-2xl font-semibold text-[#0d1f35]">New photographs are on the way</h2>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        We&rsquo;re refreshing our gallery with new images from the field. Want to see a specific product, grade, or
        packaging option right now? Our team can send photos directly.
      </p>
      <Link
        to="/contact"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0d1f35] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#132844]"
      >
        Request product photos <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

export function GalleryError({ message, onRetry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      role="alert"
      className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border border-red-200/80 bg-white px-8 py-12 text-center shadow-[0_20px_40px_-28px_rgba(220,38,38,0.35)]"
    >
      <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600 ring-8 ring-red-50/50">
        <AlertTriangle className="size-6" />
      </div>
      <h2 className="font-['Playfair_Display',serif] text-xl font-semibold text-[#0d1f35]">We couldn&rsquo;t load the gallery</h2>
      <p className="mt-2 text-sm text-stone-600">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#0d1f35]/15 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d1f35] transition hover:border-[#0d1f35]/40 hover:bg-[#0d1f35]/[0.03]"
      >
        <RotateCw className="size-3.5 transition-transform duration-500 group-hover:rotate-180" /> Try again
      </button>
    </motion.div>
  );
}
