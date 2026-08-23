import { useEffect, useState } from "react";
import { getArticlesByCategory } from "../../lib/articles";
import { ArticleCard } from "./ArticleCard";
import { ArticleCardSkeleton } from "./ArticleCardSkeleton";

export function RelatedArticles({ currentArticleId, category }) {
  const [state, setState] = useState({ status: "loading", articles: [] });

  useEffect(() => {
    if (!category) {
      setState({ status: "success", articles: [] });
      return;
    }
    let cancelled = false;
    setState({ status: "loading", articles: [] });

    getArticlesByCategory(category, { limit: 5 })
      .then((res) => {
        if (cancelled) return;
        const filtered = res.articles.filter((a) => a._id !== currentArticleId).slice(0, 4);
        setState({ status: "success", articles: filtered });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error", articles: [] });
      });

    return () => {
      cancelled = true;
    };
  }, [category, currentArticleId]);

  if (state.status === "error") return null;
  if (state.status === "success" && state.articles.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-200">
      <h2 className="font-serif text-2xl font-extrabold text-[#0d1f35] mb-8">Related Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {state.status === "loading"
          ? Array.from({ length: 4 }).map((_, i) => <ArticleCardSkeleton key={i} />)
          : state.articles.map((article) => <ArticleCard key={article._id} article={article} />)}
      </div>
    </section>
  );
}
