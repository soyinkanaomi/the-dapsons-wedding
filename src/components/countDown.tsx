import { useEffect, useState } from "react";
import { WEDDING } from "../config";

const TARGET = WEDDING.start.getTime();
const END = WEDDING.end.getTime();

function getTimeLeft(now: number) {
  const diff = Math.max(TARGET - now, 0);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now >= END) {
    return (
      <div className="mt-12 text-center">
        <p className="font-script text-6xl text-gold md:text-7xl">
          We’re married
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-cream/80">
          Thank you for celebrating with us
        </p>
      </div>
    );
  }

  if (now >= TARGET) {
    return (
      <div className="mt-12 text-center">
        <p className="font-script text-6xl text-gold md:text-7xl">
          Today is the day
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-cream/80">
          We cannot wait to see you
        </p>
      </div>
    );
  }

  const time = getTimeLeft(now);
  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="mt-12 flex gap-3 md:gap-5">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex w-[72px] flex-col items-center rounded-sm border border-white/20 bg-white/10 py-4 shadow-lg backdrop-blur-md md:w-24 md:py-6"
        >
          <span className="font-serif text-3xl font-light md:text-5xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[9px] uppercase tracking-[0.3em] text-gold md:text-[10px]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
