import { useRef, useCallback } from "react";

/**
 * MagneticLink — Interactive link that follows the cursor slightly.
 * Creates a premium magnetic hover effect on social links and CTAs.
 */
export default function MagneticLink({ children, href, download = false }) {
  const linkRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = linkRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;

    el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = linkRef.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }, []);

  const props = {
    href,
    target: download ? undefined : "_blank",
    rel: download ? undefined : "noopener noreferrer",
    ...(download ? { download: true } : {}),
  };

  return (
    <a
      ref={linkRef}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-block",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </a>
  );
}
