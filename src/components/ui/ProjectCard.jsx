import { FiArrowUpRight } from "react-icons/fi";

/**
 * ProjectCard — Individual project in the horizontal gallery.
 * The entire card is wrapped in an <a> tag for full clickability.
 * Large visual preview with info section below.
 */
export default function ProjectCard({ project, index }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      aria-label={`Visit ${project.title}`}
    >
      <div className="project-card-visual">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}08 50%, #11111100 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 700,
                color: `${project.color}15`,
                letterSpacing: "-0.02em",
                userSelect: "none",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      <div className="project-card-info">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        <div className="project-card-meta">
          <div className="project-card-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>

          <span className="project-card-link">
            Visit
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </a>
  );
}
