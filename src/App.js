import { marvelApi } from "./api/marvelApi";
import { Home } from "./views/Home/Home";
import { Layout } from "./Layout/Layout";

function App() {
  // const prueba = async () => {
  //   const response = await marvelApi.get(
  //     `characters?ts=3&apikey=717fc2d7beae7cd0e3c30ad545d2597a&hash=0c65084a88fbfc7fb9b477ffea85b1a8`
  //   );
  // };

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
