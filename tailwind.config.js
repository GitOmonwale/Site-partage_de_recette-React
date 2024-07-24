/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'cheesecake': "url('/src/assets/gateau_myrt.jpg')",
      'food1':"url('/src/assets/food_1.png')",
      'food2':"url('/src/assets/food_2.png')",
      'food3':"url('/src/assets/food_3.png')",
      'food4':"url('/src/assets/food_4.png')",
      'food5':"url('/src/assets/food_5.png')",
    },
    extend: {
      colors: {
        green: "#3a9691",
        lightblue: "#E8F0F7",
        pink:"#FED7C8"
      },
      width:{
        350:"350px",
      },
      maxWidth:{
        500:"500px",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}  