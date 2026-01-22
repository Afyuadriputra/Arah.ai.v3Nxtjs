import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 1px 0 rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)",
        crisp: "0 0 0 1px rgba(0,0,0,0.10)",
        glow: "0 0 0 1px rgba(0,0,0,0.08), 0 18px 60px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
