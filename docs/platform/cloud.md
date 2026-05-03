# Cloud / Web

Cloud / Web 入口适合处理耗时更长、需要后台运行或需要与 GitHub 协作的任务。它的价值在于把任务从本地终端中抽离出来，让 Codex 在可管理的环境里分析仓库、提交结果或生成 PR。

## 适用场景

- 让 Codex 分析大型仓库。
- 处理耗时较长的修复或迁移。
- 并行推进多个 issue。
- 基于 GitHub 仓库生成 PR。
- 在团队中分派和追踪任务。

## 提交任务前的清单

| 检查项 | 为什么重要 |
| --- | --- |
| 仓库权限 | Codex 需要读取代码并可能创建分支或 PR |
| 环境配置 | 缺依赖、缺服务、缺环境变量会影响验证 |
| 任务边界 | 长任务更需要明确范围和验收标准 |
| 测试命令 | 明确验证命令能显著提高结果可靠性 |
| 安全边界 | 涉及凭据、生产数据、发布部署时保留人工审批 |

::: info 截图占位
请补充 Cloud/Web 新建任务界面截图。建议文件：`docs/.vuepress/public/screenshots/cloud/01-new-task.png`。
:::

::: info 截图占位
请补充 Cloud/Web 任务结果或 PR 页面截图。建议文件：`docs/.vuepress/public/screenshots/cloud/02-task-result.png`。
:::

## 推荐任务说明

```text
请分析这个仓库中 [模块/问题] 的实现，并完成最小可验证修复。

要求：
1. 先定位相关文件和测试。
2. 提交实现前说明计划。
3. 修改范围限制在 [目录/模块]。
4. 运行 [测试命令]。
5. 输出 PR 摘要、验证结果和剩余风险。
```

## 官方资料

- [Codex cloud docs](https://platform.openai.com/docs/codex)
- [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)
- [Introducing Codex](https://openai.com/index/introducing-codex/)
