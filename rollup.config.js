import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { uglify } from "rollup-plugin-uglify";
export default [
  {
    input: "./src/index.js",
    output: {
      dir: "dist",
      format: "cjs", // cjs – CommonJS，适用于 Node 和 Browserify/Webpack
      entryFileNames: "index.cjs.js",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), json()],
  },
  {
    input: "./src/index.js",
    output: {
      dir: "dist",
      format: "esm", // esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
      entryFileNames: "index.esm.js",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), json()],
  },
  {
    input: "src/index.js",
    plugins: [resolve(), commonjs(), json()],
    output: {
      dir: "dist",
      format: "umd", // umd – 通用模块定义，以amd，cjs 和 iife 为一体
      name: "web-see",
      entryFileNames: "index.js",
      sourcemap: true,
    },
  },
  {
    input: "src/index.js",
    plugins: [uglify(), resolve(), commonjs(), json()],
    output: {
      dir: "dist",
      format: "umd",
      name: "web-see",
      entryFileNames: "index.min.js",
      sourcemap: true,
    },
  },
];
