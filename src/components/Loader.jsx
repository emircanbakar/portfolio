import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Loader — Cinematic loading screen with letter-by-letter reveal
 * and a thin progress bar.
 */
export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const text = "ecbakar.dev";

  useEffect(() => {
    // Minimum display time: 2.5s for the cinematic feel
    const timer = setTimeout(() => {
      setVisible(false);
      // Wait for exit animation to complete
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-overlay"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loader-text">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className="char"
                style={{ animationDelay: `${0.4 + i * 0.06}s` }}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="loader-progress">
            <div className="loader-progress-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
