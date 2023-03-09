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
        'lineBlue': "#4D9ECC",
        'loginBG': "#F5F8FE",
        'loginOrange': "#FEF3E3",
        'loginHeader': "#1471A5",
        'error':'#BA5262',
        "donation":"#54897C"
    },
    width:{
      'loginWidth': "1000px",
      'inputwidth': "340px",
      'modalErrorWidth': "400px",
    },
    height:{
      'loginHeight': "430px",
      'inputHeight': "38px",
      'modalErrorHeight': "250px",
    },
    dropShadow:{
      'dropBlue': "0px 4px 8px rgba(36, 55, 224, 0.3)",
      'dropModal': "0px 4px 8px rgba(0, 0, 0, 0.3)"
    },
    minHeight:{
      'modalErrorHeight': "288px"
    }
  }
  },
  plugins: [],
}
