import * as Swetrix from "swetrix";


function App() {
  // tracking (swetrix)
  // -----------------------------
  // (site location)
  Swetrix.init("CBLOtmpMBXMl", {
    apiURL: "https://api.analytics.plzhack.me/log",
    devMode: false,
  });
  Swetrix.trackViews();
  // -----------------------------

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[93vw] md:w-[650px] h-[80vh]">
        <div className="bg-base-300 w-full h-full rounded-3xl shadow-2xl shadow-accent flex flex-col items-center py-10 px-4">
          <div className="prose w-full max-h-[75vh] overflow-y-auto px-4">
            <h1>Hey! I'm Hirusha 👋</h1>
            <p>I'm a student in IT.</p>
            <p>This is my personal domain name. This is where I test stuff. Below are some other websites that you might be here looking for:</p>
            <ul>
              <li><a href="https://informati.cc/" target="_blank" rel="noreferrer">Blog (informati.cc)</a></li>
              <li><a href="https://photos.hirusha.xyz" target="_blank" rel="noreferrer">Photography (photos.hirusha.xyz)</a></li>
              <li><a href="https://github.com/hirusha-adi" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
            <p>
              If you want to contact me, feel free to reach me out via email at <a href="mailto:9lYKo@example.com">hello@hirusha.xyz</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
