import { offers } from "../data/portfolio";

export function Offers() {
  return (
    <section id="offers" className="section section-shade-warm">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Core strengths</span>
          <h2 className="section-title">Services & expertise</h2>
          <p className="section-desc">
            End-to-end cloud operations for teams that need secure, scalable, and
            observable production environments.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.title} className="card card-padded card-lift">
              <span className="tag mb-4">{offer.tag}</span>
              <h3 className="text-base font-bold">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{offer.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
