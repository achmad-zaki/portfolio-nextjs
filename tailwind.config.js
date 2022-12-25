/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        softShake: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-50px)'
          }
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        softShake: 'softShake 6s ease-in-out infinite',
        mediumShake: 'softShake 4s ease-in-out infinite',
        hardShake: 'softShake 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
