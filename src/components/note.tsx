import Reveal from "./Reveal";
export default function Note() {
  return (
    <section className="bg-ivory px-6 py-24 text-center text-brown md:py-32">
      <Reveal className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          A note from us
        </p>
        <h2 className="mt-8 font-serif text-5xl font-light leading-[1.05] md:text-7xl">
          Two hearts, one
          <span className="block italic text-gold">beautiful beginning.</span>
        </h2>
        <div className="mx-auto my-6 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-16 bg-gold/50" />
          <span className="text-xs">✿</span>
          <span className="h-px w-16 bg-gold/50" />
        </div>
        <p className="mx-auto mt-7 max-w-md font-serif text-lg leading-relaxed text-brown/60">
          With grateful hearts and joyful spirits, we invite you to celebrate
          the love that brought us here and the beautiful life we are building
          together.
        </p>
        <div className="mx-auto my-8 h-px w-24 bg-gold/70" />
        <p className="mt-6 font-serif text-lg italic">With love from,</p>
        <p className="mt-2 font-script text-5xl text-gold">The Dapsons</p>{" "}
      </Reveal>
    </section>
  );
}
