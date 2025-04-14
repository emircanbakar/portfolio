import About from "./views/About";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (componentName) => {
    setIsOpen((prev) => (prev === componentName ? null : componentName));
  };

  return (
    <div className="flex flex-row items-center justify-between h-screen bg-black text-gray-600 max-w-[1152px] max-h-[600px]: m-auto gap-16">
      <div className="flex flex-col items-left justify-center">
        <span className="text-4xl font-bold">Emircan Bakar</span>
        <h3 className="text-2xl font-light">Software Engineer</h3>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <About
          handleToggle={() => handleToggle("about")}
          isOpen={isOpen === "about"}
        />
        <Experience
          handleToggle={() => handleToggle("experience")}
          isOpen={isOpen === "experience"}
        />
        <Contact
          handleToggle={() => handleToggle("contact")}
          isOpen={isOpen === "contact"}
        />
      </div>
    </div>
  );
};

export default App;
