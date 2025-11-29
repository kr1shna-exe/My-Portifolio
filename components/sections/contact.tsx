import { ArrowUpRight, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-nav-section
      className="space-y-6 border-y border-dashed border-white/10 py-10"
    >
      <div className="text-center">
        <h2 className="section-heading mt-3 inline-flex flex-col gap-2 text-5xl text-white">
          Ready to collaborate?
        </h2>
        <p className="mx-auto mt-12 max-w-xl text-sm text-slate-300">
          I take on full-stack work, AI agent experiments, and design-to-code
          sprints. If you have a project in mind, drop a line—your message lands
          directly in my inbox.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8 mt-8">
        <a
          href="mailto:madamanchikrishna525@gmail.com"
          className="inline-flex items-center gap-3 rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 text-lg font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
        >
          <Mail className="size-5" aria-hidden />
          madamanchikrishna525@gmail.com
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
