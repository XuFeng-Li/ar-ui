#资源
## npm 账号
> 用户名：tytools
> 密码： TangYuan123
> 邮箱： lxf@asman.com.cn
### 使用 lerna 创建新的package
* 执行 lerna add [package_name]
* 修改文件 - 
> 将文件夹 lib 重命名为 src
> 将文件夹 package>name 重命名为 index.tsx
* 修改 package.json 配置 打包参数
> 添加 index 选项，value 为 src/index.tsx
> 添加 main 选项，value 为 dist/index.js
> 添加 module 选项，value 为 dist/index.es.js
> 添加 types 选项，value 为 types/index.d.ts
> 修改（或添加）files，value 为 [ "dist", "types", "README.md" ]
* 修改 package.json 配置脚本参数
>  修改 scripts 选项，添加如下命令
> {
>   "test": "echo \"Error: run tests from root\" && exit 1",
>   "module": "dist/es/index.es.js",
>   "rollup": "rollup -c ../../rollup.config.js"
> }


### 添加 formally 依赖包
> @formily/core # 核心库
> @formily/antd # UI 库
> @formily/react-schema-renderer # json渲染
> moment # 工具库
> react-eva # 工具库
> antd # 工具库
>   接入 formily 2.x ，可以删除 @formily/react-schema-renderer 和 react-eva ，添加 @formily/react


### 接入 formily 2.x  时，运行 yarn storybook报错：无法解析 less，
> 安装依赖 less、less-loader，在 .storybook/main.js 中添加 对 less 解析的配置
> 注意：1、必须安装 less-loader 低于 7.3.0的版本，否则报错 TypeError: this.getOptions is not a function
>      2、添加配置加上 
```javascript
options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
```
>       否则报错  Inline JavaScript is not enabled. Is it set in your options

# 运行 storybook
* 如果未安装 storybook 终端命令，则需要先安装 storybook 终端命令 npm i -g @storybook/cli
* 执行 yarn packageInstall 以安装所有包的依赖
> 已将将包的引入方式换成 动态依赖了，但是执行 lerna bootstrap 依然不会为所有的包安装依赖，目前只能先使用脚本为各组件安装依赖
* 执行 yarn storybook 启动以 storybook