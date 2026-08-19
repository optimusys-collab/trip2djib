/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'system-ui', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#faf6ef',
          100: '#f3ebdd',
          200: '#e7d6ba',
          300: '#d8bd91',
          400: '#c9a068',
          500: '#bd8b4c',
          600: '#a87340',
          700: '#8b5936',
          800: '#724831',
          900: '#5f3d2c',
        },
        volcanic: {
          50: '#f5f5f4',
          100: '#e6e5e2',
          200: '#c9c7c1',
          300: '#a5a29a',
          400: '#7c7870',
          500: '#5f5b53',
          600: '#484540',
          700: '#33312d',
          800: '#22201d',
          900: '#141312',
        },
        sea: {
          50: '#eef7f9',
          100: '#d3ecf1',
          200: '#a9d9e3',
          300: '#71bece',
          400: '#3f9db3',
          500: '#2596be',
          600: '#1f6f86',
          700: '#1d5a6d',
          800: '#1d4a5a',
          900: '#1c3e4d',
        },
        turquoise: {
          400: '#3fd0c9',
          500: '#22b8b0',
        },
      },
      lineHeight: {
        body: '1.5',
        heading: '1.1',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'slow-zoom': 'slow-zoom 18s ease-out forwards',
      },
    },
  },
  plugins: [],
};
