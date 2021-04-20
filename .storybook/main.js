var webpack = require("webpack");
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app"
  ],
  "webpackFinal": (config) => {
    let newConfig = config;
    newConfig.plugins.push(
      new webpack.ProvidePlugin({
        React:"react",
      })
    );
    return newConfig;
  }
}