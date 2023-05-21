import VideoDownloader from "./components/VideoDownloader/VideoDownloader";
import { FragmentContextProvider } from "./context/FragmentContext";

function App() {
  return (
    <div className="App">
        <FragmentContextProvider>
            <VideoDownloader/>
        </FragmentContextProvider>
    </div>
  );
}

export default App;
