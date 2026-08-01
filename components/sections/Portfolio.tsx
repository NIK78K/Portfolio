"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import CertificateCard from "@/components/ui/CertificateCard";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { skills } from "@/data/skills";

type TabKey = "projects" | "certificates" | "skills";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabKey>("projects");
  const skillsGridRef = useRef<HTMLDivElement | null>(null);
  const [skillCardHeight, setSkillCardHeight] = useState<number | null>(null);

  const tabs = useMemo(
    () => [
      {
        key: "projects" as const,
        label: "Projects",
        count: projects.length,
        countLabel: "items",
      },
      {
        key: "certificates" as const,
        label: "Certificates",
        count: certificates.length,
        countLabel: "items",
      },
      {
        key: "skills" as const,
        label: "Skills",
        count: skills.length,
        countLabel: "categories",
      },
    ],
    [],
  );

  useLayoutEffect(() => {
    if (activeTab !== "skills") {
      return;
    }

    const updateSkillCardHeight = () => {
      const cards = skillsGridRef.current?.querySelectorAll<HTMLElement>(
        "[data-skill-card]",
      );

      if (!cards?.length) {
        return;
      }

      const tallestCard = Math.max(
        ...Array.from(cards, (card) => card.offsetHeight),
      );

      setSkillCardHeight(tallestCard);
    };

    const animationFrameId = window.requestAnimationFrame(updateSkillCardHeight);
    window.addEventListener("resize", updateSkillCardHeight);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSkillCardHeight);
    };
  }, [activeTab]);

  return (
    <section id="portfolio">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Portfolio"
            title="Portfolio Showcase"
            subtitle="Explore projects, certifications, and technical expertise in one place."
          />
        </FadeIn>

        <FadeIn>
          <div className="mb-10 rounded-3xl border border-(--border) bg-(--surface-strong) p-2 backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`rounded-2xl px-5 py-4 text-left transition ${
                      isActive
                        ? "bg-blue-500/20 text-(--text) ring-1 ring-blue-300/40"
                        : "text-(--text-secondary) hover:bg-(--surface-hover) hover:text-(--text)"
                    }`}
                    aria-pressed={isActive}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--text-secondary)">
                      {tab.count} {tab.countLabel}
                    </p>

                    <p className="mt-1 text-lg font-semibold">
                      {tab.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {activeTab === "projects" && (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((project) => (
              <FadeIn key={project.title}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <FadeIn key={certificate.title}>
                <CertificateCard certificate={certificate} />
              </FadeIn>
            ))}
          </div>
        )}

        {activeTab === "skills" && (
          <div
            ref={skillsGridRef}
            className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {skills.map((skill) => (
              <FadeIn key={skill.category}>
                <div
                  data-skill-card
                  style={
                    skillCardHeight
                      ? { height: `${skillCardHeight}px` }
                      : undefined
                  }
                >
                  <GlassCard className="flex h-full flex-col overflow-hidden p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-(--text)">
                        {skill.category}
                      </h3>

                      <span className="rounded-full border border-(--border) bg-(--surface-soft) px-3 py-1 text-xs uppercase tracking-[0.3em] text-(--text-secondary)">
                        {skill.items.length}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-wrap content-start gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-(--border) bg-(--surface-soft) px-3 py-2 text-sm text-(--text)"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}