module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  textColor: {
    red: "#c20831",
    green: "#2ad4b9",
    yellow: "#fdbc64",
    blue: "#648cb2",
  },
  theme: {
    extend: {
      colors: {
        "ram-red": "#c3022d",
      },
    },
  },
};
