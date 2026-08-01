import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="About"
            title="About Me"
            subtitle="I build clean, responsive web experiences and enjoy turning ideas into structured, usable products."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <GlassCard>
              <div className="space-y-5 text-(--text-secondary)">
                <p className="space-y-5 text-lg leading-8 text-(--text-secondary)">
                  Hello! I'm Alfath Damanik, a Computer Science graduate passionate about System Analysis and Web Development. I enjoy analyzing business processes, identifying user needs, and designing technology-driven solutions that improve efficiency and user experience.
                  My experience includes developing web applications, designing databases, documenting system requirements, and collaborating in software development projects. I believe that technology is not only about writing code but also about understanding problems and delivering meaningful solutions.
                </p>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <GlassCard>
                <p className="text-sm uppercase tracking-[0.3em] text-(--primary)">
                  Specialty
                </p>
                <p className="mt-3 text-xl font-semibold text-(--text)">System Analysis & Web Development</p>
              </GlassCard>

              <GlassCard>
                <p className="text-sm uppercase tracking-[0.3em] text-(--primary)">
                  Focus
                </p>
                <p className="mt-3 text-xl font-semibold text-(--text)">Business Process & Digital Solutions</p>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}