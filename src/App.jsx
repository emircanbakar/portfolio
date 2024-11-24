import "./App.css";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Left from "./components/Left";

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <div className="container">
      {/* {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <div className="container">
          <Left />
        </div>
      )} */}
      <Left/>
    </div>
  );
}

export default App;
