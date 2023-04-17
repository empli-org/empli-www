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
        'contact-img': "url('/src/assets/bg-cont.svg')",
      },
      gridTemplateColumns: {
        listing: 'repeat(auto-fill, minmax(375px, 1fr))',
      },
      colors: {
        'white-font': '#F6F2EC',
        'blue-font': '#1C2441',
        'bg-tw': '#9FCEE7',
        'bg-lk': '#0a66c2',
        'color-google': '#F06464',
        'bg-green': '#70b39b',
      },
      spacing: {
        // eslint-disable-next-line prettier/prettier
        login: '93vh',
        negative: '-15px',
        15: '60px',
        ing: '162.4px',
        all: '444px',
        100: '410px',
        contact: '68vh',
        left: '750px',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
