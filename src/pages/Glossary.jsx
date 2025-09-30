// src/pages/glossary.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import glossaryByTopic from "../data/glossaryByTopic.js";
import generalSlang from "../data/generalSlang.js";

const Glossary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTopics = [], kidName = "your child" } = location.state || {};

  // Filter glossary terms only for chosen topics
  const relevantGlossary = selectedTopics.reduce((acc, topic) => {
    if (glossaryByTopic[topic]) {
      acc[topic] = glossaryByTopic[topic];
    }
    return acc;
  }, {});

  const noTopicMatches = Object.keys(relevantGlossary).length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 text-[#0a2540]">
      <h1 className="text-3xl font-bold text-center mb-2">📖 Parent Glossary</h1>
      <p className="text-center mb-6 text-sm text-gray-600">
        Quick guide to terms and slang your child ({kidName}) might be using.
      </p>

      {/* If no topic-specific terms, show the slang table */}
      {noTopicMatches ? (
        <div className="overflow-x-auto max-w-4xl mx-auto bg-white rounded-xl shadow border border-gray-200 p-5">
          <h2 className="text-xl font-semibold mb-2 text-center">
            ✨ General Slang Parents Should Know
          </h2>
          <p className="text-sm text-gray-600 text-center mb-4">
            Think of this as a translation guide: <br />
            <span className="font-medium">Kids say one thing, you probably say another.</span>
          </p>
        <table className="w-full border-collapse text-sm">
  <thead>
    <tr className="bg-gray-100 text-left">
      <th className="border px-3 py-2">Term</th>
      <th className="border px-3 py-2 text-purple-700">Kids Say…</th>
      <th className="border px-3 py-2 text-teal-700">You Might Say…</th>
      <th className="border px-3 py-2">Notes</th>
    </tr>
  </thead>
  <tbody>
    {generalSlang.map((entry, idx) => (
      <tr key={idx} className="hover:bg-yellow-50">
        <td className="border px-3 py-2 font-bold">{entry.term}</td>
        <td className="border px-3 py-2 text-purple-600">{entry.kidsSay}</td>
        <td className="border px-3 py-2 text-teal-600">{entry.parentSay}</td>
        <td className="border px-3 py-2">{entry.notes}</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      ) : (
        <div className="space-y-8 max-w-3xl mx-auto">
          {Object.entries(relevantGlossary).map(([topic, entries]) => (
            <div
              key={topic}
              className="bg-white rounded-xl shadow border border-gray-200 p-5"
            >
              <h2 className="text-xl font-semibold mb-3 capitalize">
                {topic}
              </h2>
              <ul className="space-y-3">
                {entries.map((entry, idx) => (
                  <li key={idx} className="border-b pb-2">
                    <p className="font-bold">{entry.term}</p>
                    <p className="text-sm text-gray-700 mb-1">{entry.meaning}</p>
                    {entry.tip && (
                      <p className="text-xs italic text-gray-500">
                        💡 {entry.tip}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0a2540] px-5 py-2 rounded font-bold"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};

export default Glossary;
