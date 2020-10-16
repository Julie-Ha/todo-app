module.exports = {
  future: {},
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
