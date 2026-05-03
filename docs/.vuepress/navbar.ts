import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "首页", icon: "home", link: "/" },
  { text: "学习路线", icon: "map", link: "/guide/00-overview.md" },
  { text: "入口地图", icon: "layout", link: "/platform/" },
  {
    text: "教程",
    icon: "book",
    children: [
      { text: "安装与登录", icon: "download", link: "/guide/01-installation.md" },
      { text: "第一次改代码", icon: "code", link: "/guide/02-first-run.md" },
      { text: "提示词与任务说明", icon: "pen", link: "/guide/03-prompting.md" },
      { text: "真实工程工作流", icon: "project", link: "/guide/04-workflows.md" },
      { text: "AGENTS.md", icon: "file", link: "/guide/05-agents-md.md" },
      { text: "沙盒与审批", icon: "safe", link: "/guide/06-sandbox-approvals.md" },
      { text: "Cloud、IDE 与 App", icon: "cloud", link: "/guide/07-cloud-ide-app.md" },
      { text: "Skills 与 Automations", icon: "tool", link: "/guide/08-skills-automations.md" },
      { text: "排障手册", icon: "debug", link: "/guide/09-troubleshooting.md" },
    ],
  },
  { text: "实践方法", icon: "tool", link: "/practice/" },
  { text: "实战案例", icon: "lightbulb", link: "/recipes/" },
  { text: "官方资料", icon: "link", link: "/reference/" },
  { text: "共建", icon: "people", link: "/community/roadmap.md" },
]);
