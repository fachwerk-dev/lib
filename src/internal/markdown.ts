import MarkdownIt from "markdown-it";

export function MarkdownItPlugin(md: MarkdownIt) {
  md.renderer.rules.code_inline = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    return tokens[idx].content;
  };
  md.renderer.rules.code_block = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    return tokens[idx].content;
  };
  return md;
}

export function compileMarkdown(source: string) {
  const md = new MarkdownIt({ linkify: true, html: true, breaks: true }).use(
    MarkdownItPlugin
  );
  return md.render(source);
}
