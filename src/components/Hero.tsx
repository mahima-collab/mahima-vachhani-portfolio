import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { heroBadges, personal, stats } from "../data/portfolio";

export function Hero() {
  return (
    <section id="top" className="px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="hero-panel mb-10">
          <div className="relative flex flex-col gap-8 md:flex-row md:items-start">
            <div className="relative shrink-0">
              <div className="avatar h-28 w-28 text-3xl md:h-32 md:w-32">
                {personal.initials}
              </div>
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#1a2438] bg-[#38bdf8]" />
            </div>

            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {personal.name.split(" ")[0]}{" "}
                <span className="text-accent">{personal.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="mt-2 text-lg text-muted">
                {personal.title} · {personal.subtitle}
              </p>
              <p className="mt-1 text-sm">
                <span className="text-accent font-medium">{personal.totalExperience}</span>
                <span className="text-muted"> total experience · {personal.experiencePeriod}</span>
              </p>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm link-subtle underline underline-offset-4"
              >
                <ExternalLink size={14} />
                linkedin.com/in/rahul-gautam-1bbb20136
              </a>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#cbd5e1] sm:text-xl">
                {personal.heroTagline}
              </p>

              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-dim">
                {personal.heroTrust}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {heroBadges.map((badge, i) => (
                  <span key={badge} className={i === 0 ? "pill pill-accent" : "pill"}>
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Start a conversation
                  <ArrowRight size={16} />
                </a>
                <a href="#work" className="btn-secondary">
                  See proof of work
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 link-subtle underline underline-offset-4"
                >
                  <ExternalLink size={14} />
                  LinkedIn
                </a>
                <a
                  href={personal.resumeUrl}
                  download="Rahul_Gautam_Resume.pdf"
                  className="inline-flex items-center gap-1.5 link-subtle underline underline-offset-4"
                >
                  <Download size={14} />
                  Download résumé
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <p className="stat-value text-2xl font-bold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-dim">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
