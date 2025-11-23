import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader/Loader";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-primary)] selection:bg-white selection:text-black cursor-none">
      <CustomCursor />
      <Background />
      <Navbar />
      <main className="relative z-10">
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

