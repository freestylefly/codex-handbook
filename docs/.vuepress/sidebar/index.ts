import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    {
      text: "从入门到精通",
      icon: "book",
      prefix: "/guide/",
      children: [
        "00-overview.md",
        "01-installation.md",
        "02-first-run.md",
        "03-prompting.md",
        "04-workflows.md",
        "05-agents-md.md",
        "06-sandbox-approvals.md",
        "07-cloud-ide-app.md",
        "08-skills-automations.md",
        "09-troubleshooting.md",
      ],
    },
  ],

  "/recipes/": [
    {
      text: "实战案例",
      icon: "lightbulb",
      prefix: "/recipes/",
      children: ["index.md", "fix-failing-test.md", "code-review.md", "official-community-cases.md"],
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
        "/practice/",
        "/recipes/",
        "/reference/",
        "/community/roadmap.md",
      ],
    },
  ],
});
