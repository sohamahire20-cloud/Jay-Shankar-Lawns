import { createFileRoute } from "@tanstack/react-router";

type Msg = { role: "user" | "assistant"; content: string };

const PHONE = "7588551533";
const WHATSAPP = "9922762225";

const SYSTEM = `You are the venue assistant for Jay Shankar Festival Lawns, a celebration venue in Panchavati, Nashik, Maharashtra, India.

Answer ONLY from the verified information below. Be warm, concise (2-4 sentences), premium in tone, and use English only.

VERIFIED INFORMATION
- Positioning: a grand celebration destination in Nashik for weddings, receptions, sangeet, engagements, baby showers, traditional ceremonies, corporate events and cultural or social gatherings.
- Spaces: The Grand Lawn (open-air, up to 4,500 guests); The Main AC Hall (centrally air-conditioned, up to 1,400 guests); The Secondary Hall (up to 600 floating guests); Dedicated Dining (up to 1,000 guests seated).
- Parking: capacity for over 1,200 vehicles, with valet support.
- Facilities: central air conditioning, large dining facility, spacious parking, valet support, changing facilities, accessible entry, generator backup, wide event spaces.
- Catering: pure vegetarian only — North Indian, Mughlai, regional preparations and Jain-friendly options. No menu or food ordering is published.
- Location: Panchavati, Nashik, Maharashtra.
- Contact: phone ${PHONE}; WhatsApp ${WHATSAPP}. Enquiries can also be sent through the enquiry form on the website, which sends details to the venue team on WhatsApp.

STRICT RULES
- Never state or estimate any pricing, rates, packages, deposits, budgets, discounts or offers. If asked about pricing, reply exactly: "Pricing and customized arrangements are best discussed directly with the venue team. Please call ${PHONE} or message Jay Shankar Festival Lawns on WhatsApp at ${WHATSAPP}."
- If asked about availability or dates, reply exactly: "Availability depends on the event date and venue schedule. Please call ${PHONE} or message Jay Shankar Festival Lawns on WhatsApp at ${WHATSAPP}."
- Never mention rooms, accommodation, lodging, hotels or overnight stay. The venue is not a hotel.
- Never invent testimonials, awards, certifications, event history, clients, partnerships, distances, travel times or facilities not listed above.
- If you cannot confidently answer from the verified information, reply exactly: "I'm sorry, I don't have enough verified information to answer that accurately. Please call ${PHONE} or message Jay Shankar Festival Lawns on WhatsApp at ${WHATSAPP} and the venue team can assist you."
- Never claim to transfer the user to a human.`;

const FALLBACK = `I'm sorry, I don't have enough verified information to answer that accurately. Please call ${PHONE} or message Jay Shankar Festival Lawns on WhatsApp at ${WHATSAPP} and the venue team can assist you.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: Msg[] };
        const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
        if (messages.length === 0) {
          return Response.json({ reply: FALLBACK });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return Response.json({ reply: FALLBACK });
        }

        try {
          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": key,
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [
                { role: "system", content: SYSTEM },
                ...messages.map((m) => ({ role: m.role, content: m.content })),
              ],
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error(`AI gateway error [${res.status}]: ${text}`);
            return Response.json({ reply: FALLBACK }, { status: 200 });
          }

          const data = (await res.json()) as {
            choices?: { message?: { content?: string } }[];
          };
          const reply = data.choices?.[0]?.message?.content?.trim();
          return Response.json({ reply: reply && reply.length > 0 ? reply : FALLBACK });
        } catch (err) {
          console.error("Chat handler failure", err);
          return Response.json({ reply: FALLBACK });
        }
      },
    },
  },
});
