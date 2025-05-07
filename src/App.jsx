import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Latest from "./components/Latest";
import Nav from "./components/Nav";

const App = () => {
  const [active, setActive] = useState("About");

  const renderSection = () => {
    switch (active) {
      case "About":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Contact":
        return <Contact />;
      case "Latest Projects":
        return <Latest />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-32 h-screen mx-16">
      <div className="flex flex-col items-start justify-center text-white max-w-[700px] max-h-[450px] gap-4">
        <div>
          <span className="text-[96px]/[80px] bg-transparent font-700 text-left">{`I'm Emircan Bakar.`}</span>
        </div>
        <div className="max-w-[700px] max-h-[120px]">{renderSection()}</div>
      </div>
      <Nav active={active} setActive={setActive} />
    </div>
  );
};

export default App;
