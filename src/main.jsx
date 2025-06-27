import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Topics from "./pages/Topics";
import TalkTips from "./pages/TalkTips";
import News from "./pages/News";
import Events from "./pages/Events";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/talktips" element={<TalkTips />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
