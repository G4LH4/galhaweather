module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      elipses: "url('./public/elipses.png')",
    },
    extend: {
      colors: {
        bgColor: "black",
        secondaryColor: "#2267ED",
        boxColor: "#384152",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
