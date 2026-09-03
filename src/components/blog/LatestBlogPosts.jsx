import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getArticles } from "../../lib/articles";
import { ArticleCard } from "./ArticleCard";
import { ArticleCardSkeleton } from "./ArticleCardSkeleton";

const LIMIT = 3;

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Homepage teaser for the latest published articles. Quietly renders nothing on error/empty — this is a secondary section, not critical path. */
export function LatestBlogPosts() {
  const [state, setState] = useState({ status: "loading", articles: [] });

  useEffect(() => {
    let cancelled = false;
    getArticles({ limit: LIMIT })
      .then((res) => {
        if (!cancelled) setState({ status: "success", articles: res.articles || [] });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", articles: [] });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "error" || (state.status === "success" && state.articles.length === 0)) {
    return null;
  }

  return (
    <section className="bg-white px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#8a6f3a] mb-3">
              Insights &amp; Sourcing Knowledge
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0d1f35]">
              Latest From the Blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d1f35] hover:text-[#8a6f3a] transition-colors"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {state.status === "loading" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: LIMIT }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {state.articles.map((article) => (
              <motion.div key={article._id} variants={itemVariants}>
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
