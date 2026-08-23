import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { likeArticle } from "../../lib/articles";
import { cn } from "../../lib/utills";

const STORAGE_KEY = "lem_liked_articles";

const getLikedSet = () => {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return new Set();
  }
};

const persistLikedSet = (set) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    // localStorage unavailable (private mode etc.) — like still works for this session
  }
};

export function LikeButton({ articleId, initialLikes = 0, className }) {
  const [liked, setLiked] = useState(() => getLikedSet().has(articleId));
  const [likes, setLikes] = useState(initialLikes);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  const handleClick = async () => {
    if (liked || pending) return;
    setPending(true);
    setError(false);

    // optimistic update
    setLiked(true);
    setLikes((n) => n + 1);
    const likedSet = getLikedSet();
    likedSet.add(articleId);
    persistLikedSet(likedSet);

    try {
      const serverLikes = await likeArticle(articleId);
      setLikes(serverLikes);
    } catch {
      // rollback on real failure
      setLiked(false);
      setLikes((n) => Math.max(0, n - 1));
      likedSet.delete(articleId);
      persistLikedSet(likedSet);
      setError(true);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={liked || pending}
        aria-pressed={liked}
        className={cn(
          "relative inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
          liked
            ? "border-rose-200 bg-rose-50 text-rose-600"
            : "border-stone-300 bg-white text-stone-700 hover:border-rose-300 hover:text-rose-600",
          pending && "opacity-70 cursor-wait",
          className
        )}
      >
        <motion.span
          key={liked ? "liked" : "unliked"}
          animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex"
        >
          <Heart className={cn("w-4 h-4", liked && "fill-rose-500 text-rose-500")} />
        </motion.span>
        {likes} {likes === 1 ? "Like" : "Likes"}

        <AnimatePresence>
          {liked && (
            <motion.span
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -18 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="pointer-events-none absolute -top-1 right-3 text-rose-500 text-xs font-bold"
            >
              +1
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      {error && <p className="text-xs text-red-500">Couldn&apos;t save your like — please try again.</p>}
    </div>
  );
}
