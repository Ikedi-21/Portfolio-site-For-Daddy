export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ogbu: {
          navy: '#0B1630', blue: '#1A3156', lightBlue: '#2C5F8D',
          gold: '#D4AF37', goldDark: '#7A5F12', goldLight: '#E0C07A',
          cream: '#F3E9DA', offWhite: '#F7F4EE',
          charcoal: '#2D2D2D', gray: '#5A5A5A', grayDark: '#5A5A5A',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
