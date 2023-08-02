/** @type {import('tailwindcss').Config} */
import jazicorn from './tailwind.jazicorn-dev.js'
export default {
  presets: [
    jazicorn
  ],
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
}