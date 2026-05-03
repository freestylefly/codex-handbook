# CLI

CLI 是最适合建立 Codex 基本功的入口。它贴近本地仓库、终端命令和测试输出，能让你清楚看到 Codex 如何读代码、修改文件、运行验证并解释结果。

## 适用场景

- 快速理解一个仓库。
- 修复一个可复现 bug。
- 为小模块补测试。
- 运行 lint、typecheck、unit test。
- 生成或更新 README、迁移说明、排障记录。
- 在本地控制权限边界和命令执行。

## 工作节奏

![Codex 高质量任务闭环](/images/codex-workflow-loop.svg)

一次高质量 CLI 任务通常包含：

1. 说明任务目标和范围。
2. 让 Codex 先读仓库入口。
3. 让它提出计划或直接执行低风险任务。
4. 修改后运行相关验证。
5. 总结改动、验证和剩余风险。

## 推荐启动任务

```text
请阅读当前仓库，不要修改文件。请回答：
1. 这个项目的主要用途是什么？
2. 入口文件、测试命令、构建命令分别在哪里？
3. 哪些目录是源码、文档、配置、生成物？
4. 适合交给你处理的 5 个低风险任务是什么？
```

::: info 截图占位
请补充 CLI 只读仓库总结截图。建议文件：`docs/.vuepress/public/screenshots/cli/02-repo-summary.png`。
:::

## 任务模板

```text
请处理：[一句话目标]

范围：
- 可以修改：[文件或目录]
- 保持不变：[明确排除项]

要求：
1. 先阅读相关文件。
2. 控制 diff，不做无关改动。
3. 修改后运行：[验证命令]
4. 最后总结改动、验证结果和剩余风险。
```

## 官方资料

- [Codex CLI 官方仓库](https://github.com/openai/codex)
- [CLI install 文档](https://github.com/openai/codex/blob/main/docs/install.md)
- [Codex CLI features](https://developers.openai.com/codex/cli/features)
