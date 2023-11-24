/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'big-noodle': ['var(--font-big-noodle)']
      },
      keyframes: {
        'shine-blue': {
          from: {
            'box-shadow': '0 0 0 #2657f6'
          },
          '50%': {
            'box-shadow': '0 0 140px #2657f6'
          },
          to: {
            'box-shadow': '0 0 80px #2657f6'
          }
        },
        'shine-green': {
          from: {
            'box-shadow': '0 0 0 #94e9f7'
          },
          '50%': {
            'box-shadow': '0 0 140px #94e9f7'
          },
          to: {
            'box-shadow': '0 0 80px #94e9f7'
          }
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'shine-blue': 'shine-blue 2s infinite',
        'shine-green': 'shine-green 2s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
