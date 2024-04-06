/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#ed6542',
      'secondary': '#287fb8',
      'tertiary': '#ed6504',
      'accent': '#404726',
      'gray': '#4F4F4F',
      'success': '#108E1F',
      'warning': '#C7BD0A',
      'error': '#C70A0A',
      'info': '#0A49C7',
      'card-bg': '#EBE9DC',
      'footer-bg': '#F0F1EB',
      'white': '#fefefe',
      'darkBlue': '#27374c'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
