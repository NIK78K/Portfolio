import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-blue-500">
      {children}
    </div>
  );
}