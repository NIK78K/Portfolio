import { Experience } from "@/components/types/experience";

type Props = {
  experience: Experience;
};

export default function TimelineItem({ experience }: Props) {
  return (
    <div className="relative pl-10">
      {/* Garis */}
      <div className="absolute left-3 top-0 h-full w-px bg-slate-700" />

      {/* Titik */}
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-blue-500 bg-slate-950" />

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">
              {experience.position}
            </h3>

            <p className="text-blue-400">
              {experience.company}
            </p>

            <p className="text-sm text-slate-400">
              {experience.location}
            </p>
          </div>

          <span className="text-slate-400">
            {experience.duration}
          </span>
        </div>

        <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300">
          {experience.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}