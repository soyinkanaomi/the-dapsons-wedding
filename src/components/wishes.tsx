import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const wishes = [
  {
    message:
      "Seeing the two of you together has always felt like home. May your marriage be full of laughter, patience, and the kind of love that grows quieter and stronger every year.",
    name: "Dabira, sister-in-law",
  },
  {
    message:"You found each other and chose each other, and that is the whole story. We are so proud of you both and cannot wait to celebrate.",
    name: "Emmanuel, friend",
  },
  {
    message:   "Wishing you a lifetime of ordinary Tuesdays that feel like holidays, and a home that is always full of people who love you.",
    name: "chuks, bride's brother",
  },
  {
    message:    "Marriage is a long and beautiful conversation. May yours always be full of kindness, good humour, and the joy of choosing each other, again and again.",
    name: "naomi, family friend",
  },
];

export default function Wishes() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % wishes.length);
  const prev = () => setIndex((i) => (i - 1 + wishes.length) % wishes.length);

  useEffect(() => {
    if (paused || wishes.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % wishes.length),
      6000,
    );
    return () => clearInterval(id);
  }, [paused]);

  if (wishes.length === 0) return null;

  return (
    <section
      id="wishes"
      className="scroll-mt-20 bg-brown px-6 py-24 text-cream md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          Wishes
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          Words from the <span className="italic text-gold">heart</span>
        </h2>
        <div className="my-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </div>
      </Reveal>

      <div
        className="mx-auto mt-10 flex max-w-4xl items-center gap-4 md:gap-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          onClick={prev}
          className="text-4xl text-cream/60 transition-colors hover:text-gold"
          aria-label="Previous wish"
        >
          ‹
        </button>

        <div className="grid flex-1">
          {wishes.map((w, i) => (
            <figure
              key={i}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 flex flex-col items-center justify-center text-center transition-opacity duration-700 ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <span className="font-serif text-6xl leading-none text-gold/60">
                “
              </span>
              <blockquote className="font-serif text-2xl font-light italic leading-relaxed md:text-3xl">
                {w.message}
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.35em] text-gold">
                {w.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          onClick={next}
          className="text-4xl text-cream/60 transition-colors hover:text-gold"
          aria-label="Next wish"
        >
          ›
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-3">
        {wishes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show wish ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-gold" : "bg-cream/30 hover:bg-cream/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
