import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "home", link: "/" },
  { text: "学习路线", icon: "map", link: "/guide/00-overview.md" },
  { text: "入口地图", icon: "layout", link: "/platform/" },
  {
    text: "配置",
    icon: "gear",
    children: [
      { text: "配置总览", icon: "map", link: "/configuration/" },
      { text: "CLI 选项与命令", icon: "terminal", link: "/configuration/cli-options.md" },
      { text: "config.toml", icon: "config", link: "/configuration/config-file.md" },
      { text: "MCP、Skills 与 Subagents", icon: "plugin", link: "/configuration/mcp-skills-subagents.md" },
      { text: "安全与审批", icon: "safe", link: "/configuration/security-admin.md" },
    ],
  },
  {
    text: "资源",
    icon: "box",
    children: [
      { text: "实践方法", icon: "tool", link: "/practice/" },
      { text: "官方资料", icon: "link", link: "/reference/" },
      { text: "共建路线图", icon: "people", link: "/community/roadmap.md" },
    ],
  },
  {
    text: "实战案例",
    icon: "lightbulb",
    children: [
      { text: "案例总览", icon: "layout", link: "/recipes/" },
      { text: "01 Codex 控制 Chrome 浏览器", icon: "chrome", link: "/recipes/chrome-browser-plugin.md" },
      { text: "02 安装并使用 PPT Skill", icon: "slides", link: "/recipes/ppt-skill-walkthrough.md" },
      { text: "03 修复一个测试失败", icon: "debug", link: "/recipes/fix-failing-test.md" },
      { text: "04 让 Codex 做代码审查", icon: "review", link: "/recipes/code-review.md" },
      { text: "05 从零补 AGENTS.md", icon: "file", link: "/recipes/agents-md-setup.md" },
      { text: "06 给旧项目补第一批测试", icon: "test", link: "/recipes/add-tests.md" },
      { text: "07 修复 CI 失败", icon: "ci", link: "/recipes/fix-ci.md" },
      { text: "08 拆分超大文件", icon: "code", link: "/recipes/refactor-large-file.md" },
      { text: "09 生成发布说明", icon: "log", link: "/recipes/generate-release-notes.md" },
      { text: "10 Codex 不适合的场景", icon: "warning", link: "/recipes/failure-scenarios.md" },
      { text: "11 官方与社区优秀案例", icon: "people", link: "/recipes/official-community-cases.md" },
    ],
  },
  {
    text: "教程",
    icon: "book",
    children: [
      { text: "01 安装与登录", icon: "download", link: "/guide/01-installation.md" },
      { text: "02 第一次改代码", icon: "code", link: "/guide/02-first-run.md" },
      { text: "03 了解 Codex 项目和聊天", icon: "folder", link: "/guide/03-projects-chats.md" },
      { text: "04 任务顺序执行与并行", icon: "list", link: "/guide/04-task-execution.md" },
      { text: "05 权限管理", icon: "safe", link: "/guide/05-permissions.md" },
      { text: "06 真实工程工作流", icon: "project", link: "/guide/06-workflows.md" },
      { text: "07 AGENTS.md", icon: "file", link: "/guide/07-agents-md.md" },
      { text: "08 沙盒与审批", icon: "lock", link: "/guide/08-sandbox-approvals.md" },
      { text: "09 技能与插件", icon: "plugin", link: "/guide/09-skills-plugins.md" },
      { text: "10 自动化", icon: "time", link: "/guide/10-automation.md" },
      { text: "11 Cloud、IDE 与 App", icon: "cloud", link: "/guide/11-cloud-ide-app.md" },
      { text: "12 Skills 与 Automations", icon: "tool", link: "/guide/12-skills-automations.md" },
      { text: "13 排障手册", icon: "debug", link: "/guide/13-troubleshooting.md" },
    ],
  },
]);
