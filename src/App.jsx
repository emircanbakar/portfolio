import { useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import ParticleField, { AmbientParticles } from "./components/ParticleField";
import HeroScene from "./components/scenes/HeroScene";
import AboutScene from "./components/scenes/AboutScene";
import ProjectsScene from "./components/scenes/ProjectsScene";
import SkillsScene from "./components/scenes/SkillsScene";
import ContactScene from "./components/scenes/ContactScene";
import { useScrollProgress } from "./hooks/useScrollProgress";

/**
 * App — Root component.
 * Orchestrates loading, smooth scroll, 3D canvas, navigation, and all scenes.
 */
function AppContent() {
  return (
    <>
      {/* Fixed 3D background */}
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <AdaptiveDpr pixelated />
          <Suspense fallback={null}>
            <ParticleField />
            <AmbientParticles />
          </Suspense>
          <ambientLight intensity={0.3} />
        </Canvas>
      </div>

      {/* Navigation overlay */}
      <Navigation />

      {/* Scroll story */}
      <SmoothScroll>
        <main>
          <HeroScene />
          <AboutScene />
          <ProjectsScene />
          <SkillsScene />
          <ContactScene />
        </main>
      </SmoothScroll>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={handleLoadComplete} />}
      {!loading && <AppContent />}
    </>
  );
}
