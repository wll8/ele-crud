---
title: 基础功能使用
---

假设我们要创建一个简单的图书管理模块。我们需要会经过以下步骤：

- 添加`图书`管理模块
- 为`图书`配置字段，例如`书名`、`阅读量`。
- 点击预览。

## 功能

表示你要创建的功能模块名称，比如点击`新增`，在`名称`中输入 book，在描述中输入`图书管理`。

![240926_171429](https://github.com/user-attachments/assets/09f312c5-fcca-4308-9e07-b2586e49a1ed)


## 信息

也就是上面创建的`功能`基础信息配置。

![240926_171540](https://github.com/user-attachments/assets/b9a9786d-be40-4496-9db4-72704f31cdc9)


## 选项配置

图书列表中，可以有哪些操作，例如是否允许新增、是否允许删除。

选项配置与 avue 中的 [curd/option](https://avuejs.com/crud/crud-doc.html#option) 兼容，可以直接搜索和快捷填写配置。

![240926_171945](https://github.com/user-attachments/assets/ca9a01b5-dea9-4de2-89a9-6436eb172a47)

这时候点击`预览`，可以看到一张空的表格，因为我们还没有定义`图书`有哪些属性。

![image](https://github.com/user-attachments/assets/aec478d4-e34b-415a-a40f-13c11dd6ef73)

## 字段配置

在这里，我们可以定义`图书`有哪些属性，例如`书名`、`阅读量`。

![240926_172921](https://github.com/user-attachments/assets/057bb27a-b6fa-4b2d-83f8-ef926dabda2f)

配置属性后点击保存，预览时即可查看已经实现好了的增删改查功能。

如果我们再添加一个`封面`，也是可以的。

![240926_173759](https://github.com/user-attachments/assets/79c09291-1716-464a-9896-2dfc89f80fa5)


## 输出配置

用于定制化输出的形式，例如配置是从后端加载还是从前端加载。

[开发中]


## 关联配置

配置当前功能模块关联的其他功能。

[开发中]

## 预览

即时查看当前配置所渲染的 crud 功能。

## 数据

查看生成的配置数据，可直接复制它到 ele-crud 项目或 avue 项目中使用。

## 默认值

用于保存常用的配置项。在这里配置之后，创建功能模块时，会自动读取这些配置。
