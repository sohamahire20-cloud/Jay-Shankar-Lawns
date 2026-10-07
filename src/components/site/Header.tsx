import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "./Brand";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/venues", label: "Venues" },
  { to: "/events", label: "Events" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-plum-ink/95 border-b border-ivory/10 py-3 backdrop-blur-md"
            : "bg-gradient-to-b from-plum-ink/60 to-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 sm:px-8">
          <Brand />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline text-ivory/80 text-[0.78rem] tracking-[0.18em] uppercase transition-colors hover:text-ivory"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              hash="enquire"
              className="hidden items-center gap-2 border border-gold/70 px-5 py-2.5 text-[0.72rem] tracking-[0.22em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-plum-ink sm:inline-flex"
            >
              Enquire Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-ivory p-2 lg:hidden"
            >
              <Menu size={22} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "surface-dark fixed inset-0 z-[60] flex flex-col transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <Brand />
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <X size={24} strokeWidth={1.4} />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-7">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display border-b border-ivory/10 py-4 text-3xl tracking-wide"
              style={{ transitionDelay: `${i * 40}ms` }}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-7 pb-10">
          <Link
            to="/contact"
            hash="enquire"
            className="bg-gold text-plum-ink flex items-center justify-center py-4 text-[0.75rem] tracking-[0.24em] uppercase"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}
