// import heroImage from "../assets/shoot.jpg";
// import Countdown from "./countDown";
// import { WEDDING, weekday, dateText } from "../config";
// import { celebrate } from "../celebrate";
// import { useEffect } from "react";

//     // ...your section, unchanged...
// export default function Hero() {
//  useEffect(() => {
//     const t = setTimeout(celebrate, 600);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section
//       id="top"
//       className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 py-32 text-center pt-40"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       {/* dark overlay so the text stays readable */}
//       <div className="absolute inset-0 bg-brown/65" />

//       <div className="relative z-10 flex flex-col items-center">
//         <p className="text-[11px] uppercase tracking-[0.4em] text-cream/80">
//           Together with their families
//         </p>

//         <h1 className="mt-10 font-serif text-6xl font-light md:text-8xl">
//           Simi <span className="italic text-gold">&</span> Femi
//         </h1>

//         <p className="mt-8 font-serif text-2xl uppercase tracking-[0.5em] text-gold md:text-3xl">
//           Dapson
//         </p>

//         <div className="my-10 flex items-center gap-4 text-gold">
//           <span className="h-px w-24 bg-gold/60" />
//           <span className="text-xs">✿</span>
//           <span className="h-px w-24 bg-gold/60" />
//         </div>

//         <p className="max-w-md text-sm leading-relaxed text-cream/90">
//           request the pleasure of your company as they exchange vows and begin
//           their life together.
//         </p>

//         <div className="mt-12 border-t border-gold/40 pt-8">
//           {/* <p className="text-[11px] uppercase tracking-[0.3em] text-cream/70">
//             Saturday
//           </p>
//           <p className="mt-2 font-serif text-3xl md:text-4xl">
//             12 october  2026
//           </p>
//           <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-cream/70">
//             Three o'clock, Lagos
//           </p> */}
//           <p className="text-[11px] uppercase tracking-[0.3em] text-cream/70">
//             {weekday}
//           </p>
//           <p className="mt-2 font-serif text-3xl md:text-4xl">{dateText}</p>
//           <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-cream/70">
//             {WEDDING.timeLabel}
//           </p>
//         </div>

//         <Countdown />
//       </div>
//     </section>
//   );
// }

import { useEffect } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import heroImage from "../assets/Simi-Sanya-holds-Femi-Dapsons-hand-outside-a-Lagos-courthouse-after-their-civil-wedding-922x1152.jpg";
import Countdown from "./countDown";
import { WEDDING, weekday, dateText } from "../config";
import { celebrate } from "../celebrate";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Hero() {
  useEffect(() => {
    const t = setTimeout(celebrate, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 pt-40 text-center"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-brown/65" />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-[11px] uppercase tracking-[0.4em] text-cream/80"
        >
          Together with their families
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-10 font-serif text-6xl font-light md:text-8xl"
        >
          Simi <span className="italic text-gold">&</span> Femi
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 font-serif text-2xl uppercase tracking-[0.5em] text-gold md:text-3xl"
        >
          Dapson
        </motion.p>

        <motion.div
          variants={item}
          className="my-10 flex items-center gap-4 text-gold"
        >
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </motion.div>

        <motion.p
          variants={item}
          className="max-w-md text-sm leading-relaxed text-cream/90"
        >
          request the pleasure of your company as they exchange vows and begin
          their life together.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 border-t border-gold/40 pt-8"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-cream/70">
            {weekday}
          </p>
          <p className="mt-2 font-serif text-3xl md:text-4xl">{dateText}</p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-cream/70">
            {WEDDING.timeLabel}
          </p>
        </motion.div>

        <motion.div variants={item}>
          <Countdown />
        </motion.div>
      </motion.div>
    </section>
  );
}