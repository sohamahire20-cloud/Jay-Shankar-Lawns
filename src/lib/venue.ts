export const VENUE = {
  name: "Jay Shankar Festival Lawns",
  tagline: "Where Grand Celebrations Come to Life.",
  locality: "Panchavati, Nashik",
  city: "Nashik",
  state: "Maharashtra",
  phone: "7588551533",
  phoneIntl: "+917588551533",
  whatsapp: "9922762225",
  whatsappIntl: "919922762225",
  instagram: "https://www.instagram.com/jay_shankar_lawns?igsh=YTY4Z2hkbDI0dGQ=",
  maps: "https://maps.app.goo.gl/kKB9ybWzFDpKnbg28",
  mapsEmbed:
    "https://www.google.com/maps?q=Jay+Shankar+Festival+Lawns+Panchavati+Nashik&output=embed",
} as const;

export const telHref = `tel:${VENUE.phoneIntl}`;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${VENUE.whatsappIntl}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const CAPACITIES = [
  { value: 4500, suffix: "+", label: "Lawn Capacity" },
  { value: 1400, suffix: "+", label: "Indoor Hall Capacity" },
  { value: 1000, suffix: "", label: "Concurrent Dining Capacity" },
  { value: 1200, suffix: "+", label: "Vehicle Parking Capacity" },
];

export const FACILITIES = [
  {
    title: "Central Air Conditioning",
    copy: "Climate-controlled indoor celebration spaces.",
    icon: "wind",
  },
  {
    title: "Large Dining Facility",
    copy: "A dedicated dining environment for large gatherings.",
    icon: "utensils",
  },
  {
    title: "Spacious Parking",
    copy: "On-site parking planned for large guest arrivals.",
    icon: "parking",
  },
  { title: "Valet Support", copy: "Assisted arrival and parking support.", icon: "key" },
  {
    title: "Changing Facilities",
    copy: "Private spaces to prepare between functions.",
    icon: "shirt",
  },
  {
    title: "Accessible Entry",
    copy: "Entry designed to be approachable for every guest.",
    icon: "accessibility",
  },
  {
    title: "Generator Backup",
    copy: "Power backup so the celebration continues uninterrupted.",
    icon: "zap",
  },
  {
    title: "Wide Event Spaces",
    copy: "Open layouts that adapt to the scale of the occasion.",
    icon: "maximize",
  },
] as const;

export const EVENTS = [
  {
    title: "Weddings",
    copy: "Begin your celebration in a setting made for unforgettable beginnings.",
  },
  { title: "Receptions", copy: "Bring everyone together for an evening worthy of the occasion." },
  { title: "Sangeet", copy: "Give every performance, tradition and celebration its moment." },
  { title: "Engagements", copy: "Celebrate the beginning of something beautiful." },
  { title: "Baby Showers", copy: "Gather your loved ones for a day filled with warmth and joy." },
  { title: "Traditional Ceremonies", copy: "Give meaningful traditions the space they deserve." },
  {
    title: "Corporate Events",
    copy: "Bring teams, guests and ideas together in a setting built for large gatherings.",
  },
  {
    title: "Cultural & Social Events",
    copy: "Create a memorable setting for gatherings that bring people together.",
  },
] as const;

export const FAQS = [
  {
    q: "What kinds of events can be hosted at Jay Shankar Festival Lawns?",
    a: "Weddings, receptions, sangeet evenings, engagements, baby showers, traditional ceremonies, corporate events and cultural or social gatherings.",
  },
  {
    q: "How many guests can the venue accommodate?",
    a: "The lawn accommodates up to 4,500 guests, the main air-conditioned hall up to 1,400 guests, the secondary hall up to 600 floating guests, and the dining area seats up to 1,000 guests.",
  },
  {
    q: "Is the venue air-conditioned?",
    a: "Yes — the main celebration hall is centrally air-conditioned, alongside the open-air lawn for outdoor functions.",
  },
  {
    q: "Is parking available?",
    a: "Yes. The venue has parking capacity for over 1,200 vehicles, with valet support.",
  },
  {
    q: "What kind of catering is offered?",
    a: "A pure vegetarian culinary experience, including North Indian, Mughlai, regional preparations and Jain-friendly options.",
  },
  {
    q: "Where is the venue located?",
    a: "Jay Shankar Festival Lawns is located in Panchavati, Nashik, Maharashtra.",
  },
  {
    q: "How do I enquire or check details for my date?",
    a: `Call ${VENUE.phone} or message the venue team on WhatsApp at ${VENUE.whatsapp}. You can also send an enquiry through the form on this website.`,
  },
] as const;
