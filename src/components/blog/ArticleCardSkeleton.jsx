export function ArticleCardSkeleton() {
  return (
    <div className="flex flex-col bg-white border border-stone-200 rounded-2xl overflow-hidden">
      <div className="aspect-[16/10] bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-20 bg-stone-200 rounded-full animate-pulse" />
        <div className="h-5 w-full bg-stone-200 rounded animate-pulse" />
        <div className="h-5 w-3/4 bg-stone-200 rounded animate-pulse" />
        <div className="h-3 w-full bg-stone-150 bg-stone-100 rounded animate-pulse" />
        <div className="h-3 w-2/3 bg-stone-100 rounded animate-pulse" />
        <div className="flex justify-between pt-3 border-t border-stone-100">
          <div className="h-3 w-16 bg-stone-100 rounded animate-pulse" />
          <div className="h-3 w-20 bg-stone-100 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedArticleSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden bg-stone-100 min-h-[420px] grid md:grid-cols-2 animate-pulse">
      <div className="bg-stone-200 min-h-[260px]" />
      <div className="p-8 md:p-12 space-y-4">
        <div className="h-5 w-32 bg-stone-200 rounded-full" />
        <div className="h-8 w-full bg-stone-200 rounded" />
        <div className="h-8 w-2/3 bg-stone-200 rounded" />
        <div className="h-4 w-full bg-stone-200 rounded" />
        <div className="h-4 w-1/2 bg-stone-200 rounded" />
        <div className="h-11 w-40 bg-stone-200 rounded-xl" />
      </div>
    </div>
  );
}
