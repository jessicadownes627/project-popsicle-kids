// src/components/FlipCardKids.jsx
import React, { useState } from "react";
import topicBorderColors from "../data/topicBorderColors";


const FlipCardKids = ({ data, topic, bgClass }) => {
  const [flipped, setFlipped] = useState(false);

  const borderClass = topicBorderColors[topic] || "border-gray-400";

  return (
    <div
      className="relative w-full sm:w-80 h-[400px] perspective cursor-pointer mx-auto transform transition hover:scale-105"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`transition-transform duration-500 preserve-3d h-full w-full rounded-xl shadow-md ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-xl border p-4 flex flex-col justify-center text-center ${bgClass}`}
        >
          <h3 className="text-lg font-bold mb-2">🌟 Something Cool</h3>
          <p className="text-base">{data.summary}</p>
          <p className="mt-3 text-sm italic text-gray-700">✨ Tap to flip!</p>
        </div>

  {/* Back Side */}
<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden">
  <div
    className={`w-full h-full bg-white p-4 rounded-xl border-4 ${borderClass}`}
  >
    <h4 className="font-semibold mb-4 text-center">{topic}</h4>

    <p className="mb-4">
      <strong>🧠 Fun Fact:</strong> {data.fact}
    </p>
    <p className="mb-4">
      <strong>❓ Try This:</strong> {data.ask}
    </p>
    <p className="mb-4">
      <strong>💬 Let’s Talk More:</strong> {data.open}
    </p>

    {data.answer && (
      <p className="mt-4 text-green-700 font-medium">
        ✅ Answer: {data.answer}
      </p>
    )}
  </div>
</div>


      </div>
    </div>
  );
};

export default FlipCardKids;

