import { Experience } from "@/components/types/experience";
import GlassCard from "@/components/ui/GlassCard";

type Props = {
  experience: Experience;
};

export default function TimelineItem({ experience }: Props) {
  const typeClasses = {
    Internship: "border-blue-400/30 bg-blue-500/10 text-blue-600",
    Organization: "border-emerald-400/30 bg-emerald-500/10 text-emerald-600",
    Work: "border-amber-400/30 bg-amber-500/10 text-amber-600",
  }[experience.type];

  return (
    <div className="relative pl-8 md:pl-12">
      <div className="absolute left-3 top-0 h-full w-px bg-linear-to-b from-blue-400 via-(--border) to-transparent" />

      <div className="absolute left-0 top-3 h-6 w-6 rounded-full border-4 border-(--background) bg-blue-400 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />

      <GlassCard>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-(--primary)">
              {experience.duration}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-(--text)">{experience.position}</h3>

            <p className="mt-2 text-(--primary)">{experience.company}</p>

            <p className="text-sm text-(--text-secondary)">{experience.location}</p>
          </div>

          <span
            className={`inline-flex w-fit rounded-full border px-4 py-2 text-sm font-medium ${typeClasses}`}
          >
            {experience.type}
          </span>
        </div>

        <ul className="mt-6 grid gap-3 text-(--text-secondary)">
          {experience.description.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-(--border) bg-(--surface-soft) px-3 py-1 text-sm text-(--text)"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}