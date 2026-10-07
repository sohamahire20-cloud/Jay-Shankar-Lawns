import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  FacilitiesSection,
  GrandScale,
  WhyJayShankar,
  FaqSection,
  FinalCta,
} from "@/components/sections";
import { IMAGES } from "@/lib/images";

const TITLE = "Facilities & Capacity | Jay Shankar Festival Lawns, Nashik";
const DESCRIPTION =
  "Central air conditioning, dining for 1,000 guests, parking for 1,200+ vehicles, valet support, changing facilities, accessible entry and generator backup in Nashik.";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Everything designed around the celebration."
        copy="Infrastructure planned for large gatherings, so the occasion moves smoothly from arrival to farewell."
        image={IMAGES.galleryEntrance}
        alt="Illuminated venue entrance and driveway at night"
      />
      <FacilitiesSection />
      <GrandScale />
      <WhyJayShankar />
      <FaqSection />
      <FinalCta />
    </>
  );
}
