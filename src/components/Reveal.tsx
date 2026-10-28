import { motion } from "motion/react";
import type { ReactNode } from "react";

const offsets = {
  up: { y: 28 },
  left: { x: -40 },
  right: { x: 40 },
  none: {},
};

type Props = {
  children: ReactNode;
  from?: keyof typeof offsets;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
