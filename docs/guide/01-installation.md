# 安装与登录

本页帮你完成 Codex CLI 的基础安装，并建立一个可验证的本地环境。

::: tip 最后核对
官方资料最后核对日期：2026-05-02。安装方式请以 [OpenAI Codex CLI Getting Started](https://help.openai.com/en/articles/11096431-openai-codex-cli-getting-started) 和 [openai/codex](https://github.com/openai/codex) 为准。
:::

## 安装前准备

建议先确认：

- 你能访问一个本地 Git 项目。
- 已安装 Node.js 和 npm。
- 终端可以运行 `git`、项目测试命令和包管理器命令。

## 安装 Codex CLI

官方 Help Center 当前给出的入门安装方式是：

```bash
npm install -g @openai/codex
```

如果你已经安装过，可以先更新：

```bash
npm install -g @openai/codex@latest
```

安装后检查版本：

```bash
codex --version
```

## 登录

运行：

```bash
codex
```

根据终端提示完成登录。官方资料说明 Codex 可以通过 ChatGPT 账号在多个使用界面中工作，具体可用计划和限制请查看 [Codex in ChatGPT Help Center](https://help.openai.com/en/articles/11369540-codex-in-chatgpt)。

## 第一次进入项目

进入你的项目根目录：

```bash
cd path/to/your/project
codex
```

建议第一次任务只让 Codex 做读取和总结：

```text
请先阅读这个仓库的目录结构、README 和测试配置。不要修改文件。请总结项目用途、主要技术栈、如何运行测试，以及你建议我下一步让你处理的 3 个低风险任务。
```

这样可以确认 Codex 能正常读取项目，也能帮助你了解它对项目的判断质量。
