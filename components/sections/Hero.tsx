import Image from "next/image";
import Container from "@/components/ui/Container";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pt-28 pb-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-soft) px-4 py-2 text-sm text-(--primary)">
              <span className="h-2 w-2 rounded-full bg-(--primary)" />
              Open to Work
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-(--text-secondary)">
              Hello, I&apos;m
            </p>

            <h1 className="mt-3 max-w-xl text-5xl font-extrabold leading-[0.95] text-(--text) md:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mt-5 text-2xl text-(--text-secondary) md:text-3xl">
              {profile.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-(--text-secondary)">
              {profile.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                View Portfolio
                <FaArrowRight size={14} />
              </a>

              <a
                href="/cv/CV Alfath Damanik.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-(--border) px-6 py-3 font-semibold text-(--text) transition hover:border-blue-400 hover:bg-(--surface-hover)"
              >
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--surface-soft) text-xl text-(--text) transition hover:border-blue-400 hover:bg-(--surface-hover)"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--surface-soft) text-xl text-(--text) transition hover:border-blue-400 hover:bg-(--surface-hover)"
              >
                <FaLinkedin />
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-(--border) bg-(--surface-soft) text-xl text-(--text) transition hover:border-blue-400 hover:bg-(--surface-hover)"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="max-w-2xl mt-8">
              <div className="pointer-events-none absolute inset-0 rounded-4xl bg-linear-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />

              <div className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface) p-4 shadow-[0_24px_100px_rgba(2,6,23,0.18)] backdrop-blur-xl">
                <Image
                  src="/images/Photo.jpeg"
                  alt={profile.name}
                  width={450}
                  height={580}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-107.5 w-full rounded-3xl object-cover object-top"
                />

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl border border-(--border) bg-(--surface-strong) px-3 py-4">
                    <p className="text-lg font-bold text-(--text)">S1</p>
                    <p className="text-(--text-secondary)">S.Kom</p>
                  </div>

                  <div className="rounded-2xl border border-(--border) bg-(--surface-strong) px-3 py-4">
                    <p className="text-lg font-bold text-(--text)">3.74</p>
                    <p className="text-(--text-secondary)">GPA</p>
                  </div>

                  <div className="rounded-2xl border border-(--border) bg-(--surface-strong) px-3 py-4">
                    <p className="text-lg font-bold text-(--text)">5+</p>
                    <p className="text-(--text-secondary)">Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}