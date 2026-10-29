export const WEDDING = {
  start: new Date("2026-11-14T15:00:00+01:00"),
  end: new Date("2026-11-14T17:00:00+01:00"),
  timeLabel: "Three o'clock, Lagos",
};

const fmt = (opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    ...opts,
  }).format(WEDDING.start);

export const weekday = fmt({ weekday: "long" });
export const dateText = fmt({ day: "numeric", month: "long", year: "numeric" });
export const shortDate = fmt({ day: "numeric", month: "long" });

export const toCalendar = (d: Date) =>
  d.toISOString().replace(/[-:]|\.\d{3}/g, "");
export const afterStart = (hours: number) =>
  new Date(WEDDING.start.getTime() + hours * 3_600_000);

const isoDay = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Africa/Lagos",
}).format(WEDDING.start);

export const dayStart = new Date(`${isoDay}T00:00:00+01:00`);
