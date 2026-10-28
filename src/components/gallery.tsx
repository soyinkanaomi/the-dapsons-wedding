// // import { useCallback, useEffect, useState } from "react";

// // const modules = import.meta.glob(
// //   "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
// //   {
// //     eager: true,
// //     query: "?url",
// //     import: "default",
// //   },
// // );

// // const photos = Object.entries(modules)
// //   .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
// //   .map(([, url]) => url as string);
// // // size pattern, repeats every 6 photos
// // // size pattern, repeats every 6 photos (fills a 4 x 3 block exactly)
// // const layout = [
// //   "col-span-2 row-span-2", // big
// //   "",                      // normal
// //   "rol-span-2",            // tall
// //   "rol-span-2",            // tall
// //   "rol-span-2",            // wide
// //   "",                      // normal
// // ];

// // export default function Gallery() {
// //   const [active, setActive] = useState<number | null>(null);

// //   const close = useCallback(() => setActive(null), []);
// //   const next = useCallback(
// //     () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
// //     [],
// //   );
// //   const prev = useCallback(
// //     () =>
// //       setActive((i) =>
// //         i === null ? i : (i - 1 + photos.length) % photos.length,
// //       ),
// //     [],
// //   );

// //   // keyboard controls + stop the page scrolling behind the lightbox
// //   useEffect(() => {
// //     if (active === null) return;

// //     const onKey = (e: KeyboardEvent) => {
// //       if (e.key === "Escape") close();
// //       if (e.key === "ArrowRight") next();
// //       if (e.key === "ArrowLeft") prev();
// //     };

// //     window.addEventListener("keydown", onKey);
// //     document.body.style.overflow = "hidden";

// //     return () => {
// //       window.removeEventListener("keydown", onKey);
// //       document.body.style.overflow = "";
// //     };
// //   }, [active, close, next, prev]);

// //   return (
// //     <section
// //       id="gallery"
// //       className="scroll-mt-20 bg-ivory px-6 py-24 text-brown md:px-10 md:py-32"
// //     >
// //       <div className="mx-auto max-w-3xl text-center">
// //         <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
// //           Gallery
// //         </p>
// //         <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
// //           Through our <span className="italic text-gold">lens</span>
// //         </h2>
// //         <div className="my-8 flex items-center justify-center gap-4 text-gold">
// //           <span className="h-px w-24 bg-gold/60" />
// //           <span className="text-xs">✿</span>
// //           <span className="h-px w-24 bg-gold/60" />
// //         </div>
// //       </div>

// //       {/* mosaic grid */}
// //       <div className="mx-auto mt-10 grid max-w-6xl auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
// //         {photos.map((src, i) => (
// //           <button
// //             key={src}
// //             onClick={() => setActive(i)}
// //             className={`group relative overflow-hidden ${layout[i % layout.length]}`}
// //             aria-label={`Open photo ${i + 1}`}
// //           >
// //             <img
// //               src={src}
// //               alt={`Simi and Femi, photo ${i + 1}`}
// //               loading="lazy"
// //               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
// //             />
// //             <span className="absolute inset-0 bg-brown/0 transition-colors duration-500 group-hover:bg-brown/25" />
// //           </button>
// //         ))}
// //       </div>

// //       {/* lightbox */}
// //       {active !== null && (
// //         <div
// //           className="fixed inset-0 z-[60] flex items-center justify-center bg-brown/95 p-4"
// //           onClick={close}
// //           role="dialog"
// //           aria-modal="true"
// //         >
// //           <button
// //             onClick={close}
// //             className="absolute right-6 top-6 text-3xl text-cream/80 hover:text-gold"
// //             aria-label="Close"
// //           >
// //             ×
// //           </button>

// //           <button
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               prev();
// //             }}
// //             className="absolute left-4 text-4xl text-cream/80 hover:text-gold md:left-8"
// //             aria-label="Previous photo"
// //           >
// //             ‹
// //           </button>

// //           <img
// //             src={photos[active]}
// //             alt={`Simi and Femi, photo ${active + 1}`}
// //             onClick={(e) => e.stopPropagation()}
// //             className="max-h-[85vh] max-w-full object-contain md:max-w-[80vw]"
// //           />

