
import { useState, useEffect } from "react";
import "./Loader.css";

const Loader = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "ecbakar.dev";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(onComplete, 750);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [onComplete, fullText]);

  return (
    <div className="loader">
      <h1 className="text">{text}</h1>
    </div>
  );
};

export default Loader;
