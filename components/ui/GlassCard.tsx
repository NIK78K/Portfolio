import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({ children }: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(2,6,23,0.25)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-400/40
        hover:bg-white/[0.07]
        hover:shadow-[0_30px_90px_rgba(59,130,246,0.15)]
      "
    >
      {children}
    </div>
  );
}