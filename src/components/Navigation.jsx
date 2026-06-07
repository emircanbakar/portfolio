import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { id: "hero",       label: "Home" },
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact" },
];

/**
 * Navigation — Minimal dot nav on the right edge.
 * Shows after scrolling past hero. Tracks active section.
 */
export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible]         = useState(false);

  useEffect(() => {
    const triggers = [];

    triggers.push(
      ScrollTrigger.create({
        trigger: "#about",
        start: "top 80%",
        onEnter:     () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false),
      })
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end:   "bottom center",
          onEnter:     () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        })
      );
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="nav"
      style={{
        opacity:       isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition:    "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {NAV_ITEMS.map(({ id, label }) => (
        <div
          key={id}
          className="nav-item"
          onClick={() => scrollTo(id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollTo(id)}
          aria-label={`Navigate to ${label}`}
        >
          <span className="nav-label">{label}</span>
          <div className={`nav-dot ${activeSection === id ? "nav-dot--active" : ""}`} />
        </div>
      ))}
    </nav>
  );
}
