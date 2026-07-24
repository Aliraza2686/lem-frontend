export const SITE_URL = "https://luminaearthminerals.com";
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945081/7ccf29e1-b647-4a76-8fb4-b24aa23b964f_jwhnxt.jpg";

export const canonicalFor = (path) => `${SITE_URL}${path === "/" ? "" : path}`;
