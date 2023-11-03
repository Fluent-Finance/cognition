const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,svelte,ts,css}', 
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
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

        "white":           "#FAFAFA",
        "neutral":         "#F7F3FC",
        "black":           "#222222",

        "base-25":         "#131313",

        "base-20":         "#7140e0",
        "base-50":         "#6200EE",
        "base-100":        "#111111",
        "base-200":        "#4B4653",
        "base-300":        "#D5D1DB",
        "base-400":        "#D5D9EC",
        "base-500":        "#F7F3FD",
        "base-550":      "#590De5",
        "base-600":        "#6200EE",
        "base-700":        "#2A0066",
        "base-800":        "#C094FF",
        "base-900":        "#E7D6FF",

        "primary":         "#6200EE",
        "primary-50":      "#590de5",
        "secondary":       "#384073",

        "secondary-100":   "#0b001d",
        "secondary-200":   "#260362",
        "secondary-300":   "#1B203B",
        "secondary-400":   "#364077",
        "secondary-500":   "#736FBA",
        "secondary-600":   "#737FBF",

        "accent":          "#2A0066",
        "accent-100":      "#b996f8",
        "accent-200":      "#E7D6FF",

        "info":            "#5DB1D3",
        "success":         "#D6F754",
        "warning":         "#FFC107",
        "error":           "#F44336",

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
    colors: {
      "white":    "#FAFAFA",
      "neutral":  "#F7F3FC",
      "black":    "#111111",

      "base-25":  "#131313",

      "base-20":"#7140e0",
      "base-50":  "#6200EE",
      "base-100": "#222222",
      "base-200": "#4B4653",
      "base-300": "#D5D1DB",
      "base-400": "#D5D9EC",
      "base-500": "#F7F3FD",
      "base-600": "#6200EE",
      "base-650":"#590De5",
      "base-700": "#2A0066",
      "base-800": "#C094FF",
      "base-900": "#E7D6FF",
    },
    screens: {
      xs: '478px',
      sm: '767px',
      md: '991px',
      lg: '1024px',
      xl: '1920px',
      '2xl': '2160px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '2rem',
        sm: '3rem',
        md: '5rem',
        lg: '9rem',
        xl: '11rem',
        '2xl': '12rem',
      },
    },
    fontFamily: {
      sans:  ['Inter', 'Righteous', ...fontFamily.sans],
      serif: ['Marval',             ...fontFamily.serif],
      icons: ['material-icons',     ...fontFamily.serif],
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: () => ({
        'footer-texture': "url('/images/FooterCorner.svg')"
      }),
      fontFamily: {
        neuehaas: ['Neue Haas Unica', 'Inter', ...fontFamily.sans], 
        basier:   ['Basier Circle', 'Inter', ...fontFamily.sans],
      }
    },
  },
}
