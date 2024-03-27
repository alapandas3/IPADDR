/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {gridTemplateColumns: {
      // Simple 16 column grid
      'xx': 'repeat(4, minmax(0, 1fr))',

    }},
  },
  plugins: [],
}

