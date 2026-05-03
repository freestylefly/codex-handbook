# 官方与社区优秀案例索引

本页先整理适合改写成教程的案例方向。后续每个案例都应该补齐截图、任务说明、过程记录、验证结果和复盘。

::: tip 最后核对
官方资料最后核对日期：2026-05-04。来源包括 [OpenAI Codex 产品页](https://openai.com/codex/)、[Introducing Codex](https://openai.com/index/introducing-codex/)、[Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)、[Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/)、[Codex 文档入口](https://developers.openai.com/codex/) 和 [openai/codex](https://github.com/openai/codex)。
:::

## 官方能力启发案例

| 案例 | 入口 | 学习价值 | 教程补充点 |
| --- | --- | --- | --- |
| 阅读仓库并解释架构 | CLI / ChatGPT / Cloud | 建立仓库理解能力 | 补目录图、入口文件截图、任务模板 |
| 修复一个失败测试 | CLI / Cloud | 体验“复现 -> 修改 -> 验证”闭环 | 补失败日志、diff、测试通过截图 |
| 生成 PR 摘要与风险说明 | Cloud / GitHub | 进入团队 review 流程 | 补 PR 页面、review checklist |
| 用 AGENTS.md 固化项目规则 | CLI / App / Cloud | 让 Codex 遵守项目命令和边界 | 补最小模板和团队模板 |
| 用 Skills 固化重复流程 | Desktop App | 把经验变成可复用能力 | 补 Skill 文件结构和触发示例 |
| 用 Automations 做后续跟进 | Desktop App | 把提醒、监控、定期检查自动化 | 补创建流程和输出样例 |
| 用 MCP 接入外部工具 | App / CLI | 扩展数据源和操作范围 | 补权限说明和安全清单 |
| Cloud environment 配置 | Cloud | 提高任务可复现性 | 补依赖、测试命令、网络边界 |
| IDE 选区解释和补测试 | IDE | 训练局部上下文任务 | 补选区截图和测试运行截图 |

## 可直接落地的教程案例

### 案例 1：陌生仓库 10 分钟导览

入口：CLI 或 ChatGPT。

目标：让 Codex 只读输出项目结构、启动命令、测试命令和学习路线。

任务模板：

```text
请只读分析当前仓库，不要修改文件。

请输出：
1. 项目用途
2. 目录结构
3. 关键入口文件
4. 安装、启动、测试、构建命令
5. 新手阅读顺序
6. 适合 Codex 处理的低风险任务
```

::: info 截图占位
请补充陌生仓库导览输出截图。建议文件：`docs/.vuepress/public/screenshots/cli/11-repo-tour.png`。
:::

### 案例 2：修复失败测试

入口：CLI、Cloud 或 App。

目标：让 Codex 先复现失败，再做最小修复，最后重新运行测试。

任务模板：

```text
请修复当前失败测试。

要求：
1. 先运行测试并记录失败信息。
2. 阅读相关代码和测试。
3. 修改最小必要文件。
4. 重新运行相关测试。
5. 输出失败原因、改动文件、验证命令和剩余风险。
```

::: info 截图占位
请补充失败测试、修复 diff 和测试通过截图。建议文件：`docs/.vuepress/public/screenshots/cli/12-failing-test-case.png`。
:::

### 案例 3：把 PR 解释给非开发者

入口：ChatGPT、Cloud 或 GitHub 集成。

目标：把技术 diff 转成产品、运营、管理者也能理解的说明。

任务模板：

```text
请阅读这个 PR 的改动，把它解释给非开发者。

输出：
1. 用户能感知到什么变化
2. 对产品或业务流程的影响
3. 风险和需要验证的场景
4. 适合放进 release notes 的一句话
```

::: info 截图占位
请补充 PR 摘要或 ChatGPT 解释截图。建议文件：`docs/.vuepress/public/screenshots/chatgpt/03-pr-explained.png`。
:::

### 案例 4：为项目写 AGENTS.md

入口：CLI、App 或 Cloud。

目标：让 Codex 读取项目配置，生成适合本仓库的规则文件初稿。

任务模板：

```text
请只读分析当前仓库，并为本项目生成一份 AGENTS.md 初稿。

要求包含：
1. 项目概览
2. 安装、测试、构建命令
3. 代码风格
4. 目录边界
5. 安全和审批要求
6. 提交前检查
```

::: info 截图占位
请补充 AGENTS.md 生成和 review 截图。建议文件：`docs/.vuepress/public/screenshots/config/06-agents-md-case.png`。
:::

### 案例 5：用 Skill 固化文档站更新流程

入口：Desktop App。

目标：把“补内容 -> 查官方来源 -> 加截图占位 -> 构建验证 -> 检查禁用句式”沉淀成 Skill。

任务模板：

```text
请为当前知识库设计一个文档更新 Skill。

要求：
1. 触发场景明确。
2. 优先读取官方来源。
3. 涉及步骤时添加截图占位。
4. 修改后运行文档站构建。
5. 检查禁用句式和断链风险。
```

::: info 截图占位
请补充 Skill 结构截图。建议文件：`docs/.vuepress/public/screenshots/app/06-doc-skill-case.png`。
:::

### 案例 6：Cloud 长任务生成 PR

入口：Cloud / Web。

目标：让 Codex 在云端完成一个边界清晰的长任务，并输出可审查 PR。

任务模板：

```text
请为 [模块] 完成 [目标]，并创建可审查结果。

要求：
1. 先说明计划。
2. 修改范围限制在 [目录]。
3. 运行 [测试命令]。
4. PR 描述中包含改动摘要、验证结果和剩余风险。
5. 如遇环境缺失，请列出缺失项，不要跳过验证结果说明。
```

::: info 截图占位
请补充 Cloud 任务和 PR 页面截图。建议文件：`docs/.vuepress/public/screenshots/cloud/04-cloud-pr-case.png`。
:::

## 社区通用实践案例

| 案例 | 适合项目 | 任务模板 |
| --- | --- | --- |
| 给旧项目补第一批测试 | 缺测试的前端/后端项目 | “请先找一个纯函数或低风险模块，补最小测试。” |
| 修复 CI 失败 | GitHub Actions / Vercel / Docker 项目 | “请读取失败日志，定位环境问题和代码问题边界。” |
| 整理 README | 开源项目 | “请按新手视角重写安装、运行、测试和贡献步骤。” |
| 迁移配置项 | 框架升级项目 | “请先列出配置变化和兼容风险，再做最小迁移。” |
| 生成发布说明 | 有 commit/PR 记录的项目 | “请把技术改动转成用户可理解的发布说明。” |
| 代码审查 | 任意 PR | “请按行为回归、安全风险、缺失测试排序输出发现。” |
| 文档站扩写 | 教程类项目 | “请参考官方资料扩写，不整段搬运，保留截图占位。” |
| 多入口对比 | Codex 学习项目 | “请分别说明 CLI、App、Cloud、IDE、ChatGPT 的任务边界。” |

## 案例模板

```markdown
# 案例标题

## 场景

## 入口

## 官方来源

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
