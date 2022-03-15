import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { APIProvider } from "./context/api-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <Router>
        <App />
      </Router>
    </APIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

