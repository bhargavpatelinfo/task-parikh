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
            90: "#FAFAFA",
            100: "#A1A1A6",
            200: "#CFCFD2",
            300: "#DFE3E8",
            400: "#F5F5F5",
            500: "#F4F4F5",
            600: "#E4E4E7",
            700: "#757575",
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
          green: {
            100: "#F0FDF4",
          },
          customGray: {
            DEFAULT: "#DFE3E8",
          },
        },
        // Dark Theme Colors
        dark: {
          primary: {
            DEFAULT: "#000000",
          },
        },
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 1s linear infinite",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "sf-pro": ["sf-pro", "sans-serif"],
      },
      fontSize: {
        13: "13px",
      },
      gap: {
        5: "5px",
      },
      borderRadius: {
        30: "30px",
        9999: "9999px",
      },
      height: {
        1: "1px",
      },
      width: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
