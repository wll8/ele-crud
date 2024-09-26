import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "入门指南",
      collapsible: true,
      prefix: "docs/getting-started/",
      children: [
        {
          text: `简介`,
          link: `introduction`,
        },
        {
          text: `您的第一个应用`,
          link: `your-first-app`,
        },
        {
          text: `常见问答(FAQ)`,
          link: `faq`,
        },
      ],
    },
    {
      text: "API",
      collapsible: true,
      prefix: "docs/api/",
      children: [
        {
          text: `概览`,
          collapsible: true,
          link: "overview",
        },
        {
          text: `属性`,
          collapsible: true,
          link: "props",
        },
        {
          text: `事件`,
          collapsible: true,
          link: "event",
        },
        {
          text: `插槽`,
          collapsible: true,
          link: "slot",
        },
        {
          text: `方法`,
          collapsible: true,
          link: "method",
        },
      ]
    },
    {
      text: "使用",
      collapsible: true,
      prefix: "docs/use/",
      children: [
        {
          text: `功能`,
          collapsible: true,
          link: "function",
        },
        {
          text: `前端`,
          collapsible: true,
          link: "fe",
        },
        {
          text: `后端`,
          collapsible: true,
          link: "be",
        },
      ]
    },
    {
      text: "命令行",
      collapsible: true,
      children: [
        {
          text: "ele-crud",
          collapsible: true,
          link: `docs/cli/ele-crud`,
        },
      ],
    },
  ],
});
