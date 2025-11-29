import { experience } from "@/data/experience";

import { ExperienceCard } from "@/components/cards/experience-card";

export function ExperienceSection() {
  return (
    <section
      id="work"
      data-nav-section
      className="space-y-6 border-y border-dashed border-white/10 py-10"
    >
      <div>
        <h2 className="section-heading inline-flex border-b border-white/30 pb-2 text-4xl text-white">
          Experience
        </h2>
      </div>
      <div className="grid pt-4 gap-4">
        {experience.map((item) => (
          <ExperienceCard key={`${item.company}-${item.start}`} item={item} />
        ))}
      </div>
    </section>
  );
}
