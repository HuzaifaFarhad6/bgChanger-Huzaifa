/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: '#90FFFE', // Custom color definition
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'], // Ensure hover variant is available
    },
  },
  plugins: [],
}
