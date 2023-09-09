const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
  daisyui: {
    styled: true,
    base: true, 
    utils: true,
    logs: false,
    rtl: false,
    darkTheme: 'dark',
    themes: [{
      fluent: {
        "primary":   "#0464f4",
        "secondary": "#590de5",
        "accent":    "#71e2ff",
        "neutral":   "#2b32s3",
        "base-100":  "#0d0717",
        "info":      "#73caf2",
        "success":   "#64ddad",
        "warning":   "#daad0b",
        "error":     "#e65247",

        "--rounded-box": "1rem",        
        "--rounded-btn": "0.5rem",      
        "--rounded-badge": "1.9rem",    
        "--animation-btn": "0.25s",     
        "--animation-input": "0.2s",    
        "--btn-text-case": "uppercase", 
        "--btn-focus-scale": "0.95",    
        "--border-btn": "1px",          
        "--tab-border": "1px",          
        "--tab-radius": "0.5rem",       
      },
    }],
  },
  theme: {
    debugScreens: {
      ignore: ['dark'],
    },
    darkmode: 'class',
    resize:     ['responsive', 'hover', 'focus'],
    appearance: ['responsive', 'hover', 'focus'],
    screens: {
      xs: '428px',
      sm: '720px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
      '2xl': '2160px',
      '3xl': '2496px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '7rem',
        md: '10rem',
        lg: '12rem',
        xl: '14rem',
        '2xl': '18rem',
        '3xl': '24rem',
      },
    },
    fontFamily: {
      display: ['"Days One"',     ...fontFamily.sans],
      body:    ['"Proxima Nova"', ...fontFamily.sans],
      html:    ['Kalam',          ...fontFamily.sans],
      sans:    ['Righteous',      ...fontFamily.sans],
      serif:   ['Marval',         ...fontFamily.serif],
      icons:   ['material-icons', ...fontFamily.serif],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      }
    },
  },
}
