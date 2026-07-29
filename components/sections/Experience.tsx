import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";
import FadeIn from "@/components/ui/FadeIn";

export default function Experience() {
  return (
    <section id="experience">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Experience"
            title="Professional Journey"
            subtitle="A concise view of the roles and delivery work that shaped my process."
          />
        </FadeIn>

        <FadeIn>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <TimelineItem
                key={`${experience.company}-${experience.position}`}
                experience={experience}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}