// src/components/FlipCard.jsx
import React, { useState } from "react";

const FlipCard = ({ topic, story }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full sm:w-80 h-[320px] perspective cursor-pointer mx-auto"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`transition-transform duration-500 transform-style-preserve-3d h-full w-full rounded-xl shadow-md ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white/80 border border-yellow-300 rounded-xl p-4 flex items-center justify-center text-center">
          <h3 className="text-lg font-bold">📰 {topic}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-100 border border-yellow-300 rounded-xl p-4 overflow-auto">
          {story?.title ? (
            <>
              <h4 className="font-semibold mb-1">{story.title}</h4>
              <p className="text-sm mb-1">{story.summary}</p>
              {story.whyCool && (
                <p className="text-sm italic mb-2">✨ Why this is cool: {story.whyCool}</p>
              )}
              {story.url && (
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-blue-700"
                >
                  Read more →
                </a>
              )}
            </>
          ) : (
            <p className="text-sm italic">No news today — but here’s something fun to try!</p>
          )}

          {story?.fallback && (
            <div className="mt-3">
              <p className="text-xs font-medium mb-1">💡 Try this:</p>
              <p className="text-sm">{story.fallback}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

