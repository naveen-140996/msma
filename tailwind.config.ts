import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#060606",     
        secondary: "#f7f7f7",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(45deg,#595959,#060606)",
      },
    },
  },
  plugins: [],
};

export default config;
