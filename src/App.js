import movies from "./data/movies";
import CatList from "./components/categoryList/catList";
import Card from "./components/card/card";

function App() {

  return (
    <div className="App">
      <CatList movies={movies} />
      <Card movies={movies} />
    </div>
  );
}

export default App;
