/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      fontFamily: {
        'poppins': ["Inter", "sans-serif"],
        'zen-dots': ['Zen Dots', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'sans-serif'],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};