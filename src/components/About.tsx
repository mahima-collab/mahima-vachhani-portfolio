import { education, experience, languages, personal } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="section section-shade-teal">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <p className="max-w-3xl text-lg leading-relaxed text-muted">{personal.summary}</p>
        <p className="mt-4 max-w-3xl text-sm text-dim">
          {personal.totalExperience} ({personal.experiencePeriod}) specializing in AWS, Azure,
          CI/CD, observability, and cloud reliability engineering.
        </p>

        <div className="highlight-box">
          <p className="highlight-value">{personal.totalExperience}</p>
          <div>
            <p className="text-sm font-semibold">Professional experience</p>
            <p className="text-xs text-dim">{personal.experiencePeriod}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="card card-padded">
            <h3 className="mb-4 text-sm font-bold">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-sm text-muted">
                  {lang.name} · {lang.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="card card-padded">
            <h3 className="mb-4 text-sm font-bold">Currently</h3>
            <p className="text-sm text-muted">
              {experience[0].role}
            </p>
            <p className="mt-1 text-sm text-accent">{experience[0].company}</p>
            <p className="mt-2 text-xs text-dim">{personal.availabilityDetail}</p>
          </div>

          <div className="card card-padded">
            <h3 className="mb-4 text-sm font-bold">Education</h3>
            <ul className="space-y-3">
              {education.map((item) => (
                <li key={item.degree} className="text-sm text-muted">
                  <span className="font-semibold">{item.degree}</span>
                  <br />
                  {item.institution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
