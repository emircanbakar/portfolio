import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutScene — Identity reveal with parallax layers.
 * Large background text, intro copy, and career timeline.
 */
export default function AboutScene() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const labelRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      // Background text parallax (moves slower than scroll)
      gsap.to(bgTextRef.current, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        x: -100,
        ease: "none",
      });

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

      // Text lines reveal
      const lines = textRef.current?.querySelectorAll(".line-inner");
      if (lines?.length) {
        gsap.fromTo(
          lines,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Timeline items stagger
      const timelineItems =
        timelineRef.current?.querySelectorAll(".timeline-item");
      if (timelineItems?.length) {
        gsap.fromTo(
          timelineItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // Split intro into lines for stagger animation
  const introLines = about.intro.match(/.{1,60}(\s|$)/g) || [about.intro];

  return (
    <section id="about" ref={sectionRef} className="about scene">
      <div ref={bgTextRef} className="about-bg-text">
        ABOUT
      </div>

      <div className="about-content">
        <span ref={labelRef} className="about-label">
          About Me
        </span>

        <div ref={textRef} className="about-text">
          {introLines.map((line, i) => (
            <span key={i} className="line">
              <span className="line-inner">{line.trim()}</span>
            </span>
          ))}
        </div>

        <div ref={timelineRef} className="about-timeline">
          {about.timeline.map((item, i) => (
            <div key={i} className={`timeline-item${item.current ? ' timeline-item--current' : ''}`}>
              <div className="timeline-dot" />
              <div className="timeline-year">
                {item.year}{item.current && ' — Present'}
              </div>
              <div className="timeline-role">
                {item.role}
                {item.company && ` — ${item.company}`}
              </div>
              {item.current && (
                <span className="timeline-current-badge">
                  <span className="timeline-current-pulse" />
                  Active
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
