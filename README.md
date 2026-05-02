# Codex 从入门到精通

> 面向中文开发者的 Codex 开源知识库：从安装、工作流、提示词、AGENTS.md、沙盒与审批，到云端任务、IDE、团队协作和真实项目案例。

[![Docs](https://img.shields.io/badge/docs-VitePress-646cff)](https://blog.canghecode.com/codex-handbook/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

## 这个仓库想解决什么

Codex 已经不只是一个命令行工具，而是一套覆盖 CLI、Web/Cloud、IDE extension 和桌面 App 的编码代理工作流。这个仓库的目标是把英文文档、真实工程经验和中文开发者常见问题整理成一份可读、可查、可贡献的系统教程。

适合你，如果你想：

- 快速上手 Codex CLI，并理解它如何读代码、改代码、跑命令和执行测试。
- 学会写更稳定的任务说明、提示词和 `AGENTS.md` 项目规则。
- 把 Codex 用在真实项目里：修 bug、写测试、重构、代码审查、文档生成、CI 排障。
- 建立团队级用法：权限边界、沙盒策略、工作树、PR 流程、知识库沉淀。
- 贡献中文案例，让更多人少踩坑。

## 内容地图

- [开始阅读](./docs/index.md)
- [学习路线](./docs/guide/00-overview.md)
- [安装与登录](./docs/guide/01-installation.md)
- [第一次让 Codex 改代码](./docs/guide/02-first-run.md)
- [高质量任务说明与提示词](./docs/guide/03-prompting.md)
- [真实工程工作流](./docs/guide/04-workflows.md)
- [AGENTS.md 项目规则](./docs/guide/05-agents-md.md)
- [沙盒、审批与安全边界](./docs/guide/06-sandbox-approvals.md)
- [Cloud、IDE 与桌面 App](./docs/guide/07-cloud-ide-app.md)
- [Skills、Automations 与团队沉淀](./docs/guide/08-skills-automations.md)
- [排障手册](./docs/guide/09-troubleshooting.md)
- [实战案例库](./docs/recipes/index.md)
- [官方资料索引](./docs/reference/index.md)
- [共建路线图](./docs/community/roadmap.md)

## 本地预览

```bash
pnpm install
pnpm dev
```

构建静态站点：

```bash
pnpm build
```

## 事实来源

本仓库优先引用官方资料，并会在关键页面标注“最后核对日期”。当前骨架参考：

- [OpenAI Codex 产品页](https://openai.com/codex/)
- [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- [OpenAI Codex CLI Getting Started](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started)
- [Codex cloud docs](https://platform.openai.com/docs/codex)
- [openai/codex GitHub repository](https://github.com/openai/codex)

## 参与贡献

欢迎提交：

- 新手友好的教程改写
- 可复现的真实案例
- 常见错误和解决方案
- 团队实践、模板和工作流
- 官方文档变更同步

请先阅读 [贡献指南](./CONTRIBUTING.md)。如果你还不确定怎么贡献，可以从 [Roadmap](./docs/community/roadmap.md) 或 `good first issue` 开始。

## 许可

MIT
