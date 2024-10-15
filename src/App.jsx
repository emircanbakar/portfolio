import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
