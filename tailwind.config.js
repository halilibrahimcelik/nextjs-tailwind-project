/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        customGrid: "33% 33% 33%",
      },
      gridColumnStart: {
        "0%": "2",
        "50%": "2",
      },
      gridColumnEnd: {
        "50%": "2",
        "100%": "2",
      },
      gridColumn: {
        spanCustom: "50%  / 50%",
      },
      boxShadow: {
        customShadow: "1px 0px 9px 1px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
