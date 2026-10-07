import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * Typographic brand lockup for Jay Shankar Festival Lawns.
 * Swap the inner markup for an <img> if a logo file is supplied later.
 */
export function Brand({
  className,
  tone = "light",
  asLink = true,
}: {
  className?: string;
  tone?: "light" | "dark";
  asLink?: boolean;
}) {
  const content = (
    <span
      className={cn(
        "flex flex-col leading-none",
        tone === "light" ? "text-ivory" : "text-plum-deep",
        className,
      )}
    >
      <span className="font-display text-[1.35rem] tracking-[0.16em] uppercase sm:text-[1.55rem]">
        Jay Shankar
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span className="h-px w-4 bg-gold" aria-hidden="true" />
        <span className="eyebrow text-gold text-[0.58rem] sm:text-[0.62rem]">Festival Lawns</span>
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link to="/" aria-label="Jay Shankar Festival Lawns — home" className="shrink-0">
      {content}
    </Link>
  );
}
