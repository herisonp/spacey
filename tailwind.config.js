/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },

    extend: {
      colors: {
        primary: {
          dark:  '#040327',
          DEFAULT:  '#0B1E8A',
          light: '#3D68B2',
        },
        secundary: {
          light: '#FF8C70',
          DEFAULT: '#E85937',
          dark: '#CF3F1D'
        },
        spacegray: {
          '01': '#0D0E13',
          '02': '#2C2D3A',
          '03': '#60616F',
          '04': '#898A93',
          '05': '#D5D5DB'
        },
        auxiliary: {
          uranus: '#24FFE9',
          sun: '#F5D15F',
          jupiter: '#E00E34',
          earth: '#0FDD86',
          saturn: '#554AD7'
        }
      },
      backgroundImage: {
        'stars': "url('/images/stars.svg')"
      }
    },
  plugins: [],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}