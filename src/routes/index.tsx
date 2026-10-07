import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Intro,
  GrandScale,
  Spaces,
  LawnFeature,
  EventsSection,
  WeddingStory,
  Cuisine,
  FacilitiesSection,
  WhyJayShankar,
  SocialProof,
  InstagramSection,
  LocationSection,
  FaqSection,
  FinalCta,
} from "@/components/sections";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Motion";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { VENUE } from "@/lib/venue";

const TITLE = "Jay Shankar Festival Lawns | Wedding Venue & Lawns in Nashik";
const DESCRIPTION =
  "A grand celebration destination in Panchavati, Nashik. Wedding lawns for up to 4,500 guests, an AC banquet hall, dining for 1,000 and parking for 1,200+ vehicles.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: VENUE.name,
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Panchavati, Nashik",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  telephone: VENUE.phoneIntl,
  maximumAttendeeCapacity: 4500,
  sameAs: [VENUE.instagram, VENUE.maps],
  hasMap: VENUE.maps,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <GrandScale />
      <Spaces />
      <LawnFeature />
      <EventsSection />
      <WeddingStory />
      <Cuisine />
      <FacilitiesSection />
      <WhyJayShankar />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-plum">Gallery</p>
            <span className="rule-gold mt-5" />
            <h2 className="display-lg text-plum-deep mt-7">See the celebrations.</h2>
            <p className="text-muted-foreground mt-6 max-w-xl text-sm leading-relaxed">
              A glimpse into the spaces, celebrations and atmosphere of Jay Shankar Festival Lawns.
            </p>
          </Reveal>
          <div className="mt-12">
            <GalleryGrid limit={6} />
          </div>
        </div>
      </section>

      <SocialProof />
      <InstagramSection />
      <LocationSection />

      <section id="enquire" className="surface-plum scroll-mt-24 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Enquire</p>
            <h2 className="display-lg text-ivory mt-6">Ready to make it a grand one?</h2>
            <p className="text-ivory/70 mt-6 max-w-md text-base leading-relaxed">
              Tell us about your celebration and our team can help you take the next step.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <FaqSection />
      <FinalCta />
    </>
  );
}
