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
  ],
  webpackFinal: async (config) => {
    const cssModel = config.module.rules.find(i => i.test.toString() === "/\\.css$/")
    let lessRule = {
      test: /\.less$/,
      sideEffects: true,
      use: [
        ...cssModel.use,
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ]
    }
    config.module.rules.push(lessRule)
    return config
  }
}