/** @type {import('tailwindcss').Config} */

export default {
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'no-border': 'rgba(0, 0, 0, 0.3)',
        'jazicorn-pink': { 
          DEFAULT: '#f472b6',
          '50': '#fdf2f8',
          '100': '#fce7f3',
          '200': '#fbcfe8',
          '300': '#f9a8d4',
          '400': '#f472b6',
          '500': '#ec4899',
          '600': '#db2777',
          '700': '#be185d',
          '800': '#9d174d',
          '900': '#831843',
          '950': '#500724',
        },
        'jazicorn-gray': {
          DEFAULT: '#9ca3af',
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          '300': '#d1d5db',
          '400': '#9ca3af',
          '500': '#6b7280',
          '600': '#4b5563',
          '700': '#374151',
          '800': '#1f2937',
          '900': '#111827',
          '950': '#030712'
        }
      },
      backdropBrightness: {
        15: '.15',
        25: '.25',
        40: '.40',
        65: '.65',
        175: '1.75',
      },
      contrast: {
        25: '.25',
      },
       gridTemplateColumns: {
        'layout-home': 'auto',
        'layout-home-mobile': 'auto',
      },
      gridTemplateRows: {
        'layout-home': '3em, auto',
        'layout-home-mobile': 'auto',
      }
    },
  }
}
