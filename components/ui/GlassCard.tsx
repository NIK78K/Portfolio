import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "group portfolio-surface portfolio-surface-hoverable rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40",
        className,
      )}
    >
      {children}
    </div>
  );
}