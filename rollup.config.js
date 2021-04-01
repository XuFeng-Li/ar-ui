import path from 'path'
// import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
console.log("*****************************  rollup.config.js");
const packagePath = process.cwd();
const pkgPath = path.resolve(packagePath, './package.json');
const pkg = require(pkgPath);
console.log(packagePath);
const inputPath = path.join(packagePath, pkg.input || "./src/index.js");
console.log("*****************************");
console.log(inputPath);

const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];
var output = [];
if (pkg.main) {
  output = [
    ...output,
    {
      file: pkg.main,
      format: 'cjs', // 输出文件格式为CommonJS
      sourcemap: false,
    }
  ];
  console.log("********************  main");
  console.log(output);
}
if (pkg.module) {
  output = [
    ...output,
    {
      file: pkg.module,
      format: 'es',
      sourcemap: false,
    }
  ];
  console.log("********************  module");
  console.log(output);
}
// if (pkg.min && pkg.minName) {
//   output = [
//     ...output,
//     {
//       file: pkg.min,
//       format:'umd',
//       sourcemap:false,
//       name:pkg.minName,
//       plugins:[
//         terser()
//       ]
//     }
//   ];
//   console.log("********************  min");
//   console.log(output);
// }

module.exports = {
  input: inputPath,
  output: output,
  external: externals,
  plugins: [
    resolve(
      {
        extensions,
      }
    ),
    commonjs(), // 此插件比较关键，不引入该插件会报模块导入相关的错误
  ]
};