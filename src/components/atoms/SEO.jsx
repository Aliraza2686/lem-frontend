import { Helmet } from "react-helmet-async";
import { canonicalFor, DEFAULT_OG_IMAGE } from "../../lib/seo";

export const SEO = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  jsonLd,
  type = "website",
  publishedTime,
  modifiedTime,
  authorName,
}) => {
  const url = canonicalFor(path);
  const fullTitle = `${title} | Lumina Earth Minerals`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Lumina Earth Minerals" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={new Date(publishedTime).toISOString()} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={new Date(modifiedTime).toISOString()} />
      )}
      {type === "article" && authorName && <meta property="article:author" content={authorName} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        Array.isArray(jsonLd)
          ? jsonLd.filter(Boolean).map((block, i) => (
              <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
            ))
          : <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
