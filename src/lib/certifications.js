import api from "../api";

/**
 * @typedef {Object} Certification
 * @property {string} _id
 * @property {string} title
 * @property {string} [description]
 * @property {string} fileUrl       Cloudinary secure_url
 * @property {string} filePublicId
 * @property {"image"|"file"} fileType
 * @property {string} createdAt
 * @property {string} updatedAt
 */

/** @returns {Promise<{success: boolean, total: number, certifications: Certification[]}>} */
export const getCertifications = () => api.get("/certifications").then((res) => res.data);

// Documents are stored as extensionless Cloudinary "raw" assets with the format kept
// as a "-pdf"/"-docx" token in the name (e.g. .../ISO_9001-pdf_ab12cd) — see
// lem-backend certificationController. Falls back to a real extension if present.
export const fileExtensionFor = (url = "") => {
  const last = url.split("?")[0].split("/").pop() || "";
  const token = last.match(/-([a-z0-9]{2,5})_[a-z0-9]+$/i);
  if (token) return token[1].toLowerCase();
  const ext = last.match(/\.([a-z0-9]{2,5})$/i);
  return ext ? ext[1].toLowerCase() : "";
};

export const fileFormatLabel = (url) => fileExtensionFor(url).toUpperCase() || "DOC";

const safeFilename = (title) => title.replace(/[\\/:*?"<>|]+/g, "").trim() || "certificate";

/**
 * Downloads a certification file directly (no new tab). Fetches as a blob so the
 * saved file gets a readable name — the `download` attribute alone is ignored for
 * cross-origin URLs. Falls back to opening the URL if the fetch is blocked.
 */
export const downloadCertification = async (cert) => {
  const ext = fileExtensionFor(cert.fileUrl);
  const filename = ext ? `${safeFilename(cert.title)}.${ext}` : safeFilename(cert.title);
  try {
    const res = await fetch(cert.fileUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
  } catch {
    window.open(cert.fileUrl, "_blank", "noopener,noreferrer");
  }
};
