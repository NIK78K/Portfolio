import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pt-28 pb-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Available for freelance and collaboration
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="mt-3 max-w-xl text-5xl font-extrabold leading-[0.95] md:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mt-5 text-2xl text-slate-300 md:text-3xl">
              {profile.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              {profile.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                View Portfolio
                <FaArrowRight size={14} />
              </Link>

              <a
                href="/cv/Resume_Alfath Damanik.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-100 transition hover:border-blue-400 hover:bg-white/5"
              >
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:border-blue-400 hover:bg-white/10"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:border-blue-400 hover:bg-white/10"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:border-blue-400 hover:bg-white/10"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-cyan-400/10 to-transparent blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_100px_rgba(2,6,23,0.35)] backdrop-blur-xl">
                <Image
                  src="/images/Photo.jpeg"
                  alt={profile.name}
                  width={560}
                  height={720}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover object-top"
                />

                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-4">
                    <p className="text-lg font-bold text-white">1+</p>
                    <p className="text-slate-400">Internship</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-4">
                    <p className="text-lg font-bold text-white">5+</p>
                    <p className="text-slate-400">Projects</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-4">
                    <p className="text-lg font-bold text-white">4</p>
                    <p className="text-slate-400">Stacks</p>
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