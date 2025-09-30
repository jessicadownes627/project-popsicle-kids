import React from "react";
import { useNavigate } from "react-router-dom";

const ParentSettings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-[#0a2540] p-6">
      <h1 className="text-3xl font-bold text-center mb-4">⚙️ Parent Settings</h1>
      <p className="text-center mb-6 max-w-md mx-auto">
        Manage your child’s experience. Adjust settings, review vocabulary, and explore news options below.
      </p>

      <div className="space-y-6 max-w-md mx-auto">
        {/* Example placeholder setting */}
        <div className="bg-white rounded-xl shadow p-4 border border-gray-300">
          <h3 className="font-semibold mb-2">📖 Vocabulary & Slang List</h3>
          <p className="text-sm mb-3">
            Curious about the words your child might see? Check our parent-only glossary.
          </p>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] px-4 py-2 rounded-lg font-bold"
            onClick={() => alert("Coming soon!")}
          >
            View Glossary
          </button>
        </div>

        {/* Parent News Section */}
        <div className="bg-white rounded-xl shadow p-4 border border-gray-300">
          <h3 className="font-semibold mb-2">📰 Parent News</h3>
          <p className="text-sm mb-3">
            See real kid-friendly headlines from trusted sources.  
            (Only visible to parents.)
          </p>
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
            onClick={() => navigate("/parent-news")}
          >
            Go to Parent News →
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="underline text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to Kids App
        </button>
      </div>
    </div>
  );
};

export default ParentSettings;
