// src/components/FlyingTurtle.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlyingTurtle = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 5000); // turtle glides for 5s
    }, Math.floor(Math.random() * 15000) + 10000); // appears every 10–25s

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-[10%] left-[-10%] z-50 text-4xl"
          initial={{ x: "-100%", y: 0, rotate: -10 }}
          animate={{ x: "120vw", rotate: 10 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          🐢
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlyingTurtle;