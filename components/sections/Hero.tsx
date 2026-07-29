import Image from "next/image";
import Container from "@/components/ui/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-3 text-blue-400">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              Alfath Damanik
            </h1>

            <h2 className="mt-4 text-2xl text-slate-300">
              Full Stack Web Developer
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Fresh Graduate in Computer Science passionate about
              building modern web applications using Laravel,
              React, and Next.js while exploring Data Analytics
              and Time Series Forecasting.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
                View Projects
              </button>

              <button className="rounded-lg border border-slate-700 px-6 py-3 hover:border-blue-500 transition">
                Download CV
              </button>
            </div>

            <div className="mt-10 flex gap-6 text-2xl">
              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl" />

              <Image
                src="/images/profile.png"
                alt="Profile"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-slate-800 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}