/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        latin: "lower-latin",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
