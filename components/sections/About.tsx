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
              <div className="space-y-5 text-slate-300">
                <p className="text-lg leading-8">
                  {profile.subtitle}
                </p>

                <p className="leading-8 text-slate-400">
                  Fokus saya ada pada antarmuka yang rapi, alur pengguna yang jelas,
                  dan implementasi yang tetap ringan saat dipakai di perangkat nyata.
                </p>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <GlassCard>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  Specialty
                </p>
                <p className="mt-3 text-xl font-semibold">Full stack web apps</p>
              </GlassCard>

              <GlassCard>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                  Focus
                </p>
                <p className="mt-3 text-xl font-semibold">Laravel, React, Next.js</p>
              </GlassCard>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}