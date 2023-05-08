/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "intense-red": "#F23E2D",
      },
      backgroundImage: {
        "pokemon-background-home": "url('/img/pokemonBackground.png')",
      },
      colors: {
        "intense-red": "#F23E2D",
        "metal-color": "#59595B",
        "dark-metal-color": "#29292B",

      },
    },
  },
  plugins: [],
};
