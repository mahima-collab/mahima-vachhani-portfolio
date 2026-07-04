import { proofProjects } from "../data/portfolio";

export function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Work</span>
        <h2 className="section-title">
          Proof <span className="section-title-accent">recruiters</span> ask about
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Enterprise-scale delivery for Fortune 500 clients — where reliability,
          security, and performance are non-negotiable.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {proofProjects.map((project) => (
            <article key={project.name} className="glass-card flex flex-col p-6">
              <span className="pill project-tag mb-4 w-fit text-[0.65rem]">{project.tag}</span>
              <h3 className="text-lg font-medium">{project.name}</h3>
              <p className="client-label mt-1 text-sm">{project.client}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="tech-tag"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
