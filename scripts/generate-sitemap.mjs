#!/usr/bin/env node
// Regenerates public/sitemap.xml before each build: keeps the static site
// routes and adds /blog + one entry per published article, fetched live
// from the articles API so lastmod dates are real, not a single stale
// build-time stamp.

const SITE_URL = "https://www.luminaearthminerals.com";
const API_BASE = process.env.VITE_API_BASE_URL || "https://api.luminaearthminerals.com/api";
const STATIC_LASTMOD = "2026-07-24";

const STATIC_URLS = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/products", changefreq: "weekly", priority: "0.9" },
  { loc: "/private-label", changefreq: "monthly", priority: "0.7" },
  { loc: "/about", changefreq: "monthly", priority: "0.6" },
  { loc: "/workspace-images", changefreq: "monthly", priority: "0.5" },
  { loc: "/faq", changefreq: "monthly", priority: "0.5" },
  { loc: "/contact", changefreq: "monthly", priority: "0.6" },
  { loc: "/blog", changefreq: "weekly", priority: "0.7" },
  { loc: "/product-details/salt", changefreq: "monthly", priority: "0.8" },
  { loc: "/product-details/bentonite", changefreq: "monthly", priority: "0.8" },
  { loc: "/product-details/limestone", changefreq: "monthly", priority: "0.8" },
  { loc: "/product-details/antimony", changefreq: "monthly", priority: "0.8" },
  { loc: "/product-details/nephrite-jade", changefreq: "monthly", priority: "0.8" },
  { loc: "/product-details/white-quartz", changefreq: "monthly", priority: "0.8" },
  { loc: "/product-details/silica-sand", changefreq: "monthly", priority: "0.8" },
  { loc: "/product-details/copper", changefreq: "monthly", priority: "0.8" },
];

function isoDateOnly(iso) {
  return (iso || "").slice(0, 10);
}

async function fetchAllArticles() {
  const articles = [];
  let page = 1;
  for (;;) {
    const res = await fetch(`${API_BASE}/articles?limit=100&page=${page}`);
    if (!res.ok) throw new Error(`Articles API returned ${res.status}`);
    const data = await res.json();
    articles.push(...(data.articles || []));
    if (!data.totalPages || page >= data.totalPages) break;
    page += 1;
  }
  return articles.filter((a) => a.status === "published" && a.slug);
}

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

async function main() {
  let articles = [];
  try {
    articles = await fetchAllArticles();
  } catch (err) {
    console.warn(`[generate-sitemap] Could not fetch articles (${err.message}) — writing sitemap.xml with static routes only.`);
  }

  const staticEntries = STATIC_URLS.map((u) =>
    urlEntry(`${SITE_URL}${u.loc}`, STATIC_LASTMOD, u.changefreq, u.priority)
  );

  const articleEntries = articles.map((a) => {
    const lastmod = isoDateOnly(a.updatedAt || a.publishedAt || a.createdAt) || STATIC_LASTMOD;
    return urlEntry(`${SITE_URL}/blog/${a.slug}`, lastmod, "monthly", "0.6");
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticEntries, ...articleEntries].join("\n")}\n</urlset>\n`;

  const { writeFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  const outPath = join(process.cwd(), "public", "sitemap.xml");
  await writeFile(outPath, xml, "utf8");
  console.log(`[generate-sitemap] Wrote ${STATIC_URLS.length} static + ${articleEntries.length} article URLs to public/sitemap.xml`);
}

main().catch((err) => {
  console.error("[generate-sitemap] Failed:", err);
  process.exit(1);
});
