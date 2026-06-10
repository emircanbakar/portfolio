import SmoothScroll from "./components/SmoothScroll";
import Navigation from "./components/Navigation";
import HeroScene from "./components/scenes/HeroScene";
import AboutScene from "./components/scenes/AboutScene";
import ExperienceScene from "./components/scenes/ExperienceScene";
import ContactScene from "./components/scenes/ContactScene";

/**
 * App — Root component.
 * Orchestrates loading, smooth scroll, navigation, and all scenes.
 * Three.js / ParticleField removed in favour of a clean editorial layout.
 */
function AppContent() {
  return (
    <>
      {/* Navigation overlay */}
      <Navigation />

      {/* Scroll story */}
      <SmoothScroll>
        <main>
          <HeroScene />
          <AboutScene />
          <ExperienceScene />
          <ContactScene />
        </main>
      </SmoothScroll>
    </>
  );
}

export default function App() {
  return <AppContent />;
}
