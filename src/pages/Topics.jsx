// src/pages/Topics.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import topicGroupsByAge from "../data/topicGroupsByAge.js";
import topicEmojis from "../data/topicEmojis.js";
import topicLabelMap from "../data/topicLabelMap.js";

const groupGradients = {
  "🧠 Brain Boosters": "from-pink-500 to-purple-500",
  "🎮 Games & Tech": "from-sky-500 to-blue-500",
  "📚 Stories & Heroes": "from-red-400 to-orange-400",
  "🌍 Animals & Places": "from-green-500 to-emerald-400",
  "🎨 Creative Life": "from-yellow-400 to-pink-500",
};

const Topics = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { kidName = "you", ageGroup = "5-7" } = location.state || {};
  const [selectedTopics, setSelectedTopics] = useState([]);

  // scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ageTopics = topicGroupsByAge[ageGroup] || {};

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : prev.length < 6
        ? [...prev, topic]
        : prev
    );
  };

  const handleSubmit = () => {
    if (selectedTopics.length > 0) {
      navigate("/talktips", {
        state: { kidName, ageGroup, selectedTopics },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-yellow-100 to-pink-200 text-[#0a2540] p-6">
      <h1 className="text-4xl font-bold text-center mb-2 drop-shadow-glow">
        ✨ Pick Your Topics, {kidName}!
      </h1>
      <p className="text-center text-base mb-8 max-w-lg mx-auto italic">
        🌟 Choose your faves (up to 6) and we’ll surprise you with fun facts,
        cool convo starters, and silly stories!
      </p>

      {Object.entries(ageTopics).map(([group, topics]) => (
        <div key={group} className="mb-10">
          {/* Gradient category headers */}
          <h3
            className={`text-lg font-extrabold mb-4 bg-gradient-to-r ${
              groupGradients[group] || "from-gray-700 to-gray-900"
            } bg-clip-text text-transparent text-center`}
          >
            {group}
          </h3>

          {/* Topic buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <motion.button
                key={topic}
                onClick={() => toggleTopic(topic)}
                className={`w-full py-3 px-4 rounded-full text-sm border font-semibold transition transform ${
                  selectedTopics.includes(topic)
                    ? "bg-teal-600 text-white border-teal-700 shadow-lg"
                    : "bg-white border-[#0a2540] hover:bg-teal-100"
                }`}
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: selectedTopics.includes(topic)
                    ? "0px 0px 12px rgba(13, 148, 136, 0.7)" // teal glow
                    : "0px 0px 8px rgba(13, 148, 136, 0.3)",
                }}
              >
                {topicEmojis[topic] || ""} {topicLabelMap[topic] || topic}
              </motion.button>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="text-sm underline hover:opacity-70"
        >
          ← Back
        </button>

        <motion.button
          onClick={handleSubmit}
          disabled={selectedTopics.length === 0}
          className={`py-2 px-5 rounded-xl font-bold shadow transition flex items-center gap-2 ${
            selectedTopics.length === 0
              ? "bg-white text-gray-400 border border-gray-300 cursor-not-allowed"
              : "bg-teal-500 hover:bg-teal-600 text-white"
          }`}
          whileTap={{ scale: selectedTopics.length === 0 ? 1 : 0.95 }}
        >
          {selectedTopics.length === 0 ? "✨ Pick Some!" : "🚀 Let’s Talk!"}
        </motion.button>
      </div>
    </div>
  );
};

export default Topics;

