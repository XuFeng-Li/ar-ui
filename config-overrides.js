// module.exports = (config, evn) => {
//
//   return config;
// }
const { override, fixBabelImports,addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: '@formily/antd',
    libraryDirectory: 'lib'
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: { '@primary-color': '#1DA57A' },
      javascriptEnabled: true
    }
  }),
);