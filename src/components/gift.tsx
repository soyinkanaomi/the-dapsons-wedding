import { useState } from "react";
import Reveal from "./Reveal";

const bank = {
  bankName: "Moniepoint Bank",
  accountName: "Soyink Naomi Blessing", 
  accountNumber: "591234500",
};

const cardClass =
  "flex flex-col items-center justify-center border border-gold/40 bg-white/40 p-8 text-center md:p-10";

const buttonClass =
  "border-b border-brown/40 pb-1 text-[10px] uppercase tracking-[0.25em] text-brown transition-colors hover:border-gold hover:text-gold";

export default function Gifts() {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  };

  return (
    <section
      id="gifts"
      className="scroll-mt-20 bg-sand px-6 py-24 text-brown md:px-10 md:py-32"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
          Gifts
        </p>
        <h2 className="mt-6 font-serif text-4xl font-light md:text-6xl">
          With love &amp; <span className="italic text-gold">gratitude</span>
        </h2>
        <div className="my-8 flex items-center justify-center gap-4 text-gold">
          <span className="h-px w-24 bg-gold/60" />
          <span className="text-xs">✿</span>
          <span className="h-px w-24 bg-gold/60" />
        </div>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-brown/70">
          Your presence is the greatest gift. If you would still like to bless
          us, here&apos;s one way to do so.
        </p>
      </Reveal>

      <Reveal className="mx-auto mt-14 max-w-md" delay={0.1}>
        <div className={cardClass}>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            Bank transfer
          </p>
          <h3 className="mt-4 font-serif text-3xl font-light">
            {bank.bankName}
          </h3>
          <p className="mt-2 text-sm text-brown/70">{bank.accountName}</p>
          <p className="mt-6 font-serif text-4xl tracking-widest">
            {bank.accountNumber}
          </p>
          <div className="mt-8">
            <button onClick={copyNumber} className={buttonClass}>
              {copied ? "Copied ✓" : "Copy account number"}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
