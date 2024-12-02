/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      motrix: ["Motrix", "san-serif"],
      oswald: ["Oswald"],
    },
    extend: {
      backgroundImage: {
        nature_img: "url('assets/nature.jpg)",
      },
      screens: {
        "custom-md": "800px",
        "custom-sm": "520px",
        "custom-search": "622px",
        "custome-search-sm": "440px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  darkMode: "class",
  plugins: [],
};
