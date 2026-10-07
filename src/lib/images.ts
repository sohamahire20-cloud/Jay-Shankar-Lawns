import heroLawn from "@/assets/hero-lawn.jpg";
import mainHall from "@/assets/main-hall.jpg";
import secondaryHall from "@/assets/secondary-hall.jpg";
import dining from "@/assets/dining.jpg";
import grandLawnWide from "@/assets/grand-lawn-wide.jpg";
import weddingStory from "@/assets/wedding-story.jpg";
import cuisine from "@/assets/cuisine.jpg";
import introVenue from "@/assets/intro-venue.jpg";
import gallerySangeet from "@/assets/gallery-sangeet.jpg";
import galleryEntrance from "@/assets/gallery-entrance.jpg";
import galleryMandap from "@/assets/gallery-mandap.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";

/**
 * Central image registry — replace any src here with authentic venue photography
 * and it updates everywhere on the site.
 */
export const IMAGES = {
  heroLawn,
  mainHall,
  secondaryHall,
  dining,
  grandLawnWide,
  weddingStory,
  cuisine,
  introVenue,
  gallerySangeet,
  galleryEntrance,
  galleryMandap,
  galleryCorporate,
};

export type GalleryCategory = "Weddings" | "Lawn" | "Halls" | "Dining" | "Celebrations";

export const GALLERY: {
  src: string;
  alt: string;
  category: GalleryCategory;
  tall?: boolean;
}[] = [
  {
    src: heroLawn,
    alt: "Open-air wedding lawn at Jay Shankar Festival Lawns lit with string lights at dusk",
    category: "Lawn",
  },
  {
    src: galleryMandap,
    alt: "Floral wedding mandap set for a traditional ceremony",
    category: "Weddings",
    tall: true,
  },
  {
    src: mainHall,
    alt: "Centrally air-conditioned main celebration hall with chandelier and floral stage",
    category: "Halls",
  },
  {
    src: dining,
    alt: "Dining hall arranged for a large celebration with buffet counters",
    category: "Dining",
  },
  {
    src: gallerySangeet,
    alt: "Sangeet evening stage with dance floor and celebration lighting",
    category: "Celebrations",
    tall: true,
  },
  {
    src: grandLawnWide,
    alt: "Wide view of the grand lawn at golden hour with pavilion seating",
    category: "Lawn",
  },
  {
    src: weddingStory,
    alt: "Baraat procession arriving at the venue entrance in the evening",
    category: "Weddings",
  },
  {
    src: secondaryHall,
    alt: "Secondary indoor hall with ivory and gold detailing and lounge seating",
    category: "Halls",
  },
  {
    src: galleryCorporate,
    alt: "Large corporate gathering seated inside the celebration hall",
    category: "Celebrations",
  },
  {
    src: galleryEntrance,
    alt: "Illuminated venue entrance and driveway at night",
    category: "Lawn",
  },
  {
    src: cuisine,
    alt: "Pure vegetarian Indian festive spread served in brass and copper vessels",
    category: "Dining",
  },
  {
    src: introVenue,
    alt: "Ivory drapery and floral stage detail inside the celebration hall",
    category: "Weddings",
    tall: true,
  },
];
