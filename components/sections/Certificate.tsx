import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CertificateCard from "@/components/ui/CertificateCard";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates">
      <Container>
        <SectionTitle
          title="Certificates"
          subtitle="Professional certifications and achievements."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}