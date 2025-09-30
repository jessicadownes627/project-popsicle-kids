import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Parent = () => {
  const navigate = useNavigate();
  const [birthYear, setBirthYear] = useState("");
  const [isYearValid, setIsYearValid] = useState(false);
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const holdTimer = useRef(null); // ✅ safer than let

  const handleYearSubmit = () => {
    const yearNum = parseInt(birthYear, 10);
    if (yearNum && yearNum < 2000) {
      setIsYearValid(true);
    } else {
      alert("Please enter a valid parent year of birth.");
    }
  };

  const handleHoldStart = () => {
    if (!isYearValid) return;

    setHolding(true);
    let count = 0;

    holdTimer.current = setInterval(() => {
      count += 1;
      setProgress(count);

      if (count >= 3) {
        clearInterval(holdTimer.current);
        navigate("/parent-settings");
      }
    }, 1000);
  };

  const handleHoldEnd = () => {
    clearInterval(holdTimer.current);
    setHolding(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 p-6">
      <h1 className="text-2xl font-bold mb-4">Parents Only</h1>
      <p className="text-sm mb-6 max-w-md text-center">
        Please complete the steps below to access parent settings.
      </p>

      {!isYearValid && (
        <div className="space-y-4 w-full max-w-sm">
          <input
            type="number"
            placeholder="Enter your year of birth"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <button
            onClick={handleYearSubmit}
            className="w-full py-2 bg-gray-800 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      )}

      {isYearValid && (
        <div className="mt-6 text-center">
          <p className="mb-2 text-sm">
            Parents: Please press and hold the button below for :three seconds to continue.
          </p>
          <button
            onMouseDown={handleHoldStart}
            onMouseUp={handleHoldEnd}
            onMouseLeave={handleHoldEnd}
            className="w-48 py-3 bg-gray-700 text-white rounded-md"
          >
            Hold to Unlock
          </button>
          {holding && (
            <p className="mt-2 text-xs">Holding... {progress} / 3 seconds</p>
          )}
        </div>
      )}

      <p className="mt-10 text-xs text-gray-500 max-w-md text-center">
        Talk More Tonight for Kids™ is designed for shared parent–child use.
        Parent settings may include news sources and content controls.
        Children should use this app with a trusted adult.
      </p>
    </div>
  );
};

export default Parent;
