import { MarvelProvider } from "./components/MarvelProvider/MarvelProvider";
import { Navigation } from "./routes/Navigation";

function App() {
  return (
    <MarvelProvider>
      <Navigation />
    </MarvelProvider>
  );
}

export default App;
