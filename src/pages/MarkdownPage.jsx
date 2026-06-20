import { useEffect, useMemo, useRef } from "react";
import { renderMarkdown } from "../markdown/renderMarkdown.js";
import { navigate, useMarkdownForPath } from "../router/router.jsx";

function useMarkdownEnhancements(containerRef, html) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const onClick = (event) => {
      const anchor = event.target.closest("a");
      if (!anchor || !root.contains(anchor)) return;
      if (anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      const next = `${url.pathname}${url.hash}`;
      navigate(next);

      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView();
        });
      }
    };

    root.addEventListener("click", onClick);

    let cancelled = false;
    const mermaidBlocks = root.querySelectorAll("pre.mermaid");
    if (mermaidBlocks.length) {
      import("mermaid").then(({ default: mermaid }) => {
        if (cancelled) return;
        mermaid.initialize({ startOnLoad: false, theme: "default", securityLevel: "loose" });
        mermaid.run({ nodes: mermaidBlocks });
      });
    }

    return () => {
      cancelled = true;
      root.removeEventListener("click", onClick);
    };
  }, [html]);
}

export default function MarkdownPage({ pathname }) {
  const { status, markdown } = useMarkdownForPath(pathname);
  const containerRef = useRef(null);

  const html = useMemo(() => {
    if (status !== "ready") return "";
    return renderMarkdown(markdown);
  }, [status, markdown]);

  useMarkdownEnhancements(containerRef, html);

  if (status === "loading") {
    return (
      <section className="content">
        <div className="contentInner">
          <p>Loading…</p>
        </div>
      </section>
    );
  }

  if (status === "not_found") {
    return (
      <section className="content">
        <div className="contentInner">
          <div className="metaBlock">
            <p>
              <span className="label">404:</span> <span>Not Found</span>
            </p>
            <p>
              <span className="label">Path:</span> <span>{pathname}</span>
            </p>
          </div>
          <p>There is no markdown page for this route.</p>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="content">
        <div className="contentInner">
          <p>Failed to load markdown.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="content">
      <div
        ref={containerRef}
        className="contentInner markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
