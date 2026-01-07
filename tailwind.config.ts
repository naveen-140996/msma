import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffb200",     
        secondary: "#f7f7f7",
        secondPrimary:"#050E12"
      },
       backgroundImage: {
          "brand-gradient":"linear-gradient(135deg,#0f0f0f,#3b3b3b,#bfc1c2,#2a2a2a)",

          "blur-gradient":
            "linear-gradient(45deg, #FFFFFF33 0%, #9f9f9f 25% , transparent)",
        },
         animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        gilroy: ['gilroy_regular', 'sans-serif'],
        neuepower: ['neuepower', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
