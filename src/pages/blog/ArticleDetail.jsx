import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, FileText, Mountain } from "lucide-react";
import { NavLayoutTwo } from "../../components/layouts/NavLayoutTwo";
import { SEO } from "../../components/atoms/SEO";
import { canonicalFor } from "../../lib/seo";
import { getArticleBySlug, getAuthorDisplayName } from "../../lib/articles";
import { parseArticleContent } from "../../lib/parseArticleContent";
import { useArticleSectionObserver } from "../../hooks/useArticleSectionObserver";
import { LazyImage } from "../../components/blog/LazyImage";
import { AuthorByline } from "../../components/blog/AuthorByline";
import { TagChips } from "../../components/blog/TagChips";
import { LikeButton } from "../../components/blog/LikeButton";
import { TableOfContents } from "../../components/blog/TableOfContents";
import { ArticleBody } from "../../components/blog/ArticleBody";
import { ReadingProgressBar } from "../../components/blog/ReadingProgressBar";
import { Lightbox } from "../../components/blog/Lightbox";
import { RelatedArticles } from "../../components/blog/RelatedArticles";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [state, setState] = useState({ status: "loading", article: null, error: null });
  const [lightboxImage, setLightboxImage] = useState(null);
  const fetchedSlugRef = useRef(null);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    // Guards against React StrictMode's double-invoked effects (and repeat
    // renders for the same slug) firing the view-increment fetch twice.
    if (fetchedSlugRef.current === slug) return;
    fetchedSlugRef.current = slug;

    setState({ status: "loading", article: null, error: null });
    getArticleBySlug(slug)
      .then((article) => setState({ status: "success", article, error: null }))
      .catch((err) => {
        const status = err.response?.status;
        setState({
          status: status === 404 ? "not-found" : "error",
          article: null,
          error: err.response?.data?.message || err.message || "Failed to load this article.",
        });
      });
  }, [slug]);

  const { toc, blocks } = useMemo(
    () => parseArticleContent(state.article?.content),
    [state.article?.content]
  );
  const { visitedIds, activeHeadingId, registerRef } = useArticleSectionObserver(blocks);

  if (state.status === "loading") {
    return (
      <NavLayoutTwo>
        <div className="min-h-[70vh] flex items-center justify-center text-stone-500">Loading article…</div>
      </NavLayoutTwo>
    );
  }

  if (state.status === "not-found") {
    return (
      <NavLayoutTwo>
        <SEO title="Article Not Found" description="This article is unavailable." path={`/blog/${slug}`} />
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          <Mountain className="w-12 h-12 text-stone-300 mb-4" />
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Article not found</h1>
          <p className="text-stone-500 mb-6">This article doesn&apos;t exist or isn&apos;t published yet.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-stone-800 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-stone-700 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </NavLayoutTwo>
    );
  }

  if (state.status === "error") {
    return (
      <NavLayoutTwo>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
          <p className="text-stone-700 font-semibold mb-2">Couldn&apos;t load this article</p>
          <p className="text-stone-500 text-sm mb-6">{state.error}</p>
          <Link to="/blog" className="text-sm font-semibold text-[#a88940] hover:underline">
            Back to Blog
          </Link>
        </div>
      </NavLayoutTwo>
    );
  }

  const { article } = state;
  const authorName = getAuthorDisplayName(article.author);
  const publishDate = article.publishedAt || article.createdAt;
  const dateModified = article.updatedAt || publishDate;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: article.coverImage?.url ? [article.coverImage.url] : undefined,
    datePublished: publishDate,
    dateModified,
    author: { "@type": "Person", name: authorName },
    wordCount: article.wordCount,
    mainEntityOfPage: canonicalFor(`/blog/${article.slug}`),
    description: article.excerpt,
  };

  return (
    <NavLayoutTwo>
      <SEO
        title={article.title}
        description={article.seo?.metaDescription || article.excerpt}
        path={`/blog/${article.slug}`}
        image={article.coverImage?.url}
        type="article"
        publishedTime={publishDate}
        modifiedTime={dateModified}
        authorName={authorName}
        jsonLd={jsonLd}
      />

      <ReadingProgressBar targetRef={scrollTargetRef} />

      {/*
        opacity-only: a transform (e.g. y-translate) here would make this div
        the containing block for descendant `position: sticky`/`fixed`
        elements (the TOC sidebar, reading progress bar), breaking them.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="bg-[#FAF8F4]"
      >
        <div ref={scrollTargetRef}>
          {/* Immersive hero */}
          <div className="relative h-[46vh] min-h-[340px]">
            <LazyImage src={article.coverImage?.url} alt={article.title} className="absolute inset-0 h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] via-[#0d1f35]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-6 pb-10">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition font-medium mb-4">
                <ArrowLeft className="w-3.5 h-3.5" /> All Articles
              </Link>
              {article.category && (
                <span className="inline-flex text-[11px] font-bold uppercase tracking-widest text-[#0d1f35] bg-[#c8aa64] px-3 py-1 rounded-full mb-4">
                  {article.category}
                </span>
              )}
              <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight">
                {article.title}
              </h1>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-200">
              <AuthorByline author={article.author} date={publishDate} readTime={article.readTime} />
              <p className="text-xs font-mono text-stone-400 uppercase tracking-wide">
                {article.wordCount?.toLocaleString()} words · {article.views} views
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_280px] gap-10">
            <div className="lg:hidden">
              <TableOfContents toc={toc} activeHeadingId={activeHeadingId} visitedIds={visitedIds} variant="mobile" />
            </div>

            <div className="max-w-[75ch]">
              <ArticleBody
                blocks={blocks}
                visitedIds={visitedIds}
                registerRef={registerRef}
                onImageClick={setLightboxImage}
              />

              <div className="flex flex-wrap items-center justify-between gap-6 mt-10 pt-8 border-t border-stone-200">
                <TagChips tags={article.tags} />
                <LikeButton articleId={article._id} initialLikes={article.likes} />
              </div>

              {article.gallery?.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-serif text-xl font-bold text-[#0d1f35] mb-4 inline-flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#a88940]" /> Gallery
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {article.gallery.map((img) => (
                      <LazyImage
                        key={img.publicId}
                        src={img.url}
                        alt={img.caption || article.title}
                        className="aspect-video rounded-xl cursor-zoom-in"
                        onClick={() => setLightboxImage({ src: img.url, alt: img.caption })}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <TableOfContents toc={toc} activeHeadingId={activeHeadingId} visitedIds={visitedIds} variant="sidebar" />
            </div>
          </div>
        </div>

        <RelatedArticles currentArticleId={article._id} category={article.category} />
      </motion.div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </NavLayoutTwo>
  );
}
