import MarkdownIt from "markdown-it";
import MarkdownItExternalLinks from "markdown-it-external-links";

export function MarkdownItFachwerk(md: MarkdownIt) {
  md.renderer.rules.code_inline = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    return `<code>${md.utils.escapeHtml(tokens[idx].content)}</code>`;
  };
  md.renderer.rules.code_block = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    console.log(md.utils.escapeHtml(tokens[idx].content));
    return `<pre>${md.utils.escapeHtml(tokens[idx].content)}</pre>`;
  };
  return md;
}

export function compileMarkdown(source: string) {
  const md = new MarkdownIt({ linkify: true, html: true, breaks: true })
    .use(MarkdownItFachwerk)
    .use(MarkdownItExternalLinks, {
      externalClassName: null,
      externalTarget: "_blank",
    });
  return md.render(source);
}
