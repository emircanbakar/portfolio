import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutScene — Editorial two-column layout.
 * Left: large "About" heading. Right: big intro text.
 * No background ghost text — clean and minimal.
 */
export default function AboutScene() {
  const sectionRef  = useRef(null);
  const labelRef    = useRef(null);
  const headingRef  = useRef(null);
  const textRef     = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      const trigger = { trigger: section, start: "top 65%", toggleActions: "play none none reverse" };

      gsap.fromTo(labelRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: trigger }
      );

      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.1, scrollTrigger: trigger }
      );

      const lines = textRef.current?.querySelectorAll(".line-inner");
      if (lines?.length) {
        gsap.fromTo(lines,
          { y: 32, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, stagger: 0.018, ease: "power3.out",
            scrollTrigger: { trigger: textRef.current, start: "top 70%", toggleActions: "play none none reverse" },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const words = about.intro.split(" ");

  return (
    <section id="about" ref={sectionRef} className="about scene">
      <div className="about-inner">
        {/* Left column */}
        <div className="about-left">
          <span ref={labelRef} className="about-label">About Me</span>
          <h2 ref={headingRef} className="about-heading">About</h2>
        </div>

        {/* Right column */}
        <div className="about-right">
          <div ref={textRef} className="about-text">
            {words.map((word, i) => (
              <span key={i} className="line" style={{ display: "inline-block", marginRight: "0.28em" }}>
                <span className="line-inner" style={{ display: "inline-block" }}>{word}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
