import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import hero from "./pages/Hero/Hero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <hero />
    <App />
  </React.StrictMode>
);
