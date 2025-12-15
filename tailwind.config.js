/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0056D2', // Professional Blue
          light: '#3B82F6',
          dark: '#003C9E'
        },
        secondary: {
          DEFAULT: '#14B8A6', // Teal
          light: '#5EEAD4',
          dark: '#0F766E'
        },
        neutral: {
          light: '#F8FAFC', // Slate 50
          DEFAULT: '#64748B', // Slate 500
          dark: '#1E293B'    // Slate 800
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
