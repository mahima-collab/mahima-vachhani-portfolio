import { Globe, Layers, Target, Users } from "lucide-react";
import { valueProps } from "../data/portfolio";

const icons = [Layers, Target, Globe, Users];

export function WhyMe() {
  return (
    <section id="why-me" className="section-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Why me</span>
        <h2 className="section-title">
          Why <span className="section-title-accent">teams</span> hire me
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          You get a senior engineer who owns delivery — clear communication,
          honest estimates, and code your team can maintain.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {valueProps.map((prop, i) => {
            const Icon = icons[i];
            return (
              <article key={prop.title} className="glass-card p-6">
                <span className="icon-box mb-3">
                  <Icon size={18} />
                </span>
                <h3 className="text-lg font-medium">{prop.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {prop.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
