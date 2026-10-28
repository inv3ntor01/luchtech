/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "#38bdf8",
        "secondary-container": "#0284c7",
        "on-secondary": "#001e2c",
        "primary": "#ffb4a5",
        "primary-container": "#fc593a",
        "on-primary-container": "#450a00",
        "background": "#0a0e17",
        "surface": "#0f131c",
        "surface-container-lowest": "#070a10",
        "surface-container-low": "#131722",
        "surface-container": "#181b25",
        "surface-container-high": "#232733",
        "surface-container-highest": "#2f3442",
        "on-surface": "#e2e8f0",
        "on-surface-variant": "#94a3b8",
        "tertiary": "#c084fc",
        "tertiary-container": "#9333ea",
        "outline": "#475569",
        "outline-variant": "#334155",
        "coral-accent": "#f95738",
        "cyan-accent": "#38bdf8",
        "slate-lavender": "#818cf8"
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
}
