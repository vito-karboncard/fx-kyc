## icon-generator 使用方法
1. 在 [iconFont]('https://www.iconfont.cn/') 网站复制项目地址
2. 在终端执行命令行
```bash
yarn generateIcon address 
#其中 address 是刚刚复制的地址，必传
#example: yarn generateIcon //at.alicdn.com/t/c/font_2958813_y0bv7xwx06p.js
```
3. Icon 使用
- 进入 `gallery.html` 文件并用浏览器打开
- 点击你想用的图标，icon name 就会被复制到剪贴板，直接去我们的 Icon 组件粘贴 name 就好啦