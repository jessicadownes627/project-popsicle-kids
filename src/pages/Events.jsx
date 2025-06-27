import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import topicActivityIdeas from "../data/topicActivityIdeas.js";
import bookRecs from "../data/bookRecs.js";

const bonusIdeas = [
  "Have a bedtime dance party in your pajamas!",
  "Make up a secret handshake with your grown-up.",
  "Draw your dream bedroom — add a candy slide!"
];

const sparkQuestions = [
  "If you could visit any planet, which one would it be?",
  "If animals could talk, which would be the funniest?",
  "If you had a robot helper, what would it do first?",
  "If you could turn into any creature tonight, what would you be?"
];

const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [manualCity, setManualCity] = useState("");
  const { selectedTopics = [], kidName = "you", city = "your town" } = location.state || {};

  const [bonus, setBonus] = useState(bonusIdeas[0]);
  const [question, setQuestion] = useState(sparkQuestions[0]);

  const shuffleBonus = () => {
    const newIdea = bonusIdeas[Math.floor(Math.random() * bonusIdeas.length)];
    setBonus(newIdea);
  };

  const shuffleQuestion = () => {
    const newQ = sparkQuestions[Math.floor(Math.random() * sparkQuestions.length)];
    setQuestion(newQ);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-sky-100 text-[#0a2540] p-6">
      <h1 className="text-4xl font-bold text-center mb-3 drop-shadow-glow">
        🌟 Look What You Built Today!
      </h1>
      <p className="text-center mb-6 text-base max-w-lg mx-auto">
        {kidName}, based on what you picked, here are some fun ideas just for you in {city}:
      </p>

      {/* Topic-based Activities */}
      {selectedTopics.length > 0 && (
        <div className="bg-white/80 p-4 rounded-xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-3">🎯 Things to Try</h2>
          <ul className="list-disc ml-6 space-y-2">
            {selectedTopics.map((topic) =>
              (topicActivityIdeas[topic] || [])
                .slice(0, 2)
                .map((idea, index) => (
                  <li key={`${topic}-${index}`}>{idea}</li>
                ))
            )}
          </ul>
        </div>
      )}

      {/* Book Corner */}
      <div className="bg-white/80 p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-3">📚 Book Corner</h2>
        {selectedTopics.map((topic) =>
          bookRecs[topic] ? (
            <div key={topic} className="mb-3">
              <p className="font-bold">{topic}</p>
              <ul className="list-disc ml-6">
                {bookRecs[topic].map((book, index) => (
                  <li key={index}>
                    <span className="font-semibold">{book.title}</span> by {book.author}
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>

      {/* Bonus Idea */}
      <div className="bg-white/80 p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">🤩 Bonus Idea</h2>
        <p>{bonus}</p>
        <button onClick={shuffleBonus} className="text-blue-600 underline text-sm mt-2">
          Shuffle idea
        </button>
      </div>

      {/* Spark Question */}
      <div className="bg-white/80 p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">💭 One Last Question</h2>
        <p className="mb-1 italic">Something fun to ask before bedtime...</p>
        <p className="font-medium">{question}</p>
        <button onClick={shuffleQuestion} className="text-blue-600 underline text-sm mt-2">
          Shuffle question
        </button>
      </div>

      {/* Optional Local Events (Future Integration) */}
      <div className="bg-white/80 p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">🗺️ Want to see events near you?</h2>
        <p className="text-sm mb-2">
          Grown-ups can enter a city or ZIP code below to see fun things nearby — based on topics you picked!
        </p>
        <input
          type="text"
          placeholder="City or ZIP (optional)"
          value={manualCity}
          onChange={(e) => setManualCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Email section */}
      <div className="bg-white/80 p-4 rounded-xl shadow mb-10">
        <h2 className="text-lg font-semibold mb-2">💌 We'd Love to Hear From You!</h2>
        <p>
          Have a fun idea, drawing, or bedtime story to share?
          Grown-ups can email us at{" "}
          <a href="mailto:talkmoretonight@gmail.com" className="underline font-bold">
            talkmoretonight@gmail.com
          </a>
        </p>
      </div>

      {/* Closer */}
      <div className="text-center text-md font-semibold mb-10">
        We hope you and your grown-up talk more tonight 💛
      </div>

      {/* Restart */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] px-6 py-2 rounded-lg font-bold"
        >
          Start Over
        </button>
      </div>

      <div className="text-center mt-10">
        <p className="text-xs text-black/60">
          © {`${new Date().getFullYear()}`} Talk More Tonight™. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Events;
