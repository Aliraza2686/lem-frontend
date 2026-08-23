import api from "../api";

/**
 * @typedef {Object} ArticleAuthor
 * @property {string} _id
 * @property {string} [name]
 * @property {string} [email]
 *
 * @typedef {Object} ArticleImage
 * @property {string} url
 * @property {string} publicId
 * @property {string} [caption]
 *
 * @typedef {Object} Article
 * @property {string} _id
 * @property {string} title
 * @property {string} slug
 * @property {string} excerpt
 * @property {string} content   raw HTML
 * @property {{url:string, publicId:string}} coverImage
 * @property {ArticleImage[]} gallery
 * @property {ArticleAuthor} author
 * @property {string} category
 * @property {string[]} tags
 * @property {"draft"|"published"|"archived"} status
 * @property {number} readTime
 * @property {number} wordCount
 * @property {number} views
 * @property {number} likes
 * @property {boolean} isFeatured
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {string} [publishedAt]
 */

/**
 * @typedef {Object} ArticleListParams
 * @property {number} [page]
 * @property {number} [limit]
 * @property {string} [category]
 * @property {string} [tag]
 * @property {"oldest"|"popular"|"liked"} [sort]
 *
 * @typedef {Object} ArticleListResponse
 * @property {boolean} success
 * @property {number} total
 * @property {number} page
 * @property {number} limit
 * @property {number} totalPages
 * @property {Article[]} articles
 */

/** @param {ArticleListParams} [params] @returns {Promise<ArticleListResponse>} */
export async function getArticles(params = {}) {
  const { data } = await api.get("/articles", { params });
  return data;
}

/** @param {string} category @param {ArticleListParams} [params] */
export async function getArticlesByCategory(category, params = {}) {
  const { data } = await api.get(`/articles/category/${encodeURIComponent(category)}`, { params });
  return data;
}

/** @param {string} tag @param {ArticleListParams} [params] */
export async function getArticlesByTag(tag, params = {}) {
  const { data } = await api.get(`/articles/tag/${encodeURIComponent(tag)}`, { params });
  return data;
}

/**
 * Fetches a single article by slug. This call also increments the
 * article's view count server-side — callers must guard against
 * duplicate invocation (e.g. React StrictMode double-effect).
 * @param {string} slug @returns {Promise<Article>}
 */
export async function getArticleBySlug(slug) {
  const { data } = await api.get(`/articles/${encodeURIComponent(slug)}`);
  return data.article;
}

/** @param {string} id Mongo _id of the article @returns {Promise<number>} new like count */
export async function likeArticle(id) {
  const { data } = await api.patch(`/articles/${id}/like`);
  return data.likes;
}

/** @param {ArticleAuthor|undefined} author */
export function getAuthorDisplayName(author) {
  if (!author) return "Lumina Earth Team";
  if (author.name) return author.name;
  if (author.email) {
    return author.email
      .split("@")[0]
      .replace(/[._]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return "Lumina Earth Team";
}

export function getAuthorInitials(author) {
  const name = getAuthorDisplayName(author);
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}
