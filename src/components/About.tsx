import { education, languages, personal } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">About</span>
        <h2 className="section-title">About me</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {personal.summary}
        </p>
        <p className="mt-4 max-w-3xl text-sm text-dim">
          {personal.totalExperience} ({personal.experiencePeriod}) across tax compliance,
          fraud prevention, e-commerce, and field service. FSE III Accredited · B.E. Computer Science.
        </p>

        <div className="experience-highlight">
          <p className="highlight-value">{personal.totalExperience}</p>
          <div>
            <p className="text-sm font-medium">Total professional experience</p>
            <p className="text-xs text-dim">{personal.experiencePeriod}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <div className="glass-card p-6">
            <h3 className="mb-4 text-sm font-medium">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-sm text-muted">
                  {lang.name} · {lang.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="mb-4 text-sm font-medium">Now</h3>
            <p className="text-sm text-muted">
              Senior Software Engineer @ Wipro Limited
            </p>
            <p className="mt-1 text-xs text-dim">{personal.availabilityDetail}</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="mb-4 text-sm font-medium">Education</h3>
            <ul className="space-y-3">
              {education.map((item) => (
                <li key={item.degree} className="text-sm text-muted">
                  <span className="text-[#e6edf3]">{item.degree}</span>
                  <br />
                  {item.institution} · {item.year}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
