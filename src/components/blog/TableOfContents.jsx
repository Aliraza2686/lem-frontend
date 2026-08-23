import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, List } from "lucide-react";
import { cn } from "../../lib/utills";

const SCROLL_OFFSET = 96;

const scrollToHeading = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};

function TocList({ toc, activeHeadingId, visitedIds, onNavigate }) {
  return (
    <ul className="space-y-1">
      {toc.map((item) => {
        const isActive = item.id === activeHeadingId;
        const isVisited = visitedIds.has(item.id);
        return (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <button
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-2 text-left text-sm py-1.5 px-2 rounded-md transition-colors",
                isActive
                  ? "bg-[#a88940]/10 text-[#8a6f3a] font-semibold"
                  : isVisited
                  ? "text-stone-400"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              )}
            >
              {isVisited ? (
                <Check className={cn("w-3.5 h-3.5 flex-shrink-0", isActive ? "text-[#a88940]" : "text-stone-400")} />
              ) : (
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full flex-shrink-0",
                    isActive ? "bg-[#a88940]" : "bg-stone-300"
                  )}
                />
              )}
              <span className="line-clamp-2">{item.text}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/** @param {{variant: "sidebar"|"mobile"}} props */
export function TableOfContents({ toc, activeHeadingId, visitedIds, variant }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  if (!toc.length) return null;

  const handleNavigate = (id) => {
    scrollToHeading(id);
    setMobileOpen(false);
  };

  if (variant === "sidebar") {
    return (
      <div className="sticky top-24 bg-white border border-stone-200 rounded-2xl p-5 max-h-[70vh] overflow-y-auto">
        <p className="text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-3">On This Page</p>
        <TocList toc={toc} activeHeadingId={activeHeadingId} visitedIds={visitedIds} onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setMobileOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3.5"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800">
          <List className="w-4 h-4" /> Table of Contents
        </span>
        <ChevronDown className={cn("w-4 h-4 text-stone-400 transition-transform", mobileOpen && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <TocList
                toc={toc}
                activeHeadingId={activeHeadingId}
                visitedIds={visitedIds}
                onNavigate={handleNavigate}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
