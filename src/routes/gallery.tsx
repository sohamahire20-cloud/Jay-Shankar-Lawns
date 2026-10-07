import { createFileRoute } from "@tanstack/react-router";
import { PageHero, InstagramSection, FinalCta } from "@/components/sections";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { IMAGES } from "@/lib/images";

const TITLE = "Gallery | Jay Shankar Festival Lawns, Nashik";
const DESCRIPTION =
  "A glimpse into the lawns, halls, dining spaces and celebrations at Jay Shankar Festival Lawns in Panchavati, Nashik.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See the celebrations."
        copy="A glimpse into the spaces, celebrations and atmosphere of Jay Shankar Festival Lawns."
        image={IMAGES.galleryMandap}
        alt="Floral mandap prepared for a traditional wedding ceremony"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <GalleryGrid />
        </div>
      </section>
      <InstagramSection />
      <FinalCta />
    </>
  );
}
