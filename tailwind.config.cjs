/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-dark-blue": "#243c5a",
        "primary-blue": "#287BC0",
        "primary-gray": "#eeeeee",
      },
    },
  },
  plugins: [],
};
