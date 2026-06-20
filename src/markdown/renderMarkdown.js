import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { gfmHeadingId } from "marked-gfm-heading-id";
import markedAlert from "marked-alert";
import markedFootnote from "marked-footnote";
import markedKatex from "marked-katex-extension";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import css from "highlight.js/lib/languages/css";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

import "katex/dist/katex.min.css";
import "highlight.js/styles/github.min.css";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("c", c);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("css", css);
hljs.registerLanguage("go", go);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("java", java);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("md", markdown);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const mermaidExtension = {
  renderer: {
    code({ text, lang }) {
      if (lang === "mermaid") {
        return `<pre class="mermaid">${text}</pre>`;
      }
      return false;
    },
  },
};

const mediaExtension = {
  renderer: {
    image({ href, title, text }) {
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
      return `<img src="${href}" alt="${escapeHtml(text)}"${titleAttr} loading="lazy" decoding="async" class="md-image" />`;
    },
  },
};

marked.use(
  {
    gfm: true,
    breaks: true,
    hooks: {
      postprocess(html) {
        return html.replace(
          /<a href="(https?:\/\/[^"]+)"/g,
          '<a href="$1" target="_blank" rel="noopener noreferrer"',
        );
      },
    },
  },
  mermaidExtension,
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
  markedKatex({ throwOnError: false, nonStandard: true }),
  markedFootnote(),
  gfmHeadingId(),
  markedAlert(),
  mediaExtension,
);

export function renderMarkdown(source) {
  return marked.parse(source ?? "");
}
