import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../data/content";
import ProjectCard from "../ui/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

/**
 * ProjectsScene — Horizontal scroll gallery.
 * Vertical scroll drives horizontal project movement.
 * This is the centerpiece of the portfolio.
 */
export default function ProjectsScene() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Calculate total horizontal distance
      const totalWidth = track.scrollWidth - window.innerWidth;

      // Horizontal scroll animation
      const scrollTween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update counter based on scroll progress
            const index = Math.min(
              Math.floor(self.progress * projects.length),
              projects.length - 1
            );
            setCurrentIndex(index);
          },
        },
      });

      // Animate each card as it enters viewport
      const cards = track.querySelectorAll(".project-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 80%",
              end: "left 30%",
              scrub: 1,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects scene">
      <div ref={headerRef} className="projects-header">
        <span className="projects-label">Selected Work</span>
        <h2 className="projects-title">Projects</h2>
      </div>

      <div className="projects-pin-wrapper">
        <div
          ref={trackRef}
          className="projects-track"
          style={{
            width: `${projects.length * 80 + 20}vw`,
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="projects-counter">
        <span className="current">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        {" / "}
        {String(projects.length).padStart(2, "0")}
      </div>
    </section>
  );
}
