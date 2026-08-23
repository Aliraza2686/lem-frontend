import { useCallback, useEffect, useRef, useState } from "react";

// Roughly matches the fixed reading-progress bar + a comfortable reading offset.
const ACTIVATION_OFFSET = 140;

/**
 * Single IntersectionObserver driving both:
 *  - visitedIds: sticky set of every block (heading or content) the reader has scrolled past
 *  - activeHeadingId: the heading currently "in view" for TOC highlighting (moves both ways)
 *
 * @param {Array<{id:string,isHeading:boolean}>} blocks
 */
export function useArticleSectionObserver(blocks) {
  const elementsRef = useRef(new Map());
  const refCallbackCache = useRef(new Map());
  const headingOrderRef = useRef([]);

  const [visitedIds, setVisitedIds] = useState(() => new Set());
  const [activeHeadingId, setActiveHeadingId] = useState(
    () => blocks.find((b) => b.isHeading)?.id || null
  );

  useEffect(() => {
    headingOrderRef.current = blocks.filter((b) => b.isHeading).map((b) => b.id);
  }, [blocks]);

  const registerRef = useCallback((id) => {
    const cache = refCallbackCache.current;
    if (!cache.has(id)) {
      cache.set(id, (el) => {
        if (el) elementsRef.current.set(id, el);
        else elementsRef.current.delete(id);
      });
    }
    return cache.get(id);
  }, []);

  useEffect(() => {
    if (!blocks.length) return undefined;

    const computeActiveHeading = () => {
      let current = null;
      for (const headingId of headingOrderRef.current) {
        const el = elementsRef.current.get(headingId);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= ACTIVATION_OFFSET) current = headingId;
        else break;
      }
      if (current) setActiveHeadingId(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        setVisitedIds((prev) => {
          let changed = false;
          const next = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.dataset.blockId;
              if (id && !next.has(id)) {
                next.add(id);
                changed = true;
              }
            }
          });
          return changed ? next : prev;
        });
        computeActiveHeading();
      },
      { rootMargin: `-${ACTIVATION_OFFSET}px 0px -55% 0px`, threshold: 0 }
    );

    elementsRef.current.forEach((el) => observer.observe(el));
    computeActiveHeading();

    return () => observer.disconnect();
  }, [blocks]);

  return { visitedIds, activeHeadingId, registerRef };
}
