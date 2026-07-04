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
    const ids = navLinks.map((l) => l.href.slice(1));
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
    <header
      className={`fixed inset-x-0 top-7 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-[#1e2a3d] bg-[#0b1120]/90 backdrop-blur-md"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold">
          <span className="avatar flex h-8 w-8 text-xs">{personal.initials}</span>
          <span className="hidden sm:inline">{personal.name.split(" ")[0]}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  activeSection === id
                    ? "font-semibold text-accent"
                    : "text-muted hover:text-[#f1f5f9]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent sm:flex"
          >
            <ExternalLink size={14} />
            LinkedIn
          </a>
          <a
            href={personal.resumeUrl}
            download="Rahul_Gautam_Resume.pdf"
            className="hidden items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent sm:flex"
          >
            <Download size={14} />
            Resume
          </a>
          <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm">
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
}
