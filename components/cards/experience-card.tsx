import type { ExperienceItem } from "@/data/experience";

type Props = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: Props) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm shadow-black/20">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
            {item.start} — {item.end}
          </p>
          <h3 className="py-2 text-2xl font-semibold text-white">
            {item.role}
          </h3>
          <p className="text-sm text-slate-400">
            {item.company}, {item.location}
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-300">
        {item.summary}
      </p>
      <ul className="space-y-2 text-sm text-slate-300">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <span className="mt-2 size-1 rounded-full bg-slate-400" aria-hidden />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
