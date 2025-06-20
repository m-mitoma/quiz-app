import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const getRouterBasename = () => {
  if (import.meta.env.DEV) {
    return "/quiz-app/";
  }
  return "/";
};
const routerBasename = getRouterBasename();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
