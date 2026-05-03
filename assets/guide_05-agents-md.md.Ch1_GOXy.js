import{_ as i,o as a,c as n,ag as l}from"./chunks/framework.CXIqMST4.js";const o=JSON.parse('{"title":"AGENTS.md 项目规则","description":"","frontmatter":{},"headers":[],"relativePath":"guide/05-agents-md.md","filePath":"guide/05-agents-md.md","lastUpdated":1777684488000}'),t={name:"guide/05-agents-md.md"};function h(p,s,e,k,d,r){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="agents-md-项目规则" tabindex="-1">AGENTS.md 项目规则 <a class="header-anchor" href="#agents-md-项目规则" aria-label="Permalink to &quot;AGENTS.md 项目规则&quot;">​</a></h1><p><code>AGENTS.md</code> 是给 Codex 这类编码代理看的项目说明文件。它可以描述项目结构、开发命令、测试要求、代码风格和协作边界。</p><div class="tip custom-block"><p class="custom-block-title">最后核对</p><p><code>AGENTS.md</code> 机制请以 <a href="https://github.com/openai/codex" target="_blank" rel="noreferrer">openai/codex GitHub repository</a> 及其文档为准。最后核对日期：2026-05-02。</p></div><h2 id="为什么需要-agents-md" tabindex="-1">为什么需要 AGENTS.md <a class="header-anchor" href="#为什么需要-agents-md" aria-label="Permalink to &quot;为什么需要 AGENTS.md&quot;">​</a></h2><p>没有项目规则时，Codex 需要从仓库里推断很多事情：</p><ul><li>用哪个包管理器。</li><li>如何运行测试。</li><li>哪些目录是生成物。</li><li>哪些文件不能改。</li><li>提交前要跑哪些检查。</li></ul><p><code>AGENTS.md</code> 能把这些规则显式写下来，减少反复解释。</p><h2 id="推荐模板" tabindex="-1">推荐模板 <a class="header-anchor" href="#推荐模板" aria-label="Permalink to &quot;推荐模板&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># AGENTS.md</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目概览</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 项目类型：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 主要语言：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 关键目录：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 常用命令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 安装依赖：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`...\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 本地开发：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`...\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 运行测试：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`...\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 类型检查：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`...\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 格式化：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`...\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 代码规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遵循现有代码风格。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不做无关重构。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 新增功能必须补充或更新测试。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 安全边界</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不读取或提交 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`.env\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、密钥和私有凭据。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不执行删除生产数据的命令。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 修改数据库迁移前先说明影响。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 交付要求</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明改动文件。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明验证命令和结果。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 说明未验证项和剩余风险。</span></span></code></pre></div><h2 id="写作建议" tabindex="-1">写作建议 <a class="header-anchor" href="#写作建议" aria-label="Permalink to &quot;写作建议&quot;">​</a></h2><ul><li>越具体越好。<code>运行测试：pnpm test</code> 比“记得测试”有用。</li><li>把生成目录、构建产物、锁文件策略写清楚。</li><li>如果是 monorepo，请说明每个包的边界。</li><li>如果有特殊 lint、格式化或代码生成流程，写在命令区。</li><li>对安全敏感项目，单独写“禁止事项”。</li></ul>`,11)])])}const g=i(t,[["render",h]]);export{o as __pageData,g as default};
