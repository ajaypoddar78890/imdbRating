/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Extending maxWidth to include a custom value of 1500px
      maxWidth: {
        '1500': '1500px', // Adding 1500px as a custom max-width
      },
    },
  },
  plugins: [],
}
