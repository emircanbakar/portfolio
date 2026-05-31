import { useRef, useCallback } from "react";

/**
 * SkillNode — Individual skill element with 3D tilt on hover.
 * Tracks mouse position within the node to calculate tilt direction.
 */
export default function SkillNode({ name, featured, index }) {
  const nodeRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const node = nodeRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    node.style.transform = `
      perspective(600px)
      rotateY(${x * 12}deg)
      rotateX(${-y * 12}deg)
      translateY(-4px)
    `;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const node = nodeRef.current;
    if (!node) return;
    node.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  }, []);

  return (
    <div
      ref={nodeRef}
      className={`skill-node ${featured ? "skill-node--featured" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${index * 0.3}s`,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), color 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {name}
    </div>
  );
}
