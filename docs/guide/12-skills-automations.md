# Skills、Automations 与团队沉淀

当团队开始稳定使用 Codex 后，真正的收益来自复用：把做得好的流程沉淀下来。

::: tip 最后核对
官方资料最后核对日期：2026-05-04。Skills 请以 [Codex skills](https://developers.openai.com/codex/skills) 和 [openai/codex skills 文档](https://github.com/openai/codex/blob/main/docs/skills.md) 为准。
:::

## Skills

Skills 适合固化一类任务的做法，例如：

- 代码审查标准。
- 文档生成规范。
- 发布说明格式。
- 数据分析流程。
- 特定框架的迁移步骤。

一个好的 Skill 应该包含：

- 触发场景。
- 输入要求。
- 操作步骤。
- 验证方式。
- 禁止事项。

## Automations

Automations 适合周期性、重复性或需要提醒的任务，例如：

- 每周检查过期依赖。
- 定期整理 issue。
- 监控 CI 失败。
- 提醒更新文档。
- 汇总仓库近期变更。

## MCP 与外部工具

MCP 适合把外部系统接入 Codex 工作流，例如文档、任务系统、设计资源、浏览器或内部工具。使用 MCP 时要先明确：

- 工具能读什么数据。
- 工具能执行什么操作。
- 哪些操作需要人工确认。
- 输出如何验证。

::: info 截图占位
请补充一次 Skills、Automations 或 MCP 配置截图。建议文件：`docs/.vuepress/public/screenshots/app/03-skills-automations-mcp.png`。
:::

## 团队知识库

建议沉淀三类内容：

- `AGENTS.md`：项目级规则。
- `recipes/`：可复用案例。
- `troubleshooting`：失败模式和处理方式。

每次 Codex 成功解决一个典型问题，都可以把任务说明、关键步骤和验证命令整理成案例。长期看，这比单次“让 AI 写代码”更有复利。
