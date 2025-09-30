import React from "react";
import { useNavigate } from "react-router-dom";

const ParentEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 text-[#0a2540] p-6">
      {/* 🧭 Breadcrumb Nav */}
      <div className="mb-4">
        <button
          onClick={() => navigate("/parent-settings")}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          ← Back to Parent Settings
        </button>
      </div>

      {/* 📝 Header */}
      <h1 className="text-3xl font-bold text-center mb-2">
        🗓️ Parent Events & Activities
      </h1>
      <p className="text-center max-w-2xl mx-auto mb-6 text-base">
        Find local family fun and activities near you. These trusted sources make it
        easy to discover events without sharing your child’s location in the app.
      </p>

      {/* 🌐 Event Resources */}
      <div className="grid gap-6 max-w-2xl mx-auto">
        {/* Macaroni KID */}
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">🍝 Macaroni KID</h2>
          <p className="text-sm mb-3">
            A nationwide calendar of kid-friendly events, activities, and family fun.
            You can search by ZIP code or city.
          </p>
          <a
            href="https://www.macaroniKID.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] px-4 py-2 rounded-lg font-bold transition"
          >
            Visit Macaroni KID →
          </a>
        </div>

        {/* Meetup.com */}
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">🤝 Meetup</h2>
          <p className="text-sm mb-3">
            Find parent groups, playdates, outdoor adventures, and family activities
            near you. Meetup is free to browse and easy to use.
          </p>
          <a
            href="https://www.meetup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition"
          >
            Browse Meetup →
          </a>
        </div>

        {/* Library / Museum Suggestion */}
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
          <h2 className="text-xl font-semibold mb-2">📚 Local Libraries & Museums</h2>
          <p className="text-sm mb-3">
            Your town’s library or children’s museum often has story times, craft
            events, and family programs. Check their websites for updated calendars.
          </p>
          <button
            onClick={() => window.open("https://www.google.com/maps/search/library+or+children's+museum+near+me", "_blank")}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold transition"
          >
            Find Nearby →
          </button>
        </div>
      </div>

      {/* ✨ Footer */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="underline text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to Kids App
        </button>
        <p className="text-xs text-gray-500 mt-2">
          © {new Date().getFullYear()} Talk More Tonight™. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ParentEvents;

