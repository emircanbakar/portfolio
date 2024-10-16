import { useState, useEffect } from "react";
import "./Loader.css"; // CSS dosyasını dahil edin

const Loader = ({ onComplete }) => {
  const [text, setText] = useState(""); // Başlangıçta boş string
  const fullText = "ecbakar.dev";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1)); // State'i güvenli bir şekilde güncelle
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(onComplete, 500); // Yazı bittikten sonra 500ms gecikme ile sayfa açılır
      }
    }, 200); // Harflerin arası 200ms

    return () => clearInterval(intervalId); // Temizleme işlemi
  }, [onComplete, fullText]);

  return (
    <div className="loader">
      <h1 className="text">{text}</h1> {/* 'ecbakar' yazısını göster */}
    </div>
  );
};

export default Loader;
