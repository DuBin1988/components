# 开发环境设置

- 编辑工具：atom，64位。
  * 安装过程
    1. 解压 atom.zip 文件夹到自己的工具盘下。
    1. 修改atom快捷方式中的路径为自己工具盘的路径。
  * 配置过程
    1. 解压.atom.rar 到自己机器的当前用户的根目录下。这个文件夹是atom的使用配置文件，包括：
      - git-plus插件：git插件
      - language-vue: vue组件开发语法加亮
      - linter: 语法检查插件
      - linter-eslint：对js文件、vue组件进行语法检查的插件
      - snippets.cson文件：内置了一些vue组件的代码片段
  * 使用方式
    - atom 主要使用快捷键，文档参考：
      * [atom快捷键](http://ju.outofmemory.cn/entry/187281)
      * [官方使用手册](http://flight-manual.atom.io/using-atom/)
    - 文档编写使用markdown，文档参考：
      * [markdown语言详解](http://blog.chinaunix.net/uid-7374279-id-5114730.html)

- 开发工具：nodejs，64位
  * 安装过程
    1. 解压 nodejs.rar 文件夹到自己的工具盘下。
    1. 设置系统环境变量Path，把nodejs安装的根目录添加进去。
    1. 命令行下运行npm, 可以看到使用帮助，证明成功。
  * 配置过程
    1. 解压 npm.rar 到自己机器当前用户的AppData\Roaming文件夹下。AppData文件夹是系统隐藏文件夹，如找不到，设置显示隐藏文件夹即可。npm文件夹中有全局模块，可以在所有项目里共享。
  * 使用发生
    - npm 要在命令行下运行，文档参考：
      * [npm使用](https://docs.npmjs.com/getting-started/what-is-npm)

- Git工具
  * 安装过程
    1. 解压 git.rar 文件夹到自己的工具盘下。
    1. 设置系统环境变量Path，内容为 `安装路径/git/cmd`
    1. 命令行下运行git, 可以看到使用帮助，证明成功。
  * 配置过程
    1. 复制.gitconfig文件到$HOME下。

- chrome安装
  * 安装过程
    1. 解压chrome.rar到自己的工具盘下。
    1. 运行Chrome\Application\chrome.exe
    1. 解压vue-devtools.rar到自己的工具盘下
    1. 在chrome的 `更多工具\扩展程序` 里，选择 `开发模式`，点击 `已解压的扩展程序`，选择vue-devtools解压处理的文件夹即可。安装的是vue的chrome扩展工具。

- vue-client工程，前台vue组件的基础工程
  * 安装过程
    1. 在github上下载最新版本到自己的工作区间。命令如下：
```
git clone https://github.com/DuBin1988/vue-client
```
    1. 在atom里 File/Add Project Folder 菜单中加入vue-client工程
    1. 解压vue-client\node_modules.rar 到vue-client目录下，这个文件是vue-client的本地模块文件夹
  * 测试
    1. 修改examples下所有文件名首字母为大写
    1. 在命令行下，进入vue-client目录
    2. 运行 `npm run dev` 启动测试
    3. 在chrome里执行 http://localhost:8080/Busy.html 测试busy组件是否正常运行。
    4. 按 `F12` 打开chrome的开发者环境，可以看到vue-Devtools，用这个工具，可以看到组件树。
  * 自己动手
    1. 复制examples下的Busy文件夹，改名为Test
    1. 修改index.html `<script src="../BusyApp.js"></script>`中 BusyApp 为 TestApp
    1. main.js保持不动。
    1. App.vue是自己要做的组件，修改组件模板部分为自己想要的内容。重启 `npm run dev`，访问 http://localhost:8080/Test.html，即可看到自己所做的组件。
  * 更多内容
    - 组件制作请参考：http://cn.vuejs.org/
    - JS6请参考：http://es6.ruanyifeng.com/
    - BootStrap请参考：http://v3.bootcss.com/
  * 工作规范
    一般情况下，遵循如下工作规范：
    - 在docs里对要开发的组件，进行设计及说明，格式可以参考Busy.md等文件。
    - 开发的组件，放在src/components下。
    - 在examples下建立文件夹，对开发的组件进行测试。
    - 提交前，对docs及组件源码进行检查，确定是否最终内容。
    - 在进行新版本发布时，修改CHANGELOG.md，CHANGELOG.md书写规范，参考：http://keepachangelog.com/zh-CN/
    - vue-client下的README.md是vue-client的整体描述。
