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
        'conic-gradient': 'conic-gradient(#E7816B, transparent)',
        'linear-bw': 'linear-gradient(to bottom, #ffffff 0%, #ffffff 59%, #1D1C1E 59%, #1D1C1E 100%)'
      }
    },
  },
  plugins: [],
}
