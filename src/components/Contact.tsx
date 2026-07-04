import { ArrowRight, Download, ExternalLink, Mail, Phone } from "lucide-react";
import { personal } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-cta">
          <div className="relative">
            <span className="section-eyebrow">Contact</span>
            <h2 className="section-title">Let&apos;s work together</h2>
            <p className="mt-3 max-w-lg text-muted">
              Open to DevOps and cloud engineering roles. Reach out with your role
              details — I&apos;ll get back to you promptly.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="mt-6 block text-xl font-semibold text-accent link-hover"
            >
              {personal.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                Send email
                <ArrowRight size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "LinkedIn", href: personal.linkedin, icon: ExternalLink, external: true },
            { label: "Email", href: `mailto:${personal.email}`, icon: Mail, external: false },
            {
              label: "Resume",
              href: personal.resumeUrl,
              icon: Download,
              external: false,
              download: true,
            },
            {
              label: "Phone",
              href: `tel:${personal.phone.replace(/\s/g, "")}`,
              icon: Phone,
              external: false,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              download={item.download ? "Mahima_Vachhani_Resume.pdf" : undefined}
              className="card card-padded flex items-center justify-between text-sm font-medium card-lift"
            >
              {item.label}
              <item.icon size={16} className="text-dim" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-dim">
          © {new Date().getFullYear()} {personal.name} · DevOps Engineer
        </p>
        <div className="flex gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
            aria-label="LinkedIn"
          >
            <ExternalLink size={16} />
          </a>
          <a href={`mailto:${personal.email}`} className="link-hover" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
