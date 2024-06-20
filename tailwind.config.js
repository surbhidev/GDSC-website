/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderImage: {
        'blog-border': "url('/blogborder.png') 30 stretch",
      },
    },
  },
  plugins: [],
}