import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import promptDataForKids from "../data/promptDataForKids/index.js";
import topicLabelMap from "../data/topicLabelMap.js";
import FlipCardKids from "../components/FlipCardKids";
import topicGradients, { fallbackGradient } from "../data/topicGradients.js";



const TalkTips = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedTopics = [],
    kidName = "you",
    ageGroup = "5-7",
  } = location.state || {};

  const [shuffledPrompts, setShuffledPrompts] = useState({});

  useEffect(() => {
    shuffleQuestions();
    // eslint-disable-next-line
  }, [selectedTopics, ageGroup]);

  const shuffleQuestions = () => {
    const newPrompts = {};
    selectedTopics.forEach((topic) => {
      const dataArray = promptDataForKids?.[ageGroup]?.[topic] || [];
      if (Array.isArray(dataArray) && dataArray.length > 0) {
        const random = dataArray[Math.floor(Math.random() * dataArray.length)];
        newPrompts[topic] = random;
      }
    });
    setShuffledPrompts(newPrompts);
  };

  const handleBack = () =>
    navigate("/topics", { state: { kidName, ageGroup } });

  const handleForward = () =>
    navigate("/news", { state: { kidName, ageGroup, selectedTopics } });

  const handleGlossary = () =>
    navigate("/glossary", { state: { kidName, ageGroup, selectedTopics } });

  // figure out which group each topic belongs to
  const getGroupForTopic = (topic) => {
    const allGroups = promptDataForKids?.[ageGroup] || {};
    for (let [groupName, groupTopics] of Object.entries(allGroups)) {
      if (groupTopics[topic]) return groupName;
    }
    return "Other";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-sky-100 to-pink-100 p-6 text-[#0a2540]">
      <h1 className="text-3xl font-bold text-center mb-2 drop-shadow-glow">
        💬 Let’s Talk!
      </h1>
      <p className="text-center mb-6 text-lg">
        {kidName}, here are your awesome convo cards for today — tap to flip!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedTopics.map((topic) => {
          const data = shuffledPrompts[topic];

          if (!data) {
            return (
              <div
                key={topic}
                className="bg-white bg-opacity-80 border border-yellow-300 rounded-xl p-4 shadow text-center"
              >
                <h3 className="text-lg font-bold mb-2">{topic}</h3>
                <p className="mb-1 italic">Oops! No prompts found for this topic.</p>
              </div>
            );
          }

          return (
         <FlipCardKids
  key={topic}
  topic={topicLabelMap[topic] || topic}
  data={shuffledPrompts[topic]}
  bgClass={topicGradients[topic] || fallbackGradient}
/>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-8 flex-wrap">
        <button onClick={handleBack} className="underline text-sm">
          ← Back
        </button>
        <button
          onClick={shuffleQuestions}
          className="bg-white border border-gray-300 py-1 px-3 rounded hover:bg-yellow-100 transition"
        >
          🔄 Shuffle
        </button>
        <button
          onClick={handleGlossary}
          className="bg-white border border-gray-300 py-1 px-3 rounded hover:bg-yellow-100 transition"
        >
          📖 Glossary
        </button>
        <button
          onClick={handleForward}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] py-1 px-4 rounded font-bold shadow"
        >
          🚀 Next Adventure
        </button>
      </div>
    </div>
  );
};

export default TalkTips;


