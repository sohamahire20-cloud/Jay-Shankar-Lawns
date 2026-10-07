import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  Wind,
  Utensils,
  CircleParking,
  KeyRound,
  Shirt,
  Accessibility,
  Zap,
  Maximize,
} from "lucide-react";
import { Reveal, Counter } from "@/components/site/Motion";
import { IMAGES } from "@/lib/images";
import { CAPACITIES, EVENTS, FACILITIES, FAQS, VENUE, telHref, whatsappHref } from "@/lib/venue";

/* ---------------------------------- HERO --------------------------------- */

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={IMAGES.heroLawn}
        alt="Jay Shankar Festival Lawns illuminated for an evening wedding celebration in Nashik"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="from-plum-ink absolute inset-0 bg-gradient-to-t via-plum-ink/45 to-plum-ink/70" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[88rem] px-5 pb-24 sm:px-8 sm:pb-28">
        <p
          className="eyebrow animate-rise text-gold"
          style={{ animationDelay: "180ms" }}
        >
          {VENUE.name}
        </p>
        <h1
          className="display-xl animate-rise text-ivory mt-6 max-w-4xl"
          style={{ animationDelay: "320ms" }}
        >
          Where grand celebrations come to life.
        </h1>
        <p
          className="animate-rise text-ivory/80 mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ animationDelay: "480ms" }}
        >
          A grand celebration destination in Nashik, designed for weddings, gatherings and
          unforgettable moments.
        </p>
        <div
          className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: "620ms" }}
        >
          <Link
            to="/venues"
            className="group bg-gold text-plum-ink hover:bg-gold-soft inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors"
          >
            Explore the Venue
            <ArrowRight
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            to="/contact"
            hash="enquire"
            className="border-ivory/40 text-ivory hover:border-gold hover:text-gold inline-flex items-center justify-center border px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      <div className="text-ivory/60 absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="eyebrow text-[0.6rem]">Discover More</span>
        <span className="animate-scroll-hint bg-gold/70 h-10 w-px" aria-hidden="true" />
      </div>
    </section>
  );
}

/* --------------------------------- INTRO --------------------------------- */

export function Intro() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow text-plum">The Jay Shankar Experience</p>
          <span className="rule-gold mt-5" />
          <h2 className="display-lg text-plum-deep mt-7">One grand setting. Countless moments.</h2>
          <p className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed">
            From the first arrival to the final celebration, Jay Shankar Festival Lawns brings
            space, scale and elegance together under one roof. Set in Nashik, the venue is designed
            to host the occasions that matter most — from grand weddings and receptions to intimate
            celebrations, cultural gatherings and corporate events.
          </p>
          <Link
            to="/events"
            className="link-underline text-plum mt-9 inline-flex items-center gap-2 text-[0.74rem] tracking-[0.2em] uppercase"
          >
            See what you can host <ArrowRight size={15} strokeWidth={1.6} />
          </Link>
        </Reveal>

        <Reveal delay={140} className="order-1 lg:order-2">
          <div className="relative">
            <img
              src={IMAGES.introVenue}
              alt="Ivory drapery and floral stage detailing inside the celebration hall"
              loading="lazy"
              width={1008}
              height={1200}
              className="aspect-[4/5] w-full object-cover"
            />
            <span className="border-gold/60 pointer-events-none absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- STATS -------------------------------- */

