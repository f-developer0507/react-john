import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./font/Heebo.css";
import "./reset.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
