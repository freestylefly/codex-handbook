import{_ as s,o as n,c as e,ag as p}from"./chunks/framework.CXIqMST4.js";const u=JSON.parse('{"title":"让 Codex 帮你做代码审查","description":"","frontmatter":{},"headers":[],"relativePath":"recipes/code-review.md","filePath":"recipes/code-review.md","lastUpdated":1777684488000}'),i={name:"recipes/code-review.md"};function l(t,a,o,c,d,r){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="让-codex-帮你做代码审查" tabindex="-1">让 Codex 帮你做代码审查 <a class="header-anchor" href="#让-codex-帮你做代码审查" aria-label="Permalink to &quot;让 Codex 帮你做代码审查&quot;">​</a></h1><p>Codex 很适合做第一轮高密度审查：找回归风险、漏测、安全问题和边界情况。</p><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><ul><li>你已经有一组本地改动或 PR diff。</li><li>想在提交给同事前先做自检。</li><li>想让 Codex 重点检查行为风险，而不是只看代码风格。</li></ul><h2 id="任务说明" tabindex="-1">任务说明 <a class="header-anchor" href="#任务说明" aria-label="Permalink to &quot;任务说明&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请审查当前 git diff。请以代码审查者身份输出发现，不要直接修改文件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重点关注：</span></span>
<span class="line"><span>- 可能的行为回归</span></span>
<span class="line"><span>- 安全或权限风险</span></span>
<span class="line"><span>- 错误处理遗漏</span></span>
<span class="line"><span>- 并发、缓存、状态同步问题</span></span>
<span class="line"><span>- 缺失测试</span></span>
<span class="line"><span>- 与现有代码风格不一致的地方</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出要求：</span></span>
<span class="line"><span>1. 按严重程度排序。</span></span>
<span class="line"><span>2. 每条问题引用文件和行号。</span></span>
<span class="line"><span>3. 说明为什么这是问题。</span></span>
<span class="line"><span>4. 给出最小修复建议。</span></span>
<span class="line"><span>5. 如果没有发现问题，也请说明仍然建议人工检查的点。</span></span></code></pre></div><h2 id="进一步让它修复" tabindex="-1">进一步让它修复 <a class="header-anchor" href="#进一步让它修复" aria-label="Permalink to &quot;进一步让它修复&quot;">​</a></h2><p>审查结束后，不要让它一次性修所有问题。选择一条高优先级问题：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请只修复审查结果中的第 1 条问题。保持改动最小，补充必要测试，并运行相关验证命令。</span></span></code></pre></div><h2 id="人工复核" tabindex="-1">人工复核 <a class="header-anchor" href="#人工复核" aria-label="Permalink to &quot;人工复核&quot;">​</a></h2><p>Codex 审查不能替代团队 review。它适合提高信噪比，但合并前仍要由熟悉业务的人确认需求、兼容性和上线风险。</p>`,11)])])}const x=s(i,[["render",l]]);export{u as __pageData,x as default};
