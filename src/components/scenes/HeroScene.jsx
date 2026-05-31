import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero } from "../../data/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * HeroScene — Cinematic opening shot.
 * Full-screen typography over particle field with scroll-driven fade.
 *
 * Two-phase animation:
 * 1. Entry: staggered char reveal (timeline, plays once)
 * 2. Scroll: parallax fade-out (fromTo with explicit start/end values)
 *
 * Using fromTo for scroll animations ensures correct state restoration
 * when scrolling back to the top.
 */
export default function HeroScene() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const nameRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      // ── Phase 1: Entry animation (plays once) ──
      const entryTl = gsap.timeline();

      const titleCharsArray = titleRef.current?.querySelectorAll(".char");
      if (titleCharsArray?.length) {
        entryTl
          .fromTo(titleCharsArray, 
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.03,
              ease: "power4.out",
              delay: 0.2,
            }
          )
          .fromTo(
            subtitleRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.6"
          )
          .fromTo(
            nameRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.7"
          )
          .fromTo(
            indicatorRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 },
            "-=0.5"
          );
      }

      // ── Phase 2: Scroll-driven fade out ──
      // Temporarily disabled to check if ScrollTrigger is causing the disappearance bug
      /*
      gsap.to(".hero-content", {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
      });
      */
    }, section);

    return () => ctx.revert();
  }, []);

  // Split title into characters
  const titleChars = hero.title.split("").map((char, i) => (
    <span key={i} className="char">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <section id="hero" ref={sectionRef} className="hero scene">
      <div className="hero-content">
        <div ref={nameRef} className="hero-name">
          {hero.name}
        </div>

        <h1 ref={titleRef} className="hero-title">
          {titleChars}
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          {hero.subtitle}
        </p>

        <div ref={indicatorRef} className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-indicator-line" />
        </div>
      </div>
    </section>
  );
}
