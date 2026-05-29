import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Three-color palette extracted from the brand image
        midnight: {
          DEFAULT: "#0A0F22",
          50: "#1B2244",
          100: "#161B36",
          200: "#11162C",
          300: "#0E1326",
          400: "#0A0F22",
          500: "#080C1C",
          600: "#060916",
          700: "#040611",
          800: "#03050D",
          900: "#020308",
        },
        electric: {
          DEFAULT: "#2E63FF",
          50: "#EAF0FF",
          100: "#C7D6FF",
          200: "#94B2FF",
          300: "#618EFF",
          400: "#2E63FF",
          500: "#1A4EE8",
          600: "#0F3DCB",
          700: "#0A2EA0",
        },
        mint: {
          DEFAULT: "#22E89B",
          50: "#E6FFF4",
          100: "#BBFCDE",
          200: "#83F5C2",
          300: "#4FEDA8",
          400: "#22E89B",
          500: "#16C783",
          600: "#0FA169",
          700: "#0B7C50",
        },
      },
      fontFamily: {
        sans: [
          "InterVariable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "InterDisplay",
          "InterVariable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter2: "-0.035em",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(46,99,255,0.35) 0%, rgba(34,232,155,0.10) 35%, rgba(10,15,34,0) 70%)",
        "grid-fade":
          "linear-gradient(180deg, rgba(10,15,34,0) 0%, rgba(10,15,34,0.85) 80%, #0A0F22 100%)",
        "card-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 40%, rgba(255,255,255,0.04) 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(46,99,255,0.35), 0 20px 60px -10px rgba(46,99,255,0.45)",
        "glow-mint":
          "0 0 0 1px rgba(34,232,155,0.35), 0 20px 60px -10px rgba(34,232,155,0.35)",
        "soft":
          "0 1px 0 rgba(255,255,255,0.05) inset, 0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      animation: {
        "marquee": "marquee 38s linear infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 30s linear infinite",
        "spin-slower": "spin 60s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
        "float-soft": "floatSoft 7s ease-in-out infinite",
        "float-medium": "floatSoft 9s ease-in-out infinite",
        "float-slow": "floatSoft 11s ease-in-out infinite",
        "glow-pulse": "glowPulse 5s ease-in-out infinite",
        "dash-flow": "dashFlow 10s linear infinite",
        "shimmer": "shimmer 7s linear infinite",
        "drift": "drift 14s ease-in-out infinite",
        "drift-reverse": "driftReverse 16s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        dashFlow: {
          to: { strokeDashoffset: "-40" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "-200% 0%" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -15px)" },
        },
        driftReverse: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-20px, 15px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
