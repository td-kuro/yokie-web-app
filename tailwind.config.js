// Theme ported 1:1 from the original prototype's inline `tailwind.config`.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF7F2',
          100: '#F3EDE2',
          200: '#E6D7C3',
          300: '#D5BDA0',
          400: '#C2A07E',
          500: '#AA825C',
          600: '#8E6743',
          700: '#714F33',
          800: '#563B26',
          900: '#3D2A1C',
        },
        pastel: {
          blue: '#D0E8F2',
          pink: '#FAD2E1',
          green: '#E2F0D9',
          yellow: '#FFF5BA',
          lavender: '#E8DFF5',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      // The prototype used `aspect-4/3`, which Tailwind v3 does not ship by default.
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
};
