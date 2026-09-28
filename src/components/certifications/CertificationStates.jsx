import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, RotateCw, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Shimmer({ className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-stone-200/70 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[cert-shimmer_1.6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  );
}

export function CertificationCardSkeleton() {
  return (
    <li className="list-none overflow-hidden rounded-2xl border border-stone-200/80 bg-white" aria-hidden="true">
      <Shimmer className="aspect-[4/3] !bg-[#efe8da]" />
      <div className="space-y-3 p-5 sm:p-6">
        <div className="flex justify-between">
          <Shimmer className="h-5 w-24 rounded-full" />
          <Shimmer className="h-3 w-14 rounded-full" />
        </div>
        <Shimmer className="h-5 w-4/5 rounded" />
        <Shimmer className="h-3 w-full rounded" />
        <Shimmer className="h-3 w-2/3 rounded" />
        <Shimmer className="mt-4 h-3 w-28 rounded" />
      </div>
    </li>
  );
}

export function CertificationsEmpty() {
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
          <ShieldCheck className="size-9" strokeWidth={1.5} />
        </div>
      </div>
      <p className="font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.25em] text-[#a88940]">Documentation in progress</p>
      <h2 className="mt-3 font-['Playfair_Display',serif] text-2xl font-semibold text-[#0d1f35]">
        Certificates are being published
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        We&rsquo;re preparing our certification records for this page. Need a specific document for your due diligence
        right now? Our team can send it directly.
      </p>
      <Link
        to="/contact"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0d1f35] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#132844]"
      >
        Request documentation <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

export function CertificationsError({ message, onRetry }) {
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
      <h2 className="font-['Playfair_Display',serif] text-xl font-semibold text-[#0d1f35]">We couldn&rsquo;t load certifications</h2>
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
