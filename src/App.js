import { Home } from "./views/Home/Home";
import { Layout } from "./Layout/Layout";
import { MarvelProvider } from "./components/MarvelProvider/MarvelProvider";

function App() {
  return (
    <MarvelProvider>
      <Layout>
        <Home />
      </Layout>
    </MarvelProvider>
  );
}

export default App;
