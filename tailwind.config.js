/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./themes/**/*.{html,js}"],
  theme: {
    colors: {
      green: "#32cd32",
    },
    container: {
      center: true,
      screens: { "2xl": "1140px" },
    },
    letterSpacing: {
      "custom-4": "4px",
      "custom-1": "1px",
    },
    extend: {
      lineHeight: {
        "custom-80": "80px",
      },
      width: {
        "w-38": "150px",
      },
      fontSize: {
        "custom-20": "20px",
        "custom-45": "45px",
      },

      spacing: {
        3: "3px",
        10: "10px",
        20: "20px",
        35: "35px",
        40: "40px",
        45: "45px",
        60: "60px",
        70: "70px",
        80: "80px",
        1: "1px",
      },
    },
  },
  plugins: [],
};
