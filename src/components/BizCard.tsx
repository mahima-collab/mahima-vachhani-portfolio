import { ArrowRight, Cloud, Container, GitBranch, Mail, Server } from "lucide-react";
import { personal } from "../data/portfolio";

type Props = {
  onOpen: () => void;
};

export function BizCard({ onOpen }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <button type="button" onClick={onOpen} className="biz-card-shell cursor-pointer">
        <div className="biz-card-inner">
          <div className="relative mx-auto mb-5 h-24 w-24">
            <div className="avatar h-full w-full text-2xl">{personal.initials}</div>
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#1a2438] bg-[#38bdf8]" />
          </div>

          <h1 className="mb-1 text-2xl font-bold">
            {personal.name.split(" ")[0]}{" "}
            <span className="text-accent">{personal.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mb-1 text-sm text-muted">
            {personal.title} · {personal.subtitle}
          </p>
          <p className="mb-5 text-xs text-accent">{personal.totalExperience} · {personal.experiencePeriod}</p>

          <div className="mb-5 flex justify-center gap-2">
            {[Cloud, Container, GitBranch, Server].map((Icon, i) => (
              <span key={i} className="icon-chip">
                <Icon size={16} />
              </span>
            ))}
          </div>

          <span className="pill pill-accent mb-5">{personal.availability}</span>

          <span className="btn-primary mx-auto w-full">
            View portfolio
            <ArrowRight size={16} />
          </span>

          <p className="mt-4 text-xs text-dim">
            Click the card to explore projects, experience & contact
          </p>
        </div>
      </button>

      <div className="mt-6 flex gap-3">
        <a href={`mailto:${personal.email}`} className="link-pill" onClick={(e) => e.stopPropagation()}>
          <Mail size={14} className="mr-1.5 inline" />
          Email
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-pill"
          onClick={(e) => e.stopPropagation()}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
