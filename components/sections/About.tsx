import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="leading-8 text-slate-400">
              I am a Computer Science graduate from Universitas Riau with a
              strong interest in web development and data analytics. During my
              academic journey, I developed several web applications using
              Laravel and React while conducting research on time series
              forecasting using SARIMA.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="mb-4 text-xl font-semibold">
              Quick Facts
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>🎓 S.Kom - Universitas Riau</li>
              <li>💻 Full Stack Developer</li>
              <li>📊 Data Analytics Enthusiast</li>
              <li>📍 Riau, Indonesia</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}