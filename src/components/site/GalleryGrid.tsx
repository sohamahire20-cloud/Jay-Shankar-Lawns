import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY, type GalleryCategory } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Reveal } from "./Motion";

const FILTERS: ("All" | GalleryCategory)[] = [
  "All",
  "Weddings",
  "Lawn",
  "Halls",
  "Dining",
  "Celebrations",
];

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  const current = active !== null ? items[active] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              setActive(null);
            }}
            aria-pressed={filter === f}
            className={cn(
              "eyebrow border-b pb-1 transition-colors",
              filter === f
                ? "border-gold text-gold"
                : "text-muted-foreground hover:text-foreground border-transparent",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <Reveal key={item.src + i} delay={(i % 3) * 80}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden"
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]",
                  item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                )}
              />
              <span className="from-plum-ink/80 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="eyebrow text-ivory pointer-events-none absolute bottom-4 left-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          className="bg-plum-ink/96 fixed inset-0 z-[80] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setActive(null)}
            className="text-ivory/80 hover:text-gold absolute top-5 right-5 p-2"
          >
            <X size={26} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) - 1 + items.length) % items.length);
            }}
            className="text-ivory/70 hover:text-gold absolute left-2 p-3 sm:left-6"
          >
            <ChevronLeft size={30} strokeWidth={1.2} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-5xl">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="text-ivory/60 mt-4 text-center text-xs tracking-wide">
              {current.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) + 1) % items.length);
            }}
            className="text-ivory/70 hover:text-gold absolute right-2 p-3 sm:right-6"
          >
            <ChevronRight size={30} strokeWidth={1.2} />
          </button>
        </div>
      )}
    </div>
  );
}
