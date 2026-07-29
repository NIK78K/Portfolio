import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.07]">
      {children}
    </div>
  );
}