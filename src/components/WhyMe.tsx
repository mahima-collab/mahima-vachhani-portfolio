import { Cloud, Gauge, Shield, Zap } from "lucide-react";
import { valueProps } from "../data/portfolio";

const icons = [Cloud, Zap, Gauge, Shield];

export function WhyMe() {
  return (
    <section id="why-me" className="section section-band">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Why work with me</span>
          <h2 className="section-title">What I bring to your team</h2>
          <p className="section-desc">
            Hands-on DevOps ownership — from infrastructure to production, with
            automation and reliability at the core.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {valueProps.map((prop, i) => {
            const Icon = icons[i];
            return (
              <article key={prop.title} className="card card-padded card-lift">
                <span className="icon-wrap">
                  <Icon size={18} />
                </span>
                <h3 className="text-base font-bold">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{prop.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