export function GrandScale() {
  return (
    <section className="surface-dark grain relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal>
          <h2 className="display-lg text-ivory max-w-2xl">Built for grand moments.</h2>
          <p className="text-ivory/60 mt-5 max-w-md text-sm leading-relaxed">
            When the guest list is large, the setting should be ready.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {CAPACITIES.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 110}
              className="border-ivory/10 border-t py-8 lg:border-l lg:border-t-0 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-display text-gold text-[clamp(2.75rem,6vw,4.25rem)] leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="eyebrow text-ivory/60 mt-4">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <p className="text-ivory/35 mt-12 max-w-2xl text-xs leading-relaxed">
          Figures indicate venue capacity. For arrangements specific to your celebration, please
          speak with the venue team.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------- VENUES -------------------------------- */

export const SPACES = [
  {
    title: "The Grand Lawn",
    copy: "An expansive open-air setting created for celebrations that deserve to feel truly grand.",
    highlight: "Up to 4,500 guests",
    image: IMAGES.grandLawnWide,
    alt: "The Grand Lawn at Jay Shankar Festival Lawns at golden hour",
  },
  {
    title: "The Main AC Hall",
    copy: "A spacious centrally air-conditioned celebration hall designed for elegant indoor gatherings and large-scale events.",
    highlight: "Up to 1,400 guests",
    image: IMAGES.mainHall,
    alt: "Centrally air-conditioned main celebration hall with chandelier",
  },
  {
    title: "The Secondary Hall",
    copy: "A versatile indoor space suited to celebrations and gatherings where comfort and flexibility matter.",
    highlight: "Up to 600 floating guests",
    image: IMAGES.secondaryHall,
    alt: "Secondary indoor hall with ivory and gold detailing",
  },
  {
    title: "Dedicated Dining",
    copy: "A dedicated dining environment designed to keep large celebrations moving smoothly from ceremony to meal.",
    highlight: "Up to 1,000 guests seated",
    image: IMAGES.dining,
    alt: "Dining hall arranged for a large celebration",
  },
];

export function Spaces({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        {heading && (
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-plum">The Spaces</p>
            <span className="rule-gold mt-5" />
            <h2 className="display-lg text-plum-deep mt-7">
              Room to celebrate. Space to remember.
            </h2>
          </Reveal>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SPACES.map((space, i) => (
            <Reveal key={space.title} delay={(i % 2) * 120}>
              <article className="group relative overflow-hidden">
                <img
                  src={space.image}
                  alt={space.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="from-plum-ink/95 absolute inset-0 bg-gradient-to-t via-plum-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="bg-gold block h-px w-0 transition-all duration-500 group-hover:w-12" />
                  <h3 className="font-display text-ivory mt-4 text-2xl sm:text-3xl">
                    {space.title}
                  </h3>
                  <p className="text-ivory/70 mt-3 max-w-md text-sm leading-relaxed">
                    {space.copy}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="eyebrow text-gold">{space.highlight}</span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.4}
                      className="text-ivory/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ LAWN FEATURE ----------------------------- */

export function LawnFeature() {
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden">
      <img
        src={IMAGES.grandLawnWide}
        alt="Wide view of the grand celebration lawn with pavilion seating"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="from-plum-ink/95 absolute inset-0 bg-gradient-to-r via-plum-ink/60 to-plum-ink/20" />
      <div className="relative mx-auto w-full max-w-[88rem] px-5 py-24 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">The Grand Lawn</p>
          <h2 className="display-lg text-ivory mt-6">
            Made for celebrations that deserve a bigger stage.
          </h2>
          <p className="text-ivory/75 mt-6 max-w-lg text-base leading-relaxed">
            An expansive open-air setting designed to welcome grand weddings, receptions, cultural
            celebrations and large gatherings.
          </p>
          <p className="font-display text-gold mt-10 text-4xl sm:text-5xl">Up to 4,500 guests</p>
          <Link
            to="/venues"
            className="group border-ivory/40 text-ivory hover:border-gold hover:text-gold mt-10 inline-flex items-center gap-3 border px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors"
          >
            Explore the Venue
            <ArrowRight
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- EVENTS -------------------------------- */

export function EventsSection({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        {heading && (
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-plum">Celebrate Your Way</p>
            <span className="rule-gold mt-5" />
            <h2 className="display-lg text-plum-deep mt-7">For every moment worth celebrating.</h2>
          </Reveal>
        )}

        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((event, i) => (
            <Reveal
              key={event.title}
              delay={(i % 4) * 90}
              className="border-border group border-t py-8 sm:px-6 sm:first:pl-0"
            >
              <h3 className="font-display text-plum-deep text-2xl">{event.title}</h3>
              <span className="bg-gold mt-3 block h-px w-8 transition-all duration-500 group-hover:w-16" />
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{event.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- WEDDING STORY ------------------------------ */

export function WeddingStory() {
  return (
    <section className="surface-plum py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={IMAGES.weddingStory}
            alt="Baraat procession arriving at an illuminated venue entrance"
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display-lg text-ivory">
            Your biggest moments deserve a grander setting.
          </h2>
          <p className="text-ivory/75 mt-7 max-w-xl text-base leading-relaxed">
            From the arrival of the baraat to the final celebration, every moment deserves a setting
            that feels as special as the occasion itself. Jay Shankar Festival Lawns brings scale,
            space and celebration together for weddings that are meant to be remembered.
          </p>
          <ul className="mt-9 flex flex-wrap gap-3">
            {["Weddings", "Receptions", "Sangeet", "Ceremonies"].map((label) => (
              <li
                key={label}
                className="eyebrow border-ivory/25 text-ivory/70 border px-4 py-2"
              >
                {label}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            hash="enquire"
            className="group bg-gold text-plum-ink hover:bg-gold-soft mt-10 inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors"
          >
            Plan Your Celebration
            <ArrowRight
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- CUISINE -------------------------------- */

export function Cuisine() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-plum">The Celebration Table</p>
          <span className="rule-gold mt-5" />
          <h2 className="display-lg text-plum-deep mt-7">Pure vegetarian hospitality.</h2>
          <p className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed">
            Bring your celebration to the table with a pure vegetarian culinary experience created
            for festive gatherings. From familiar North Indian favourites to rich Mughlai flavours,
            regional preparations and Jain-friendly options, the dining experience is designed to
            complement the occasion.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={IMAGES.cuisine}
            alt="Pure vegetarian Indian festive dishes served in brass and copper vessels"
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- FACILITIES ------------------------------ */

const ICONS = {
  wind: Wind,
  utensils: Utensils,
  parking: CircleParking,
  key: KeyRound,
  shirt: Shirt,
  accessibility: Accessibility,
  zap: Zap,
  maximize: Maximize,
} as const;

export function FacilitiesSection() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-plum">Facilities</p>
          <span className="rule-gold mt-5" />
          <h2 className="display-lg text-plum-deep mt-7">
            Everything designed around the celebration.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <Icon size={26} strokeWidth={1.1} className="text-gold" />
                <h3 className="font-display text-plum-deep mt-5 text-xl">{f.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{f.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- WHY US -------------------------------- */

export function WhyJayShankar() {
  const pillars = [
    { title: "Scale", copy: "Space for celebrations that bring everyone together." },
    {
      title: "Flexibility",
      copy: "Multiple event environments for different moments of the occasion.",
    },
    { title: "Experience", copy: "A venue designed around the rhythm of large celebrations." },
  ];

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow text-plum">Why Jay Shankar</p>
          <span className="rule-gold mt-5" />
          <h2 className="display-lg text-plum-deep mt-7">Grand in scale. Thoughtful in detail.</h2>
          <p className="text-muted-foreground mt-7 text-base leading-relaxed">
            Jay Shankar Festival Lawns brings together the space, infrastructure and atmosphere
            needed for celebrations of every scale. From expansive outdoor gatherings to elegant
            indoor functions, the venue is designed to help large occasions feel seamless, memorable
            and distinctly yours.
          </p>
        </Reveal>

        <div className="flex flex-col justify-center">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="border-border border-t py-8">
              <h3 className="font-display text-plum-deep text-3xl">{p.title}</h3>
              <p className="text-muted-foreground mt-3 max-w-md text-sm leading-relaxed">
                {p.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SOCIAL PROOF ----------------------------- */

export function SocialProof() {
  return (
    <section className="bg-secondary py-24 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-plum">Guest Voices</p>
          <span className="rule-gold mt-5" />
          <h2 className="display-lg text-plum-deep mt-7">
            Celebrations that speak for themselves.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl text-sm leading-relaxed">
            Reviews from guests and hosts are published on the venue's Google listing. We prefer to
            let those come directly from the people who celebrated here, rather than reproduce them
            unverified.
          </p>
          <a
            href={VENUE.maps}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-plum mt-8 inline-flex items-center gap-2 text-[0.74rem] tracking-[0.2em] uppercase"
          >
            View more reviews <ArrowUpRight size={15} strokeWidth={1.6} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- INSTAGRAM ------------------------------ */

export function InstagramSection() {
  return (
    <section className="surface-plum py-20 sm:py-24">
      <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <p className="eyebrow text-gold">Follow the Celebrations</p>
          <h2 className="display-md text-ivory mt-5 max-w-xl">
            Discover more celebrations, venue moments and inspiration on Instagram.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href={VENUE.instagram}
            target="_blank"
            rel="noreferrer"
            className="group border-gold/70 text-gold hover:bg-gold hover:text-plum-ink inline-flex items-center gap-3 border px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors"
          >
            <Instagram size={17} strokeWidth={1.5} />
            Follow on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- LOCATION ------------------------------- */

export function LocationSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-plum">Find Us</p>
          <span className="rule-gold mt-5" />
          <h2 className="display-lg text-plum-deep mt-7">
            Your celebration, right here in Nashik.
          </h2>
          <p className="text-muted-foreground mt-7 max-w-lg text-base leading-relaxed">
            Conveniently located in Panchavati, Nashik, Jay Shankar Festival Lawns offers an
            accessible setting for celebrations and gatherings.
          </p>
          <a
            href={VENUE.maps}
            target="_blank"
            rel="noreferrer"
            className="group bg-plum text-primary-foreground hover:bg-plum-deep mt-9 inline-flex items-center gap-3 px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors"
          >
            <MapPin
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            Get Directions
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-border overflow-hidden border">
            <iframe
              title="Map showing Jay Shankar Festival Lawns in Panchavati, Nashik"
              src={VENUE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full sm:h-[26rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

export function FaqSection() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-plum">Good to Know</p>
          <span className="rule-gold mt-5" />
          <h2 className="display-lg text-plum-deep mt-7">Questions, answered.</h2>
        </Reveal>
        <div>
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="border-border group border-b py-5">
                <summary className="text-plum-deep flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium">
                  {faq.q}
                  <span className="text-gold shrink-0 text-xl transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FINAL CTA ------------------------------ */

export function FinalCta() {
  return (
    <section className="surface-dark grain relative py-28 sm:py-36">
      <div className="relative mx-auto max-w-[88rem] px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="display-lg text-ivory mx-auto max-w-4xl">
            Your celebration deserves a grand setting.
          </h2>
          <p className="text-ivory/65 mx-auto mt-6 max-w-lg text-base leading-relaxed">
            Make your next gathering a moment worth remembering.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              hash="enquire"
              className="bg-gold text-plum-ink hover:bg-gold-soft inline-flex w-full items-center justify-center px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors sm:w-auto"
            >
              Enquire Now
            </Link>
            <a
              href={whatsappHref(`Hello ${VENUE.name}, I'd like to enquire about hosting an event.`)}
              target="_blank"
              rel="noreferrer"
              className="border-ivory/40 text-ivory hover:border-gold hover:text-gold inline-flex w-full items-center justify-center gap-2 border px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors sm:w-auto"
            >
              <MessageCircle size={16} strokeWidth={1.6} /> WhatsApp Us
            </a>
            <a
              href={telHref}
              className="border-ivory/40 text-ivory hover:border-gold hover:text-gold inline-flex w-full items-center justify-center gap-2 border px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase transition-colors sm:w-auto"
            >
              <Phone size={16} strokeWidth={1.6} /> Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ PAGE HEADER ------------------------------ */

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="from-plum-ink absolute inset-0 bg-gradient-to-t via-plum-ink/55 to-plum-ink/70" />
      <div className="relative mx-auto w-full max-w-[88rem] px-5 pb-16 sm:px-8 sm:pb-20">
        <p className="eyebrow animate-rise text-gold">{eyebrow}</p>
        <h1 className="display-lg animate-rise text-ivory mt-5 max-w-3xl" style={{ animationDelay: "140ms" }}>
          {title}
        </h1>
        <p
          className="animate-rise text-ivory/75 mt-5 max-w-xl text-base leading-relaxed"
          style={{ animationDelay: "260ms" }}
        >
          {copy}
        </p>
      </div>
    </section>
  );
}
