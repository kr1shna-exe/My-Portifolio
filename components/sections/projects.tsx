"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { projects } from "@/data/projects";

import { ProjectCard } from "@/components/cards/project-card";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? null);
  const activeProject = projects.find((project) => project.slug === activeSlug);

  return (
    <section id="projects" data-nav-section className="space-y-6">
      <div>
        <h2 className="section-heading inline-flex border-b border-white/30 pb-2 text-4xl text-white">
          Projects
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="relative lg:max-h-[70vh]">
          <ul className="space-y-4 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-2">
            {projects.map((project) => {
              const isActive = project.slug === activeSlug;
              return (
                <li key={project.slug}>
                  <button
                    type="button"
                    onClick={() => setActiveSlug(project.slug)}
                    className={cn(
                      "group flex w-full cursor-pointer items-center justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-left transition",
                      isActive && "ring-2 ring-white/20"
                    )}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                        {project.category ?? "Case study"}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {project.description}
                      </p>
                    </div>
                    <motion.span
                      className="ml-4 flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-slate-300 group-hover:text-white"
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <ArrowRight className="size-4" aria-hidden />
                    </motion.span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative flex min-h-[420px] flex-col">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex h-full"
              >
                <ProjectCard project={activeProject} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
