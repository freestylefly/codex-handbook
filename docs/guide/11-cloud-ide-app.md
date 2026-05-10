# Cloud、IDE 与桌面 App

Codex 可以出现在多个使用界面中。你可以根据任务类型选择最顺手的入口。

::: tip 最后核对
OpenAI 官方资料描述 Codex 覆盖 CLI、Web/Cloud、IDE extension 和 App 等使用界面。最后核对日期：2026-05-02。请以 [OpenAI Codex 产品页](https://openai.com/codex/)、[Codex cloud docs](https://platform.openai.com/docs/codex) 和 [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt) 为准。
:::

## CLI

适合：

- 本地项目里的快速修改。
- 需要频繁跑测试和看 diff 的任务。
- 你希望紧贴终端工作流。

## IDE

适合：

- 边读代码边让 Codex 解释上下文。
- 在编辑器里快速处理局部问题。
- 结合现有调试、跳转和版本控制能力。

## Cloud / Web

适合：

- 较长的任务。
- 多个任务并行推进。
- 让 Codex 在独立环境里分析仓库、提出 PR 或回答代码问题。

使用前建议确认：

- 仓库权限是否正确。
- 环境配置是否足够跑测试。
- 是否需要网络访问。
- 任务说明是否包含验证标准。

## 桌面 App

适合：

- 在多个项目、多个任务之间切换。
- 管理并行 agent 工作。
- 使用本地工作树、插件、技能和自动化能力。

## 选择建议

| 任务 | 推荐入口 |
| --- | --- |
| 修一个小 bug | CLI 或 IDE |
| 解释陌生代码 | IDE 或 CLI |
| 长时间重构 | Cloud / App |
| 多任务并行 | Cloud / App |
| 团队 PR 流程 | Cloud / GitHub 集成 |
| 本地命令密集任务 | CLI |
