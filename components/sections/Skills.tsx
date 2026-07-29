import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Skills"
            title="Tools & Technologies"
            subtitle="A compact overview of the stack I use to build and ship projects."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <FadeIn key={skill.category}>
              <GlassCard>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {skill.category}
                  </h3>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {skill.items.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}