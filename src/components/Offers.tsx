import { offers } from "../data/portfolio";

export function Offers() {
  return (
    <section id="offers" className="section-band px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Strengths</span>
        <h2 className="section-title">
          What I bring to <span className="section-title-accent">your team</span>
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          From backend microservices to React product UIs — the full-stack
          expertise to match your team's needs.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.title} className="glass-card p-6">
              <span className="pill mb-4 text-[0.65rem]">{offer.tag}</span>
              <h3 className="text-lg font-medium">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {offer.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
