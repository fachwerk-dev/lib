import Typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
      mono: ["Cousine", "monospace"],
    },
    extend: {
      colors: {
        lightblue: {
          50: "#F7FBFD",
          100: "#EFF8FA",
          200: "#E0F0F5",
          300: "#CCE7F0",
          400: "#BDDFEB",
          500: "#ADD8E6",
          600: "#67B6D1",
          700: "#338BA8",
          800: "#1F5466",
          900: "#0A1A1F",
        },
      },
    },
  },
  plugins: [Typography],
};
