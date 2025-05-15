import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
// import Latest from "./components/Latest";
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
      // case "Latest Projects":
      //   Component = Latest;
      //   break;
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
        className="mt-2 w-full"
      >
        <Component />
      </motion.div>
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-black overflow-hidden md:p-2">
      {/* Mobil: Nav yukarıda */}
      <div className="block lg:hidden mt-12">
        <Nav active={active} setActive={setActive} />
      </div>

      {/* Masaüstü düzen */}
      <div className="hidden lg:flex flex-row items-center justify-center gap-32 h-screen mx-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-center text-white max-w-[700px] h-[450px] gap-4"
        >
          <div>
            <span className="text-[96px]/[80px] bg-transparent font-700 text-left cursor-default select-none">
              {`I'm Emircan Bakar.`}
            </span>
          </div>
          <div className="relative w-full h-[158px] overflow-hidden">
            <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/4"
        >
          <Nav active={active} setActive={setActive} />
        </motion.div>
      </div>

      <div className="block lg:hidden px-4 mt-10">
        <h1 className="text-stone-800 text-[36px] font-bold mb-6">
          {"I'm Emircan Bakar."}
        </h1>
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </div>
    </div>
  );
};

export default App;
