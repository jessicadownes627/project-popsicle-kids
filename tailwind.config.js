/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
