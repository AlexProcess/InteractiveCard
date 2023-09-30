/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightGrayis: "hsl(270, 3%, 87%)",
        darkGrayis: "hsl(279, 6%, 55%)",
        vDarkViolet: "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk"],
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
