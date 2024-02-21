/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "315px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      "nunito-sans": "var(--font-nunito)",
    },
    extend: {},
  },
  plugins: [],
};
