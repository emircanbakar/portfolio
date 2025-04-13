import About from "./components/About/About";

const App = () => {
  return (
    <div className="flex flex-row items-center justify-between h-screen bg-black text-white max-w-[800px] max-h-[600px]: m-auto gap-16">
      <div className="flex flex-col items-left justify-center">
        <h2>Emircan Bakar</h2>
        <h3>Software Engineer</h3>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default App;
