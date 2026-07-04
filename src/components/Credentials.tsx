import { credentials } from "../data/portfolio";

export function Credentials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Credentials</span>
        <h2 className="section-title">Certifications & education</h2>
        <p className="mt-3 text-muted">
          Verified credentials and academic background
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {credentials.map((cred) => (
            <article key={cred.title} className="glass-card p-6">
              <h3 className="font-medium">{cred.title}</h3>
              <p className="mt-1 text-sm text-accent">{cred.org}</p>
              <p className="mt-3 text-sm text-muted">{cred.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
