import { credentials } from "../data/portfolio";

export function Credentials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Credentials</span>
          <h2 className="section-title">Education & background</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((cred) => (
            <article key={cred.title} className="card card-padded card-lift">
              <h3 className="font-bold">{cred.title}</h3>
              <p className="mt-1 text-sm text-accent">{cred.org}</p>
              <p className="mt-3 text-sm text-muted">{cred.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
