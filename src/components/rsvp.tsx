import { useState } from "react";
import type { FormEvent } from "react";
import Reveal from "./Reveal";
const FORMSPREE_URL = "https://formspree.io/f/moevgrbz";

type FormState = {
  name: string;
  email: string;
  attending: "yes" | "no" | "";
  guests: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  attending: "",
  guests: "1",
  message: "",
};

const labelClass = "text-[11px] uppercase tracking-[0.3em] text-gold";
const fieldClass =
  "mt-3 w-full border-b border-cream/30 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-gold";

export default function Rsvp() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          guests: form.attending === "yes" ? form.guests : "0",
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(empty);
    setSubmitted(false);
    setStatus("idle");
  };

  const firstName = form.name.trim().split(" ")[0];

  return (
    <section
      id="rsvp"
      className="scroll-mt-20 bg-brown px-6 py-24 text-cream md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">RSVP</p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          Will you <span className="italic text-gold">join us?</span>
        </h2>
        <div className="my-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </div>
      </Reveal>

      <div className="mx-auto mt-6 max-w-xl">
        {submitted ? (
          <div className="border border-gold/40 px-8 py-14 text-center">
            <p className="font-script text-5xl text-gold">Thank you</p>
            <p className="mt-6 font-serif text-2xl">
              {form.attending === "yes"
                ? `We cannot wait to celebrate with you, ${firstName}.`
                : `We will miss you, ${firstName}, and are grateful you let us know.`}
            </p>
            <button
              onClick={reset}
              className="mt-10 border-b border-cream/40 pb-1 text-[10px] uppercase tracking-[0.25em] text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              Send another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className={fieldClass}
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>Will you be attending?</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  { value: "yes", text: "Joyfully accepts" },
                  { value: "no", text: "Regretfully declines" },
                ].map((opt) => (
                  <label key={opt.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value={opt.value}
                      required
                      checked={form.attending === opt.value}
                      onChange={() =>
                        update("attending", opt.value as "yes" | "no")
                      }
                      className="peer sr-only"
                    />
                    <span className="block border border-cream/30 px-4 py-4 text-center font-serif text-lg transition-colors peer-checked:border-gold peer-checked:bg-gold/15 peer-focus-visible:border-gold hover:border-gold/70">
                      {opt.text}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {form.attending === "yes" && (
              <div>
                <label htmlFor="guests" className={labelClass}>
                  Number of guests (including you)
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  style={{ colorScheme: "dark" }}
                  className="mt-3 w-full border-b border-cream/30 bg-brown py-3 text-cream outline-none transition-colors focus:border-gold"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} className="bg-brown text-cream">
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="message" className={labelClass}>
                A message for the couple (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Your wishes, song requests, dietary needs..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-gold bg-gold px-12 py-4 text-[11px] uppercase tracking-[0.35em] text-brown transition-colors hover:bg-transparent hover:text-gold disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send RSVP"}
              </button>

              {status === "error" && (
                <p className="mt-6 text-sm text-cream/70">
                  Something went wrong. Please try again in a moment.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
