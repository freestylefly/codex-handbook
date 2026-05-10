import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    {
      text: "从入门到精通",
      icon: "book",
      prefix: "/guide/",
      children: [
        { text: "00 学习路线", link: "00-overview.md" },
        { text: "01 安装与登录", link: "01-installation.md" },
        { text: "02 第一次改代码", link: "02-first-run.md" },
        { text: "03 了解 Codex 项目和聊天", link: "03-projects-chats.md" },
        { text: "04 任务顺序执行与并行", link: "04-task-execution.md" },
        { text: "05 权限管理", link: "05-permissions.md" },
        { text: "06 真实工程工作流", link: "06-workflows.md" },
        { text: "07 AGENTS.md", link: "07-agents-md.md" },
        { text: "08 沙盒与审批", link: "08-sandbox-approvals.md" },
        { text: "09 技能与插件", link: "09-skills-plugins.md" },
        { text: "10 自动化", link: "10-automation.md" },
        { text: "11 Cloud、IDE 与 App", link: "11-cloud-ide-app.md" },
        { text: "12 Skills 与 Automations", link: "12-skills-automations.md" },
        { text: "13 排障手册", link: "13-troubleshooting.md" },
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
        { text: "01 Codex 控制 Chrome 浏览器", link: "chrome-browser-plugin.md" },
        { text: "02 安装并使用 PPT Skill", link: "ppt-skill-walkthrough.md" },
        { text: "03 修复一个测试失败", link: "fix-failing-test.md" },
        { text: "04 让 Codex 做代码审查", link: "code-review.md" },
        { text: "05 从零补 AGENTS.md", link: "agents-md-setup.md" },
        { text: "06 给旧项目补第一批测试", link: "add-tests.md" },
        { text: "07 修复 CI 失败", link: "fix-ci.md" },
        { text: "08 拆分超大文件", link: "refactor-large-file.md" },
        { text: "09 生成发布说明", link: "generate-release-notes.md" },
        { text: "10 Codex 不适合的场景", link: "failure-scenarios.md" },
        { text: "11 官方与社区优秀案例", link: "official-community-cases.md" },
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
