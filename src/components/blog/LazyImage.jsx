/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { cn } from "../../lib/utills";

/**
 * Lazy-loaded image with a shimmering placeholder that blur-fades into the
 * real image once it finishes loading. No LQIP/blurhash data is available
 * from the API, so the "blur-up" effect is simulated via a blur->sharp
 * transition rather than a real low-res swap.
 */
export function LazyImage({ src, alt = "", className, imgClassName, onClick, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-stone-200", className)} onClick={onClick}>
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 bg-[length:200%_200%]" />
      )}
      {!errored && src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105",
            imgClassName
          )}
          {...rest}
        />
      )}
      {(errored || !src) && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400 text-xs font-medium">
          Image unavailable
        </div>
      )}
    </div>
  );
}
