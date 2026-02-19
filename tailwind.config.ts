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
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        primary2: "rgb(var(--primary2) / <alpha-value>)",
      },
      borderRadius: {
        xl: "var(--radius)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.06)",
        hair: "0 1px 0 rgba(2, 6, 23, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
