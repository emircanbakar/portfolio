import "./App.css";
import { useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <div>
          <div className="container">
            <h2>Hi there</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
