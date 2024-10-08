# ele-crud

## ele-crud 是什么？

[开发中]这是一个基于 vite/vue3 开发的功能插件，该插件可以添加到任意前端项目中。比如你有一个后面管理，在后端管理里面需要添加一个低代码插件，就在后台管理里引用这个插件即可。

## 为什么开发 ele-crud？

很多后台管理系统，70%以上都是XX管理、XX管理这样的功能，而这些功能大多都比较重复，基本都是增删查改。

那么这些重复的功能？一般是如何做？

- 做好一个页面，然后做其他页面的时候，复制前一个页面进行修改。
  - 优点：0上手成本。
  - 缺点：代码难维护
- 或基于一个做好的页面，进行简单封装，基于该页面或组件进行扩展。
  - 优点：当前项目内复用性高
  - 缺点：跨项目一般复用性低
- 或使用后端生成代码，把增删改查的前后端代码一起生成，然后再把代码复制到前后端项目的对应位置。
  - 优点：功能全面。
  - 缺点：一般无法跨框架使用。

## 为什么选择 ele-crud？

- [ ] 插件化, 不被框架限制, 可以集成所有功能或部分功能到你现有的系统
- [ ] 前后端功能分离, 不受任一端的功能实现限制
- [ ] 支持多表关联
- [ ] 可生成便于二次开发的代码
- [ ] 支持动态配置，无需重新变更和发布前后端代码



### 相关项目

| 名称           | 前端 | 后端   | 备注                   |
| -------------- | ---- | ------ | ---------------------- |
| strapi         | -    | nodejs | 不方便集成到现有项目   |
| ruoyi          | vue  | java   | 不方便集成到现有项目   |
| @cool-vue/crud | vue  | -      | 可配置项少             |
| Variant Form   | vue  | -      | 仅表单且不包含配套后端 |
| fast-crud      | vue  | -      | 字段配置稍繁琐         |
| vxe-table      | vue  | -      | 非纯配置化             |
| tabulator      | js   | -      | -                      |
| nocobase       | -    | -      | 商业                   |

