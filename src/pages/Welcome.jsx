// src/pages/Welcome.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FlyingTurtle from "../components/FlyingTurtle";

const Welcome = () => {
  const navigate = useNavigate();
  const [kidName, setKidName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  const handleStart = () => {
    if (!kidName || !ageGroup) return;
    navigate("/topics", {
      state: { kidName, ageGroup },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-yellow-100 text-[#0a2540] flex flex-col justify-center items-center p-6 font-poppins relative">
      <motion.h1
        className="text-4xl font-bold font-script text-center mb-4 drop-shadow-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎉 Talk More Tonight for Kids! 🦄
      </motion.h1>

      <motion.p
        className="text-center text-base mb-4 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Sparkles, silliness, and super-fun stuff to talk about with your favorite grown-up!
      </motion.p>

      <div className="w-full max-w-sm space-y-4">
      {/* Name input */}
<motion.p
  className="text-sm text-center font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  ✨ Tell us your name so we can sprinkle it into your stories and tips!
</motion.p>
<p className="text-xs text-center opacity-70 mb-2">
  💖 It never leaves your device — pinky promise!
</p>
<motion.input
  type="text"
  placeholder="What's your name?"
  value={kidName}
  onChange={(e) => setKidName(e.target.value)}
  className="w-full p-3 rounded-md border border-gray-300"
  whileFocus={{ scale: 1.02 }}
/>

{/* Age group buttons */}
<motion.p
  className="text-sm text-center font-semibold bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent mt-4 mb-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  🎂 How old are you? (We’ll match the fun stuff to your age!)
</motion.p>
<p className="text-xs text-center opacity-70 mb-2">
  From dino jokes to space facts, we’ll make sure it’s just-right for you.
</p>
<div className="grid grid-cols-2 gap-3">
  {["5-7", "8-10", "11-13"].map((age) => (
    <motion.button
      key={age}
      onClick={() => setAgeGroup(age)}
      className={`py-2 rounded-xl border font-medium transition text-sm ${
        ageGroup === age
          ? "bg-black text-white border-black"
          : "bg-white/60 backdrop-blur-sm text-black border-gray-300 hover:bg-opacity-80"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {age} years
    </motion.button>
  ))}
</div>
      </div>

      {/* Let's Go button */}
      <motion.button
        onClick={handleStart}
        disabled={!kidName || !ageGroup}
        className={`mt-6 w-full max-w-sm py-3 rounded-lg font-semibold shadow transition ${
          kidName && ageGroup
            ? "bg-yellow-400 hover:bg-yellow-500 text-[#0a2540]"
            : "bg-white text-[#0a2540] opacity-50 cursor-not-allowed border border-gray-300"
        }`}
        whileHover={kidName && ageGroup ? { scale: 1.05 } : {}}
        whileTap={kidName && ageGroup ? { scale: 0.95 } : {}}
      >
        🚀 Let’s Go!
      </motion.button>

      <FlyingTurtle />

      <p className="mt-6 text-2xl">🦖🛻✨🧁🌈</p>

      {/* Parents link */}
      <div className="absolute bottom-4 text-center text-xs text-gray-500">
        <button
          onClick={() => navigate("/parent")}
          className="underline hover:text-gray-700"
        >
          For Parents
        </button>
      </div>
    </div>
  );
};

export default Welcome;

