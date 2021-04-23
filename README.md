##

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