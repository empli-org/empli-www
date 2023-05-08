/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx }',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        amenable: ['Amenable', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        // sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'login-img': "url('/src/assets/bg.svg')",
        'contact-img': "url('/src/assets/bg-cont.svg')",
        oficina: "url('/src/assets/img/oficina.jpg')",
      },
      gridTemplateColumns: {
        listing: 'repeat(auto-fill, minmax(375px, 1fr))',
      },
      colors: {
        yellow: {
          DEFAULT: '#FBBF24',
        },
        'white-font': '#F6F2EC',
        'blue-font': '#1C2441',
        'bg-tw': '#9FCEE7',
        'bg-lk': '#0a66c2',
        'color-google': '#F06464',
        'bg-green': '#70b39b',
        'yellow-border': '#FFD15D',
        opacity: 'rgba(28, 36, 65, 0.1)',
        opacity2: 'rgba(28, 36, 65, 0.2)',
        'opacity-hint': 'rgba(246, 242, 236, 0.5)',
        // Brand colors with names
        'hint-of-red': '#F6F2EC',
        fog: '#e0dadf',
        sail: '#9fcee7',
        'gulf-stream': '#70b39b',
        lochinvar: '#53917b',
        'blue-whale': '#1c2441',
        'prussian-blue': '#1C2441',
        'linkedin-blue': '#0A66C2',
        'facebook-blue': '#1877F2',
        'instagram-purple':'#962FBF',
      },
      spacing: {
        login: '93vh',
        negative: '-15px',
        15: '60px',
        ing: '162.4px',
        all: '444px',
        100: '410px',
        contact: '68vh',
        left: '750px',
        circle: '600px',
        76: '305px',
        500: '500px',
        600: '600px',
      },
      screens: {
        xs: '420px',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
