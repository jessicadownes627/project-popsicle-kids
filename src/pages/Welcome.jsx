import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlyingTurtle from "../components/FlyingTurtle";

const Welcome = () => {
  const navigate = useNavigate();
  const [kidName, setKidName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const handleStart = () => {
    if (!kidName || !ageGroup) return;

    navigate("/topics", {
      state: {
        kidName,
        ageGroup
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-yellow-100 text-[#0a2540] flex flex-col justify-center items-center p-6 font-poppins">
      <h1 className="text-4xl font-bold font-script text-center mb-4 drop-shadow-glow">
        🎉 Talk More Tonight for Kids! 🦄
      </h1>
      <p className="text-center text-base mb-4 max-w-md">
        Sparkles, silliness, and super-fun stuff to talk about with your favorite grown-up!
      </p>

      <div className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="What's your name?"
          value={kidName}
          onChange={(e) => setKidName(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300"
        />

        <div>
          <p className="text-xs text-center opacity-70 mb-2">
            We ask for age so we can show fun stuff that’s just right for you!
          </p>
          <p className="text-sm text-center opacity-70 mb-2">How old are you?</p>
          <div className="grid grid-cols-2 gap-3">
            {["5-7", "8-10", "11-13"].map((age) => (
              <button
                key={age}
                onClick={() => setAgeGroup(age)}
                className={`py-2 rounded-xl border font-medium transition text-sm ${
                  ageGroup === age
                    ? "bg-black text-white border-black"
                    : "bg-white/60 backdrop-blur-sm text-black border-gray-300 hover:bg-opacity-80"
                }`}
              >
                {age} years
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleStart}
        disabled={!kidName || !ageGroup}
        className={`mt-6 w-full max-w-sm py-3 rounded-lg font-semibold shadow transition ${
          kidName && ageGroup
            ? "bg-yellow-400 hover:bg-yellow-500 text-[#0a2540]"
            : "bg-white text-[#0a2540] opacity-50 cursor-not-allowed border border-gray-300"
        }`}
      >
        🚀 Let’s Go!
      </button>

      <FlyingTurtle />

      <p className="mt-6 text-2xl">🦖🛻✨🧁🌈</p>
    </div>
  );
};

export default Welcome;
