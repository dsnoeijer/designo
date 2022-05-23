module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px'
    },
    fontFamily: {
      'spartan': "'League Spartan', sans-serif",
      'jost': "'Jost', sans-serif"
    },
    extend: {
      backgroundImage: {
        'conic-gradient': 'conic-gradient(#E7816B, transparent)'
      }
    },
  },
  plugins: [],
}
