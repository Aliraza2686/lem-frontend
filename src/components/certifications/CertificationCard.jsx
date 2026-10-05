import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Award, FileText, ImageIcon, Loader2, Maximize2 } from "lucide-react";
import { fileFormatLabel } from "../../lib/certifications";

const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";

export const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function ImagePreview({ cert }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-md bg-white p-2 shadow-[0_10px_30px_-12px_rgba(13,31,53,0.35)] ring-1 ring-[#0d1f35]/5">
        <img
          src={cert.fileUrl}
          alt={cert.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

function DocumentPreview({ format }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative aspect-[1/1.3] w-[42%] min-w-[108px] max-w-[150px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:-rotate-2">
        {/* back sheet */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-3 rounded-sm bg-white/70 ring-1 ring-[#0d1f35]/5" />
        {/* front sheet with folded corner */}
        <div
          className="absolute inset-0 rounded-sm bg-white shadow-[0_14px_32px_-14px_rgba(13,31,53,0.45)] ring-1 ring-[#0d1f35]/8"
          style={{ clipPath: "polygon(0 0, 78% 0, 100% 17%, 100% 100%, 0 100%)" }}
        >
          <div className="absolute left-[14%] right-[14%] top-[16%] space-y-[7%]">
            <div className="h-[5px] w-3/5 rounded-full bg-[#0d1f35]/15" />
            <div className="h-[3px] w-full rounded-full bg-stone-200" />
            <div className="h-[3px] w-11/12 rounded-full bg-stone-200" />
            <div className="h-[3px] w-4/5 rounded-full bg-stone-200" />
          </div>
          <div className="absolute bottom-[12%] left-[14%] flex aspect-square w-[30%] items-center justify-center rounded-full bg-gradient-to-br from-[#e2c98a] to-[#a88940] text-white shadow-[0_4px_10px_-2px_rgba(168,137,64,0.6)]">
            <Award className="size-1/2" strokeWidth={1.75} />
          </div>
          <span className="absolute bottom-[13%] right-0 rounded-l-sm bg-[#0d1f35] px-2 py-0.5 font-['DM_Mono',monospace] text-[10px] font-medium tracking-[0.15em] text-[#e2c98a]">
            {format}
          </span>
        </div>
        <div
          className="absolute right-0 top-0 h-[17%] w-[22%] rounded-bl-sm bg-gradient-to-bl from-stone-100 to-stone-300"
          style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
        />
      </div>
    </div>
  );
}

export function CertificationCard({ cert, onOpenImage, onDownload }) {
  const [downloading, setDownloading] = useState(false);
  const isImage = cert.fileType === "image";
  const format = isImage ? "IMAGE" : fileFormatLabel(cert.fileUrl);

  const handleClick = async () => {
    if (isImage) return onOpenImage(cert);
    if (downloading) return;
    setDownloading(true);
    try {
      await onDownload(cert);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <motion.li variants={cardVariants} className="list-none">
      <button
        type="button"
        onClick={handleClick}
        aria-label={isImage ? `View ${cert.title}` : `Download ${format}: ${cert.title}`}
        className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white text-left shadow-[0_1px_2px_rgba(13,31,53,0.04)] outline-none transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#c8aa64]/50 hover:shadow-[0_28px_50px_-24px_rgba(13,31,53,0.4)] focus-visible:ring-2 focus-visible:ring-[#c8aa64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2ede3]"
      >
        {/* gold hairline that draws in on hover */}
        <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#a88940] via-[#e2c98a] to-[#a88940] transition-transform duration-500 group-hover:scale-x-100" />

        {/* Preview */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f3ea]">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(13,31,53,0.08) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#efe7d6]/70" />
          {isImage ? <ImagePreview cert={cert} /> : <DocumentPreview format={format} />}

          {/* Action affordance */}
          <span
            className={`absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] shadow-lg backdrop-blur-md transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100 ${
              isImage ? "bg-[#0d1f35]/85 text-white" : "bg-[#c8aa64] text-[#0d1f35]"
            } ${downloading ? "!translate-y-0 !opacity-100" : ""}`}
          >
            {isImage ? (
              <>
                <Maximize2 className="size-3.5" /> View
              </>
            ) : downloading ? (
              <>
                <Loader2 className="size-3.5 animate-spin" /> Preparing
              </>
            ) : (
              <>
                <ArrowDown className="size-3.5 transition-transform group-hover:animate-bounce" /> Download
              </>
            )}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-['DM_Mono',monospace] text-[10px] font-medium uppercase tracking-[0.14em] ${
                isImage
                  ? "border-[#0d1f35]/10 bg-[#0d1f35]/[0.04] text-[#0d1f35]/70"
                  : "border-[#a88940]/25 bg-[#c8aa64]/10 text-[#8a6f3a]"
              }`}
            >
              {isImage ? <ImageIcon className="size-3" /> : <FileText className="size-3" />}
              {isImage ? "View" : "Download"}
            </span>
            {cert.createdAt && (
              <span className="font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.14em] text-stone-400">
                {formatDate(cert.createdAt)}
              </span>
            )}
          </div>

          <h3 className="font-['Playfair_Display',serif] text-lg font-semibold leading-snug text-[#0d1f35] sm:text-xl">
            {cert.title}
          </h3>
          {cert.description && (
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">{cert.description}</p>
          )}

          <div className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#a88940]">
            {isImage ? "View" : `Download ${format}`}
            {isImage ? (
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            ) : (
              <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </div>
        </div>
      </button>
    </motion.li>
  );
}
