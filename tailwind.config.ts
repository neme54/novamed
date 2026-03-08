import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-light": "rgb(var(--accent-light) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-dark": "rgb(var(--surface-dark) / <alpha-value>)",
        dark: "rgb(var(--dark) / <alpha-value>)",
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
        highlight: "rgb(var(--highlight) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      fontSize: {
        "display-hero": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-page": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-section": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(15, 26, 20, 0.06)",
        lift: "0 12px 40px rgba(15, 26, 20, 0.12)",
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        input: "6px",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--dark)",
            a: {
              color: "var(--primary)",
              fontWeight: "600",
              textDecoration: "none",
            },
            "a:hover": { color: "var(--accent)" },
            h1: { fontFamily: "var(--font-display)" },
            h2: { fontFamily: "var(--font-display)" },
            h3: { fontFamily: "var(--font-display)" },
            code: {
              fontFamily: "var(--font-mono)",
              fontWeight: "500",
              color: "var(--dark)",
            },
            blockquote: { borderLeftColor: "var(--accent)" },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;

