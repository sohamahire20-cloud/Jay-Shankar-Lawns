import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { Brand } from "./Brand";
import { VENUE, telHref, whatsappHref } from "@/lib/venue";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/venues", label: "Venues" },
  { to: "/events", label: "Events" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="surface-dark border-t border-gold/20">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <Brand asLink={false} />
          <p className="font-display text-ivory/70 mt-6 max-w-xs text-xl leading-snug">
            {VENUE.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-gold">Explore</h2>
          <ul className="mt-5 space-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-underline text-ivory/75 text-sm transition-colors hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold">Contact</h2>
          <ul className="text-ivory/75 mt-5 space-y-3 text-sm">
            <li>
              <a href={telHref} className="link-underline inline-flex items-center gap-2">
                <Phone size={15} strokeWidth={1.5} /> {VENUE.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-2"
              >
                <MessageCircle size={15} strokeWidth={1.5} /> {VENUE.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={VENUE.instagram}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-2"
              >
                <Instagram size={15} strokeWidth={1.5} /> Instagram
              </a>
            </li>
            <li>
              <a
                href={VENUE.maps}
                target="_blank"
                rel="noreferrer"
                className="link-underline inline-flex items-center gap-2"
              >
                <MapPin size={15} strokeWidth={1.5} /> {VENUE.locality}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Plan with us</h2>
          <p className="text-ivory/70 mt-5 text-sm leading-relaxed">
            Share the details of your celebration and our team will take it forward.
          </p>
          <Link
            to="/contact"
            hash="enquire"
            className="border-gold/70 text-gold hover:bg-gold hover:text-plum-ink mt-6 inline-flex border px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      <div className="border-ivory/10 border-t">
        <div className="text-ivory/45 mx-auto flex max-w-[88rem] flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {VENUE.name}. All rights reserved.
          </p>
          <p>
            {VENUE.locality}, {VENUE.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
