import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { NavLayoutTwo } from "../../components/layouts/NavLayoutTwo";
import { SEO } from "../../components/atoms/SEO";
import { getArticles, getArticlesByCategory, getArticlesByTag } from "../../lib/articles";
import { ArticleCard } from "../../components/blog/ArticleCard";
import { FeaturedArticleCard } from "../../components/blog/FeaturedArticleCard";
import { ArticleCardSkeleton, FeaturedArticleSkeleton } from "../../components/blog/ArticleCardSkeleton";

const LIMIT = 9;

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const tag = searchParams.get("tag") || "";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const hasFilters = Boolean(category || tag);

  const [state, setState] = useState({ status: "loading", data: null, error: null });
  const [facets, setFacets] = useState({ categories: [], tags: [] });

  // One-time broad fetch to populate filter chip options (no dedicated facets endpoint exists).
  useEffect(() => {
    getArticles({ limit: 50 })
      .then((res) => {
        const categories = [...new Set(res.articles.map((a) => a.category).filter(Boolean))];
        const tags = [...new Set(res.articles.flatMap((a) => a.tags || []))];
        setFacets({ categories, tags });
      })
      .catch(() => {
        /* filter bar simply stays empty — not critical path */
      });
  }, []);

  const fetchArticles = useCallback(() => {
    setState({ status: "loading", data: null, error: null });

    const params = { page, limit: LIMIT };
    let request;
    if (category && tag) request = getArticles({ ...params, category, tag });
    else if (category) request = getArticlesByCategory(category, params);
    else if (tag) request = getArticlesByTag(tag, params);
    else request = getArticles(params);

    request
      .then((res) => setState({ status: "success", data: res, error: null }))
      .catch((err) =>
        setState({
          status: "error",
          data: null,
          error: err.response?.data?.message || err.message || "Failed to load articles.",
        })
      );
  }, [category, tag, page]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    next.delete("page");
    setSearchParams(next);
  };

  const goToPage = (p) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(p));
    setSearchParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const articles = state.data?.articles || [];
  const featured = !hasFilters && page === 1 ? articles.find((a) => a.isFeatured) : null;
  const gridArticles = featured ? articles.filter((a) => a._id !== featured._id) : articles;

  return (
    <NavLayoutTwo>
      <SEO
        title="Blog & Insights"
        description="Guides, sourcing insights, and technical deep-dives on Himalayan salt and industrial minerals from Lumina Earth Minerals."
        path="/blog"
      />

      <div className="min-h-screen bg-[#f2ede3]">
        {/* Hero */}
        <section className="bg-[#0d1f35] px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#c8aa64] mb-3">
              Insights &amp; Sourcing Knowledge
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white">Blog</h1>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-10">
          {/* Filters */}
          {(facets.categories.length > 0 || facets.tags.length > 0) && (
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mr-1">Filter:</span>
              {facets.categories.map((c) => (
                <button
                  key={c}
                  onClick={() => updateParam("category", category === c ? "" : c)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    category === c
                      ? "bg-[#a88940] border-[#a88940] text-[#0d1f35]"
                      : "bg-white border-stone-200 text-stone-600 hover:border-[#a88940]/50"
                  }`}
                >
                  {c}
                </button>
              ))}
              {facets.tags.map((t) => (
                <button
                  key={t}
                  onClick={() => updateParam("tag", tag === t ? "" : t)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    tag === t
                      ? "bg-[#0d1f35] border-[#0d1f35] text-white"
                      : "bg-white border-stone-200 text-stone-600 hover:border-[#0d1f35]/40"
                  }`}
                >
                  #{t}
                </button>
              ))}
              {hasFilters && (
                <button
                  onClick={() => setSearchParams({})}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-500 hover:text-stone-800 ml-1"
                >
                  <X className="w-3.5 h-3.5" /> Clear
                </button>
              )}
            </div>
          )}

          {/* Loading */}
          {state.status === "loading" && (
            <>
              {!hasFilters && page === 1 && (
                <div className="mb-12">
                  <FeaturedArticleSkeleton />
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: LIMIT }).map((_, i) => (
                  <ArticleCardSkeleton key={i} />
                ))}
              </div>
            </>
          )}

          {/* Error */}
          {state.status === "error" && (
            <div className="flex flex-col items-center text-center gap-3 py-24 bg-white rounded-2xl border border-red-100">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <p className="text-stone-700 font-semibold">Couldn&apos;t load articles</p>
              <p className="text-stone-500 text-sm max-w-sm">{state.error}</p>
              <button
                onClick={fetchArticles}
                className="mt-2 bg-[#0d1f35] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#132844] transition"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Success */}
          {state.status === "success" && (
            <>
              {articles.length === 0 ? (
                <div className="flex flex-col items-center text-center gap-3 py-24 bg-white rounded-2xl border border-stone-200">
                  <p className="text-stone-700 font-semibold">No articles match this filter.</p>
                  <button
                    onClick={() => setSearchParams({})}
                    className="text-sm font-semibold text-[#a88940] hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <>
                  {featured && (
                    <div className="mb-12">
                      <FeaturedArticleCard article={featured} />
                    </div>
                  )}

                  {gridArticles.length > 0 && (
                    <motion.div
                      variants={gridVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-80px" }}
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {gridArticles.map((article) => (
                        <motion.div key={article._id} variants={itemVariants}>
                          <ArticleCard article={article} />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Pagination */}
                  {state.data.totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-14">
                      {Array.from({ length: state.data.totalPages }).map((_, i) => {
                        const p = i + 1;
                        return (
                          <button
                            key={p}
                            onClick={() => goToPage(p)}
                            className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                              p === page
                                ? "bg-[#0d1f35] text-white"
                                : "bg-white border border-stone-200 text-stone-600 hover:border-[#0d1f35]/40"
                            }`}
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </NavLayoutTwo>
  );
};
