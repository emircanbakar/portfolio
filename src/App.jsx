import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
