import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Menu from "./assets/Menu/Menu";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleLoaderComplete = () => {
    setLoading(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <div>
          <Menu onClick={toggleMenu} />
          {menuOpen && (
            <nav className="menu" onClick={toggleMenu}>
              <ul>
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#project">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          )}
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
