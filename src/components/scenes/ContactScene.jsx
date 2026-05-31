import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import { contact, meta } from "../../data/content";
import MagneticLink from "../ui/MagneticLink";

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  github: FiGithub,
  linkedin: FiLinkedin,
  file: FiFileText,
};

/**
 * ContactScene — Calm cinematic ending.
 * Minimal CTA, email, social links, and footer.
 */
export default function ContactScene() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      const children = contentRef.current?.children;
      if (children?.length) {
        gsap.fromTo(
          children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="contact scene">
      <div ref={contentRef}>
        <span className="contact-label">Contact</span>

        <h2 className="contact-title">{contact.heading}</h2>

        <p className="contact-subtitle">{contact.subtitle}</p>

        <a
          href={`mailto:${meta.email}`}
          className="contact-email"
          aria-label="Send email"
        >
          {meta.email}
        </a>

        <div className="contact-links">
          {contact.links.map((link) => {
            const Icon = ICON_MAP[link.icon];
            return (
              <MagneticLink key={link.label} href={link.url} download={link.download}>
                <div
                  className="contact-link"
                  aria-label={link.label}
                  title={link.label}
                >
                  {Icon && <Icon />}
                </div>
              </MagneticLink>
            );
          })}
        </div>
      </div>

      <div className="contact-footer">
        © {new Date().getFullYear()} {meta.name} — All rights reserved
      </div>
    </section>
  );
}
