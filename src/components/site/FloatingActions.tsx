import { useEffect, useRef, useState } from "react";
import { Instagram, Phone, MessageCircle, MessagesSquare, X, Send } from "lucide-react";
import { VENUE, telHref, whatsappHref } from "@/lib/venue";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Welcome to Jay Shankar Festival Lawns. How can I help you explore the venue?";

const QUICK = [
  "Tell me about the venue",
  "What events can I host here?",
  "What spaces are available?",
  "What is the venue capacity?",
  "What facilities are available?",
  "Where are you located?",
  "How can I contact you?",
  "How can I enquire?",
];

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed right-4 bottom-4 z-[70] flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
        <FloatingLink
          href={VENUE.instagram}
          label="Instagram"
          external
          icon={<Instagram size={19} strokeWidth={1.6} />}
        />
        <FloatingLink
          href={telHref}
          label={`Call ${VENUE.phone}`}
          icon={<Phone size={19} strokeWidth={1.6} />}
        />
        <FloatingLink
          href={whatsappHref(`Hello ${VENUE.name}, I'd like to enquire about hosting an event.`)}
          label="WhatsApp us"
          external
          icon={<MessageCircle size={19} strokeWidth={1.6} />}
        />
        <button
          type="button"
          onClick={() => setChatOpen((v) => !v)}
          aria-label={chatOpen ? "Close venue assistant" : "Open venue assistant"}
          aria-expanded={chatOpen}
          className="group bg-gold text-plum-ink hover:bg-gold-soft relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          {chatOpen ? (
            <X size={20} strokeWidth={1.7} />
          ) : (
            <MessagesSquare size={20} strokeWidth={1.6} />
          )}
          <Tooltip>{chatOpen ? "Close chat" : "Ask the venue assistant"}</Tooltip>
        </button>
      </div>

      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-plum-ink text-ivory pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap px-3 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
      {children}
    </span>
  );
}

function FloatingLink({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group border-gold/40 bg-plum-ink/95 text-ivory hover:border-gold hover:text-gold relative flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur transition-all duration-300 hover:scale-105"
    >
      {icon}
      <Tooltip>{label}</Tooltip>
    </a>
  );
}

function ChatPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12) }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            data.reply ??
            `I'm sorry, I don't have enough verified information to answer that accurately. Please call ${VENUE.phone} or message ${VENUE.name} on WhatsApp at ${VENUE.whatsapp} and the venue team can assist you.`,
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `I'm having trouble responding right now. Please call ${VENUE.phone} or message ${VENUE.name} on WhatsApp at ${VENUE.whatsapp}.`,
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className={cn(
        "fixed right-3 bottom-20 z-[75] flex w-[min(23rem,calc(100vw-1.5rem))] flex-col overflow-hidden border shadow-2xl transition-all duration-300 sm:right-6 sm:bottom-24",
        "border-gold/25 bg-plum-ink",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
      role="dialog"
      aria-label="Venue assistant"
      aria-hidden={!open}
    >
      <div className="border-ivory/10 flex items-center justify-between border-b px-5 py-4">
        <div>
          <p className="font-display text-ivory text-lg leading-none">Venue Assistant</p>
          <p className="eyebrow text-gold mt-1.5">Jay Shankar Festival Lawns</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="text-ivory/60 hover:text-gold p-1"
        >
          <X size={18} strokeWidth={1.6} />
        </button>
      </div>

      <div ref={scrollRef} className="max-h-[52vh] min-h-[16rem] flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "text-sm leading-relaxed whitespace-pre-line",
              m.role === "user"
                ? "bg-gold text-plum-ink ml-auto w-fit max-w-[85%] px-4 py-2.5"
                : "text-ivory/85",
            )}
          >
            {m.content}
          </div>
        ))}
        {loading && <p className="text-gold/70 animate-pulse text-sm">Thinking…</p>}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => void send(q)}
                className="border-ivory/20 text-ivory/70 hover:border-gold hover:text-gold border px-3 py-1.5 text-xs transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="border-ivory/10 border-t p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
          className="flex items-end gap-2"
        >
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send(input);
              }
            }}
            placeholder="Ask about the venue…"
            aria-label="Message the venue assistant"
            className="text-ivory placeholder:text-ivory/40 focus:border-gold border-ivory/20 max-h-24 flex-1 resize-none border bg-transparent px-3 py-2.5 text-sm focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="bg-gold text-plum-ink flex h-10 w-10 shrink-0 items-center justify-center transition-opacity disabled:opacity-40"
          >
            <Send size={16} strokeWidth={1.7} />
          </button>
        </form>
        <a
          href={whatsappHref(`Hello ${VENUE.name}, I have a question about hosting an event.`)}
          target="_blank"
          rel="noreferrer"
          className="text-ivory/50 hover:text-gold mt-2 block text-center text-[0.7rem] tracking-[0.12em] uppercase transition-colors"
        >
          WhatsApp the Venue
        </a>
      </div>
    </div>
  );
}
