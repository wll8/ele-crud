# ele-crud

<div align="center">
    <a href="https://wll8.github.io/ele-crud/">
        文档
    </a>
</div>

<br />

[开发中]这是一个基于 vite/vue3 开发的功能插件，该插件可以添加到任意前端项目中。比如你有一个后面管理，在后端管理里面需要添加一个低代码插件，就在后台管理里引用这个插件即可。


## 如果实现的

- 用于任意前端项目

如果你的项目不是 vue3 技术栈，请引用 sdk 版本，相当于一个 js 库，它内部集成了 vue 运行时和 ui 库、样式。通过这种方式来实现把插件集成到你的项目，从插件中可视化生成界面配置，保存配置文件到数据库或前端，然后这个插件的渲染器接收该配置，即可渲染页面。

- 生成可二开代码

如果你的项目是基于 vue3/element-plus 的，又想对生成的功能进行二次开发，可以使用生成代码模式。生成的代码是封装过抽象过的代码，方便维护，各个功能各司其职，不会有所有的功能在同一文件中，数千行代码眼花缭乱的情况。


## 开发

- node v18.19.0
- pnpm v9.6.0

```sh
# 安装依赖
pnpm install

# 启动文档
pnpm doc
```

## 测试

假设你已经有了一个 `post` 实体，表示所有帖子。现在你要实现一个增删除查改帖子的功能，无需写一行前端或后端代码。通界面即可生成：

- 在 `功能` 中点击`新增`，在实体名称中填写 post。

![image](https://github.com/user-attachments/assets/a4cd7ba8-e738-407b-a4aa-f564ecc89476)

- 然后在`字段`中新增需要的列，可以为每一列为是否搜索，是否可修改等，例如新增以下内容后保存：
  - prop 为 title，label 为 `标题`。
  - prop 为 view，label 为 `浏览量`。

![image](https://github.com/user-attachments/assets/fe562abc-11bf-42be-bf65-59cd3c81af3a)
  
- 保存后点击`预览`来查看生成的增删查改的功能

![240911_122151](https://github.com/user-attachments/assets/392a04a4-d64c-4bbb-994c-4ff72c274a18)


## 功能设计

对于常见的功能，我们希望动一点点代码，甚至是不动代码，就能进行功能实现或修改。为了实现前端和后端接口、数据库都可以自动生成，我们在每个环节进行了仔细考量。注意，这些设计依然是前后端分离的，我们只是定义一个设计规范，任何语言只要添加一个实现此规范的简单模块，即可获得该功能器。

你可以单独使用某一端。比如前端部分，生成了一个增删查改的组件。组件支持暴露`增删查改`类似的配置，这样如果你的后端没有实现这套规范，你也可以简单更换这几个接口实现一系列功能，而无需关注内部逻辑。

同样的，后端也可以使用我们的插件，例如 `node/express` 技术栈的，添加一个 ele-crud 提供的中间件，即可实现一系列 CRUD 相关的接口。 

关于每个端或每个模块的设计与实现细节，都有相关文章：

- [x] 前后端全栈框架选型
- [x] 前端功能设计
- [ ] 前端功能实现 - 界面开发
- [ ] 前端功能实现 - openapi/avue 属性转换
- [ ] 前端功能实现 - 依赖外置
- [ ] 前端功能实现 - 依赖内置
- [ ] 前端功能实现 - 模板和引擎
- [ ] 前端功能实现 - 效果预览/代码查看/格式化
- [ ] 前后端交互接口设计
- [ ] 后端功能设计

## 鸣谢

- [mockm - 基于 nodejs ，可以用来做接口和数据生成](https://github.com/wll8/mockm)
- [sys-shim - 一键转换任意前端项目为桌面程序，可使用 js 调用操作系统的 api](https://github.com/wll8/sys-shim)
