import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="mb-5 text-xl font-semibold text-blue-400">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-500/10 px-3 py-2 text-sm text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}