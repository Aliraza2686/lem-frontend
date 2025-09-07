/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@tailwindplus/elements/**/*.js", // For Tailwind Plus JS-powered components
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }