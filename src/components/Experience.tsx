import { experience, personal } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section section-band">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Career</span>
          <h2 className="section-title">
            {personal.totalExperience} of experience
          </h2>
          <p className="section-desc">
            Since {personal.experienceSince} · {personal.experiencePeriod}
          </p>
        </div>

        <div className="timeline max-w-3xl">
          {experience.map((job) => (
            <article key={job.company} className="timeline-item">
              <p className="font-mono text-xs text-accent">{job.period}</p>
              <p className="text-xs text-dim">{job.duration}</p>
              {job.current && <span className="tag tag-accent mt-2">Current role</span>}
              <h3 className="mt-3 text-lg font-bold">{job.role}</h3>
              <p className="text-sm font-medium text-muted">{job.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{job.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
