/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
        sm: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
      },
    },
  },
  plugins: [],
}

