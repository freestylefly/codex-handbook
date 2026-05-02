import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Codex 从入门到精通',
  description: '面向中文开发者的 Codex 开源教程知识库',
  lang: 'zh-CN',
  base: '/codex-handbook/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Codex 从入门到精通' }],
    ['meta', { property: 'og:description', content: '面向中文开发者的 Codex 开源教程知识库' }],
    ['meta', { property: 'og:image', content: 'https://blog.canghecode.com/codex-handbook/og.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Codex Handbook',
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清空搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
    nav: [
      { text: '指南', link: '/guide/00-overview' },
      { text: '案例', link: '/recipes/' },
      { text: '资料', link: '/reference/' },
      { text: '共建', link: '/community/roadmap' }
    ],
    sidebar: [
      {
        text: '入门到精通',
        items: [
          { text: '学习路线', link: '/guide/00-overview' },
          { text: '安装与登录', link: '/guide/01-installation' },
          { text: '第一次改代码', link: '/guide/02-first-run' },
          { text: '提示词与任务说明', link: '/guide/03-prompting' },
          { text: '真实工程工作流', link: '/guide/04-workflows' },
          { text: 'AGENTS.md', link: '/guide/05-agents-md' },
          { text: '沙盒与审批', link: '/guide/06-sandbox-approvals' },
          { text: 'Cloud、IDE 与 App', link: '/guide/07-cloud-ide-app' },
          { text: 'Skills 与 Automations', link: '/guide/08-skills-automations' },
          { text: '排障手册', link: '/guide/09-troubleshooting' }
        ]
      },
      {
        text: '实战案例',
        items: [
          { text: '案例库', link: '/recipes/' },
          { text: '修复一个测试失败', link: '/recipes/fix-failing-test' },
          { text: '让 Codex 帮你做代码审查', link: '/recipes/code-review' }
        ]
      },
      {
        text: '资料与共建',
        items: [
          { text: '官方资料索引', link: '/reference/' },
          { text: '共建路线图', link: '/community/roadmap' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/freestylefly/codex-handbook' }
    ],
    editLink: {
      pattern: 'https://github.com/freestylefly/codex-handbook/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 canghe'
    }
  }
})
