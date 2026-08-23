import { motion, useScroll, useSpring } from "framer-motion";

/** Fixed top bar reflecting overall scroll progress through `targetRef`'s content. */
export function ReadingProgressBar({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-40 bg-stone-200/60">
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-full bg-gradient-to-r from-[#a88940] to-[#c8aa64]"
      />
    </div>
  );
}
