import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { getAuthorDisplayName } from "../../lib/articles";

const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "";

export function ArticleCard({ article }) {
  const { slug, title, excerpt, coverImage, category, author, publishedAt, createdAt, readTime, tags } = article;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-shadow"
    >
      <Link to={`/blog/${slug}`} className="block">
        <LazyImage
          src={coverImage?.url}
          alt={title}
          className="aspect-[16/10]"
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex flex-col flex-1 p-5">
        {category && (
          <span className="self-start mb-3 text-[10px] font-bold uppercase tracking-widest text-[#a88940] bg-[#a88940]/10 px-2.5 py-1 rounded-full">
            {category}
          </span>
        )}

        <Link to={`/blog/${slug}`}>
          <h3 className="font-serif text-lg font-bold text-[#0d1f35] leading-snug mb-2 group-hover:text-[#a88940] transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2 flex-1">{excerpt}</p>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 mt-auto">
          <span className="font-medium text-stone-700">{getAuthorDisplayName(author)}</span>
          <div className="flex items-center gap-3">
            <span>{formatDate(publishedAt || createdAt)}</span>
            {readTime && (
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3" /> {readTime} min
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
