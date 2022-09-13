import MarkdownIt from "markdown-it";
import MarkdownItExternalLinks from "markdown-it-external-links";

export function compileMarkdown(source: string) {
  const md = new MarkdownIt({ linkify: true, html: true, breaks: true }).use(
    MarkdownItExternalLinks,
    {
      externalClassName: null,
      externalTarget: "_blank",
    }
  );
  return md.render(source);
}
