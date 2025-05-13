import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Latest from "./components/Latest";
import Nav from "./components/Nav";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [active, setActive] = useState("About");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    let Component = null;

    switch (active) {
      case "About":
        Component = About;
        break;
      case "Experience":
        Component = Experience;
        break;
      case "Contact":
        Component = Contact;
        break;
      case "Latest Projects":
        Component = Latest;
        break;
      default:
        return null;
    }

    return (
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full mt-2"
      >
        <Component />
      </motion.div>
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-32 min-h-screen mx-4 md:mx-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start justify-center text-white max-w-[700px] h-full gap-4"
      >
        <div>
          <span className="text-[96px]/[80px] bg-transparent font-700 text-left cursor-default select-none">
            {`I'm Emircan Bakar.`}
          </span>
        </div>
        <div className="relative w-full min-h-[158px] ">
          <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/4"
      >
        <Nav active={active} setActive={setActive} />
      </motion.div>
    </div>
  );
};

export default App;
