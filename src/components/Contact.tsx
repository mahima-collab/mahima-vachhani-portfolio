import { ArrowRight, Download, ExternalLink, Mail, Phone } from "lucide-react";
import { personal } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-band px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's connect</h2>
        <p className="mt-3 max-w-xl text-muted">
          Open to full-time opportunities. Share your role and timeline — I'll
          reply with an honest take on fit.
        </p>

        <a
          href={`mailto:${personal.email}`}
          className="mt-8 inline-block text-lg text-accent link-subtle"
        >
          {personal.email}
        </a>

        <p className="mt-4 text-sm text-dim">
          No fluff · NDA-friendly · You talk to the engineer who does the work
        </p>

        <a href={`mailto:${personal.email}`} className="btn-primary mt-8">
          Start a conversation
          <ArrowRight size={16} />
        </a>

        <p className="mt-8 text-sm text-dim">Also find me on</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card contact-card flex items-center justify-between p-4 text-sm"
          >
            LinkedIn
            <ExternalLink size={14} className="text-dim" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="glass-card contact-card flex items-center justify-between p-4 text-sm"
          >
            Email
            <Mail size={14} className="text-dim" />
          </a>
          <a
            href={personal.resumeUrl}
            download="Mahima_Vachhani_Resume.pdf"
            className="glass-card contact-card flex items-center justify-between p-4 text-sm"
          >
            Resume
            <Download size={14} className="text-dim" />
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            className="glass-card contact-card flex items-center justify-between p-4 text-sm"
          >
            Phone
            <Phone size={14} className="text-dim" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#21262d] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-dim">
          © {new Date().getFullYear()} {personal.name} — 8+ years building
          enterprise software for global teams.
        </p>
        <div className="flex gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-dim transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
