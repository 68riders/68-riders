import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0033",
        dark: "#050505",
        charcoal: "#0a0a0a",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-syncopate)"],
      },
    },
  },
  plugins: [],
};
export default config;
