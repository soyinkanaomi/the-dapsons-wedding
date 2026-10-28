// import { Config } from "tailwindcss";
const links = [
  "Story",
  "Details",
  "travel",
  "Gallery",
  "Gifts",
  "RSVP",
  "Contact"
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/30 bg-brown px-6 py-16 text-center text-cream md:py-20">
      <a href="#top" className="font-serif text-3xl tracking-widest">
        S<span className="mx-1 italic text-gold">&</span>F
      </a>

      <p className="mt-8 font-script text-5xl text-gold md:text-6xl">
        Simi &amp; Femi
      </p>

      <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-cream/70">
        14 November 2026 · Lagos, Nigeria
      </p>

      <div className="mx-auto my-10 flex items-center justify-center gap-4 text-gold">
        <span className="h-px w-16 bg-gold/50" />
        <span className="text-xs">✿</span>
        <span className="h-px w-16 bg-gold/50" />
      </div>

      <ul className="mx-auto flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-cream/60 transition-colors hover:text-gold"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-12 font-serif text-lg italic text-cream/70">
        With love and gratitude
      </p>

     
    </footer>
  );
}
