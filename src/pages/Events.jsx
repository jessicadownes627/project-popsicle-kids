// src/pages/Events.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import topicActivityIdeas from "../data/topicActivityIdeas.js";
import bookRecs from "../data/bookRecs.js";
import { motion } from "framer-motion";

const bonusIdeas = [
  "Have a bedtime dance party in your pajamas!",
  "Make up a secret handshake with your grown-up.",
  "Draw your dream bedroom — add a candy slide!",
  "Put on a short play using your stuffed animals as characters.",
];

const sparkQuestions = [
  "If you could visit any planet, which one would it be?",
  "If animals could talk, which would be the funniest?",
  "If you had a robot helper, what would it do first?",
  "If you could turn into any creature tonight, what would you be?",
];

const eventLinks = [
  {
    title: "Meetup Family Events",
    description: "Find family activities & playdates happening near you.",
    url: "https://www.meetup.com",
    icon: "🌍",
  },
  {
    title: "Mommy Poppins",
    description: "Curated events & activities for kids by region.",
    url: "https://mommypoppins.com",
    icon: "🧸",
  },
  {
    title: "Local Library Events",
    description: "Storytimes, crafts, and family fun near you.",
    url: "https://www.nypl.org/events",
    icon: "📚",
  },
];

const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTopics = [], kidName = "you" } = location.state || {};

  const [magicIndex, setMagicIndex] = useState(0);

  const magicDeck = [...bonusIdeas, ...sparkQuestions];

  const shuffleMagic = () => {
    const randomIndex = Math.floor(Math.random() * magicDeck.length);
    setMagicIndex(randomIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-indigo-300 to-purple-600 text-[#0a2540] p-6">
      {/* 🌟 Hero */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">
          🌟 Look What You Built Today!
        </h1>
        <p className="text-base text-white/90 max-w-lg mx-auto">
          {kidName}, here are some magical ideas to keep the fun going!
        </p>
      </motion.div>

      {/* 🧩 Topic Activities */}
      {selectedTopics.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">🎯 Things to Try</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectedTopics.map((topic) =>
              (topicActivityIdeas[topic] || [])
                .slice(0, 2)
                .map((idea, index) => (
                  <motion.div
                    key={`${topic}-${index}`}
                    className="bg-white/90 rounded-xl p-4 shadow-md hover:shadow-lg transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="font-bold text-lg mb-2">{topic}</h3>
                    <p>{idea}</p>
                  </motion.div>
                ))
            )}
          </div>
        </section>
      )}

      {/* 📚 Book Corner */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">📚 Book Corner</h2>
        <div className="overflow-x-auto flex space-x-4 pb-2">
          {selectedTopics.map((topic) =>
            bookRecs[topic]
              ? bookRecs[topic].map((book, index) => (
                  <motion.div
                    key={`${topic}-book-${index}`}
                    className="min-w-[200px] bg-white/90 rounded-xl p-4 shadow-md flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="font-bold">{book.title}</p>
                    <p className="text-sm italic">{book.author}</p>
                  </motion.div>
                ))
              : null
          )}
        </div>
      </section>

      {/* 🪄 Magic Shuffle Deck */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">🪄 Magic Moment</h2>
        <motion.div
          className="bg-white/90 rounded-xl p-4 shadow-md max-w-md mx-auto"
          key={magicIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg font-medium">{magicDeck[magicIndex]}</p>
        </motion.div>
        <button
          onClick={shuffleMagic}
          className="mt-3 px-4 py-2 bg-yellow-400 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          ✨ Shuffle ✨
        </button>
      </section>

      {/* 🔗 Parent Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">🔗 For Grown-Ups</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-xl p-4 shadow-md hover:shadow-lg transition flex flex-col"
            >
              <span className="text-3xl mb-2">{link.icon}</span>
              <p className="font-bold">{link.title}</p>
              <p className="text-sm mt-1">{link.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 💌 Email Section */}
      <section className="mb-8 bg-white/90 rounded-xl p-4 shadow-md text-center max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">💌 We'd Love to Hear From You!</h2>
        <p className="mb-2">
          Have a fun idea, drawing, or bedtime story to share?
        </p>
        <a
          href="mailto:talkmoretonight@gmail.com"
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-700 transition"
        >
          ✉️ Email Us
        </a>
      </section>

      {/* 🐢 Closer */}
      <div className="text-center text-white mt-10">
        <p className="text-lg font-semibold mb-4">
          We hope you and your grown-up talk more tonight 💛
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] px-6 py-2 rounded-lg font-bold"
        >
          Start Over
        </button>
        <p className="text-xs text-white/70 mt-6">
          © {`${new Date().getFullYear()}`} Talk More Tonight™. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Events;

