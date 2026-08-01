import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Contact"
            title="Let's Build Something"
            subtitle="Open for collaboration, freelance work, and product-focused web projects."
          />
        </FadeIn>

        <FadeIn>
          <GlassCard>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-lg leading-8 text-(--text-secondary)">
                  I’m open to job opportunities, collaborations, and digital product development
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
                  >
                    <FaEnvelope />
                    Email Me
                  </a>

                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-(--border) px-6 py-3 font-semibold text-(--text) transition hover:border-blue-400 hover:bg-(--surface-hover)"
                  >
                    View Work
                    <FaArrowRight size={14} />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-(--border) bg-(--surface-soft) px-5 py-4 transition hover:border-blue-400/50 hover:bg-(--surface-hover)"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-(--primary)">
                      <FaEnvelope />
                    </span>
                    <div>
                      <p className="font-medium text-(--text)">Email</p>
                      <p className="text-sm text-(--text-secondary)">{profile.email}</p>
                    </div>
                  </div>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-(--border) bg-(--surface-soft) px-5 py-4 transition hover:border-blue-400/50 hover:bg-(--surface-hover)"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-(--primary)">
                      <FaGithub />
                    </span>
                    <div>
                      <p className="font-medium text-(--text)">GitHub</p>
                      <p className="text-sm text-(--text-secondary)">NIK78K</p>
                    </div>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-(--border) bg-(--surface-soft) px-5 py-4 transition hover:border-blue-400/50 hover:bg-(--surface-hover)"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 text-(--primary)">
                      <FaLinkedin />
                    </span>
                    <div>
                      <p className="font-medium text-(--text)">LinkedIn</p>
                      <p className="text-sm text-(--text-secondary)">Alfath Damanik</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </Container>
    </section>
  );
}