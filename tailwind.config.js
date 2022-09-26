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
        workGrid: "1.7fr 1.7fr 1.7fr",
      },
      gridTemplateRows: {
        workRow: "1fr 1fr 1fr",
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
      keyframes: {
        flip: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(360deg)",
          },
        },
      },
    },
    animation: {
      flip: "flip 1s ease-in",
    },
  },
  plugins: [],
};
