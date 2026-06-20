import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MarkdownPage from "./pages/MarkdownPage.jsx";
import { usePathname } from "./router/router.jsx";

export default function App() {
  const pathname = usePathname();

  return (
    <div className="page">
      <main className="shell">
        <div className="container">
          <div className="terminalLine" />
          <Header />
          <div className="terminalLine" />
          <MarkdownPage pathname={pathname} />
          <div className="terminalLine terminalLineBottom" />
          <Footer />
        </div>
      </main>
    </div>
  );
}

