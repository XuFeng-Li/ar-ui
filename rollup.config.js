import path from 'path'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from "rollup-plugin-typescript2";
import {terser} from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import dts from 'rollup-plugin-dts';

const tsImportPluginFactory = require("ts-import-plugin");
const tsImportPlugin = tsImportPluginFactory({
  libraryDirectory: "es",
  libraryName: "antd",
  style: true
})

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
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
      sourcemap: false,
      plugins: [
        dts(),
      ]
    }
  ];
}

let babelConfig = {};
babelConfig = {
  babelHelpers: 'bundled'
}
module.exports = (prop) => {
  console.log("************************************   prop");
  console.log(prop);
  const envProp = prop.env || "prod";
  console.log(prop.env);
  console.log(envProp,envProp === "prod");

  let resultConfig = [];
  if (pkg.main) {
    resultConfig = [
      ...resultConfig,
      {
        input: inputPath,
        output: {
          file: pkg.main,
          format: 'cjs', // 输出文件格式为CommonJS
          sourcemap: false,
          exports: 'auto'
        },
        external: externals,
        plugins: [
          typescript({
            clean: true,
            typescript: require("typescript"),
            tsconfig: "tsconfig.json",
            transformers: () => ({
              before: [tsImportPlugin]
            })
          }),
          resolve(
            {
              extensions,
            }
          ),
          commonjs(), // 此插件比较关键，不引入该插件会报模块导入相关的错误
          babel(babelConfig),
          envProp === "prod" ? terser() : {},
          postcss({
            modules: true,
            exec: true,
            plugins: [autoprefixer, cssnano],
            extract: 'dist/css/bundle.css',
          }),
          url(),
        ]
      }
    ]
  }
  if (pkg.module) {
    resultConfig = [
      ...resultConfig,
      {
        input: inputPath,
        output: {
          file: pkg.module,
          format: 'es',
          sourcemap: false,
        },
        external: externals,
        plugins: [
          typescript({
            clean: true,
            typescript: require("typescript"),
            tsconfig: "tsconfig.json",
            transformers: () => ({
              before: [tsImportPlugin]
            })
          }),
          resolve(
            {
              extensions,
            }
          ),
          commonjs(), // 此插件比较关键，不引入该插件会报模块导入相关的错误
          babel(babelConfig),
          envProp === "prod" ? terser() : {},
          postcss({
            modules: true,
            exec: true,
            plugins: [autoprefixer, cssnano],
            extract: 'dist/css/bundle.css',
          }),
          url(),
        ]
      }
    ]
  }
  if (pkg.types) {
    resultConfig = [
      ...resultConfig,
      {
        input: inputPath,
        output: {
          file: pkg.types,
          sourcemap: false,
          plugins: [
          ]
        },
        external: externals,
        plugins: [
          typescript(),
          dts(),
          resolve(
            {
              extensions,
            }
          ),
          commonjs(), // 此插件比较关键，不引入该插件会报模块导入相关的错误
          babel(babelConfig),
          // envProp === "prod" ? terser() : {},
          postcss({
            modules: true,
            exec: true,
            plugins: [autoprefixer, cssnano],
            extract: 'dist/css/bundle.css',
          }),
          url(),
        ]
      }
    ]
  }
  return resultConfig
}