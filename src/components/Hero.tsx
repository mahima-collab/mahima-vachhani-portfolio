import { ArrowRight, Download, ExternalLink, MapPin } from "lucide-react";
import { domains, heroBadges, personal, stats } from "../data/portfolio";

export function Hero() {
  return (
    <section id="top" className="section pb-8 pt-32">
      <div className="container">
        <div className="hero-wrap">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left lg:pl-1 relative z-[1]">
          <div className="mb-8 flex justify-center lg:justify-start">
            <div className="avatar avatar-ring relative h-20 w-20 text-xl">
              {personal.initials}
              <span className="status-dot" />
            </div>
          </div>

          <p className="section-eyebrow">DevOps · Cloud · CI/CD</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {personal.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-3 text-xl font-medium sm:text-2xl">
            <span className="text-accent">{personal.title}</span>
            <span className="text-muted"> building reliable cloud systems.</span>
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted lg:mx-0 lg:text-lg">
            {personal.heroTagline}
          </p>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-dim lg:justify-start">
            <MapPin size={14} />
            {personal.location}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {heroBadges.map((badge) => (
              <span key={badge} className="tag">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <ArrowRight size={16} />
            </a>
            <a href="#work" className="btn btn-ghost">
              View projects
            </a>
            <a
              href={personal.resumeUrl}
              download="Mahima_Vachhani_Resume.pdf"
              className="btn btn-ghost"
            >
              <Download size={16} />
              Résumé
            </a>
          </div>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover mt-5 inline-flex items-center gap-1.5 text-sm"
          >
            <ExternalLink size={14} />
            linkedin.com/in/{personal.handle}
          </a>
        </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
          {domains.map((d) => (
            <span key={d} className="tag tag-accent">
              {d}
            </span>
          ))}
        </div>

        <div className="stats-row mt-14">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
