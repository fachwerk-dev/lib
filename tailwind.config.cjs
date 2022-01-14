module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["Cousine", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
