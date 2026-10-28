import Reveal from "./Reveal";
const schedule = [
  {
    time: "2:00 PM",
    title: "Guest Arrival",
    note: "Champagne reception in the garden",
  },
  {
    time: "3:00 PM",
    title: "The Ceremony",
    note: "Kindly be seated by 2:45 PM",
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour",
    note: "Portraits, small chops, live strings",
  },
  {
    time: "6:00 PM",
    title: "Dinner & Dancing",
    note: "Toasts, first dance, after-party",
  },
];

export default function Schedule() {
  return (
    <Reveal
    
      className="scroll-mt-20 bg-brown px-6 py-24 text-cream md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          Order of the day
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          12 December
        </h2>
        <div className="my-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </div>
      </div>

      <ul className="mx-auto mt-10 max-w-3xl">
        {schedule.map((item) => (
          <li
            key={item.time}
            className="flex flex-col gap-2 border-b border-gold/30 py-8 first:pt-0 last:border-b-0 md:flex-row md:gap-12"
          >
            <span className="w-28 shrink-0 text-[11px] uppercase tracking-[0.3em] text-gold md:pt-2">
              {item.time}
            </span>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl">{item.title}</h3>
              <p className="mt-1 text-sm text-cream/70">{item.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
