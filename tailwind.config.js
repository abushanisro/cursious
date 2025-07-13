/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          orange: "#FB8C00",   // Primary
          light: "#FFA726",
          dark: "#EF6C00",
        },
        // Utility alias for easier use
        primary: "#FB8C00",
        secondary: "#AC6AFF", // Matches color.1

        // Accent Palette
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["Sora", ...fontFamily.sans],
        code: ["Fira Code", "monospace"],
        grotesk: ["var(--font-grotesk)", ...fontFamily.sans],
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
      boxShadow: {
        glow: "0 0 35px rgba(251, 140, 0, 0.4)",
        white: "0 0 30px rgba(255, 255, 255, 0.1)",
        card: "0 8px 24px rgba(0, 0, 0, 0.2)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(251, 140, 0, 0.5)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "2rem",
      },
      blur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
      },
      transitionTimingFunction: {
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        fade: "fadeIn 1.2s ease-in-out both",
        pulseFast: "pulse 1s ease-in-out infinite",
        bounceY: "bounceY 1.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        scaleIn: "scaleIn 0.4s ease-out both",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  animation: {
  spinSlow: "spin 12s linear infinite",
},

  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});

      // Typography & Layout Components
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.25rem] leading-[3rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.5rem] lg:leading-[4.25rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2.25rem] md:leading-[3rem] lg:text-[2.75rem] lg:leading-[3.5rem]":
            {},
        },
        ".h3": {
          "@apply text-[1.5rem] md:text-[2rem] lg:text-[2.25rem]":
            {},
        },
        ".h4": {
          "@apply text-xl md:text-2xl lg:text-3xl": {},
        },
        ".h5": {
          "@apply text-lg md:text-xl": {},
        },
        ".h6": {
          "@apply font-semibold text-base md:text-lg": {},
        },
        ".body-1": {
          "@apply text-base leading-7 md:text-lg md:leading-8": {},
        },
        ".body-2": {
          "@apply text-sm md:text-base text-n-3": {},
        },
        ".caption": {
          "@apply text-xs text-n-4": {},
        },
        ".tagline": {
          "@apply font-grotesk text-xs tracking-tagline uppercase text-primary":
            {},
        },
        ".quote": {
          "@apply font-code text-base md:text-lg": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });

      // Glow / Glass / Effects Utilities
      addUtilities({
        ".glow-orange": {
          boxShadow: "0 0 20px rgba(251, 140, 0, 0.5)",
        },
        ".glow-orange-md": {
          boxShadow: "0 0 35px rgba(251, 140, 0, 0.6)",
        },
        ".glow-white": {
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.15)",
        },
        ".glow-gradient": {
          boxShadow:
            "0 0 30px rgba(255, 200, 118, 0.35), 0 0 60px rgba(159, 83, 255, 0.25)",
        },
        ".glass-bg": {
          backgroundColor: "rgba(14, 12, 21, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        },
        ".animate-shimmer": {
          background:
            "linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite",
        },
      });
    }),
  ],
};
