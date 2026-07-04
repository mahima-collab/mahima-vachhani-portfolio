import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { navLinks, personal } from "../data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...navLinks.map((l) => l.href.slice(1))];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold">
            <span className="avatar flex h-8 w-8 text-xs">{personal.initials}</span>
            <span className="hidden sm:inline">{personal.name.split(" ")[0]}</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === id ? "is-active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover hidden p-2 sm:block"
              aria-label="LinkedIn"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={personal.resumeUrl}
              download="Mahima_Vachhani_Resume.pdf"
              className="link-hover hidden p-2 sm:block"
              aria-label="Resume"
            >
              <Download size={16} />
            </a>
            <a href="#contact" className="btn btn-primary btn-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
