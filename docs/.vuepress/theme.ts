import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://codexguide.ai/",
  logo: "/logo.svg",
  favicon: "/logo.svg",

  author: {
    name: "canghe",
    url: "https://github.com/freestylefly",
  },

  repo: "https://github.com/freestylefly/CodexGuide",
  docsDir: "docs",

  navbar,
  sidebar,

  print: false,
  pure: true,
  focus: false,
  breadcrumb: true,
  displayFooter: true,
  footer: "MIT Licensed | Copyright © 2026 canghe",
  pageInfo: ["Author", "Category", "Tag", "Date", "Original", "Word", "ReadingTime"],

  blog: false,

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    gfm: true,
    mark: true,
    tasklist: true,
    tabs: true,
  },

  plugins: {
    copyCode: true,
    copyright: {
      author: "CodexGuide(codexguide.ai)",
      license: "MIT",
      triggerLength: 100,
      maxLength: 700,
      canonical: "https://codexguide.ai/",
      global: true,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    sitemap: {
      hostname: "https://codexguide.ai/",
    },
    slimsearch: {
      maxSuggestions: 10,
      locales: {
        "/": {
          placeholder: "搜索 CodexGuide",
        },
      },
    },
  },
});
