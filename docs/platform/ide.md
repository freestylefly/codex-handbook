# IDE

IDE 入口适合贴近编辑器上下文的高频小任务。它的优势是文件、选区、符号跳转和开发者当前注意力都在同一个环境里。

## 适用场景

- 解释当前文件或选中代码。
- 为一个函数补测试。
- 局部重构。
- 生成注释、文档或类型说明。
- 审查当前 diff。
- 快速理解错误信息和调用链。

## 使用原则

- 选区越准确，结果越稳定。
- 局部任务要说明“只改当前文件”或“只改相关测试”。
- 让 Codex 解释修改理由，避免只看最终代码。
- 重要改动仍然回到 Git diff 和测试命令中验证。

::: info 截图占位
请补充 IDE 中选中代码并请求解释的截图。建议文件：`docs/.vuepress/public/screenshots/ide/01-explain-selection.png`。
:::

::: info 截图占位
请补充 IDE 中查看 diff 或应用修改的截图。建议文件：`docs/.vuepress/public/screenshots/ide/02-apply-diff.png`。
:::

## 推荐任务说明

```text
请只基于当前选中的代码解释：
1. 它在模块中的职责
2. 输入输出和副作用
3. 可能的边界情况
4. 如果要补测试，建议覆盖哪些场景
```

## 官方资料

- [OpenAI Codex 产品页](https://openai.com/codex/)
- [Codex 文档入口](https://developers.openai.com/codex/)
