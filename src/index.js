import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./presentation/styles/global/global.scss";

import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import ProjectPage from "./presentation/pages/project-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projeto/:id" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

reportWebVitals();