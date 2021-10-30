module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "red-350": "hsla(0, 92.1%, 76.3%, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
