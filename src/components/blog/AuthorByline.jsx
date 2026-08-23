import { getAuthorDisplayName, getAuthorInitials } from "../../lib/articles";
import { cn } from "../../lib/utills";

export function AuthorByline({ author, date, readTime, size = "md", className }) {
  const name = getAuthorDisplayName(author);
  const initials = getAuthorInitials(author);
  const avatarSize = size === "sm" ? "w-8 h-8 text-[11px]" : "w-11 h-11 text-sm";

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : null;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-[#0d1f35] text-[#c8aa64] font-bold flex-shrink-0",
          avatarSize
        )}
        aria-hidden="true"
      >
        {initials || "LE"}
      </div>
      <div className="min-w-0">
        <p className={cn("font-semibold text-stone-800 leading-tight", size === "sm" ? "text-xs" : "text-sm")}>
          {name}
        </p>
        <p className={cn("text-stone-500 leading-tight", size === "sm" ? "text-[11px]" : "text-xs")}>
          {[formattedDate, readTime ? `${readTime} min read` : null].filter(Boolean).join(" · ")}
        </p>
      </div>
    </div>
  );
}
