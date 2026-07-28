import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      colors: {
        background: "var(--background)",
        secondary: "var(--secondary)",
        surface: "var(--surface)",
        card: "var(--card)",
        primary: "var(--primary-text)",
        muted: "var(--muted)",
        accent: {
          orange: "var(--accent-orange)",
          blue: "var(--accent-blue)",
          emerald: "var(--accent-emerald)",
          purple: "var(--accent-purple)",
          red: "var(--accent-red)",
          yellow: "var(--accent-yellow)",
        },
      },
      spacing: {
        "section-desktop": "120px",
        "section-tablet": "96px",
        "section-mobile": "72px",
        "card-gap": "32px",
        "component-gap": "24px",
        "text-gap": "16px",
      },
      borderRadius: {
        "card": "18px",
        "button": "14px",
        "input": "12px",
        "badge": "999px",
      },
      boxShadow: {
        "soft": "0 4px 40px -10px rgba(0,0,0,0.3)",
        "card-hover": "0 10px 40px -10px rgba(0,0,0,0.5)",
      }
    },
  },
  plugins: [],
};
export default config;
