# 官方与社区优秀案例索引

本页先整理适合改写成教程的案例方向。后续每个案例都应该补齐截图、任务说明、过程记录、验证结果和复盘。

::: tip 最后核对
官方资料最后核对日期：2026-05-04。来源包括 [OpenAI Codex 产品页](https://openai.com/codex/)、[Introducing Codex](https://openai.com/index/introducing-codex/)、[Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)、[Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/) 和 [openai/codex](https://github.com/openai/codex)。
:::

## 官方能力启发案例

| 案例 | 入口 | 学习价值 | 后续补充 |
| --- | --- | --- | --- |
| 让 Codex 阅读仓库并解释架构 | CLI / ChatGPT / Cloud | 建立仓库理解能力 | 补完整截图和示例仓库 |
| 修复一个失败测试 | CLI / Cloud | 体验“复现 -> 修改 -> 验证”闭环 | 已有基础案例 |
| 生成 PR 摘要与风险说明 | Cloud / GitHub | 进入团队 review 流程 | 补 PR 页面截图 |
| 用 AGENTS.md 固化项目规则 | CLI / App / Cloud | 让 Codex 遵守项目命令和边界 | 补模板案例 |
| 用 Skills 固化重复流程 | Desktop App | 把经验变成可复用能力 | 补 Skill 文件示例 |
| 用 Automations 做后续跟进 | Desktop App | 把提醒、监控、定期检查自动化 | 补自动化设置截图 |
| 用 MCP 接入外部工具 | App / CLI | 扩展数据源和操作范围 | 补安全边界说明 |

## 社区通用实践案例

| 案例 | 适合项目 | 任务模板 |
| --- | --- | --- |
| 给旧项目补第一批测试 | 缺测试的前端/后端项目 | “请先找一个纯函数或低风险模块，补最小测试。” |
| 修复 CI 失败 | GitHub Actions / Vercel / Docker 项目 | “请读取失败日志，定位环境问题和代码问题边界。” |
| 整理 README | 开源项目 | “请按新手视角重写安装、运行、测试和贡献步骤。” |
| 迁移配置项 | 框架升级项目 | “请先列出配置变化和兼容风险，再做最小迁移。” |
| 生成发布说明 | 有 commit/PR 记录的项目 | “请把技术改动转成用户可理解的发布说明。” |
| 代码审查 | 任意 PR | “请按行为回归、安全风险、缺失测试排序输出发现。” |

## 案例模板

```markdown
# 案例标题

## 场景

## 入口

## 任务说明

## 截图

::: info 截图占位
建议文件：
:::

## 过程

## 验证

## 复盘

## 可复用模板
```

## 贡献建议

提交案例时优先补充：

- 真实输入。
- 关键截图。
- Codex 的中间判断。
- 最终 diff 或 PR。
- 验证命令。
- 失败或踩坑记录。
