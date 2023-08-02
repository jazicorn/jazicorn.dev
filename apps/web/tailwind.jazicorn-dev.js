/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    fontFamily: {
      gro: ['Space Grotesk', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
      vt: ['VT323', 'monospace'],
    },
    extend: {
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
    },
  },
  plugins: [
  ],
}