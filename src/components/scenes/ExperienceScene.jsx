import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about, skills } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * ExperienceScene — Career timeline + skills block combined.
 * Skills are rendered as a large typographic string below the timeline,
 * not as pill cards. Clean, editorial, minimal.
 */
export default function ExperienceScene() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);
  const skillsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      const topTrigger = { trigger: section, start: "top 65%", toggleActions: "play none none reverse" };

      gsap.fromTo(labelRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: topTrigger }
      );

      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.1, scrollTrigger: topTrigger }
      );

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(item,
          { y: 36, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: i * 0.08,
            scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none reverse" },
          }
        );
      });

      gsap.fromTo(skillsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: skillsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Combine featured + core skills into one sentence-like string
  const allSkills = [...skills.featured, ...skills.core];

  return (
    <section id="experience" ref={sectionRef} className="experience scene">
      <div className="experience-inner">
        <span ref={labelRef} className="experience-label">Experience &amp; Skills</span>

        <h2 ref={headingRef} className="experience-heading">Experience</h2>

        {/* Experience timeline */}
        <div className="exp-list">
          {[...about.timeline].reverse().map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`exp-entry ${item.current ? "exp-entry--current" : ""}`}
            >
              <div className="exp-entry-left">
                <span className="exp-entry-year">
                  {item.year}{item.current && " — Now"}
                </span>
                {item.current && (
                  <span className="exp-live-badge">
                    <span className="exp-live-dot" />
                    Active
                  </span>
                )}
              </div>

              <div className="exp-entry-divider" />

              <div className="exp-entry-right">
                <h3 className="exp-entry-role">{item.role}</h3>
                <p className="exp-entry-company">{item.company}</p>
                {item.description && (
                  <p className="exp-entry-desc">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills block */}
        <div ref={skillsRef} className="skills-block">
          <span className="skills-block-label">Skills</span>
          <p className="skills-text">
            {allSkills.map((skill, i) => (
              <span key={skill}>
                {i < skills.featured.length
                  ? <strong>{skill}</strong>
                  : skill
                }
                {i < allSkills.length - 1 && <span style={{ color: "var(--text-tertiary)" }}>{" · "}</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
