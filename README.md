# weapp-hiapp
[HiApp](https://github.com/BelinChung/HiApp) 微信小程序版

## Previews

## Setup

1. **Clone the repo**

  ```
  $ git clone https://github.com/BelinChung/weapp-hiapp.git
  ```

2. **Dependencies**

  项目使用了微信小程序组件化开发框架 `WePY` 进行开发，请先全局安装 `WePY`

  ```
  $ npm install wepy-cli -g
  ```

  进入项目根目录，使用 `npm` 安装项目依赖

  ```
  $ cd weapp-hiapp
  $ npm install
  ```

3. **Build**

  项目根目录执行 `wepy build --watch`   

4. **Import to Wechat DEV Tools**

  把编译出的`dist`目录导入到微信开发者工具中即可

## Tips

  * 请通过 `微信开发者工具 - 项目 - 关闭ES6转ES5` 
  * 请通过 `微信开发者工具 - 项目 - 关闭上传代码时样式自动补全`
  * 请通过 `微信开发者工具 - 项目 - 关闭代码压缩上传`
  * 请通过 `微信开发者工具 - 设置 - 编辑器中勾选文件保存时自动编译小程序 开启实时预览`

更多文档和注意事项，请参考 [WePY 开发文档](https://tencent.github.io/wepy/document.html)

## License

Copyright (c) 2018 Belin Chung. MIT Licensed, see [LICENSE](https://github.com/BelinChung/weapp-hiapp/blob/master/LICENSE.md) for details.
