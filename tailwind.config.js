const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        fluent: {
          "primary":   "#0464f4",
          "secondary": "#1033bc",
          "accent":    "#d34acf",
          "neutral":   "#2b32s3",
          "base-100":  "#3b323e",
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
      }
    ],
  },
  theme: {
    darkmode: 'class',
    screens: {
      xs: '480px',
      sm: '768px',
      md: '976px',
      lg: '1440px',
      xl: '1920px',
      '2xl': '2160px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '2rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '7rem',
      },
    },
    resize: ['responsive', 'hover', 'focus'],
    appearance: ['responsive', 'hover', 'focus'],
    fontFamily: {
      sans: ['Righteous', 'Kalam', 'sans-serif'],
      serif: ['Marval', 'material-icons', 'serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
