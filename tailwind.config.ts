/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          40: '#FF5E36',
          50: '#F29173',
          60: '#FB8F75',
          70: '#FFF4F1',
          80: '#FBA991',

        },
        text: {
          10: '#282C4B',
        },
        gray: {
          50: '#747582',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/hero-bg.svg')",
        'bg-img-2': "url('/img-2.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};