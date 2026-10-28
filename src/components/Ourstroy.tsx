import Reveal from "./Reveal";
import storyImage from "../assets/prop.jpg";
import proposalImage from "../assets/Simi-Femi-meetthedapsons26-prewedding-looks-50-768x960.jpg"; // add your proposal photo here

const chapters = [
  {
    id: "how-we-met",
    eyebrow: "How we met",
    title: "A chance meeting that never quite ended",
    body: [
      "It began with a conversation neither of us planned — a shared laugh, a long walk home, and a night that stretched far past goodbye.",
      "What followed were years of quiet Sundays, loud family gatherings, and a friendship that grew into something we could not imagine living without.",
    ],
    image: storyImage,
    signature: false,
  },
  {
    id: "proposal",
    eyebrow: "The proposal",
    title: "She said yes, and the city held its breath",
    body: [
      "One quiet evening, a ring, and a question seven years in the making. There were candles, there were tears, and there was an emphatic yes.",
      "Now we would love the people who shaped us to be in the room when we say “I do”.",
    ],
    image: proposalImage,
    signature: true,
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-20 bg-cream px-6 py-24 text-brown md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          Our story
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          Two families, one beautiful beginning
        </h2>
        <div className="mx-auto my-10 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-16 bg-gold/50" />
          <span className="text-xs">✿</span>
          <span className="h-px w-16 bg-gold/50" />
        </div>
        {/* <div className="mx-auto my-8 h-px w-24 bg-gold/70" /> */}
        <p className="text-sm leading-relaxed text-brown/70">
          From a first hello to a forever yes — this is the story of how we
          found each other, and why we cannot wait to begin the rest of it
          surrounded by the people we love.
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-20 flex max-w-6xl flex-col   gap-24 md:mt-28">
        {chapters.map((chapter, i) => (
          <div
            key={chapter.id}
            id={chapter.id}
            className="grid scroll-mt-24 items-center gap-12 md:grid-cols-2 md:gap-20"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
                {chapter.eyebrow}
              </p>
              <h3 className="mt-5 font-serif text-3xl font-light md:text-5xl">
                {chapter.title}
              </h3>
              <div className="my-6 h-px w-24 bg-gold/70" />
              <div className="space-y-4 text-sm leading-relaxed text-brown/70">
                {chapter.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {chapter.signature && (
                <p className="mt-8 font-script text-4xl text-gold">
                  Simi &amp; Femi
                </p>
              )}
            </div>

            <Reveal className="border border-gold/40 p-3 shadow-2xl shadow-brown/10">
              <img
                src={chapter.image}
                alt={chapter.title}
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
