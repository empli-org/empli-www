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
        'blue-font': '#1C2441',
        'bg-tw': '#9FCEE7',
        'bg-fb': '#2252FF',
        'color-google': '#F06464',
      },
      spacing: {
        // eslint-disable-next-line prettier/prettier
        login: '93vh',
        negative: '-15px',
        15: '60px',
      },
    },
  },
  plugins: [],
}
