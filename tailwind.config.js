/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'primary-green': {
          50: '#02897A',
        },
        'neutral-gray': {
          50: '#AFAFAF',
        },
        'neutral-black': {
          100: '#22343D',
          300:"#173A56",
        },

      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
      }
      
    },
  },
  plugins: [],
}

