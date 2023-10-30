import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "base-100": "#f5f5f4",
          secondary: "#e7e5e4",
          accent: "#84cc16",
          neutral: "#44403c",
          info: "#d6d3d1",
          success: "#bef264",
          warning: "#facc15",
          error: "#ef4444",
        },
        dark: {
          "base-100": "#1f2937",
          secondary: "#111827",
          accent: "#0ea5e9",
          neutral: "#e5e7eb",
          info: "#4b5563",
          success: "#059669",
          warning: "#f59e0b",
          error: "#be185d",
        },
      },
    ],
  },
};
export default config;
