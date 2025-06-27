import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import curatedNewsByTopic from "../data/curatedNewsByTopic.js";
import FlipCard from "../components/FlipCard.jsx";

const News = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTopics = [], kidName = "you" } = location.state || {};

  const handleBack = () =>
    navigate("/talktips", { state: { kidName, selectedTopics } });

  const handleNext = () =>
    navigate("/events", { state: { kidName, selectedTopics } });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-yellow-100 to-pink-100 text-[#0a2540] p-6">
      <h1 className="text-3xl font-bold text-center mb-2">📰 Today’s Cool News</h1>
      <p className="text-center mb-6">
        {kidName}, here’s what’s happening in your world!
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {selectedTopics.map((topic) => (
          <FlipCard key={topic} topic={topic} story={curatedNewsByTopic[topic]} />
        ))}
      </div>

      <div className="flex justify-between mt-10">
        <button
          onClick={handleBack}
          className="bg-white text-black border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          ⬅ Back
        </button>
        <button
          onClick={handleNext}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] px-4 py-2 rounded-lg font-bold"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default News;

