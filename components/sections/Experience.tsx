import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <Container>
        <SectionTitle
          title="Experience"
          subtitle="My professional journey."
        />

        <div className="space-y-10">
          {experiences.map((experience) => (
            <TimelineItem
              key={`${experience.company}-${experience.position}`}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}