import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { Certificate } from "@/components/types/certificate";

type Props = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: Props) {
  return (
    <GlassCard>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={600}
          height={420}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold leading-7 text-white">
          {certificate.title}
        </h3>

        <p className="mt-2 text-blue-300">
          {certificate.issuer}
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Issued {certificate.issueDate}
        </p>
      </div>
    </GlassCard>
  );
}