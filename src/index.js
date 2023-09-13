import React from "react";
import ReactDOM from "react-dom/client";
import "./presentation/styles/global/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Bookworm from "./presentation/pages/bookworm";
import Finans from "./presentation/pages/finans";
import Foodies from "./presentation/pages/foodies";
import PlayTv from "./presentation/pages/play-tv";
import Pokemundi from "./presentation/pages/pokemundi";
import SpotifyClone from "./presentation/pages/spotify";
import TravelBeyond from "./presentation/pages/travel-beyond";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bookworm" element={<Bookworm />} />
        <Route path="/finans" element={<Finans />} />
        <Route path="/foodies" element={<Foodies />} />
        <Route path="/play-tv" element={<PlayTv />} />
        <Route path="/pokemundi" element={<Pokemundi />} />
        <Route path="/spotify" element={<SpotifyClone/>} />
        <Route path="/travel-beyond" element={<TravelBeyond />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

reportWebVitals();