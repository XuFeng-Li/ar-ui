import path from 'path'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
console.log("*****************************  rollup.config.js");
const packagePath = process.cwd();
const pkgPath = path.resolve(packagePath, './package.json');
const pkg = require(pkgPath);
const inputPath = path.join(packagePath, pkg.input || "./src/index.js");

const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];
let output = [];
if (pkg.main) {
  output = [
    ...output,
    {
      file: pkg.main,
      format: 'cjs', // 输出文件格式为CommonJS
      sourcemap: false,
      exports: 'auto'
    }
  ];
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
}
if (pkg.types) {
  output = [
    ...output,
    {
      file: pkg.types,
      // format:'umd',
      sourcemap:false,
      plugins:[
      ]
    }
  ];
}

let babelConfig = {};
babelConfig = {
  babelHelpers: 'bundled'
}

module.exports = {
  input: inputPath,
  output: output,
  external: externals,
  plugins: [
    typescript({
    }),
    resolve(
      {
        extensions,
      }
    ),
    commonjs(), // 此插件比较关键，不引入该插件会报模块导入相关的错误
    babel(babelConfig),
    // terser()
  ]
};