// src/pages/ParentNews.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ParentNews = () => {
  const navigate = useNavigate();
  const [headlines, setHeadlines] = useState([]);

  // Temporary placeholder data until we wire RSS
  useEffect(() => {
    const fakeFeed = [
      {
        title: "New Dinosaur Species Found in Argentina",
        summary: "Scientists uncovered a plant-eating giant with unique spines!",
        url: "https://kids.nationalgeographic.com/nature/article/new-dinosaur",
        source: "National Geographic Kids",
        date: "Sept 2025",
      },
      {
        title: "NASA Plans Moon Base for the 2030s",
        summary: "NASA is testing habitats for astronauts to live on the Moon.",
        url: "https://www.nasa.gov/news/moon-base-plan",
        source: "NASA",
        date: "Sept 2025",
      },
      {
        title: "Kids Rebuild Castles in Minecraft",
        summary: "A group of 11-year-olds recreated real castles block by block.",
        url: "https://www.dogonews.com/",
        source: "DOGOnews",
        date: "Sept 2025",
      },
    ];
    setHeadlines(fakeFeed);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-[#0a2540] p-6">
      <h1 className="text-3xl font-bold text-center mb-2">
        📰 Parent News Dashboard
      </h1>
      <p className="text-center text-base mb-6">
        Headlines from trusted kid-friendly news sources. Click any to read more.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {headlines.map((h, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 border border-gray-300"
          >
            <h3 className="font-semibold mb-1">{h.title}</h3>
            <p className="text-sm mb-2">{h.summary}</p>
            <p className="text-xs text-gray-500 mb-2">
              {h.source} — {h.date}
            </p>
            <a
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline text-blue-700"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/parent-settings")}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          ⬅ Back to Parent Settings
        </button>
      </div>
    </div>
  );
};

export default ParentNews;
