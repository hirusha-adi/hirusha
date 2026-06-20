import { useEffect, useMemo, useState } from "react";

function normalizePathname(pathname) {
  if (!pathname) return "/";
  const path = pathname.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

function toRouteFromFile(filePath) {
  // filePath: /content/<any...>/index.md
  let route = filePath.replace(/^\/content/, "").replace(/\/index\.md$/, "");
  if (route === "" || route === "/index") return "/";
  return route;
}

const mdModules = import.meta.glob("/content/**/index.md", {
  query: "?raw",
  import: "default",
});

function buildRouteLoaders() {
  const entries = Object.entries(mdModules).map(([filePath, loader]) => [
    toRouteFromFile(filePath),
    loader,
  ]);
  return Object.fromEntries(entries);
}

const routeLoaders = buildRouteLoaders();

export function usePathname() {
  const [pathname, setPathname] = useState(() =>
    normalizePathname(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () =>
      setPathname(normalizePathname(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return pathname;
}

export function navigate(to) {
  const next = normalizePathname(to);
  if (next === normalizePathname(window.location.pathname)) return;
  window.history.pushState({}, "", next);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function Link({ href, className, children }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (e.defaultPrevented) return;
        if (e.button !== 0) return;
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        e.preventDefault();
        navigate(url.pathname);
      }}
    >
      {children}
    </a>
  );
}

export function useMarkdownForPath(pathname) {
  const path = normalizePathname(pathname);

  const loader = useMemo(() => routeLoaders[path], [path]);
  const [state, setState] = useState(() => ({
    status: loader ? "loading" : "not_found",
    markdown: "",
  }));

  useEffect(() => {
    let cancelled = false;

    if (!loader) {
      setState({ status: "not_found", markdown: "" });
      return;
    }

    setState({ status: "loading", markdown: "" });
    loader()
      .then((md) => {
        if (cancelled) return;
        setState({ status: "ready", markdown: md ?? "" });
      })
      .catch(() => {
        if (cancelled) return;
        setState({ status: "error", markdown: "" });
      });

    return () => {
      cancelled = true;
    };
  }, [loader]);

  return state;
}
