/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spa-pink': {
          50: '#FDF2F2',
          100: '#FCE8E8',
          200: '#F8D0D0',
          300: '#F3B8B8',
          400: '#ED9999',
          500: '#E87A7A',
          600: '#E25C5C',
          700: '#DC3E3E',
          800: '#B83232',
          900: '#942828'
        },
        'spa-beige': {
          50: '#FEFCFA',
          100: '#FDF8F3',
          200: '#F9F0E5',
          300: '#F5E8D7',
          400: '#F1E0C9',
          500: '#EDD8BB',
          600: '#E9D0AD',
          700: '#E5C89F',
          800: '#D4B896',
          900: '#C3A88D'
        },
        'spa-sage': {
          50: '#F6F8F6',
          100: '#EDF1ED',
          200: '#D9E3D9',
          300: '#C5D5C5',
          400: '#B1C7B1',
          500: '#9DB99D',
          600: '#89AB89',
          700: '#759D75',
          800: '#648764',
          900: '#537153'
        }
      },
      fontFamily: {
        'display': ['Georgia', 'Times New Roman', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
};