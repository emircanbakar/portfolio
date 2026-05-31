import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../../data/content";
import SkillNode from "../ui/SkillNode";

gsap.registerPlugin(ScrollTrigger);

/**
 * SkillsScene — Interactive floating skill constellation.
 * Skills enter staggered on scroll with floating animation.
 */
export default function SkillsScene() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      // Label reveal
      gsap.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skill nodes stagger reveal
      const nodes = gridRef.current?.querySelectorAll(".skill-node");
      if (nodes?.length) {
        gsap.fromTo(
          nodes,
          {
            y: 40,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: {
              each: 0.06,
              from: "random",
            },
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const allSkills = [
    ...skills.featured.map((s) => ({ name: s, featured: true })),
    ...skills.core.map((s) => ({ name: s, featured: false })),
  ];

  return (
    <section id="skills" ref={sectionRef} className="skills scene">
      <div className="skills-bg-text">SKILLS</div>

      <div className="skills-content">
        <span ref={labelRef} className="skills-label">
          Capabilities
        </span>

        <div ref={gridRef} className="skills-grid">
          {allSkills.map((skill, i) => (
            <SkillNode
              key={skill.name}
              name={skill.name}
              featured={skill.featured}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
