import { Link } from "react-router-dom";
import { cn } from "../../lib/utills";

export function TagChips({ tags = [], className, chipClassName }) {
  if (!tags.length) return null;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <Link
          key={tag}
          to={`/blog?tag=${encodeURIComponent(tag)}`}
          className={cn(
            "inline-flex items-center rounded-full border border-[#a88940]/25 bg-[#a88940]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#8a6f3a] hover:bg-[#a88940]/15 hover:border-[#a88940]/50 transition-colors",
            chipClassName
          )}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
