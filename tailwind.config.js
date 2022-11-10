const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  important: true,
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'grey': {
        DEFAULT: '#7D7987',
        '600': '#1F1534'
      },
      'blue': {
        DEFAULT: '#458FF6'
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'laptop': '1200px',
      'desktop': '1300px',
      'l-desktop': '1440px',
      'large': '1600px',
    },
    // fontSize: {

    // },
    lineHeight: {
      10: '1',
      11: '1.1',
      12: '1.2',
      125: '1.25',
      13: '1.3',
      14: '1.4',
      15: '1.5',
      16: '1.6',
      17: '1.7',
      175: '1.75'
    },
    fontFamily: {
      default: ['Milish', 'sans-serif']      
    },
    container: {
      center: true,
      padding: '28px', 
      screens: { 
        'desktop': '1300px',
      },
    },
    borderRadius: {
      'full': '9999px',
      'sm': '20px',
      'sm-s': '24px'
    },
    extend: {
      boxShadow: {
        'sm': '10px 40px 50px rgba(229, 233, 246, 0.4)',
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'last', 'first'],
      fontWeight: ['hover', 'active'],
    },
    boxShadow: {
      'sm': '10px 40px 50px rgba(229, 233, 246, 0.4)',
    }
  },
  plugins: [require('@tailwindcss/forms', {
    // strategy: 'base',
  })],
};
