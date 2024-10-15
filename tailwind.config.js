// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        light: {
          primary: {
            DEFAULT: "#222230",
            100: "#3A3A4D",
            200: "#4D4D6D",
          },
          secondary: {
            DEFAULT: "#18181B",
            100: "#29292C",
            200: "#3C3C3F",
          },
          gray: {
            DEFAULT: "#71717A",
            100: "#A1A1A6",
            200: "#CFCFD2",
            300: "#DFE3E8",
            400: "#F5F5F5",
            500: "#F4F4F5",
          },
          red: {
            DEFAULT: "#B91C1C",
            100: "#D94A4A",
            200: "#F0A3A3",
            300: "#FEF2F2",
          },
          blue: {
            DEFAULT: "#0369A1",
            100: "#4F99C3",
            200: "#A1D6E9",
          },
          lightBlue: {
            DEFAULT: "#F0F9FF",
            100: "#E1F5FF",
            200: "#C1EBFF",
          },
          customGray: {
            DEFAULT: "#DFE3E8",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "custom-13": "13px",
      },
      gap: {
        5: "5px",
      },
      borderRadius: {
        30: "30px", // Add this line
      },
    },
  },
  plugins: [],
};
