import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const primaryLink =
    project.links.find((link) => link.label.toLowerCase().includes("visit")) ??
    project.links[0];
  return (
    <article className="flex h-full w-full flex-col items-center gap-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-md shadow-black/30">
      <div className="flex w-full justify-center">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white/5">
          <Image
            src={project.image}
            alt={`${project.title} placeholder — replace the SVG inside /public/placeholders`}
            width={720}
            height={420}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
          {project.category ?? "Project"} · {project.status}
        </p>
        <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
        <p className="text-base text-slate-300">{project.description}</p>
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {primaryLink && (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5"
          >
            Visit site
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-white hover:text-white"
          >
            View on GitHub
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
