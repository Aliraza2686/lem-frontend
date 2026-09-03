/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { cn } from "../../lib/utills";

/**
 * Renders parsed content blocks with a scroll-driven "read" indicator: a thin
 * accent line sweeps left-to-right underneath each block as it's visited, then
 * stays fully drawn. Visited state and refs are supplied by the shared
 * useArticleSectionObserver hook (owned by the parent page) so TOC and body
 * stay in sync off one observer.
 */
export function ArticleBody({ blocks, visitedIds, registerRef, onImageClick }) {
  const handleClick = (e) => {
    if (e.target.tagName === "IMG") {
      onImageClick?.({ src: e.target.src, alt: e.target.alt });
    }
  };

  return (
    <>
      <style>{`
        .article-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.65rem; font-weight: 800; color: #0d1f35;
          margin: 0 0 1rem; line-height: 1.25; scroll-margin-top: 96px;
        }
        .article-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem; font-weight: 700; color: #0d1f35;
          margin: 0 0 0.85rem; line-height: 1.3; scroll-margin-top: 96px;
        }
        .article-content p {
          font-size: 1.05rem; line-height: 1.85; color: #3f3a33; margin: 0 0 1.1rem;
        }
        .article-content ul, .article-content ol {
          margin: 0 0 1.1rem 1.25rem; padding: 0; color: #3f3a33;
        }
        .article-content li { margin-bottom: 0.6rem; line-height: 1.75; font-size: 1.02rem; }
        .article-content strong { color: #0d1f35; font-weight: 700; }
        .article-content img {
          width: 100%; aspect-ratio: 4 / 3; object-fit: cover; background: #e7e5e4;
          border-radius: 1rem; margin: 0.5rem 0 1.5rem; cursor: zoom-in;
          transition: opacity 0.2s ease;
        }
        .article-content img:hover { opacity: 0.92; }
        .article-content blockquote {
          border-left: 3px solid #a88940; padding-left: 1rem; margin: 0 0 1.1rem;
          font-style: italic; color: #6b5f4a;
        }
        .article-content .read-line {
          position: absolute;
          left: 0; bottom: -3px;
          width: 100%; height: 2px; border-radius: 2px;
          background: linear-gradient(to right, #a88940, #c8aa64);
          transform: scaleX(0);
          transform-origin: 0% 50%;
          transition: transform 500ms ease-out;
          pointer-events: none;
        }
        .article-content .read-line.is-read { transform: scaleX(1); }
        @media (prefers-reduced-motion: reduce) {
          .article-content .read-line { transition: none; }
        }
      `}</style>

      <div className="article-content" onClick={handleClick}>
        {blocks.map((block) => {
          const visited = visitedIds.has(block.id);
          return (
            <div key={block.id} ref={registerRef(block.id)} data-block-id={block.id} className="relative">
              <div dangerouslySetInnerHTML={{ __html: block.html }} />
              <span aria-hidden="true" className={cn("read-line", visited && "is-read")} />
            </div>
          );
        })}
      </div>
    </>
  );
}
