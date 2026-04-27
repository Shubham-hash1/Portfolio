/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        accent: '#f3f4f6', // Tailwind zinc-100
        muted: '#737373', // Tailwind neutral-500
      }
    },
  },
  plugins: [],
}
