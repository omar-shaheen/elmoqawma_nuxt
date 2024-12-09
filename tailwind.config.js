/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      backgroundImage: {
        linearGradient:
          "linear-gradient(60deg, #E24141 0%, rgb(50, 141, 202) 100%)",
        linearGradient2: "linear-gradient(60deg, #080c14 0%, #080c14 100%)",
        linearGradientBG: "linear-gradient(135deg,#ececec,#06b6d4)",
        linearGradient3: "linear-gradient(90deg,#2e2d8d 0,#624ea0 40%)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        fp1: "#328CCA",
        fp2: "#F4D237",
        fp3: "#E24141",
        fpDark1: "#111827",
        fpDark2: "#25293C",
        fpDark3: "#212438",
        fpBlack: "#1c1d1f",
        fpLightGray: "#B8B8B8",
        fpDarkGray: "#919191",
        fpLightBack: "#e6e6e6",
        success: "#3FDB77",
        error: "#FF375B",
        warning: "#FF9040",
        info: "#00ACD8",
      },
      boxShadow: {
        dev: "0 0 12px rgba(0, 0, 0, 0.3)",
        custom1: "0 2px 10px rgba(0, 0, 0, 0.1)",
        custom3: "0 0 30px rgba(255,255,255,1)",
      },
      screens: {
        sm: { max: "1024px" },
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
