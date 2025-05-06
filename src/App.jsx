import About from "./components/About";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-32 h-screen mx-16">
      <div className="flex flex-col items-start justify-center text-white max-w-[700px] gap-8">
        <div>
          <span className="text-[96px] font-700 text-left">{`I'm Emircan Bakar.`}</span>
        </div>
        <About />
      </div>
      <Nav />
    </div>
  );
};

export default App;
