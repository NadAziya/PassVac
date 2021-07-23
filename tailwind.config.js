module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3813a1",
      secondary: "#3f47cc",
    }),

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
