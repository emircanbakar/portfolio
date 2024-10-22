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
import { motion } from "framer-motion";

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
          <div className="container">
            <Hero/>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.3 },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <About />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.3 },
              }}
              viewport={{ once: false, amount: 0.4}}
            >
              <Skills />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.3 },
              }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Project />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.3 },
              }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Contact />
            </motion.div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
