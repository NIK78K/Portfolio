import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Projects"
            title="Selected Work"
            subtitle="A few projects that show how I build, structure, and deliver web applications."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <FadeIn key={project.title}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}