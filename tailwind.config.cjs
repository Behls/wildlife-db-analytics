/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend:{
      colors:{
        'coral': "#ba5262",
        'orange': "#ecac4c",
        'blue': "#2f5ccf",
        'darkBlue': "#344059",
        'green': "#61d782",
        'lightGreen': "#cef3d1",
        'lightPurple': "#b4afe7",
        'purple': "#6b61d7",
        'lightBlue': "#70bfeb",
        'grey': "#9db8c7",
    },
  }
  },
  plugins: [],
}
