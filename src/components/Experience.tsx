import { experience, personal } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-band px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Experience</span>
        <h2 className="section-title">
          <span className="section-title-accent">{personal.totalExperience}</span> of delivery
        </h2>
        <p className="mt-2 text-sm text-muted">
          Cumulative experience since {personal.experienceSince} · {personal.experiencePeriod}
        </p>

        <div className="mt-12 space-y-4">
          {experience.map((job) => (
            <article key={job.company} className="timeline-card">
              <div>
                <p className="font-mono text-sm text-muted">{job.period}</p>
                <p className="mt-1 text-xs text-dim">{job.duration}</p>
                {job.current && (
                  <span className="pill mt-2 text-[0.65rem]">Current</span>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {job.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
