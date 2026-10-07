import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Spaces, LawnFeature, FinalCta, LocationSection } from "@/components/sections";
import { IMAGES } from "@/lib/images";

const TITLE = "Venues & Event Spaces | Jay Shankar Festival Lawns, Nashik";
const DESCRIPTION =
  "Explore the event spaces at Jay Shankar Festival Lawns, Nashik: a 4,500-guest open lawn, a centrally air-conditioned hall, a secondary hall and dedicated dining.";

export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/venues" }],
  }),
  component: VenuesPage,
});

function VenuesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Spaces"
        title="Room to celebrate. Space to remember."
        copy="Four distinct settings, each designed to carry a different moment of your celebration."
        image={IMAGES.mainHall}
        alt="Main air-conditioned celebration hall at Jay Shankar Festival Lawns"
      />
      <Spaces heading={false} />
      <LawnFeature />
      <LocationSection />
      <FinalCta />
    </>
  );
}
