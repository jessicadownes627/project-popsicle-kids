import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import topicGroupsByAge from "../data/topicGroupsByAge.js";
import topicEmojis from "../data/topicEmojis.js";
import topicLabelMap from "../data/topicLabelMap";


const Topics = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { kidName = "you", ageGroup = "5-7" } = location.state || {};
  const [selectedTopics, setSelectedTopics] = useState([]);

  // Scroll to top on mount
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
        state: {
          kidName,
          ageGroup,
          selectedTopics
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-yellow-100 to-pink-200 text-[#0a2540] p-6">
      <h1 className="text-4xl font-bold text-center mb-3 drop-shadow-glow">
        ✨ Let’s Pick Some Topics, {kidName}!
      </h1>
      <p className="text-center text-base mb-6 max-w-lg mx-auto">
        Pick up to 6 fun things to talk about today.
      </p>

      {Object.entries(ageTopics).map(([group, topics]) => (
        <div key={group} className="mb-8">
          <h3 className="text-lg font-bold mb-2">{group}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                className={`w-full py-2 px-4 rounded-full text-sm border font-semibold transition-all duration-200 ${
                  selectedTopics.includes(topic)
                    ? "bg-yellow-400 text-[#0a2540] border-yellow-500"
                    : "bg-white border-[#0a2540] hover:bg-yellow-100"
                }`}
              >
                {topicEmojis[topic] || ""} {topicLabelMap[topic] || topic}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => navigate("/build", { state: { kidName, ageGroup } })}
          className="text-sm underline hover:opacity-70"
        >
          ← Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={selectedTopics.length === 0}
          className={`py-2 px-5 rounded-xl font-bold shadow ${
            selectedTopics.length === 0
              ? "bg-white text-gray-400 border border-gray-300 cursor-not-allowed"
              : "bg-yellow-400 hover:bg-yellow-500 text-[#0a2540]"
          }`}
        >
          Let’s Talk! →
        </button>
      </div>
    </div>
  );
};

export default Topics;

