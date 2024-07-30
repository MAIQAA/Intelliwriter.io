/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur:{
        "custom-sm":"6px",
      },
      keyframes: {
        translateX: {
          "0%": { transform: "translateX(0rem)" },
          "100%": { transform: "translateX(-1.2rem)" },
        },
      },

      animation: {
        "infinite-translate": "translateX 1.5s infinite ease-in-out",
      },
      backgroundImage: {
        "register-image":"url(./Loginbg.png)",
        "gradient-purple": "linear-gradient(145deg, #352852 50%, #352852 100%)",
        "custom-gradient":
          "linear-gradient(155deg, #6E23CF 0%, #6E23CF 5%, #0F062C 35%, #0F062C 75%, #0F062C 100%)",
        "custom-button-gradient":
          "linear-gradient(145deg, #6B41FF 30%, #E24BFF 60% , #FFC553 100%)",
        "image-background": "url('./hero_bg.png')",
      },
      dropShadow: {
        glow: [
          "0 0 20px rgba(90, 50, 154, 0.4)",
          "0 0 40px rgba(90, 50, 154, 0.6)",
          "0 0 60px rgba(90, 50, 154, 0.8)",
        ],
        imageGlow: [
          "0 0 10px rgba(0, 0, 0, 0.4)",
          "0 0 15px rgba(0, 0, 0, 1)",
          "0 0 20px rgba(0, 0, 0, 1)",
        ],
        
      },
      screens:{
        "sm-large":"425px",
        "custom-md-features":"650px",
    }
    },
  },
  plugins: [],
};
