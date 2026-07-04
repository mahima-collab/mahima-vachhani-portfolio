import { skills } from "../data/portfolio";

export function SkillsBand() {
  return (
    <section aria-label="What I bring to your stack" className="section-band px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-dim">
          What I bring to your stack
        </p>
        <div className="skills-scroll">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
