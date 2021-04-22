
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        cssLoaderOptions: {
          sourceMap: true,
        }
      }
    }
  ]
}