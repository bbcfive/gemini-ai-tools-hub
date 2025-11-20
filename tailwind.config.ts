import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        surface: "#ffffff",
        brand: {
          DEFAULT: "#6c63ff",
          strong: "#42c8ff"
        },
        body: "#0f172a",
        muted: "#475569"
      },
      fontFamily: {
        display: ["Space Grotesk", "Noto Sans SC", "system-ui", "sans-serif"],
        body: ["Noto Sans SC", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "glow-brand": "0 15px 40px rgba(108,99,255,0.35)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at top, rgba(108,99,255,0.15), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
