
import React from "react";
import ReactDOM from "react-dom/client";
import "./presentation/styles/global/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Bookworm from "./presentation/pages/bookworm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bookworm" element={<Bookworm />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

reportWebVitals();