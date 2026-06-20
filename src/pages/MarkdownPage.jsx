import { marked } from "marked";
import { useMarkdownForPath } from "../router/router.jsx";

export default function MarkdownPage({ pathname }) {
  const { status, markdown } = useMarkdownForPath(pathname);

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

  const html = marked.parse(markdown);

  return (
    <section className="content">
      <div className="contentInner markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}

