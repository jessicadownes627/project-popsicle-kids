// src/pages/News.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import curatedNewsByTopic from "../data/curatedNewsByTopic.js";

const panelColors = [
  "bg-yellow-200 border-yellow-500",
  "bg-pink-200 border-pink-500",
  "bg-sky-200 border-sky-500",
  "bg-green-200 border-green-500",
  "bg-purple-200 border-purple-500",
];

const News = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTopics = [], kidName = "you", ageGroup = "5-7" } =
    location.state || {};

  const handleBack = () =>
    navigate("/talktips", { state: { kidName, ageGroup, selectedTopics } });

  const handleNext = () =>
    navigate("/events", { state: { kidName, ageGroup, selectedTopics } });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-yellow-200 to-pink-300 text-[#0a2540] p-6">
      {/* Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-3 tracking-tight 
        drop-shadow-[4px_4px_#000000] text-white bg-[#0a2540] inline-block px-4 py-2 rounded-xl shadow-xl">
        📰 Today’s Cool News!
      </h1>

      {/* Intro speech bubble */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <p className="text-center text-lg bg-white border-4 border-black rounded-3xl p-4 shadow-[4px_4px_0px_#000]">
          {kidName}, here are some amazing stories to share!
        </p>
        {/* Speech bubble tail */}
        <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-6 h-6 bg-white border-b-4 border-r-4 border-black rotate-45"></div>
      </div>

      {/* Comic-style panels */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {selectedTopics.map((topic, topicIndex) => {
          const stories = curatedNewsByTopic?.[ageGroup]?.[topic];

          if (!stories || stories.length === 0) {
            const colorClass =
              panelColors[topicIndex % panelColors.length] || panelColors[0];
            return (
              <div
                key={topic}
                className={`rounded-2xl p-4 border-4 shadow-[6px_6px_0px_#000] comic-panel text-center transform hover:-rotate-1 hover:scale-105 transition ${colorClass}`}
              >
                <h3 className="text-xl font-extrabold mb-2 drop-shadow-[2px_2px_#fff]">
                  {topic}
                </h3>
                <p className="italic text-sm">No stories here yet… stay tuned!</p>
              </div>
            );
          }

          return stories.map((story, index) => {
            const colorClass =
              panelColors[(topicIndex + index) % panelColors.length] ||
              panelColors[0];
            return (
              <div
                key={`${topic}-${index}`}
                className={`rounded-2xl p-4 border-4 shadow-[6px_6px_0px_#000] transform hover:-rotate-1 hover:scale-105 transition ${colorClass}`}
              >
                <h3 className="text-xl font-extrabold mb-2 drop-shadow-[2px_2px_#fff]">
                  {story.title}
                </h3>
                <p className="mb-3 text-base font-medium">{story.summary}</p>

                <div className="bg-white border-2 border-black rounded-xl p-2 mb-2 text-sm font-semibold shadow-[2px_2px_0px_#000]">
                  💡 <span className="font-bold">Why it’s cool:</span>{" "}
                  {story.whyCool}
                </div>

                <div className="bg-white border-2 border-black rounded-xl p-2 text-sm italic shadow-[2px_2px_0px_#000]">
                  👉 {story.fallback}
                </div>
              </div>
            );
          });
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <button
          onClick={handleBack}
          className="bg-white text-black border-4 border-black px-6 py-3 rounded-xl font-bold shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] transition-transform"
        >
          ⬅ Back
        </button>
        <button
          onClick={handleNext}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] px-6 py-3 rounded-xl font-bold border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] transition-transform"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default News;



