import { useState } from "react";
import { cn } from "../lib/utills";

const FALLBACK_SRC = "https://via.placeholder.com/600x600.png?text=No+Image+Available";

/**
 * Renders a product image with a guaranteed visual result: a missing/null
 * src or a broken URL (Cloudinary 404, network error, etc.) always falls
 * back to a placeholder image — never a broken-image icon or blank space.
 */
export function ProductImage({ src, alt = "", className, ...rest }) {
  const [errored, setErrored] = useState(false);
  const resolvedSrc = !src || errored ? FALLBACK_SRC : src;

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className={cn("w-full h-full object-cover", className)}
      {...rest}
    />
  );
}
