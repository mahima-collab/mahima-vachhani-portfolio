import { domains } from "../data/portfolio";

export function Domains() {
  return (
    <section aria-label="Domains" className="section-band px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
        {domains.map((domain) => (
          <span key={domain} className="pill">
            {domain}
          </span>
        ))}
      </div>
    </section>
  );
}
