# ChatGPT 中的 Codex

ChatGPT 中的 Codex 适合从对话里分派仓库任务、查看任务状态、理解代码库和推动团队协作。具体可用功能会受到账号计划、组织策略和所在地区影响。

::: tip 官方边界
计划可用性、消息限额、连接方式和具体入口请以 [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt) 为准。
:::

## 适用场景

- 连接 GitHub 仓库后发起任务。
- 让 Codex 阅读仓库并总结架构。
- 将 issue 转成可执行任务。
- 生成 PR 摘要或变更说明。
- 面向非开发者解释技术改动。

::: info 截图占位
请补充 ChatGPT 中 Codex 入口截图。建议文件：`docs/.vuepress/public/screenshots/chatgpt/01-codex-entry.png`。
:::

::: info 截图占位
请补充 ChatGPT 中连接仓库或创建任务截图。建议文件：`docs/.vuepress/public/screenshots/chatgpt/02-repo-task.png`。
:::

## 任务写法

```text
请阅读这个仓库并帮我理解 [主题]。请先总结相关目录和关键文件，再给出执行建议。暂时不要修改代码。
```

进一步推进时：

```text
请基于刚才的分析，完成第一步最小改动，并创建可审查的结果。请说明改动原因、验证方式和剩余风险。
```

## 适合非开发者的用法

- 让 Codex 把 PR 改动解释成产品语言。
- 让 Codex 总结发布说明。
- 让 Codex 梳理项目文档缺口。
- 让 Codex 把技术 issue 拆成任务清单。
