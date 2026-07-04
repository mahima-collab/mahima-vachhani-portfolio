import { domains } from "../data/portfolio";

export function Domains() {
  return (
    <section aria-label="Domains" className="section-band px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="domains-marquee">
          {domains.map((domain) => (
            <span key={domain} className="pill pill-accent">
              {domain}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
