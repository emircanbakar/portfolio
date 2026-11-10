import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Vitalscope: Core Web Vitals and errors, only in development (`npx vitalscope dev`).
// `vite build --mode vitalscope` measures a production build; a normal build leaves it out.
if (import.meta.env.DEV || import.meta.env.MODE === "vitalscope") {
  void import("@vitalscope/sdk").then(({ init }) => init());
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
