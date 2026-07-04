import { proofProjects } from "../data/portfolio";

export function Work() {
  return (
    <section id="work" className="section section-shade-soft">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">Projects & impact</h2>
          <p className="section-desc">
            Production infrastructure across AWS and Azure — from CI/CD automation to
            large-scale migrations with zero downtime.
          </p>
        </div>

        <div className="projects-grid">
          {proofProjects.map((project, i) => (
            <article
              key={project.name}
              className={`card card-lift card-padded ${i === 0 ? "project-card-featured" : ""}`}
            >
              <span className="tag tag-accent mb-4">{project.tag}</span>
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="mt-1 text-sm text-accent">{project.client}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
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
