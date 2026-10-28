const Monogram = () => {
  return (
    <div className="flex flex-col items-center leading-none">
      <h2 className="text-5xl font-semibold text-[var(--color-primary)]">
        S<span className="px-2 text-[var(--color-gold)]">❦</span>F
      </h2>

      <p
        className="
        mt-2
        text-[11px]
        tracking-[0.45em]
        uppercase
        text-[var(--color-gold)]
      "
      >
        EST.2026
      </p>
    </div>
  );
};

export default Monogram;
