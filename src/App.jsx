import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="page">
      <main className="shell">
        <div className="container">
          <div className="terminalLine" />
          <Header />
          <div className="terminalLine" />
          <Home />
          <div className="terminalLine terminalLineBottom" />
          <Footer />
        </div>
      </main>
    </div>
  );
}

