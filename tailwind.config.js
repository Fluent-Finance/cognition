const { fontFamily, screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      xs: '475px',
      ...screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
