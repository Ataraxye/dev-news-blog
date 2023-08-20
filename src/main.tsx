import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../scss/custom.scss";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

makeServer();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
