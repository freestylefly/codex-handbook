import{_ as s,o as n,c as p,ag as e}from"./chunks/framework.CXIqMST4.js";const u=JSON.parse('{"title":"真实工程工作流","description":"","frontmatter":{},"headers":[],"relativePath":"guide/04-workflows.md","filePath":"guide/04-workflows.md","lastUpdated":1777684488000}'),l={name:"guide/04-workflows.md"};function i(t,a,o,c,d,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="真实工程工作流" tabindex="-1">真实工程工作流 <a class="header-anchor" href="#真实工程工作流" aria-label="Permalink to &quot;真实工程工作流&quot;">​</a></h1><p>Codex 最有价值的地方，不是替你打几个命令，而是把“读代码、改代码、跑验证、解释风险”串成一个循环。</p><h2 id="修-bug" tabindex="-1">修 bug <a class="header-anchor" href="#修-bug" aria-label="Permalink to &quot;修 bug&quot;">​</a></h2><p>推荐流程：</p><ol><li>复现问题。</li><li>锁定相关测试或日志。</li><li>阅读最小相关代码。</li><li>做最小修复。</li><li>跑相关测试。</li><li>总结根因和验证结果。</li></ol><p>任务模板：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请修复这个 bug：[描述现象]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>已知信息：</span></span>
<span class="line"><span>- 复现步骤：[步骤]</span></span>
<span class="line"><span>- 期望结果：[结果]</span></span>
<span class="line"><span>- 实际结果：[结果]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 先复现或定位失败点。</span></span>
<span class="line"><span>2. 找到根因后再修改。</span></span>
<span class="line"><span>3. 保持改动最小。</span></span>
<span class="line"><span>4. 添加或更新必要测试。</span></span>
<span class="line"><span>5. 运行相关测试并总结结果。</span></span></code></pre></div><h2 id="补测试" tabindex="-1">补测试 <a class="header-anchor" href="#补测试" aria-label="Permalink to &quot;补测试&quot;">​</a></h2><p>让 Codex 补测试时，关键是说明你想覆盖什么行为，而不是只说“提高覆盖率”。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请为 [模块/函数] 补充测试，覆盖：</span></span>
<span class="line"><span>- 正常路径：[行为]</span></span>
<span class="line"><span>- 边界情况：[行为]</span></span>
<span class="line"><span>- 错误输入：[行为]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不要改生产代码，除非发现当前代码无法测试，并先说明原因。</span></span></code></pre></div><h2 id="重构" tabindex="-1">重构 <a class="header-anchor" href="#重构" aria-label="Permalink to &quot;重构&quot;">​</a></h2><p>重构任务要先切小。更稳的方式是让 Codex 先做分析：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请阅读 [目录/模块]，找出可以降低复杂度的重构点。先不要修改代码。请按收益、风险和验证成本排序，并推荐第一步最小重构。</span></span></code></pre></div><p>确认第一步后再实施：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请只执行你刚才建议的第一步重构。保持行为不变，运行现有测试，并说明如何确认没有改变外部行为。</span></span></code></pre></div><h2 id="代码审查" tabindex="-1">代码审查 <a class="header-anchor" href="#代码审查" aria-label="Permalink to &quot;代码审查&quot;">​</a></h2><p>Codex 做代码审查时，要让它像 reviewer，而不是像改代码的人。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请审查当前 diff。重点关注：</span></span>
<span class="line"><span>- 行为回归</span></span>
<span class="line"><span>- 安全风险</span></span>
<span class="line"><span>- 并发或状态问题</span></span>
<span class="line"><span>- 缺失测试</span></span>
<span class="line"><span>- 命名和可维护性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请按严重程度列出问题，引用文件和行号。不要直接修改代码。</span></span></code></pre></div><h2 id="文档生成" tabindex="-1">文档生成 <a class="header-anchor" href="#文档生成" aria-label="Permalink to &quot;文档生成&quot;">​</a></h2><p>适合让 Codex 生成的文档：</p><ul><li>新模块 README。</li><li>API 使用示例。</li><li>迁移指南。</li><li>排障说明。</li><li>代码注释补充。</li></ul><p>注意：生成文档前最好让它先读真实代码和测试，避免写出“看起来很对”的幻觉文档。</p>`,22)])])}const b=s(l,[["render",i]]);export{u as __pageData,b as default};
