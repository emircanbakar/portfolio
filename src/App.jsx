import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  // The Loader component handles its own timing and calls onComplete
  // But we can also have a fallback
  useEffect(() => {
    // If the loader takes too long or for some reason doesn't finish, we force it.
    // However, the Loader component has a hardcoded logic.
    // Let's just rely on the Loader's onComplete prop if we use it,
    // or we can use the existing logic if we want to control it here.
    // The previous App.jsx had a timeout.
    // The Loader component takes a prop `onComplete`.
  }, []);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;

