import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  EventsSection,
  WeddingStory,
  Cuisine,
  FinalCta,
} from "@/components/sections";
import { IMAGES } from "@/lib/images";

const TITLE = "Events & Celebrations | Jay Shankar Festival Lawns, Nashik";
const DESCRIPTION =
  "Weddings, receptions, sangeet, engagements, ceremonies, corporate and cultural events — hosted at Jay Shankar Festival Lawns in Panchavati, Nashik.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Celebrate Your Way"
        title="For every moment worth celebrating."
        copy="From weddings and receptions to cultural gatherings and corporate events, the venue adapts to the occasion."
        image={IMAGES.gallerySangeet}
        alt="Sangeet celebration stage with dance floor and warm lighting"
      />
      <EventsSection heading={false} />
      <WeddingStory />
      <Cuisine />
      <FinalCta />
    </>
  );
}
