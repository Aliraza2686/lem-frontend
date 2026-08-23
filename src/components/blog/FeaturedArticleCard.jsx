import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { getAuthorDisplayName } from "../../lib/articles";

const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "";

export function FeaturedArticleCard({ article }) {
  const { slug, title, excerpt, coverImage, category, author, publishedAt, createdAt, readTime } = article;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden bg-[#0d1f35] grid md:grid-cols-2 min-h-[420px]"
    >
      <LazyImage
        src={coverImage?.url}
        alt={title}
        className="absolute inset-0 md:static h-full min-h-[260px]"
        imgClassName="opacity-90"
      />
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[#0d1f35] via-[#0d1f35]/60 to-transparent" />

      <div className="relative flex flex-col justify-end md:justify-center p-8 md:p-12 text-white">
        <span className="inline-flex self-start items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#c8aa64] bg-[#c8aa64]/15 border border-[#c8aa64]/30 px-3 py-1 rounded-full mb-4">
          Featured · {category}
        </span>

        <Link to={`/blog/${slug}`}>
          <h2 className="font-serif text-2xl md:text-4xl font-extrabold leading-tight mb-4 hover:text-[#c8aa64] transition-colors">
            {title}
          </h2>
        </Link>

        <p className="text-stone-300 leading-relaxed mb-6 max-w-lg line-clamp-3">{excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-stone-300 mb-6">
          <span className="font-medium text-white">{getAuthorDisplayName(author)}</span>
          <span>{formatDate(publishedAt || createdAt)}</span>
          {readTime && (
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {readTime} min read
            </span>
          )}
        </div>

        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 w-fit bg-[#c8aa64] text-[#0d1f35] font-semibold px-5 py-3 rounded-xl hover:bg-[#d4ba78] transition-colors"
        >
          Read Full Article <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
