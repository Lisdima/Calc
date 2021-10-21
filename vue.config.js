module = {
  rules: [
    {
      test: /\.scss$/,
      use: ["vue-style-loader", "css-loader", "sass-loader"],
    },
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/styles/variables.scss";',
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
