import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let's build something together."
        />

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="mb-8 text-lg text-slate-300">
            I'm always open to discussing new opportunities,
            collaborations, or interesting projects.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:email@example.com"
              className="flex items-center gap-4 hover:text-blue-400"
            >
              <FaEnvelope size={22} />
              email@example.com
            </a>

            <a
              href="https://github.com/NIK78K"
              target="_blank"
              className="flex items-center gap-4 hover:text-blue-400"
            >
              <FaGithub size={22} />
              github.com/NIK78K
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              className="flex items-center gap-4 hover:text-blue-400"
            >
              <FaLinkedin size={22} />
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}