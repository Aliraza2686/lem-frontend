import api from "../api";

/**
 * @typedef {Object} GalleryItem
 * @property {string} _id
 * @property {string} title
 * @property {string} [description]
 * @property {string} imageUrl       Cloudinary secure_url
 * @property {string} imagePublicId
 * @property {number} displayOrder
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/** @returns {Promise<{success: boolean, total: number, items: GalleryItem[]}>} Sorted by displayOrder. */
export const getGallery = () => api.get("/gallery").then((res) => res.data);

// Serve a resized, auto-format/quality rendition for grid thumbnails. Leaves non-Cloudinary
// URLs and URLs that already carry transformations untouched.
export const cloudinaryThumb = (url = "", width = 900) =>
  /\/image\/upload\/v\d+\//.test(url) ? url.replace("/image/upload/", `/image/upload/f_auto,q_auto,w_${width}/`) : url;
