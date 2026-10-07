import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero, LocationSection, FaqSection, FinalCta } from "@/components/sections";
import { Reveal } from "@/components/site/Motion";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { IMAGES } from "@/lib/images";
import { VENUE, telHref, whatsappHref } from "@/lib/venue";

const TITLE = "Contact & Enquiry | Jay Shankar Festival Lawns, Nashik";
const DESCRIPTION =
  "Enquire about your celebration at Jay Shankar Festival Lawns, Panchavati, Nashik. Call 7588551533 or message the venue team on WhatsApp at 9922762225.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const actions = [
    { label: "Call Now", value: VENUE.phone, href: telHref, icon: Phone, external: false },
    {
      label: "WhatsApp Us",
      value: VENUE.whatsapp,
      href: whatsappHref(`Hello ${VENUE.name}, I'd like to enquire about hosting an event.`),
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Get Directions",
      value: VENUE.locality,
      href: VENUE.maps,
      icon: MapPin,
      external: true,
    },
    {
      label: "Follow on Instagram",
      value: "@jay_shankar_lawns",
      href: VENUE.instagram,
      icon: Instagram,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Ready to make it a grand one?"
        copy="Tell us about your celebration and our team can help you take the next step."
        image={IMAGES.heroLawn}
        alt="Evening wedding setup on the lawns at Jay Shankar Festival Lawns"
      />

      <section id="enquire" className="surface-plum scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Enquire</p>
            <h2 className="display-md text-ivory mt-6">Send your enquiry.</h2>
            <p className="text-ivory/70 mt-5 max-w-md text-sm leading-relaxed">
              Share a few details and they will open in WhatsApp, ready to send to the venue team.
            </p>

            <ul className="mt-10 space-y-5">
              {actions.map((a) => (
                <li key={a.label}>
                  <a
                    href={a.href}
                    {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group border-ivory/15 hover:border-gold flex items-center gap-4 border-b pb-4 transition-colors"
                  >
                    <a.icon size={18} strokeWidth={1.5} className="text-gold shrink-0" />
                    <span className="min-w-0">
                      <span className="eyebrow text-ivory/50 block">{a.label}</span>
                      <span className="text-ivory mt-1 block truncate text-base">{a.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <LocationSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
