import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Legacy warm palette — used by pages not yet migrated
        warm: {
          50: "#FAF6F1",
          100: "#F5EFE7",
          200: "#F5EDE3",
          300: "#E8DDD0",
          400: "#DDD0C0",
          500: "#C9A96E",
          600: "#8B6F47",
          700: "#6B5240",
          800: "#5A3E2B",
          900: "#3D2B1F",
        },
        text: {
          DEFAULT: "#4A3728",
          light: "#A08B70",
          muted: "#B0A090",
        },
      },
      fontFamily: {
        main: [
          "var(--font-main)",
          "Hiragino Kaku Gothic ProN",
          "Yu Gothic",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
