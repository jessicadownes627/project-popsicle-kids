import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Topics from "./pages/Topics";
import Events from "./pages/Events";
import TalkTips from "./pages/TalkTips";
import News from "./pages/News";
import Parent from "./pages/Parent";
import ParentSettings from "./pages/ParentSettings";
import ParentNews from "./pages/ParentNews";
import ParentEvents from "./pages/ParentEvents"; // 👈 NEW
import Glossary from "./pages/Glossary";

function App() {
  return (
    <Router>
      <Routes>
        {/* Kids flow */}
        <Route path="/" element={<Welcome />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/talktips" element={<TalkTips />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />

        {/* Parent flow */}
        <Route path="/parent" element={<Parent />} />
        <Route path="/parent-settings" element={<ParentSettings />} />
        <Route path="/parent-news" element={<ParentNews />} />
        <Route path="/parent-events" element={<ParentEvents />} /> {/* ✅ Added */}
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
    </Router>
  );
}

export default App;
