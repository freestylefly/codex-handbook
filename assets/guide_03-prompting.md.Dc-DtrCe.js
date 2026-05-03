import{_ as s,o as n,c as l,ag as p}from"./chunks/framework.CXIqMST4.js";const u=JSON.parse('{"title":"高质量任务说明与提示词","description":"","frontmatter":{},"headers":[],"relativePath":"guide/03-prompting.md","filePath":"guide/03-prompting.md","lastUpdated":1777684488000}'),e={name:"guide/03-prompting.md"};function i(t,a,o,c,d,r){return n(),l("div",null,[...a[0]||(a[0]=[p(`<h1 id="高质量任务说明与提示词" tabindex="-1">高质量任务说明与提示词 <a class="header-anchor" href="#高质量任务说明与提示词" aria-label="Permalink to &quot;高质量任务说明与提示词&quot;">​</a></h1><p>Codex 的输出质量很大程度取决于任务边界。好的任务说明不是长，而是清楚。</p><h2 id="基础结构" tabindex="-1">基础结构 <a class="header-anchor" href="#基础结构" aria-label="Permalink to &quot;基础结构&quot;">​</a></h2><p>一个稳定的任务说明通常包含：</p><ul><li>背景：这个项目、模块或 bug 是什么。</li><li>目标：希望完成的具体结果。</li><li>范围：哪些文件或行为可以改，哪些不要动。</li><li>约束：风格、兼容性、性能、安全、依赖限制。</li><li>验证：要运行哪些测试、命令或手动检查。</li><li>交付：最后需要总结哪些信息。</li></ul><h2 id="通用模板" tabindex="-1">通用模板 <a class="header-anchor" href="#通用模板" aria-label="Permalink to &quot;通用模板&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请处理：[一句话目标]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>背景：</span></span>
<span class="line"><span>- [项目或模块背景]</span></span>
<span class="line"><span>- [当前问题或期望行为]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>范围：</span></span>
<span class="line"><span>- 可以修改：[文件/目录/模块]</span></span>
<span class="line"><span>- 不要修改：[明确排除项]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 先阅读相关代码再动手。</span></span>
<span class="line"><span>2. 保持现有代码风格。</span></span>
<span class="line"><span>3. 不做无关重构。</span></span>
<span class="line"><span>4. 修改后运行：[验证命令]</span></span>
<span class="line"><span>5. 最后说明改动、验证结果和剩余风险。</span></span></code></pre></div><h2 id="让-codex-更可靠的说法" tabindex="-1">让 Codex 更可靠的说法 <a class="header-anchor" href="#让-codex-更可靠的说法" aria-label="Permalink to &quot;让 Codex 更可靠的说法&quot;">​</a></h2><p>优先说：</p><ul><li>“修改最少必要文件。”</li><li>“先给我确认你找到的入口点，再实现。”</li><li>“如果测试失败，继续定位并修复，直到相关测试通过或明确说明阻塞原因。”</li><li>“不要引入新依赖，除非现有实现无法满足，并说明理由。”</li><li>“保持公开 API 兼容。”</li></ul><p>少说：</p><ul><li>“帮我优化一下。”</li><li>“把项目做得更好。”</li><li>“顺便重构。”</li><li>“你看着办。”</li></ul><p>“你看着办”很省字，也很容易把范围交给命运。</p><h2 id="大任务拆法" tabindex="-1">大任务拆法 <a class="header-anchor" href="#大任务拆法" aria-label="Permalink to &quot;大任务拆法&quot;">​</a></h2><p>把大任务拆成三层：</p><ul><li>探索：让 Codex 只读代码、画出影响面。</li><li>计划：让它提出分步方案和验证方式。</li><li>实施：一次只做一个可验证切片。</li></ul><p>示例：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请先不要改代码。阅读认证模块、路由和测试，找出把登录页改成双因素登录会影响哪些文件。请输出实施步骤、风险和建议的第一步最小改动。</span></span></code></pre></div>`,18)])])}const g=s(e,[["render",i]]);export{u as __pageData,g as default};
