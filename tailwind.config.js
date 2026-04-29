/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:      "#F3ECE3",
        "cream-2":  "#FFF8F1",
        latte:      "#E5D5C7",
        line:       "#DDCCBE",
        ink:        "#40352E",  // texto principal — usado como text-ink
        muted:      "#77675B",
        soft:       "#8F8176",
        olive:      "#667254",
        "olive-2":  "#586348",
        terracotta: "#B87967",
        brown:      "#5F4B3E",
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1120px",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(70,55,44,0.10)",
      },
    },
  },
  plugins: [],
};
