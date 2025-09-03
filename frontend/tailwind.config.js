/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xls: "1366px",
        xll: "1440px",
      },
      backgroundImage: {
        "nav-gradient":
          "linear-gradient(to right, rgba(1, 12, 16, 0.42), rgba(1, 21, 26, 0.4))",
        "about-text-gradient":
          "linear-gradient(93.98deg, #A324F2 0%, #242EF2 97.91%)",
        "feature-border":
          "linear-gradient(100.05deg, rgba(255, 255, 255, 0.09) 2.16%, rgba(255, 255, 255, 0) 101.73%)",
        "feature-card":
          "linear-gradient(137.34deg, rgba(27, 28, 54, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
        "feat-card-bdr":
          "linear-gradient(81.07deg, #2C2D47 53.33%, rgba(68, 74, 226, 0.05) 93.73%)",
        "cta-text": "linear-gradient(93.98deg, #DFD9FE 0%, #5D81ED 97.91%)",
        "news-text": "linear-gradient(93.98deg, #DFD9FE 0%, #5D81ED 97.91%)",
        "news-bdr": "linear-gradient(92.59deg, #EAF85B 0%, #7995FB 100%)",
        "news-logo":
          "linear-gradient(90deg, #020D11 0%, rgba(2, 13, 17, 0) 100%)",
        "news-logo2":
          "linear-gradient(-90deg, #020D11 0%, rgba(2, 13, 17, 0) 100%)",
        "pricing-txt": "linear-gradient(180deg, #FFFFFF 30%, #999999 100%)",
        "pricing-card-bdr":
          "linear-gradient(180deg, rgba(36, 60, 242, 0.5) 0%, rgba(36, 57, 242, 0.5) 50%, rgba(36, 46, 242, 0.5) 100%)",
        "pricing-card-bg":
          "linear-gradient(180deg, rgba(43, 255, 255, 0.12) 0%, rgba(43, 255, 255, 0.04) 50%, rgba(43, 255, 255, 0.07) 100%)",
        "pricing-btn":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
        "pricing-chk":
          "linear-gradient(180deg, #2BFFFF 0%, rgba(43, 255, 255, 0.41) 100%)",
        "contactus-bg":
          "linear-gradient(171.36deg, #17209B 6.6%, #1825A1 63.68%)",
        "signup-individual-bg":
          "linear-gradient(82.88deg, #29163D 72.05%, #A33AA0 124.35%)",
        "signup-Organization-bg":
          "linear-gradient(82.88deg, #16183D 72.05%, #3C3AA3 124.35%)",
        "signup-bdr": "linear-gradient(278.85deg, #2E2F36 13%, #85889C 93.28%)",
      },
      boxShadow: {
        "custom-inset": "inset 0px 0px 1px 2px #A324F226",
        "about-sh": "0px 4px 28px 0px rgba(0, 0, 0, 0.15)",
      },
      backdropBlur: {
        "nav-blur": "53.8px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grifter: ["Grifter", "Bebas Neue", "sans-serif"],
        rubik: ["Rubik", "serif"],
        roboto: ["Roboto", "serif"],
        mulish: ["Mulish", "serif"],
        unbounded: ["Unbounded", "serif"],
        montserrat: ["Montserrat", "serif"],
      },
      colors: {
        purple: "#a324f2",
      },
    },
  },
  plugins: [scrollbar],
};
