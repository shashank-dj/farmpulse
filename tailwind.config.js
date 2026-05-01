/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        soil: '#1c1a14',
        bark: '#2e2b20',
        moss: '#1a4d2e',
        fern: '#2d6a4f',
        sage: '#52b788',
        leaf: '#95d5b2',
        cream: '#f4f0e6',
        parch: '#ede8d8',
        amber: {
          farm: '#e9a916',
          pale: '#fdf3d0',
        },
        rust: {
          farm: '#c1440e',
          pale: '#fbeee8',
        },
        sky: {
          farm: '#d8eaf6',
          dark: '#1a6fa8',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.3s ease both',
        'fade-up-1': 'fadeUp 0.3s ease 0.04s both',
        'fade-up-2': 'fadeUp 0.3s ease 0.08s both',
        'fade-up-3': 'fadeUp 0.3s ease 0.12s both',
        'fade-up-4': 'fadeUp 0.3s ease 0.16s both',
        'fade-up-5': 'fadeUp 0.3s ease 0.20s both',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(12px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
