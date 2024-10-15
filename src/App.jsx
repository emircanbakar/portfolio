import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