// //           <button
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               next();
// //             }}
// //             className="absolute right-4 text-4xl text-cream/80 hover:text-gold md:right-8"
// //             aria-label="Next photo"
// //           >
// //             ›
// //           </button>

// //           <p className="absolute bottom-6 text-[11px] uppercase tracking-[0.3em] text-cream/60">
// //             {active + 1} / {photos.length}
// //           </p>
// //         </div>
// //       )}
// //     </section>
// //   );
// // }

// import { useCallback, useEffect, useRef, useState } from "react";

// // loads every image in the gallery folder
// const modules = import.meta.glob(
//   "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
//   {
//     eager: true,
//     query: "?url",
//     import: "default",
//   },
// );

// const photos = Object.entries(modules)
//   .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
//   .map(([, url]) => url as string);

// export default function Gallery() {
//   const [current, setCurrent] = useState(0);
//   const [open, setOpen] = useState(false);

//   const stripRef = useRef<HTMLDivElement>(null);
//   const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

//   const close = useCallback(() => setOpen(false), []);
//   const next = useCallback(
//     () => setCurrent((i) => (i + 1) % photos.length),
//     [],
//   );
//   const prev = useCallback(
//     () => setCurrent((i) => (i - 1 + photos.length) % photos.length),
//     [],
//   );

//   // keep the selected thumbnail centred in the strip
//   // (scrolls the strip itself, never the page)
//   useEffect(() => {
//     const strip = stripRef.current;
//     const thumb = thumbRefs.current[current];
//     if (!strip || !thumb) return;
//     strip.scrollTo({
//       left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
//       behavior: "smooth",
//     });
//   }, [current]);

//   // lightbox: keyboard controls + stop the page scrolling behind it
//   useEffect(() => {
//     if (!open) return;

//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };

//     window.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [open, close, next, prev]);

//   return (
//     <section
//       id="gallery"
//       className="scroll-mt-20 bg-ivory px-6 py-24 text-brown md:px-10 md:py-32"
//     >
//       <div className="mx-auto max-w-3xl text-center">
//         <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
//           Gallery
//         </p>
//         <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
//           Through our <span className="italic text-gold">lens</span>
//         </h2>
//         <div className="my-8 flex items-center justify-center gap-4 text-gold">
//           <span className="h-px w-24 bg-gold/60" />
//           <span className="text-xs">✿</span>
//           <span className="h-px w-24 bg-gold/60" />
//         </div>
//       </div>

//       {photos.length === 0 ? (
//         <p className="mt-10 text-center text-sm text-brown/60">
//           Add photos to src/assets/gallery to see them here.
//         </p>
//       ) : (
//         <div className="mx-auto mt-10 max-w-5xl">
//           {/* featured photo */}
//           <div className="relative overflow-hidden bg-brown">
//             {/* blurred copy fills the empty sides */}
//             <img
//               src={photos[current]}
//               alt=""
//               aria-hidden="true"
//               className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
//             />

//             <button
//               onClick={() => setOpen(true)}
//               className="relative block aspect-[4/5] w-full cursor-zoom-in md:aspect-[16/10]"
//               aria-label="Open photo full screen"
//             >
//               <img
//                 key={photos[current]}
//                 src={photos[current]}
//                 alt={`Simi and Femi, photo ${current + 1}`}
//                 className="h-full w-full object-contain"
//               />
//             </button>

//             <button
//               onClick={prev}
//               className="absolute left-3 top-1/2 -translate-y-1/2 bg-brown/40 px-3 py-2 text-3xl leading-none text-cream backdrop-blur transition-colors hover:bg-gold hover:text-brown md:left-5"
//               aria-label="Previous photo"
//             >
//               ‹
//             </button>
//             <button
//               onClick={next}
//               className="absolute right-3 top-1/2 -translate-y-1/2 bg-brown/40 px-3 py-2 text-3xl leading-none text-cream backdrop-blur transition-colors hover:bg-gold hover:text-brown md:right-5"
//               aria-label="Next photo"
//             >
//               ›
//             </button>

//             <p className="absolute bottom-4 right-4 bg-brown/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cream backdrop-blur">
//               {current + 1} / {photos.length}
//             </p>
//           </div>

