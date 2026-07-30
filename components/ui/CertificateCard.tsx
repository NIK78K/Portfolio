import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { Certificate } from "@/components/types/certificate";

type Props = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: Props) {
  return (
    <GlassCard>
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
          <Image
            src={certificate.image}
            alt={certificate.issuer}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-white">
            {certificate.title}
          </h3>

          <p className="mt-1 text-sm font-medium text-blue-300">
            {certificate.issuer}
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Issued {certificate.issueDate}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}