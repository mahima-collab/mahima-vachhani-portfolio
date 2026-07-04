import { skillCategories } from "../data/portfolio";

export function SkillsBand() {
  return (
    <section aria-label="Technical skills" className="section section-band">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Tech stack</span>
          <h2 className="section-title">Tools & technologies</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((group) => (
            <div key={group.name} className="card card-padded">
              <p className="skill-group-title">{group.name}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
