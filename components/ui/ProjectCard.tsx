import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "@/components/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-(--border) bg-(--surface) shadow-(--shadow-card) backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-(--surface-hover) hover:shadow-(--shadow-card-hover)">
      <div className="relative aspect-2/1 bg-(--surface-strong)">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[rgba(7,17,31,0.9)] via-[rgba(7,17,31,0.05)] to-transparent" />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-2xl font-bold text-(--text)">{project.title}</h3>

          <p className="mt-2 leading-6 text-(--text-secondary)">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-(--border) bg-(--surface-soft) px-3 py-1 text-sm text-(--text)"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-(--text) transition hover:text-blue-500"
            >
              <FiGithub size={18} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-(--text) transition hover:text-blue-500"
            >
              <FiExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}