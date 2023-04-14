/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // eslint-disable-next-line prettier/prettier
      amenable: ['Amenable', 'ui-sans-serif'],
      'quicksand-light': ['Quicksand', 'ui-sans-serif'],
    },
    extend: {
      backgroundImage: {
        'login-img': "url('/src/assets/bg.svg')",
      },
      colors: {
        'white-font': '#F6F2EC',
      },
    },
  },
  plugins: [],
}
