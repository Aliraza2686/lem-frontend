import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/** Simple single-image lightbox/zoom overlay. `image` = { src, alt } | null. */
export function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <motion.img
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            src={image.src}
            alt={image.alt || ""}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={onClose}
            aria-label="Close image"
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition"
          >
            <X className="w-5 h-5" />
          </button>
          {image.alt && (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm max-w-lg text-center px-4">
              {image.alt}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
