import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { VENUE, whatsappHref } from "@/lib/venue";

const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Sangeet",
  "Engagement",
  "Baby Shower",
  "Traditional Ceremony",
  "Corporate Event",
  "Cultural / Social Event",
  "Other",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: EVENT_TYPES[0],
    date: "",
    guests: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Enquiry for ${VENUE.name}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Event Type: ${form.eventType}`,
      form.date ? `Event Date: ${form.date}` : null,
      form.guests ? `Approximate Guests: ${form.guests}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const fieldClass =
    "w-full border-b border-ivory/25 bg-transparent py-3 text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none transition-colors text-[0.95rem]";
  const labelClass = "eyebrow text-ivory/50 block mb-1";

  if (sent) {
    return (
      <div className="border-gold/30 bg-ivory/5 flex flex-col items-start border p-8 sm:p-12">
        <span className="border-gold text-gold flex h-12 w-12 items-center justify-center rounded-full border">
          <Check size={22} strokeWidth={1.5} />
        </span>
        <h3 className="font-display text-ivory mt-6 text-3xl">Your enquiry is on its way.</h3>
        <p className="text-ivory/70 mt-3 max-w-md text-sm leading-relaxed">
          WhatsApp should now be open with your details ready to send. If it did not open, you can
          reach the venue team directly on {VENUE.whatsapp} or call {VENUE.phone}.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="link-underline text-gold mt-6 text-[0.75rem] tracking-[0.2em] uppercase"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label className={labelClass} htmlFor="enq-name">
          Name
        </label>
        <input
          id="enq-name"
          required
          value={form.name}
          onChange={(e) => set("name")(e.target.value)}
          className={fieldClass}
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="enq-phone">
          Phone Number
        </label>
        <input
          id="enq-phone"
          required
          inputMode="tel"
          value={form.phone}
          onChange={(e) => set("phone")(e.target.value)}
          className={fieldClass}
          placeholder="10-digit mobile number"
          autoComplete="tel"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="enq-type">
          Event Type
        </label>
        <select
          id="enq-type"
          value={form.eventType}
          onChange={(e) => set("eventType")(e.target.value)}
          className={`${fieldClass} [&>option]:text-plum-ink`}
        >
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="enq-date">
          Event Date
        </label>
        <input
          id="enq-date"
          type="date"
          value={form.date}
          onChange={(e) => set("date")(e.target.value)}
          className={`${fieldClass} [color-scheme:dark]`}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="enq-guests">
          Approximate Guest Count
        </label>
        <input
          id="enq-guests"
          inputMode="numeric"
          value={form.guests}
          onChange={(e) => set("guests")(e.target.value)}
          className={fieldClass}
          placeholder="e.g. 800"
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="enq-message">
          Message
        </label>
        <textarea
          id="enq-message"
          rows={3}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          className={`${fieldClass} resize-none`}
          placeholder="Tell us a little about your celebration"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group bg-gold text-plum-ink hover:bg-gold-soft inline-flex items-center gap-3 px-8 py-4 text-[0.75rem] tracking-[0.24em] uppercase transition-colors"
        >
          Send Enquiry on WhatsApp
          <ArrowUpRight
            size={16}
            strokeWidth={1.6}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
        <p className="text-ivory/45 mt-4 text-xs">
          Your details open in WhatsApp, ready to send to the venue team.
        </p>
      </div>
    </form>
  );
}
