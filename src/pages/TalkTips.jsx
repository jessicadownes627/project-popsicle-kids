// src/pages/TalkTips.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import promptDataForKids from "../data/promptDataForKids/index.js";
import topicLabelMap from "../data/topicLabelMap.js";


const TalkTips = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedTopics = [],
    kidName = "you",
    ageGroup = "5-7"
  } = location.state || {};

  const [shuffledPrompts, setShuffledPrompts] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});

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
    setRevealedAnswers({}); // reset answers when shuffling
  };

  const handleBack = () =>
    navigate("/topics", { state: { kidName, ageGroup } });

  const handleForward = () =>
    navigate("/news", {
      state: { kidName, ageGroup, selectedTopics }
    });

  const toggleAnswer = (topic) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-sky-100 to-pink-100 p-6 text-[#0a2540]">
      <h1 className="text-3xl font-bold text-center mb-2">💬 Let’s Talk!</h1>
      <p className="text-center mb-6">
        {kidName}, here are some fun things to talk about today:
      </p>

      <div className="space-y-6">
        {selectedTopics.map((topic) => {
          const data = shuffledPrompts[topic];

          if (!data) {
            return (
              <div
                key={topic}
                className="bg-white bg-opacity-80 border border-yellow-300 rounded-xl p-4 shadow"
              >
                <h3 className="text-lg font-bold mb-2">{topic}</h3>
                <p className="mb-1 italic">Oops! No prompts found for this topic.</p>
              </div>
            );
          }

          return (
            <div
              key={topic}
              className="bg-white bg-opacity-80 border border-yellow-300 rounded-xl p-4 shadow"
            >
             <h3 className="text-lg font-bold mb-2">{topicLabelMap[topic] || topic}</h3>
              <p className="mb-1 italic">🌟 Something Cool: {data.summary}</p>
              <p className="mb-1">🧠 Fun Fact: {data.fact}</p>
              <p className="mb-1">❓ Try This: {data.ask}</p>
              <p className="mb-2">💬 Let’s Talk More: {data.open}</p>
              {data.answer && (
                <div className="mt-2">
                  {!revealedAnswers[topic] ? (
                    <button
                      onClick={() => toggleAnswer(topic)}
                      className="text-sm underline text-blue-700"
                    >
                      Tap to reveal answer
                    </button>
                  ) : (
                    <p className="text-sm font-medium">✅ Answer: {data.answer}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button onClick={handleBack} className="underline text-sm">
          ← Back
        </button>
        <button
          onClick={shuffleQuestions}
          className="bg-white border border-gray-300 py-1 px-3 rounded"
        >
          🔄 Shuffle
        </button>
        <button
          onClick={handleForward}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] py-1 px-4 rounded font-bold"
        >
          ➡️ Keep Going
        </button>
      </div>
    </div>
  );
};

export default TalkTips;

