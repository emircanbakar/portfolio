import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * HeroScene — Typographic opening.
 * Name as massive H1, left-aligned, bottom-anchored.
 * Each character lifts individually on hover via CSS.
 * GSAP entry: chars fly up from below, then meta fades in.
 */
export default function HeroScene() {
  const sectionRef = useRef(null);
  const nameRef    = useRef(null);
  const metaRef    = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      const chars = nameRef.current?.querySelectorAll(".hero-name-char");

      if (chars?.length) {
        gsap.to(chars, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.025,
          ease: "power4.out",
          delay: 0.1,
        });
      }

      gsap.to(metaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.65,
      });

      gsap.to(indicatorRef.current, {
        opacity: 1,
        duration: 0.8,
        delay: 1,
      });

      // Scroll-driven parallax: name drifts slightly up
      gsap.fromTo(nameRef.current,
        { y: 0 },
        {
          y: -60,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(metaRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -30,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: "10% top",
            end: "60% top",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Split name into words → chars
  const words = hero.name.split(" ").map((word, wi) => (
    <span key={wi} className="hero-name-word">
      {word.split("").map((char, ci) => (
        <span
          key={ci}
          className="hero-name-char"
          style={{ transitionDelay: `${(wi * 10 + ci) * 20}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  ));

  return (
    <section id="hero" ref={sectionRef} className="hero scene">
      <div className="hero-content">
        <h1 ref={nameRef} className="hero-name" aria-label={hero.name}>
          {words}
        </h1>

        <div ref={metaRef} className="hero-meta" style={{ transform: "translateY(10px)" }}>
          <span className="hero-title">{hero.title}</span>
          <div className="hero-divider" />
          <span className="hero-subtitle">{hero.subtitle}</span>
        </div>

        <div ref={indicatorRef} className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-indicator-line" />
        </div>
      </div>

      <div className="hero-rule" />
    </section>
  );
}
