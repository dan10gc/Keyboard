const path = require("path");
module.exports = {
  // fix for issue related to cannot read property of name of undefined from webpack sizelimitsplugin - https://github.com/vuejs/vue-cli/issues/4572
  css: {
    sourceMap: true
  },
  productionSourceMap: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/app.scss")]
    }
  }
};
