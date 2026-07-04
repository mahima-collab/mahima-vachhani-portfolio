import { ArrowRight, Mail } from "lucide-react";
import { personal } from "../data/portfolio";

type Props = {
  onOpen: () => void;
};

export function BizCard({ onOpen }: Props) {
  return (
    <div className="landing">
      <button type="button" onClick={onOpen} className="landing-card">
        <div className="avatar avatar-ring relative mx-auto mb-6 h-24 w-24 text-2xl">
          {personal.initials}
          <span className="status-dot" />
        </div>

        <p className="section-eyebrow">DevOps Engineer</p>
        <h1 className="text-2xl font-bold tracking-tight">
          {personal.name.split(" ")[0]}{" "}
          <span className="text-accent">{personal.name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="mt-1 text-sm text-muted">{personal.subtitle}</p>
        <p className="mt-3 text-xs text-dim">
          {personal.totalExperience} · {personal.location}
        </p>

        <span className="tag tag-accent mt-5">{personal.availability}</span>

        <span className="btn btn-primary mt-6 w-full">
          Open portfolio
          <ArrowRight size={16} />
        </span>

        <p className="mt-4 text-xs text-dim">Tap to explore work & experience</p>
      </button>

      <div className="mt-8 flex gap-3">
        <a href={`mailto:${personal.email}`} className="btn btn-ghost btn-sm" onClick={(e) => e.stopPropagation()}>
          <Mail size={14} />
          Email
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm"
          onClick={(e) => e.stopPropagation()}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
