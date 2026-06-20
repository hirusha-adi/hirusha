import { Link } from "../router/router.jsx";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link className="navLink" href="/">
          ~/
        </Link>{" "}
        <Link className="navLink" href="/about">
          ~/about
        </Link>
      </nav>
    </header>
  );
}

