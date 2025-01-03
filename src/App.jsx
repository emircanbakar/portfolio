import "./App.css";
import About from "./components/About";
// import { useState } from "react";
// import Loader from "./components/Loader/Loader";

function App() {
  // const [loading, setLoading] = useState(true);
  // const handleLoaderComplete = () => {
  //   setLoading(false);
  // };

  return (
    <div className="flex flex-row text-white bg-black">
      <About/>
    </div>
  );
}

export default App;