//           {/* thumbnail strip */}
//           <div
//             ref={stripRef}
//             className="relative mt-4 flex gap-2 overflow-x-auto pb-2 md:gap-3"
//           >
//             {photos.map((src, i) => (
//               <button
//                 key={src}
//                 ref={(el) => {
//                   thumbRefs.current[i] = el;
//                 }}
//                 onClick={() => setCurrent(i)}
//                 aria-label={`Show photo ${i + 1}`}
//                 aria-current={i === current}
//                 className={`h-20 w-16 shrink-0 overflow-hidden border-2 transition-all duration-300 md:h-24 md:w-20 ${
//                   i === current
//                     ? "border-gold opacity-100"
//                     : "border-transparent opacity-50 hover:opacity-100"
//                 }`}
//               >
//                 <img
//                   src={src}
//                   alt=""
//                   loading="lazy"
//                   className="h-full w-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* lightbox */}
//       {open && (
//         <div
//           className="fixed inset-0 z-[60] flex items-center justify-center bg-brown/95 p-4"
//           onClick={close}
//           role="dialog"
//           aria-modal="true"
//         >
//           <button
//             onClick={close}
//             className="absolute right-6 top-6 text-3xl text-cream/80 hover:text-gold"
//             aria-label="Close"
//           >
//             ×
//           </button>

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               prev();
//             }}
//             className="absolute left-4 text-4xl text-cream/80 hover:text-gold md:left-8"
//             aria-label="Previous photo"
//           >
//             ‹
//           </button>

//           <img
//             src={photos[current]}
//             alt={`Simi and Femi, photo ${current + 1}`}
//             onClick={(e) => e.stopPropagation()}
//             className="max-h-[85vh] max-w-full object-contain md:max-w-[80vw]"
//           />

//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               next();
//             }}
//             className="absolute right-4 text-4xl text-cream/80 hover:text-gold md:right-8"
//             aria-label="Next photo"
//           >
//             ›
//           </button>

//           <p className="absolute bottom-6 text-[11px] uppercase tracking-[0.3em] text-cream/60">
//             {current + 1} / {photos.length}
//           </p>
//         </div>
//       )}
//     </section>
//   );
// }

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
const modules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url as string);

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % photos.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + photos.length) % photos.length),
    [],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) next();
    else prev();
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-ivory px-6 py-24 text-brown md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          Gallery
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          Through our <span className="italic text-gold">lens</span>
        </h2>
        <div className="my-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </div>
      </Reveal>

      {photos.length === 0 ? (
        <p className="mt-10 text-center text-sm text-brown/60">
          Add photos to src/assets/gallery to see them here.
        </p>
      ) : (
        <div
          className="relative mx-auto mt-10 max-w-5xl overflow-hidden bg-brown"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={photos[current]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
          />

          <button
            onClick={() => setOpen(true)}
            className="relative block aspect-[4/5] w-full cursor-zoom-in md:aspect-[16/10]"
            aria-label="Open photo full screen"
          >
            <img
              key={photos[current]}
              src={photos[current]}
              alt={`Simi and Femi, photo ${current + 1}`}
              className="h-full w-full object-contain"
            />
          </button>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-brown/40 px-3 py-2 text-3xl leading-none text-cream backdrop-blur transition-colors hover:bg-gold hover:text-brown md:left-5"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-brown/40 px-3 py-2 text-3xl leading-none text-cream backdrop-blur transition-colors hover:bg-gold hover:text-brown md:right-5"
            aria-label="Next photo"
          >
            ›
          </button>

          <p className="absolute bottom-4 right-4 bg-brown/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cream backdrop-blur">
            {current + 1} / {photos.length}
          </p>
        </div>
      )}

      {/* lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brown/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-6 top-6 text-3xl text-cream/80 hover:text-gold"
            aria-label="Close"
          >
            ×
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 text-4xl text-cream/80 hover:text-gold md:left-8"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <img
            src={photos[current]}
            alt={`Simi and Femi, photo ${current + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain md:max-w-[80vw]"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 text-4xl text-cream/80 hover:text-gold md:right-8"
            aria-label="Next photo"
          >
            ›
          </button>

          <p className="absolute bottom-6 text-[11px] uppercase tracking-[0.3em] text-cream/60">
            {current + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}