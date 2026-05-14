import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    {
      text: "从入门到精通",
      icon: "book",
      prefix: "/guide/",
      children: [
        { text: "00 学习路线", link: "00-overview.md" },
        {
          text: "第一部分：App 入门",
          icon: "mobile",
          collapsible: false,
          children: [
            { text: "01 Codex App 下载与安装", link: "01-app-installation.md" },
            { text: "02 订阅 ChatGPT Plus", link: "02-subscribe-plus.md" },
            { text: "03 了解 Codex 基本组成", link: "03-app-overview.md" },
            { text: "04 用 Codex 完成第一个任务", link: "04-app-first-task.md" },
            { text: "05 任务顺序执行与并行", link: "05-task-execution.md" },
            { text: "06 权限管理", link: "06-permissions.md" },
            { text: "07 技能与插件", link: "07-skills-plugins.md" },
            { text: "08 自动化", link: "08-automation.md" },
            { text: "09 桌面宠物", link: "09-desktop-pet.md" },
          ],
        },
        {
          text: "第二部分：CLI 入门",
          icon: "terminal",
          collapsible: false,
          children: [
            { text: "10 CLI 安装与登录", link: "10-cli-installation.md" },
            { text: "11 第一次让 Codex 改代码", link: "11-cli-first-run.md" },
          ],
        },
        {
          text: "第三部分：IDE 插件安装",
          icon: "code",
          collapsible: false,
          children: [
            { text: "12 在 VS Code 中使用 Codex", link: "12-ide-vscode.md" },
          ],
        },
        {
          text: "第四部分：进阶",
          icon: "rocket",
          collapsible: false,
          children: [
            { text: "13 AGENTS.md", link: "14-agents-md.md" },
            { text: "14 沙盒与审批", link: "15-sandbox-approvals.md" },
            { text: "15 Codex Cloud：使用云端模式", link: "16-cloud-ide-app.md" },
            { text: "16 排障手册", link: "18-troubleshooting.md" },
          ],
        },
      ],
    },
  ],

  "/recipes/": [
    {
      text: "实战案例",
      icon: "lightbulb",
      prefix: "/recipes/",
      children: [
        { text: "案例总览", link: "index.md" },
        { text: "01 Codex × PPT Skill：一句话生成演示文稿", link: "ppt-skill-walkthrough.md" },
        { text: "02 Codex × Draw.io MCP：AI 自动绘制架构图", link: "drawio-mcp.md" },
        { text: "03 Codex × Playwright MCP：让 AI 操控浏览器", link: "playwright-mcp.md" },
        { text: "04 Codex × HyperFrames：用代码生成动画视频", link: "hyperframes-animation.md" },
        { text: "05 Codex × Obsidian：在知识库中自动生成配图", link: "obsidian-codex.md" },
        { text: "06 Codex × 飞书 CLI：一句话处理飞书数据", link: "feishu-cli-codex.md" },
        { text: "07 Codex × LLM Wiki：在 Obsidian 中搭建 AI 知识库", link: "llm-wiki-codex.md" },
        { text: "08 Codex × Figma MCP：读懂设计稿", link: "figma-mcp-codex.md" },
        { text: "09 Codex × Notion MCP：打通知识空间", link: "notion-mcp-codex.md" },
        { text: "10 Codex × DKFile：网页一键发布到公网", link: "dkfile-deploy-codex.md" },
        { text: "11 Codex × 云服务器：远程定位并修复 Bug", link: "remote-bug-fix.md" },
        { text: "12 Codex × Chrome：让 AI 直接控制浏览器", link: "chrome-browser-plugin.md" },
        { text: "13 Codex × GitHub Actions：CI 失败自动修复", link: "github-actions-ci-fix.md" },
        { text: "参考来源与致谢", link: "credits.md" },
      ],
    },
  ],

  "/platform/": [
    {
      text: "入口地图",
      icon: "layout",
      prefix: "/platform/",
      children: ["index.md", "cli.md", "app.md", "cloud.md", "ide.md", "chatgpt.md"],
    },
  ],

  "/configuration/": [
    {
      text: "配置与扩展",
      icon: "gear",
      prefix: "/configuration/",
      children: [
        "index.md",
        "cli-options.md",
        "config-file.md",
        "mcp-skills-subagents.md",
        "security-admin.md",
      ],
    },
  ],

  "/practice/": [
    {
      text: "实践方法",
      icon: "tool",
      prefix: "/practice/",
      children: ["index.md", "task-design.md", "non-dev-workflows.md", "team-playbook.md"],
    },
  ],

  "/reference/": [
    {
      text: "资料索引",
      icon: "link",
      prefix: "/reference/",
      children: ["index.md"],
    },
  ],

  "/community/": [
    {
      text: "社区共建",
      icon: "people",
      prefix: "/community/",
      children: ["roadmap.md"],
    },
  ],

  "/": [
    {
      text: "CodexGuide",
      icon: "home",
      children: [
        "/guide/00-overview.md",
        "/guide/01-installation.md",
        "/guide/02-first-run.md",
        "/platform/",
        "/configuration/",
        "/practice/",
        "/recipes/",
        "/reference/",
        "/community/roadmap.md",
      ],
    },
  ],
});
