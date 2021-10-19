module.exports = {
  purge: {
    enabled: true,
    content: [
        './src/**/*.html',
        './src/**/*.js'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        toggle: "repeat( auto-fill, minmax(80px, 1fr) )",
      },
      fontFamily: {
        lato: ["Lato"],
        adam: ["ADAM"]
      },
      colors: {
        "grey-highlight": "#888888",
        "yellow-dessert": "#EDF5E1",
        "blue-atlantic": "#05386B",
        "green-forest": "#5CDB95",
        "green-lintern": "#62F556",
        "dark-borders": "#303030",
        "dark-text": "#8F8F8F",
        "light-location": "#C0C0C0",
        "light-theme-grey": "#262626",
        "light-theme-bblue": "#C4DEF5",
        "light-theme-greyWhite": "#999999",
        "light-theme-bblue-o5": "#c4def580",
        "black-o5": "#0000007a"
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['dark']
    },
  },
  plugins: [],
};
