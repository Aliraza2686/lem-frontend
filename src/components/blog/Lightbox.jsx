import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * Simple single-image lightbox/zoom overlay. `image` = { src, alt, title?, description?, eyebrow? } | null.
 * Passing `title` swaps the plain alt caption for a richer caption panel (used by /certifications).
 */
export function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={image.title || image.alt || "Image preview"}
        >
          <motion.img
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            src={image.src}
            alt={image.alt || image.title || ""}
            className={`max-w-full object-contain rounded-lg shadow-2xl ${image.title ? "max-h-[70vh]" : "max-h-[85vh]"}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition"
          >
            <X className="w-5 h-5" />
          </button>
          {image.title ? (
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.08, ease: "easeOut" }}
              className="mt-6 max-w-xl text-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {image.eyebrow && (
                <p className="mb-2 font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.25em] text-[#c8aa64]">
                  {image.eyebrow}
                </p>
              )}
              <h2 className="font-['Playfair_Display',serif] text-xl md:text-2xl font-semibold text-white">{image.title}</h2>
              {image.description && <p className="mt-2 text-sm leading-relaxed text-white/65">{image.description}</p>}
            </motion.div>
          ) : (
            image.alt && (
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm max-w-lg text-center px-4">
                {image.alt}
              </p>
            )
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
