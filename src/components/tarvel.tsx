import Reveal from "./Reveal";
const WHATSAPP_NUMBER = "2348064015090";

const requestLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello! I'm coming to Simi & Femi's wedding from out of town. Could you share hotel recommendations, please?",
)}`;
export default function Travel() {
  return (
    <section
      id="travel"
      className="scroll-mt-20 bg-sand px-6 py-24 text-brown md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-brown/60">
          For out-of-town guests
        </p>
        <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] md:text-7xl">
          Make your way
          <span className="block italic text-gold">to Lagos.</span>
        </h2>
      </Reveal>
      <div className="mx-auto my-10 flex items-center justify-center gap-4 text-gold">
        <span className="h-px w-16 bg-gold/50" />
        <span className="text-xs">✿</span>
        <span className="h-px w-16 bg-gold/50" />
      </div>

      <Reveal className="mx-auto mt-14 flex max-w-4xl flex-col gap-8 border border-gold/30 bg-ivory p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12">
        <div className="max-w-md">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Travel &amp; accommodation
          </p>
          <h3 className="mt-4 font-serif text-3xl font-light">
            Stay close, arrive rested.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brown/60">
            We are curating a short list of beautiful hotels near the
            celebration. Parking and location details will be shared with your
            private invitation.
          </p>
        </div>
        <a
          href={requestLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 border border-gold px-8 py-4 text-center text-[11px] uppercase tracking-[0.3em] transition-colors hover:bg-gold hover:text-brown"
        >
          Request recommendations
        </a>
      </Reveal>
    </section>
  );
}
