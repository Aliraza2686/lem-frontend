import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { cloudinaryThumb } from "../../lib/gallery";

export const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  // Delay by list position (not DOM order) so the stagger reads left-to-right across masonry columns.
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.1 + Math.min(i, 12) * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function GalleryCard({ item, index, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.li variants={cardVariants} custom={index} className="list-none">
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`View image: ${item.title}`}
        className="group relative block w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-[#efe8da] text-left shadow-[0_1px_2px_rgba(13,31,53,0.04)] outline-none transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#c8aa64]/50 hover:shadow-[0_28px_50px_-24px_rgba(13,31,53,0.45)] focus-visible:ring-2 focus-visible:ring-[#c8aa64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2ede3]"
      >
        {/* gold hairline that draws in on hover */}
        <span className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#a88940] via-[#e2c98a] to-[#a88940] transition-transform duration-500 group-hover:scale-x-100" />

        {/* Placeholder holds space (and shimmers) until the image knows its own height */}
        {!loaded && (
          <div className="relative aspect-[4/5] overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 -translate-x-full animate-[gallery-shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        )}

        <img
          src={cloudinaryThumb(item.imageUrl)}
          alt={item.title}
          loading={index < 6 ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`block h-auto w-full transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:saturate-[1.08] ${
            loaded ? "opacity-100" : "absolute inset-0 opacity-0"
          }`}
        />

        {/* Caption: always visible on touch screens, revealed on hover for pointer devices */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-[#051223]/85 via-[#051223]/20 to-transparent p-3.5 transition-opacity duration-500 sm:p-5 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
          <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:translate-y-3 md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0">
            <p className="hidden font-['DM_Mono',monospace] text-[9px] uppercase tracking-[0.25em] text-[#e2c98a] sm:block">
              No. {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-['Playfair_Display',serif] text-sm font-semibold leading-snug text-white sm:mt-1 sm:text-lg">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-1 hidden line-clamp-2 text-xs leading-relaxed text-white/70 sm:block">{item.description}</p>
            )}
          </div>
        </div>

        <span className="absolute right-3 top-3 z-10 hidden size-9 items-center justify-center rounded-full bg-[#0d1f35]/70 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 md:flex md:-translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <Maximize2 className="size-4" />
        </span>
      </button>
    </motion.li>
  );
}
