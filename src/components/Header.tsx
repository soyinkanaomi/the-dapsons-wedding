import { useEffect, useState } from "react";

const links = [
  { label: "Story", ids: ["story"] },
  { label: "Details", ids: ["details", "schedule"] },
  { label: "Travel", ids: ["travel"] },
  { label: "Gallery", ids: ["gallery"] },
  { label: "Gifts", ids: ["gifts"] },
  { label: "RSVP", ids: ["rsvp"] },
  { label: "Contact", ids: ["contact"] },
];

const watched = ["top", "wishes", ...links.flatMap((l) => l.ids)];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = watched
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (ids: string[]) => ids.includes(activeId);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? "bg-brown/95 shadow-lg backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            onClick={close}
            className="font-serif text-2xl tracking-widest"
          >
            S<span className="mx-1 italic text-gold">&</span>F
          </a>

          <ul className="hidden gap-6 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.ids[0]}`}
                  aria-current={isActive(link.ids) ? "true" : undefined}
                  className={`border-b pb-1 text-[11px] uppercase tracking-[0.3em] transition-colors hover:text-gold ${
                    isActive(link.ids)
                      ? "border-gold text-gold"
                      : "border-transparent text-cream/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`h-px w-6 bg-cream transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-cream transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-cream transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-brown transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-7">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.ids[0]}`}
                onClick={close}
                className={`font-serif text-4xl font-light transition-colors hover:text-gold ${
                  isActive(link.ids) ? "text-gold" : "text-cream"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex items-center gap-4 text-gold">
          <span className="h-px w-12 bg-gold/50" />
          <span className="text-xs">✿</span>
          <span className="h-px w-12 bg-gold/50" />
        </div>
        <p className="mt-6 font-script text-4xl text-gold">Simi &amp; Femi</p>
      </div>
    </>
  );
}
