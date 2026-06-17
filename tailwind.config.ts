import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#f0f7f2",
          100: "#d9ece0",
          200: "#b3d9c1",
          300: "#7fbf9a",
          400: "#4a9e70",
          500: "#2d7d52",
          600: "#1f5e3b",
          700: "#1b3a2a",
          800: "#162e21",
          900: "#0e1e16",
          950: "#080f0b",
        },
        leaf: {
          300: "#86c99a",
          400: "#5aaa72",
          500: "#3d8a56",
          600: "#2c6840",
        },
        cream: {
          50:  "#fdfcf8",
          100: "#f7f4ef",
          200: "#ece7dc",
          300: "#ddd4c4",
        },
        earth: {
          400: "#b08c3a",
          500: "#8b6914",
          600: "#6b5010",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
