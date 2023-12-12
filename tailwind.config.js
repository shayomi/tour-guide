/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "satoshi ",
      secondary: "DM Serif Display",
      tetiary: "Canela",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        lightblue: "#e7edeb",
        darkblue: " #6b779b",
        white: {
          DEFAULT: "#fafafa",
          100: "#b8b8b8",
        },
      },
      backgroundImage: {
        pricing: "url('assets/img/bg/bg3.png')",
        Newsletter: "url('assets/img/bg/bg6.png')",
      },
    },
  },
  plugins: [],
};
