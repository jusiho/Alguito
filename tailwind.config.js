/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        // background ligth mode

        
        // backgroun dark mode
        'green-dark': '#0D1A22',
        
        // color text lgith mode
        'regal-white': '#000',
        // Color text dark mode
        'regal-white-dark': '#fff'
      },
      fontFamily: {
        titil: ['Titillium Web'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [],
}
