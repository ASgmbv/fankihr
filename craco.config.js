const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              "@primary-color": "#FF4C00",
              "@menu-item-active-bg": "#FF4C00",
              "@menu-highlight-color": "#ffffff",
              // "@text-color:": "#1D1C1D",
            },
          },
        },
      },
    },
  ],
};
