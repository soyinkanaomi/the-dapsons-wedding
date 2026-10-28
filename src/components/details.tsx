import Schedule from "./schedule";
import Reveal from "./Reveal";
import { WEDDING, toCalendar, afterStart } from "../config";



type EventInfo = {
  label: string;
  title: string;
  lines: string[];
  mapQuery?: string;
  calendar?: { start: string; end: string; location: string };
};

const events: EventInfo[] = [
  {
    label: "Ceremony",
    title: "The Chapel of Christ",
    lines: ["Ikoyi, Lagos", "3:00 PM"],
    mapQuery: "The Chapel of Christ, Ikoyi, Lagos",
    calendar: {
      start: toCalendar(WEDDING.start),
      end: toCalendar(afterStart(1.75)),
      location: "The Chapel of Christ, Ikoyi, Lagos",
    },

    
  },
  {
    label: "Reception",
    title: "The Garden Pavilion",
    lines: ["12 Bourdillon Road, Ikoyi", "6:00 PM"],
    mapQuery: "The Garden Pavilion, 12 Bourdillon Road, Ikoyi, Lagos",
    calendar: {
      start: toCalendar(afterStart(3)),
      end: toCalendar(afterStart(8)),
      location: "12 Bourdillon Road, Ikoyi, Lagos",
    },
  },
  {
    label: "Dress code",
    title: "Black tie, garden",
    lines: ["Sage, ivory, champagne", "Kindly avoid white"],
  },
];

const mapUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const calendarUrl = (e: EventInfo) =>
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `Simi & Femi - ${e.label}`,
  )}&dates=${e.calendar!.start}/${e.calendar!.end}&location=${encodeURIComponent(
    e.calendar!.location,
  )}`;

const linkClass =
  "border-b border-brown/40 pb-1 text-[10px] uppercase tracking-[0.25em] text-brown transition-colors hover:border-gold hover:text-gold";

export default function Details() {
  return (
    <>
    <section
      id="details"
      className="scroll-mt-20 bg-sand px-6 py-24 text-brown md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-brown/60">
          The celebration
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          Where to find us
        </h2>
        <div className="my-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
        {events.map((e) => (
          <div key={e.label} className="border-t border-gold/70 pt-8">
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
              {e.label}
            </p>
            <h3 className="mt-5 font-serif text-3xl font-light">{e.title}</h3>
            <div className="mt-3 space-y-1 text-sm text-brown/70">
              {e.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {(e.mapQuery || e.calendar) && (
              <div className="mt-8 flex flex-wrap gap-6">
                {e.mapQuery && (
                  <a
                    href={mapUrl(e.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    View map ↗
                  </a>
                )}
                {e.calendar && (
                  <a
                    href={calendarUrl(e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Add to calendar +
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    <Schedule/>
    </>
  );
}
