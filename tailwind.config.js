/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Therapy-focused color palette
        primary: {
          50: '#F9F7F4',
          100: '#F3EDE5',
          200: '#E6D9CC',
          300: '#D9C5B3',
          400: '#CCB19A',
          500: '#BF9D81',  // Main warm neutral
          600: '#A68567',
          700: '#8D6D4D',
          800: '#745533',
          900: '#5B3D1A',
        },
        secondary: {
          50: '#FAF8F6',
          100: '#F0E8E3',
          200: '#E5DACE',
          300: '#DAC9B9',
          400: '#CFB8A4',
          500: '#C4A78F',  // Warm taupe
          600: '#B09375',
          700: '#9C7F5B',
          800: '#886B41',
          900: '#745727',
        },
        accent: {
          50: '#F5F9F7',
          100: '#DFE9E5',
          200: '#C7DBD3',
          300: '#AFCDC1',
          400: '#97BFAF',
          500: '#7FB19D',  // Soft sage green
          600: '#6A9B87',
          700: '#558571',
          800: '#406F5B',
          900: '#2B5945',
        },
        neutral: {
          50: '#FAFAF9',
          100: '#F4F3F1',
          200: '#E7E4E1',
          300: '#D9D5D0',
          400: '#C5BFBA',
          500: '#B1ABA6',  // Warm gray
          600: '#9D9792',
          700: '#89837E',
          800: '#756F6A',
          900: '#615B56',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
        serif: [
          'Garamond',
          'Georgia',
          'serif',
        ],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '3rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
