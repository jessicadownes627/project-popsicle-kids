// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  safelist: [
    "border-purple-400",
    "border-pink-400",
    "border-yellow-300",
    "border-green-400",
    "border-blue-400",
    "border-red-400",
    "border-indigo-400",
  ],
  plugins: [],
}
