import Reveal from "./Reveal";
const contacts = [
  { name: "Contact one", role: "Family", phone: "+234 800 000 0001" },
  {
    name: "Contact two",
    role: "Event coordinator",
    phone: "+234 800 000 0002",
  },
  {
    name: "Contact three",
    role: "Friend of the couple",
    phone: "+234 800 000 0003",
  },
];

const digits = (phone: string) => phone.replace(/\D/g, "");

const linkClass =
  "border-b border-brown/40 pb-1 text-[10px] uppercase tracking-[0.25em] transition-colors hover:border-gold hover:text-gold";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-ivory px-6 py-24 text-brown md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          Get in touch
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          Questions? <span className="italic text-gold">Call us.</span>
        </h2>
        <div className="my-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {contacts.map((c) => (
          <div
            key={c.phone}
            className="border border-gold/40 bg-white/50 p-8 text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
              {c.role}
            </p>
            <h3 className="mt-4 font-serif text-3xl font-light">{c.name}</h3>
            <p className="mt-3 text-sm tracking-wider text-brown/70">
              {c.phone}
            </p>

            <div className="mt-6 flex justify-center gap-6">
              <a href={`tel:+${digits(c.phone)}`} className={linkClass}>
                Call
              </a>
              <a
                href={`https://wa.me/${digits(c.phone)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
