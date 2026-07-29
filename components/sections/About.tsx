import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about">
      <Container>

        <FadeIn>
          <SectionTitle
            title="About Me"
            subtitle="Get to know me better."
          />
        </FadeIn>

        <FadeIn>
          <p>
            I am a Computer Science graduate...
          </p>
        </FadeIn>

      </Container>
    </section>
  );
}