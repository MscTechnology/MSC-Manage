module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#e5e7eb",
      },
      backgroundImage:{
        'bg1': "url('./src/assets/images/bg1.jpg')",
      }
    },
  },
  plugins: [],
}
