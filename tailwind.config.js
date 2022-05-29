module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1111px'
    },
    fontFamily: {
      'spartan': "'League Spartan', sans-serif",
      'jost': "'Jost', sans-serif"
    },
    extend: {
      backgroundImage: {
        'conic-gradient': 'conic-gradient(#E7816B, transparent)',
        'linear-bw': 'linear-gradient(to bottom, #ffffff 0%, #ffffff 59%, #1D1C1E 59%, #1D1C1E 100%)',
        'linear-bw-md': 'linear-gradient(to bottom, #ffffff 0%, #ffffff 80%, #1D1C1E 80%, #1D1C1E 100%)',
        'linear-bw-lg': 'linear-gradient(to bottom, #ffffff 0%, #ffffff 82%, #1D1C1E 82%, #1D1C1E 100%)'
      }
    },
  },
  plugins: [],
}
